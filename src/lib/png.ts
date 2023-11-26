import { PNG } from 'pngjs'
import RGBAColor from '../types/RGBAColor'

/**
 * Renders a PNG Blob stream to a base64 PNG.
 *
 * @param {PNG} png
 * @returns {Promise<string>} base64 representation
 */
function blobToBase64 (png: PNG): Promise<string> {
  const chunks: Uint8Array[] = []

  return new Promise((resolve) => {
    png.pack()
    png.on('data', (c: Uint8Array) => chunks.push(c))
    png.on('end', () => {
      const result = Buffer.concat(chunks)

      resolve('data:image/png;base64,' + result.toString('base64'))
    })
  })
}

/**
 * Writes the PNG instance to a buffer.
 *
 * @param {PNG} png - image instance
 * @returns {string}
 */
function getBuffer (png: PNG): Buffer {
  return PNG.sync.write(png)
}

/**
 * Converts the given hexadecimal number to RGBA.
 *
 * @param {string} hex - 6-digit or 8-digit RGB(A) representation in hex
 * @returns {RGBAColor} RGBA
 */
function getRgbaColor (hex = '000000FF'): RGBAColor {
  const colors = [
    ...hex.match(/^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i) ?? []
  ]
  const alpha = parseInt(colors[4], 16)

  if (colors.length >= 3) {
    return {
      red: parseInt(colors[1], 16),
      green: parseInt(colors[2], 16),
      blue: parseInt(colors[3], 16),
      alpha: !isNaN(alpha) ? alpha : 255
    }
  }

  // default to solid black if color is invalid
  return {
    red: 0,
    green: 0,
    blue: 0,
    alpha: 255
  }
}

/**
 * Returns true if two RGB colors are equal.
 *
 * @param {RGBAColor} a
 * @param {RGBAColor} b
 * @returns {boolean}
 */
function isEqualColor (a: RGBAColor, b: RGBAColor): boolean {
  return a.red === b.red && a.green === b.green && a.blue === b.blue
}

/**
 * Renders RGB 24 bitmap into an image instance of PNG
 *
 * @param {number[]} bitmap - containing RGB values
 * @param {number} width - width of bitmap
 * @param {number} height  height of bitmap
 * @returns {PNG} instance of PNG
 */
function render (bitmap: number[], width: number, height: number, backgroundColor?: string, foregroundColor?: string): PNG {
  const png = new PNG({ width, height })
  const backgroundColorRgba = getRgbaColor(backgroundColor)
  const foregroundColorRgba = getRgbaColor(foregroundColor)
  let i = 0

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const color: RGBAColor = {
        red: bitmap[i],
        green: bitmap[i + 1],
        blue: bitmap[i + 2],
        alpha: 255
      }

      const rgba = (() => {
        if (isEqualColor(color, backgroundColorRgba)) {
          color.alpha = backgroundColorRgba.alpha
        }

        if (isEqualColor(color, foregroundColorRgba)) {
          color.alpha = foregroundColorRgba.alpha
        }

        return color
      })()
      const pos = (png.width * y + x) << 2

      png.data[pos] = rgba.red
      png.data[pos + 1] = rgba.green
      png.data[pos + 2] = rgba.blue
      png.data[pos + 3] = rgba.alpha || 0

      i += 3
    }
  }

  return png
}

export default {
  blobToBase64,
  getBuffer,
  getRgbaColor,
  render
}
