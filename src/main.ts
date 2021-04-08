import fs from 'fs'
import binary from './lib/binary'
import png from './lib/png'
import EncodingMode from './types/enums/EncodingMode'
import OutputOption from './types/enums/OutputOption'
import OutputType from './types/enums/OutputType'
import SymbologyConfig from './types/SymbologyConfig'
import SymbologyResult from './types/SymbologyResult'

/**
 * Default Symbology config, populated with default values
 */
const defaultConfig: SymbologyConfig = {
  symbology: 20,
  height: 50,
  whitespaceWidth: 0,
  borderWidth: 0,
  outputOptions: OutputOption.BARCODE_NO_ASCII,
  foregroundColor: '000000FF',
  backgroundColor: 'FFFFFFFF',
  scale: 1.0,
  option1: -1,
  option2: -1,
  option3: -1,
  showHumanReadableText: true,
  encoding: EncodingMode.DATA_MODE,
  eci: 0,
  primary: '',
  rotation: 0,
  dotSize: 0.8
}

/**
 * Renders a symbology image as a string in SVG, EPS, or base64-encoded PNG format.
 *
 * @param {SymbologyConfig} config - symbology configuration
 * @param {string} barcodeData - data to encode
 * @param {OutputType} outputType - `png`, `eps`, or `svg`.
 * @returns {Promise<SymbologyResult>} object with resulting props (see docs)
 */
export async function createStream (config: SymbologyConfig, barcodeData: string, outputType: OutputType = OutputType.PNG): Promise<SymbologyResult> {
  const symbol: SymbologyConfig = {
    ...defaultConfig,
    ...config,
    fileName: `out.${outputType}`
  }
  const res = await binary.invoke(symbol, barcodeData, outputType)

  if (outputType === OutputType.PNG) {
    // write the bitmap to a base64-encoded PNG string
    const image = png.render(res.bitmap, res.width, res.height, symbol.backgroundColor, symbol.foregroundColor)
    const base64Data = await png.blobToBase64(image)

    return {
      data: base64Data,
      width: res.width,
      height: res.height,
      message: res.message
    }
  }

  return {
    data: res.encodedData,
    width: res.width,
    height: res.height,
    message: res.message
  }
}

/**
 * Creates a symbology image file of a PNG, SVG or EPS file in the specified `fileName` path.
 *
 * @param {SymbologyConfig} config - symbology configuration
 * @param {string} barcodeData - data to encode
 * @returns {Promise<SymbologyResult>} object with resulting props (see docs)
 */
export async function createFile (config: SymbologyConfig, barcodeData: string): Promise<SymbologyResult> {
  const symbol: SymbologyConfig = {
    ...defaultConfig,
    ...config
  }

  if (!symbol.fileName) {
    return Promise.reject('fileName is required.')
  }

  const outputType = binary.getOutputType(symbol.fileName)
  const res = await binary.invoke(symbol, barcodeData, outputType)

  if (outputType === OutputType.PNG) {
    // write the bitmap to a PNG image file
    const image = png.render(res.bitmap, res.width, res.height, symbol.backgroundColor, symbol.foregroundColor)
    const buffer = png.getBuffer(image)

    fs.writeFileSync(symbol.fileName, buffer)
  } else {
    // write SVG or EPS to a file
    fs.writeFileSync(symbol.fileName, res.encodedData)
  }

  return {
    width: res.width,
    height: res.height,
    message: res.message
  }
}
