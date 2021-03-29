const fs = require('fs')
const binary = require('./lib/binary')
const png = require('./lib/png')
const { omit } = require('lodash')

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
 * Default Symbology config, populated with default values
 */
const defaultConfig = {
  symbology: 20,
  height: 50,
  whitespaceWidth: 0,
  borderWidth: 0,
  outputOptions: -1,
  foregroundColor: '000000ff',
  backgroundColor: 'ffffffff',
  fileName: 'out.bmp',
  scale: 1.0,
  option1: -1,
  option2: -1,
  option3: -1,
  showHumanReadableText: true,
  encoding: exp.Encoding.DATA_MODE,
  eci: 0,
  primary: '',
  rotation: 0,
  dotSize: 0.8
}

/**
 * Creates an in-memory buffer of a PNG, SVG or EPS image.
 *
 * @param {Symbol} symbol - symbol struct
 * @param {String} barcodeData - data to encode
 * @param {String} outputType - `png`, `eps`, or `svg`.
 * @returns {Promise<Object>} object with resulting props (see docs)
 */
async function createStream (config, barcodeData, outputType = exp.Output.PNG) {
  const symbol = {
    ...defaultConfig,
    ...config
  }
  const res = await binary.invoke(symbol, barcodeData, outputType)

  if (outputType === exp.Output.PNG) {
    const image = png.render(res.data, res.width, res.height, symbol.backgroundColor, symbol.foregroundColor)
    const base64Data = await png.blobToBase64(image)

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
 * @returns {Promise<Object>} object with resulting props (see docs)
 */
async function createFile (config, barcodeData) {
  const symbol = {
    ...defaultConfig,
    ...config
  }
  const outputType = binary.getOutputType(symbol.fileName)
  const res = await binary.invoke(symbol, barcodeData, outputType)

  if (outputType === exp.Output.PNG) {
    // write the bitmap to a PNG image file
    const image = png.render(res.data, res.width, res.height, symbol.backgroundColor, symbol.foregroundColor)
    const buffer = png.getBuffer(image)

    fs.writeFileSync(symbol.fileName, buffer)
  } else {
    // write SVG or EPS to a file
    fs.writeFileSync(symbol.fileName, res.data.trim())
  }

  return omit(res, 'data')
}

module.exports = exp
