import { binary } from '../binding'
import { BinResult } from '../types/BinResult'
import { BasicOptions, RenderType } from '../types/options/BasicOptions'

/**
 * Calls the given function name from the c++ library wrapper, validates
 * the struct values and passes the arguments sent in symbologyStruct
 */
export function createBuffer (config: BasicOptions, input: string): BinResult {
  return binary.createStream(
    // TODO: move these default values to constants and document
    input,
    config.symbology,
    config.height || -1,
    config.whitespaceWidth || 0,
    config.whitespaceHeight || 0,
    config.borderWidth || 0,
    config.outputOptions || 0,
    config.backgroundColor || 'FFFFFFFF',
    config.foregroundColor || '000000FF',
    config.fileName!,
    config.scale || 1,
    config.option1 || -1,
    config.option2 || -1,
    config.option3 || -1,
    config.showHumanReadableText ? 1 : 0,
    input, // TODO: dead code
    config.inputMode || 0,
    config.eci || 0,
    config.primary || '',
    config.rotation || 0,
    config.dotSize || 0.8,
    config.gapSize || 1,
    config.guardDescentHeight || 5
  )
}

/**
 * Renders a png, svg, or eps barcode.
 * If PNG, it returns the stream as a base64 string.
 */
export function invoke (config: BasicOptions, barcodeData: string, renderType: RenderType): Promise<BinResult> {
  const symbol = createBuffer(config, barcodeData)

  if ([RenderType.EPS, RenderType.SVG].includes(renderType) && symbol.encodedData) {
    symbol.encodedData = symbol.encodedData.replace(/\{\{ title \}\}/g, config.title || '')
  }

  if (symbol.code <= 2) {
    if (symbol.code === 0) {
      symbol.message = 'Symbol successfully created.'
    }

    return Promise.resolve(symbol)
  }

  return Promise.reject(symbol.message)
}
