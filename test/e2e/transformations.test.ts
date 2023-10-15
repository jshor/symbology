import OutputType from '../../src/types/enums/OutputType'
import OutputOption from '../../src/types/enums/OutputOption'
import SymbologyType from '../../src/types/enums/SymbologyType'
import { createImageFile } from '../helpers'
import { createStream } from '../../src'

describe('Symbology Transformations', () => {
  describe('rotations', () => {
    it('should rotate the symbol 90 degrees clockwise', async () => {
      const image = await createImageFile({
        symbology: SymbologyType.CODE128,
        rotation: 90
      }, OutputType.PNG, '12345')

      expect(image).toMatchImageSnapshot()
    })

    it('should rotate the symbol 180 degrees clockwise', async () => {
      const image = await createImageFile({
        symbology: SymbologyType.CODE128,
        rotation: 180
      }, OutputType.PNG, '12345')

      expect(image).toMatchImageSnapshot()
    })

    it('should rotate the symbol 270 degrees clockwise', async () => {
      const image = await createImageFile({
        symbology: SymbologyType.CODE128,
        rotation: 270
      }, OutputType.PNG, '12345')

      expect(image).toMatchImageSnapshot()
    })
  })

  describe('dot size', () => {
    it('should set the default dot size to 0.8px in dotty mode', async () => {
      const image = await createImageFile({
        symbology: SymbologyType.DOTCODE,
        outputOptions: OutputOption.BARCODE_DOTTY_MODE
      }, OutputType.PNG, '12345')

      expect(image).toMatchImageSnapshot()
    })

    it('should render the dot size as 1px in dotty mode', async () => {
      const image = await createImageFile({
        symbology: SymbologyType.DOTCODE,
        outputOptions: OutputOption.BARCODE_DOTTY_MODE,
        dotSize: 1
      }, OutputType.PNG, '12345')

      expect(image).toMatchImageSnapshot()
    })
  })

  describe('Scalable Vector Graphics', () => {
    it('should stream an SVG image', async () => {
      const image = await createStream({
        symbology: SymbologyType.CODE128,
      }, '12345', OutputType.SVG)

      expect(image.data).toMatchSnapshot()
    })

    it('should render an SVG file', async () => {
      const image = await createImageFile({
        symbology: SymbologyType.CODE128,
      }, OutputType.SVG, '12345')

      expect(image.toString()).toMatchSnapshot()
    })
  })

  describe('PostScript', () => {
    it('should stream a PostScript image', async () => {
      const image = await createStream({
        symbology: SymbologyType.CODE128,
      }, '12345', OutputType.EPS)

      expect(image.data).toMatchSnapshot()
    })

    it('should render an eps file', async () => {
      const image = await createImageFile({
        symbology: SymbologyType.CODE128,
      }, OutputType.EPS, '12345')

      expect(image.toString()).toMatchSnapshot()
    })
  })

  describe('Portable Network Graphics', () => {
    it('should stream a base64-encoded image', async () => {
      const image = await createStream({
        symbology: SymbologyType.CODE128
      }, '12345', OutputType.PNG)

      expect(image.data).toMatchSnapshot()
    })
  })
})
