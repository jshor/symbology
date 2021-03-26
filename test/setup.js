const { toMatchImageSnapshot } = require('jest-image-snapshot')
const fs = require('fs')
const path = require('path')
const symbology = require('../src')

expect.extend({ toMatchImageSnapshot })

/**
 * Creates an image snapshot file or SVG snapshot for the given Symbol.
 *
 * @param {Symbol} symbol
 * @param {String} ext - extension `png`, `ps`, or `svg`
 * @param {String} data - barcode data
 * @returns {Promise<String>}
 */
async function createImageFile (symbol, ext, data) {
  const random = Math.ceil(Math.random() * 10000)
  const fileName = path.join(__dirname, 'e2e/__rendered__', `${random}.${ext}`)

  await symbology.createFile({ ...symbol, fileName }, data)

  const buffer = fs.readFileSync(fileName)

  return ext === 'png'
    ? buffer // return a buffer for png
    : buffer.toString() // return a string for svg, eps
}

global.createImageFile = createImageFile

