import fs from 'fs'
import { invoke } from './lib/binary'
import * as png from './lib/png'
import { transformOptions } from './transformOptions'
import { type SymbologyResult } from './types/SymbologyResult'
import {
  type BasicOptions,
  type SymbologyOptions,
  RenderType
} from './types/options/BasicOptions'
import { type BinResult } from './types/BinResult'


export async function renderSymbol (options: SymbologyOptions, input: string) {
  const config = transformOptions(options)
  const result = await createStream(config, input)

  if (options.fileName) {
    return renderFile({ config, result, fileName: options.fileName })
  }

  return renderStream({ config, result })
}

/**
 * Renders a symbology image as a string in SVG, EPS, or base64-encoded PNG format.
 */
export async function createStream (config: BasicOptions, input: string): Promise<BinResult> {
  const fileNameExtension = (() => {
    switch (config.renderType) {
      case RenderType.PNG:
        return 'bmp' // force bitmap for any raster type
      case RenderType.SVG:
        return 'svg'
      default:
        return 'eps'
    }
  })()

  return invoke({
    ...config,
    fileName: `out.${fileNameExtension}`
  }, input, config.renderType)
}

async function renderStream ({ config, result }: {
  config: BasicOptions
  result: BinResult
}): Promise<SymbologyResult> {
  if (config.renderType === RenderType.PNG) {
    // write the bitmap to a base64-encoded PNG string
    const image = png.render(result.bitmap, result.width, result.height, config.backgroundColor, config.foregroundColor)
    const base64result = await png.blobToBase64(image)

    return {
      data: base64result,
      width: result.width,
      height: result.height,
      message: result.message
    }
  }

  return {
    data: result.encodedData,
    width: result.width,
    height: result.height,
    message: result.message
  }
}

/**
 * Creates a symbology image file of a PNG, SVG or EPS file in the specified `fileName` path.
 */
export async function renderFile ({ config, result, fileName }: {
  config: BasicOptions
  result: BinResult
  fileName: string
}): Promise<SymbologyResult> {
  if (config.renderType === RenderType.PNG) {
    // write the bitmap to a PNG image file
    const image = png.render(result.bitmap, result.width, result.height, config.backgroundColor, config.foregroundColor)
    const buffer = png.getBuffer(image)

    fs.writeFileSync(fileName, buffer)
  } else {
    // write SVG or EPS to a file
    fs.writeFileSync(fileName, result.encodedData)
  }

  return {
    width: result.width,
    height: result.height,
    message: result.message
  }
}
