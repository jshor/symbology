const { PNG } = require('pngjs')
const png = require('../png')

describe('PNG Functions', () => {
  afterEach(() => jest.resetAllMocks())

  describe('blobToBase64()', () => {
    it('should return a base-64 image string', async () => {
      const image = new PNG({ width: 1, height: 1 })
      const base64 = await png.blobToBase64(image)

      expect(base64).toMatch(/^data:image\/png;base64,[a-z0-9\-\+\/]+\=*$/i)
    })
  })

  describe('getRgbaColor()', () => {
    it('should parse the alpha channel for an 8-digit hex color', () => {
      const color = png.getRgbaColor('ff00ff00')

      expect(color).toEqual({
        red: 255,
        green: 0,
        blue: 255,
        alpha: 0
      })
    })

    it('should parse a 6-digit hex color, with alpha channel falling back to 255', () => {
      const color = png.getRgbaColor('ff00ff')

      expect(color).toEqual({
        red: 255,
        green: 0,
        blue: 255,
        alpha: 255
      })
    })
  })

  describe('render()', () => {
    const bitmap = [
      ...Array(3).fill(0), // 1x1 black dot (left)
      ...Array(3).fill(255) // 1x1 white dot (right)
    ]

    it('should fill in each pixel color from the given bitmap array', () => {
      const result = png.render(bitmap, 1, 2, '000000ff', 'ffffffff')

      expect(result.data[0]).toEqual(0)
      expect(result.data[1]).toEqual(0)
      expect(result.data[2]).toEqual(0)
      expect(result.data[3]).toEqual(255)
      expect(result.data[4]).toEqual(255)
      expect(result.data[5]).toEqual(255)
      expect(result.data[6]).toEqual(255)
      expect(result.data[7]).toEqual(255)
    })
  })
})
