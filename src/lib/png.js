const PNGImage = require('pngjs-image')

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
 * Renders RGB 24 bitmap into an image instance of PNG
 *
 * @param {Array} bitmap - containing RGB values
 * @param {Number} width - width of bitmap
 * @param {Number} height  height of bitmap
 * @returns {PNG} instance of PNG
 */
function render (bitmap, width, height) {
  const image = PNGImage.createImage(width, height)
  let i = 0

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      image.setAt(x, y, {
        red: bitmap[i],
        green: bitmap[i + 1],
        blue: bitmap[i + 2],
        alpha: 200
      })

      i += 3
    }
  }

  return image
}

module.exports = {
  blobToBase64,
  writeFile,
  render
}
