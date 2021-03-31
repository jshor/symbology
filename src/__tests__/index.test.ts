import fs from 'fs'
import { PNG } from 'pngjs'
import binary from '../lib/binary'
import png from '../lib/png'
import SymbologyType from '../types/enums/SymbologyType'
import symbology from '../'
import OutputType from '../types/enums/OutputType'

describe('Symbology Library', () => {
  const mockPngRes = {
    bitmap: [1, 2, 3, 4, 5, 6],
    encodedData: '',
    width: 20,
    height: 25,
    message: 'Image created successfully.',
    code: 2
  }
  const mockSvgRes = {
    ...mockPngRes,
    encodedData: '<svg>...</svg>'
  }
  const mockPngImage = new PNG({
    width: mockPngRes.width,
    height: mockPngRes.height
  })
  const mockBase64Png = 'data:image/png;base64,iVBOR=='

  beforeEach(() => {
    jest
      .spyOn(png, 'render')
      .mockReturnValue(mockPngImage)
    jest
      .spyOn(png, 'blobToBase64')
      .mockResolvedValue(mockBase64Png)
  })

  afterEach(() => jest.resetAllMocks())

  describe('createStream()', () => {
    it('should render a PNG image', async () => {
      jest
        .spyOn(binary, 'invoke')
        .mockResolvedValue(mockPngRes)

      const res = await symbology.createStream({
        symbology: SymbologyType.CODE128
      }, '12345', OutputType.PNG)

      expect(png.render).toHaveBeenCalledTimes(1)
      expect(png.render).toHaveBeenCalledWith(mockPngRes.bitmap, mockPngRes.width, mockPngRes.height, 'FFFFFFFF', '000000FF')
      expect(png.blobToBase64).toHaveBeenCalledTimes(1)
      expect(png.blobToBase64).toHaveBeenCalledWith(mockPngImage)

      expect(res.data).toEqual(mockBase64Png)
      expect(res.width).toEqual(mockPngRes.width)
      expect(res.height).toEqual(mockPngRes.height)
      expect(res.message).toEqual(mockPngRes.message)
    })

    it('should render an SVG string', async () => {
      jest
        .spyOn(binary, 'invoke')
        .mockResolvedValue(mockSvgRes)

      const res = await symbology.createStream({
        symbology: SymbologyType.CODE128
      }, '12345', OutputType.SVG)

      expect(png.render).not.toHaveBeenCalled()
      expect(png.blobToBase64).not.toHaveBeenCalled()

      expect(res.data).toEqual(mockSvgRes.encodedData)
      expect(res.width).toEqual(mockSvgRes.width)
      expect(res.height).toEqual(mockSvgRes.height)
      expect(res.message).toEqual(mockSvgRes.message)
    })

    it('should fallback to a PNG image if no output type is specified', async () => {
      jest
        .spyOn(binary, 'invoke')
        .mockResolvedValue(mockPngRes)

      const res = await symbology.createStream({
        symbology: SymbologyType.CODE128
      }, '12345')

      expect(png.render).toHaveBeenCalledTimes(1)
      expect(png.render).toHaveBeenCalledWith(mockPngRes.bitmap, mockPngRes.width, mockPngRes.height, 'FFFFFFFF', '000000FF')
      expect(png.blobToBase64).toHaveBeenCalledTimes(1)
      expect(png.blobToBase64).toHaveBeenCalledWith(mockPngImage)

      expect(res.data).toEqual(mockBase64Png)
      expect(res.width).toEqual(mockPngRes.width)
      expect(res.height).toEqual(mockPngRes.height)
      expect(res.message).toEqual(mockPngRes.message)
    })
  })

  describe('createFile()', () => {
    beforeEach(() => {
      jest
        .spyOn(fs, 'writeFileSync')
        .mockReturnValue()
    })

    it('should reject if the fileName is not specified', async () => {
      expect.assertions(1)

      await expect(symbology.createFile({
        symbology: SymbologyType.CODE128
      }, '12345')).rejects.toEqual('fileName is required.')
    })

    it('should render a PNG image if the fileName extension is `.png`', async () => {
      jest
        .spyOn(binary, 'invoke')
        .mockResolvedValue(mockPngRes)

      const fileName = 'out.png'
      const res = await symbology.createFile({
        symbology: SymbologyType.CODE128,
        fileName
      }, '12345')

      expect(png.render).toHaveBeenCalledTimes(1)
      expect(png.render).toHaveBeenCalledWith(mockPngRes.bitmap, mockPngRes.width, mockPngRes.height, 'FFFFFFFF', '000000FF')
      expect(fs.writeFileSync).toHaveBeenCalledTimes(1)
      expect(fs.writeFileSync).toHaveBeenCalledWith(fileName, png.getBuffer(mockPngImage))

      expect(res.width).toEqual(mockPngRes.width)
      expect(res.height).toEqual(mockPngRes.height)
      expect(res.message).toEqual(mockPngRes.message)
    })

    it('should render an SVG image if the fileName extension is `.svg`', async () => {
      jest
        .spyOn(binary, 'invoke')
        .mockResolvedValue(mockSvgRes)

      const fileName = 'out.svg'
      const res = await symbology.createFile({
        symbology: SymbologyType.CODE128,
        fileName
      }, '12345')

      expect(png.render).not.toHaveBeenCalled()
      expect(fs.writeFileSync).toHaveBeenCalledTimes(1)
      expect(fs.writeFileSync).toHaveBeenCalledWith(fileName, mockSvgRes.encodedData)

      expect(res.width).toEqual(mockSvgRes.width)
      expect(res.height).toEqual(mockSvgRes.height)
      expect(res.message).toEqual(mockSvgRes.message)
    })
  })
})
