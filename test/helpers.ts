import fs from 'fs'
import path from 'path'
import { createFile } from '../src'
import OutputType from '../src/types/enums/OutputType'
import SymbologyConfig from '../src/types/SymbologyConfig'

/**
 * Creates an image snapshot file or SVG snapshot for the given Symbol.
 *
 * @param {SymbologyConfig} symbol
 * @param {OutputType} ext
 * @param {string} data - barcode data
 * @returns {Promise<Buffer>}
 */
export async function createImageFile (symbol: SymbologyConfig, ext: OutputType, data: string): Promise<Buffer> {
  const random = Math.ceil(Math.random() * 10000)
  const fileName = path.join(__dirname, 'e2e/__rendered__', `${random}.${ext}`)

  await createFile({ ...symbol, fileName }, data)

  return fs.readFileSync(fileName)
}
