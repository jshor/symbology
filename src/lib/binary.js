const gyp = require('node-pre-gyp')
const path = require('path')
const Encoding = require('../enums/encoding')
const Output = require('../enums/output')
const binding = gyp.find(path.join(__dirname,'../../package.json'))
const symbology = require(binding)

/**
 * Default Symbology config, populated with default values
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
  encoding: Encoding.DATA_MODE,
  eci: 0,
  primary: ''
}

/**
 * Calls the given function name from the c++ library wrapper, validates
 * the struct values and passes the arguments sent in symbologyStruct
 * in the correct order.
 *
 * @param {Symbol} config
 * @param {String} barcodeData
 * @return {Object}
 */
function createBuffer (config, barcodeData) {
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
    // this is to force zint to return a bitmap array buffer instead PNG binary
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
 * Renders a png, svg, or eps barcode.
 * If PNG, it returns the stream as a base64 string.
 *
 * @note The file will be created in memory and then passed to the returned object.
 *
 * @param {Symbol} symbol - Symbol struct
 * @param {String} barcodeData - data to encode
 * @param {String} outputType - 'png', 'svg', or 'eps' (default: 'png')
 * @returns {Promise<Object>} object with resulting props (see docs)
 */
function invoke (symbol, barcodeData, outputType) {
  const newSymbol = { ...symbol }

  if (!Object.values(Output).includes(outputType)) {
    throw new Error(`Invalid output type: ${outputType}`)
  }

  if (outputType !== Output.PNG) {
    newSymbol.fileName = `out.${outputType}`

    // apply option 8 (suppress stdout)
    if (parseInt(newSymbol.outputOptions, 10) > 0) {
      newSymbol.outputOptions += 8
    } else {
      newSymbol.outputOptions = 8
    }
  }

  const res = binary.createBuffer(newSymbol, barcodeData)

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
 * Returns the lowercase version of the file extension of the given file name.
 *
 * @throws {Error} if no valid file name extension exists
 * @param {String} fileName
 * @returns {String}
 */
function getOutputType (fileName) {
  try {
    return fileName
      .match(/\.([a-z]+)$/i)
      .pop()
      .toLowerCase()
  } catch (e) {
    throw new Error('Invalid file extension. fileName must end with \'.png\', \'.eps\', or \'.svg\'.')
  }
}

const binary = {
  createBuffer,
  invoke,
  getOutputType
}

module.exports = binary
