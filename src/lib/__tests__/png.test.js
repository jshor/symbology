const PNGImage = require('pngjs-image')
const png = require('../png')


describe('PNG Functions', () => {
  afterEach(() => jest.resetAllMocks())

  describe('blobToBase64()', () => {
    it('should return a base-64 image string', async () => {
      const image = PNGImage.createImage(1, 1)
      const base64 = await png.blobToBase64(image)

      expect(base64).toMatch(/^data:image\/png;base64,[a-z0-9\-\+\/]+\=*$/i)
    })
  })

  describe('writeFile()', () => {
    it('should return the `fileName` on successful image write', async () => {
      const image = PNGImage.createImage(2, 2)
      const fileName = 'out.png'

      jest
        .spyOn(image, 'writeImage')
        .mockImplementation((f, c) => c())

      await expect(png.writeFile(image, fileName))
        .resolves
        .toEqual(fileName)
    })

    it('should reject with an error if image write fails', async () => {
      const image = PNGImage.createImage(2, 2)
      const fileName = 'out.png'
      const error = 'Image write failed!'

      jest
        .spyOn(image, 'writeImage')
        .mockImplementation((f, c) => c(error))

      expect.assertions(1)

      await expect(png.writeFile(image, fileName))
        .rejects
        .toEqual(error)
    })
  })

  describe('render()', () => {
    const image = PNGImage.createImage(2, 2)
    const bitmap = Array(12).fill(0) // 2x2 black bitmap

    beforeEach(() => {
      jest
        .spyOn(PNGImage, 'createImage')
        .mockReturnValue(image)
      jest
        .spyOn(image, 'setAt')
        .mockReturnValue()
    })

    it('should fill in each pixel color from the given bitmap array', () => {
      png.render(bitmap, 2, 2)

      expect(image.setAt).toHaveBeenCalledTimes(4)
      expect(image.setAt).toHaveBeenCalledWith(expect.any(Number), expect.any(Number), {
        red: 0,
        green: 0,
        blue: 0,
        alpha: 200
      })
    })

    it('should return the PNG buffer instance', () => {
      const result = png.render(bitmap, 2, 2)

      expect(result).toEqual(image)
    })
  })
})
