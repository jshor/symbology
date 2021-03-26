const binary = require('node-pre-gyp')
const path = require('path')
const fs = require('fs')
const PNGImage = require('pngjs-image')
const binding_path = binary.find(path.join(__dirname,'../package.json'))
const symbology = require(binding_path)

/* exports */
const exp = {
  Barcode: require('./enums/barcode'),
  DataMatrix: require('./enums/dataMatrix'),
  Encoding: require('./enums/encoding'),
  ErrorCode: require('./enums/errorCode'),
  Options: require('./enums/options'),
  Output: require('./enums/output'),
  createStream,
  createFile
}

/**
 * Symbol struct, populated with default values
 */
const defaultConfig = {
  symbology: 20,
  height: 50,
  whitespaceWidth: 0,
  borderWidth: 0,
  outputOptions: -1,
  foregroundColor: '000000',
  backgroundColor: 'ffffff',
  fileName: 'out.bmp',
  scale: 1.0,
  option1: -1,
  option2: -1,
  option3: -1,
  showHumanReadableText: true,
  encoding: exp.Encoding.DATA_MODE,
  eci: 0,
  primary: ''
}

/**
 * Calls the given function name from the c++ library wrapper, validates
 * the struct values and passes the arguments sent in symbologyStruct
 * in the correct order.
 *
 * @param  {Symbol} config
 * @param  {String} barcodeData
 * @return {Object}
 */
function createSymbology (config, barcodeData) {
  const symbol = {
    ...defaultConfig,
    ...config
  }

  return symbology.createStream(
    barcodeData,
    symbol.symbology,
    symbol.height,
    symbol.whitespaceWidth,
    symbol.borderWidth,
    symbol.outputOptions,
    symbol.backgroundColor,
    symbol.foregroundColor,
    // indicate to the library that we want BMP instead of PNG
    symbol.fileName.replace(/\.png$/g, '.bmp'),
    symbol.scale,
    symbol.option1,
    symbol.option2,
    symbol.option3,
    symbol.showHumanReadableText ? 1 : 0,
    (symbol.text || barcodeData),
    symbol.encoding,
    symbol.eci,
    symbol.primary
  )
}

/**
 * Renders a PNG Blob stream to a base64 PNG.
 *
 * @param {PNGJS} image
 * @returns {Promise<String>} base64 representation
 */
function blobToBase64Png (image) {
  const png = image.getImage()
  const chunks = []

  return new Promise((resolve) => {
    png.pack()
    png.on('data', c => chunks.push(c))
    png.on('end', () => {
      const result = Buffer.concat(chunks)

      resolve('data:image/png;base64,' + result.toString('base64'))
    })
  })
}

/**
 * Renders RGB 24 bitmap into an image instance of PNG
 *
 * @param {Array} bitmap - containing RGB values
 * @param {Number} width - width of bitmap
 * @param {Number} height  height of bitmap
 * @return {PNG} instance of PNG
 */
function pngRender (bitmap, width, height) {
  const image = PNGImage.createImage(width, height)
  let i = 0

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      image.setAt(x, y, {
        red: bitmap[i],
        green: bitmap[i + 1],
        blue: bitmap[i + 2],
        alpha: 200
      })

      i += 3
    }
  }

  return image
}

/**
 * Renders a png, svg, or eps barcode.
 * If PNG, it returns the stream as a base64 string.
 *
 * @note The file will be created in memory and then passed to the returned object.
 *
 * @private
 * @param {Symbol} symbol - Symbol struct
 * @param {String} barcodeData - data to encode
 * @param {String} outputType - 'png', 'svg', or 'eps' (default: 'png')
 * @returns {Promise<Object>} object with resulting props (see docs)
 */
function callManagedLibrary(symbol, barcodeData, outputType) {
  const newSymbol = { ...symbol }

  if (!Object.values(exp.Output).includes(outputType)) {
    throw new Error(`Invalid output type: ${outputType}`)
  }

  if (outputType !== exp.Output.PNG) {
    newSymbol.fileName = `out.${outputType}`

    if (parseInt(newSymbol.outputOptions, 10) > 0) {
      newSymbol.outputOptions += 8
    } else {
      newSymbol.outputOptions = 8
    }
  }

  const res = createSymbology(newSymbol, barcodeData)

  if (res.code <= 2) {
    return Promise.resolve({
      data: res.encodedData,
      message: res.message,
      code: res.code,
      width: res.width,
      height: res.height
    })
  }

  return Promise.reject({
    message: res.message,
    code: res.code
  })
}

/**
 * Creates an in-memory of a PNG, SVG or EPS file in the specified fileName path.
 *
 * @param {Symbol} symbol - symbol struct
 * @param {String} barcodeData - data to encode
 * @param {String} outputType - `png`, `eps`, or `svg`.
 * @returns {Promise<Object>} object with resulting props (see docs)
 */
async function createStream (symbol, barcodeData, outputType = exp.Output.PNG) {
  const res = await callManagedLibrary(symbol, barcodeData, outputType, true)

  if (outputType === exp.Output.PNG) {
    const pngData = pngRender(res.data, res.width, res.height)
    const base64Data = await blobToBase64Png(pngData)

    return {
      data: base64Data,
      width: res.width,
      height: res.height,
      message: res.message,
      code: res.code
    }
  }

  return res
}

/**
 * Creates a file of a PNG, SVG or EPS file in the specified fileName path.
 *
 * @param {Symbol} symbol - symbol struct
 * @param {String} barcodeData - data to encode
 * @param {String} outputType - `png`, `eps`, or `svg`.
 * @returns {Promise<Object>} object with resulting props (see docs)
 */
async function createFile (symbol, barcodeData) {
  let outputType

  try {
    outputType = symbol
      .fileName
      .match(/\.([a-z]+)$/i)
      .pop()
      .toLowerCase()
  } catch (e) {
    throw new Error('Invalid file extension. fileName must end with \'.png\', \'.eps\', or \'.svg\'.')
  }

  const res = await callManagedLibrary(symbol, barcodeData, outputType)

  if (outputType === exp.Output.PNG) {
    const image = pngRender(res.data, res.width, res.height)

    return new Promise((resolve, reject) => {
      image.writeImage(symbol.fileName, (err) => {
        if (err) {
          reject(err)
        } else {
          delete res.data

          resolve(res)
        }
      })
    })
  }

  fs.writeFileSync(symbol.fileName, res.data)

  delete res.data

  return res
}

module.exports = exp
