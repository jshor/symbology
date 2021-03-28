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
 * Creates an in-memory buffer of a PNG, SVG or EPS image.
 *
 * @param {Symbol} symbol - symbol struct
 * @param {String} barcodeData - data to encode
 * @param {String} outputType - `png`, `eps`, or `svg`.
 * @returns {Promise<Object>} object with resulting props (see docs)
 */
async function createStream (symbol, barcodeData, outputType = exp.Output.PNG) {
  const res = await binary.invoke(symbol, barcodeData, outputType, true)

  if (outputType === exp.Output.PNG) {
    const pngData = png.render(res.data, res.width, res.height)
    const base64Data = await png.blobToBase64(pngData)

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
async function createFile (symbol, barcodeData) {
  const outputType = binary.getOutputType(symbol.fileName)
  const res = await binary.invoke(symbol, barcodeData, outputType)

  if (outputType === exp.Output.PNG) {
    // write the bitmap to a PNG image file
    const image = png.render(res.data, res.width, res.height)

    await png.writeFile(image, symbol.fileName)
  } else {
    // write SVG or EPS to a file
    fs.writeFileSync(symbol.fileName, res.data)
  }

  return omit(res, 'data')
}

module.exports = exp
