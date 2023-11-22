import fs from 'fs'
import path from 'path'
import { renderSymbol } from '../src'
import { RenderType, SymbologyOptions } from '../src/types/options/BasicOptions'

/**
 * Creates an image snapshot file or SVG snapshot for the given Symbol.
 */
export async function createImageFile (symbol: SymbologyOptions, data: string): Promise<Buffer> {
  const random = Math.ceil(Math.random() * 10000)
  const extension = (() => {
    switch (symbol.renderType) {
      case RenderType.PNG:
        return 'png'
      case RenderType.SVG:
        return 'svg'
      default:
        return 'eps'
    }
  })()
  const fileName = path.join(__dirname, 'e2e/__rendered__', `${random}.${extension}`)

  await renderSymbol({ ...symbol, fileName }, data)

  return fs.readFileSync(fileName)
}
