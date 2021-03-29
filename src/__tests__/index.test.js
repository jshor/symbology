const fs = require('fs')
const PNGImage = require('pngjs-image')
const symbology = require('../')
const binary = require('../lib/binary')
const png = require('../lib/png')

describe('Symbology Library', () => {
  const mockPngRes = {
    data: [1, 2, 3, 4, 5, 6],
    width: 20,
    height: 25,
    message: 'Image created successfully.',
    code: 2
  }
  const mockSvgRes = {
    ...mockPngRes,
    data: '<svg>...</svg>'
  }
  const mockPngImage = PNGImage.createImage(mockPngRes.width, mockPngRes.height)
  const mockBase64Png = 'data:image/png;base64,iVBOR=='

  beforeEach(() => {
    jest
      .spyOn(png, 'render')
      .mockReturnValue(mockPngImage)
    jest
      .spyOn(png, 'blobToBase64')
      .mockReturnValue(mockBase64Png)
  })

  afterEach(() => jest.resetAllMocks())

  describe('createStream()', () => {
    it('should render a PNG image', async () => {
      jest
        .spyOn(binary, 'invoke')
        .mockReturnValue(mockPngRes)

      const res = await symbology.createStream({
        symbology: symbology.Barcode.CODE128
      }, '12345', 'png')

      expect(png.render).toHaveBeenCalledTimes(1)
      expect(png.render).toHaveBeenCalledWith(mockPngRes.data, mockPngRes.width, mockPngRes.height, 'ffffffff', '000000ff')
      expect(png.blobToBase64).toHaveBeenCalledTimes(1)
      expect(png.blobToBase64).toHaveBeenCalledWith(mockPngImage)

      expect(res.data).toEqual(mockBase64Png)
      expect(res.width).toEqual(mockPngRes.width)
      expect(res.height).toEqual(mockPngRes.height)
      expect(res.message).toEqual(mockPngRes.message)
      expect(res.code).toEqual(mockPngRes.code)
    })

    it('should render an SVG string', async () => {
      jest
        .spyOn(binary, 'invoke')
        .mockReturnValue(mockSvgRes)

      const res = await symbology.createStream({
        symbology: symbology.Barcode.CODE128
      }, '12345', 'svg')

      expect(png.render).not.toHaveBeenCalled()
      expect(png.blobToBase64).not.toHaveBeenCalled()

      expect(res.data).toEqual(mockSvgRes.data)
      expect(res.width).toEqual(mockSvgRes.width)
      expect(res.height).toEqual(mockSvgRes.height)
      expect(res.message).toEqual(mockSvgRes.message)
      expect(res.code).toEqual(mockSvgRes.code)
    })

    it('should fallback to a PNG image if no output type is specified', async () => {
      jest
        .spyOn(binary, 'invoke')
        .mockReturnValue(mockPngRes)

      const res = await symbology.createStream({
        symbology: symbology.Barcode.CODE128
      }, '12345')

      expect(png.render).toHaveBeenCalledTimes(1)
      expect(png.render).toHaveBeenCalledWith(mockPngRes.data, mockPngRes.width, mockPngRes.height, 'ffffffff', '000000ff')
      expect(png.blobToBase64).toHaveBeenCalledTimes(1)
      expect(png.blobToBase64).toHaveBeenCalledWith(mockPngImage)

      expect(res.data).toEqual(mockBase64Png)
      expect(res.width).toEqual(mockPngRes.width)
      expect(res.height).toEqual(mockPngRes.height)
      expect(res.message).toEqual(mockPngRes.message)
      expect(res.code).toEqual(mockPngRes.code)
    })
  })

  describe('createFile()', () => {
    beforeEach(() => {
      jest
        .spyOn(png, 'writeFile')
        .mockReturnValue()
      jest
        .spyOn(fs, 'writeFileSync')
        .mockImplementation(() => {})
    })

    it('should render a PNG image if the fileName extension is `.png`', async () => {
      jest
        .spyOn(binary, 'invoke')
        .mockReturnValue(mockPngRes)

      const fileName = 'out.png'
      const res = await symbology.createFile({
        symbology: symbology.Barcode.CODE128,
        fileName
      }, '12345')

      expect(png.render).toHaveBeenCalledTimes(1)
      expect(png.render).toHaveBeenCalledWith(mockPngRes.data, mockPngRes.width, mockPngRes.height, 'ffffffff', '000000ff')
      expect(png.writeFile).toHaveBeenCalledTimes(1)
      expect(png.writeFile).toHaveBeenCalledWith(mockPngImage, fileName)
      expect(fs.writeFileSync).not.toHaveBeenCalled()

      expect(res.width).toEqual(mockPngRes.width)
      expect(res.height).toEqual(mockPngRes.height)
      expect(res.message).toEqual(mockPngRes.message)
      expect(res.code).toEqual(mockPngRes.code)
      expect(res).not.toHaveProperty('data')
    })

    it('should render an SVG image if the fileName extension is `.svg`', async () => {
      jest
        .spyOn(binary, 'invoke')
        .mockReturnValue(mockSvgRes)

      const fileName = 'out.svg'
      const res = await symbology.createFile({
        symbology: symbology.Barcode.CODE128,
        fileName
      }, '12345')

      expect(png.writeFile).not.toHaveBeenCalled()
      expect(png.render).not.toHaveBeenCalled()
      expect(fs.writeFileSync).toHaveBeenCalledTimes(1)
      expect(fs.writeFileSync).toHaveBeenCalledWith(fileName, mockSvgRes.data)

      expect(res.width).toEqual(mockSvgRes.width)
      expect(res.height).toEqual(mockSvgRes.height)
      expect(res.message).toEqual(mockSvgRes.message)
      expect(res.code).toEqual(mockSvgRes.code)
      expect(res).not.toHaveProperty('data')
    })
  })
})
