const PNGImage = require('pngjs-image')
const { isEqual, omit } = require('lodash')

/**
 * Renders a PNG Blob stream to a base64 PNG.
 *
 * @param {PNGJS} image
 * @returns {Promise<String>} base64 representation
 */
function blobToBase64 (image) {
  const png = image.getImage()
  const chunks = []

  return new Promise((resolve) => {
    png.pack()
    png.on('data', c => chunks.push(c))
    png.on('end', () => {
      const result = Buffer.concat(chunks)

      resolve('data:image/png;base64,' + result.toString('base64'))
    })
  })
}

/**
 * Writes a PNG buffer to the given file.
 *
 * @param {PNG} image - image instance
 * @param {String} fileName - file path for the image
 * @returns {Promise<String>}
 */
function writeFile (image, fileName) {
  return new Promise((resolve, reject) => {
    image.writeImage(fileName, (err) => {
      if (err) {
        reject(err)
      } else {
        resolve(fileName)
      }
    })
  })
}

/**
 * Converts the given hexadecimal number to RGBA.
 *
 * @param {String} hex - 6-digit or 8-digit RGB(A) representation in hex
 * @returns {Color} RGBA
 */
function getRgbaColor (hex) {
  const colors = [
    ...hex.match(/^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i)
  ]

  return {
    red: parseInt(colors[1], 16),
    green: parseInt(colors[2], 16),
    blue: parseInt(colors[3], 16),
    alpha: !isNaN(colors[4])
      ? parseInt(colors[4], 16)
      : 255
  }
}

/**
 * Returns true if two RGB colors are equal.
 *
 * @param {Color} a
 * @param {Color} b
 * @returns {Boolean}
 */
function isEqualColor (a, b) {
  return isEqual(omit(a, 'alpha'), omit(b, 'alpha'))
}

/**
 * Renders RGB 24 bitmap into an image instance of PNG
 *
 * @param {Array} bitmap - containing RGB values
 * @param {Number} width - width of bitmap
 * @param {Number} height  height of bitmap
 * @returns {PNG} instance of PNG
 */
function render (bitmap, width, height, backgroundColor, foregroundColor) {
  const image = PNGImage.createImage(width, height)
  const backgroundColorRgba = getRgbaColor(backgroundColor)
  const foregroundColorRgba = getRgbaColor(foregroundColor)
  let i = 0

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const color = {
        red: bitmap[i],
        green: bitmap[i + 1],
        blue: bitmap[i + 2]
      }

      const rgba = isEqualColor(color, backgroundColorRgba)
        ? backgroundColorRgba
        : foregroundColorRgba

      image.setAt(x, y, rgba)

      i += 3
    }
  }

  return image
}

module.exports = {
  blobToBase64,
  writeFile,
  getRgbaColor,
  render
}
