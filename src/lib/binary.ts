import symbology from '../binding'
import BinResult from '../types/BinResult'
import OutputType from '../types/enums/OutputType'
import SymbologyConfig from '../types/SymbologyConfig'

/**
 * Calls the given function name from the c++ library wrapper, validates
 * the struct values and passes the arguments sent in symbologyStruct
 * in the correct order.
 *
 * @param {SymbologyConfig} config - symbology config
 * @param {string} barcodeData - primary data to encode
 * @return {BinResult}
 */
function createBuffer (config: SymbologyConfig, barcodeData: string): BinResult {
  return symbology.createStream(
    barcodeData,
    config.symbology,
    config.height,
    config.whitespaceWidth,
    config.borderWidth,
    config.outputOptions,
    config.backgroundColor,
    config.foregroundColor,
    // indicate to the library that we want BMP instead of PNG
    // this is to force zint to return a bitmap array buffer instead PNG binary
    config.fileName?.replace(/\.png$/g, '.bmp'),
    config.scale,
    config.option1,
    config.option2,
    config.option3,
    config.showHumanReadableText ? 1 : 0,
    (config.text || barcodeData),
    config.encoding,
    config.eci,
    config.primary,
    config.rotation,
    config.dotSize
  )
}

/**
 * Renders a png, svg, or eps barcode.
 * If PNG, it returns the stream as a base64 string.
 *
 * @note The file will be created in memory and then passed to the returned object.
 *
 * @param {SymbologyConfig} config - symbology config
 * @param {string} barcodeData - primary data to encode
 * @param {OutputType} outputType
 * @returns {Promise<BinResult>} object with resulting props (see docs)
 */
function invoke (config: SymbologyConfig, barcodeData: string, outputType: OutputType): Promise<BinResult> {
  const symbol = { ...config }

  if (![OutputType.PNG, OutputType.EPS, OutputType.SVG].includes(outputType)) {
    return Promise.reject(`Invalid output type: ${outputType}`)
  }

  if (outputType !== OutputType.PNG) {
    symbol.fileName = `out.${outputType}`

    // apply option 8 (suppress stdout)
    if (symbol.outputOptions) {
      symbol.outputOptions += 8
    } else {
      symbol.outputOptions = 8
    }
  }

  const res = binary.createBuffer(symbol, barcodeData)

  if (res.code <= 2) {
    // remove all data after the trailing EOF marker
    res.encodedData = res
      .encodedData
      .split('<<< EOF >>>')[0]

    if (res.code === 0) {
      res.message = 'Symbology successfully created.'
    }

    return Promise.resolve(res)
  }

  return Promise.reject(res.message)
}

/**
 * Determines the OutputType of the given file name by its extension. Defaults to PNG.
 *
 * @param {string} fileName
 * @returns {OutputType}
 */
function getOutputType (fileName: string): OutputType {
  switch (fileName.toLowerCase().substr(-3)) {
    case 'svg':
      return OutputType.SVG
    case 'eps':
      return OutputType.EPS
    default:
      return OutputType.PNG
  }
}

const binary = {
  createBuffer,
  invoke,
  getOutputType
}

export default binary
