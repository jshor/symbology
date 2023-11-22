import SymbologyType from '../../src/types/enums/SymbologyType'
import { createImageFile } from '../helpers'
import { renderSymbol } from '../../src'
import { RenderType } from '../../src/types/options/BasicOptions'

describe('Symbology Transformations', () => {
  describe('rotations', () => {
    it.each([90, 180, 270])('should rotate the symbol %s degrees clockwise', async (rotation) => {
      const image = await createImageFile({
        symbology: SymbologyType.CODE128,
        renderType: RenderType.PNG,
        rotation
      }, '12345')

      expect(image).toMatchImageSnapshot()
    })
  })

  describe('dot size', () => {
    it('should set the default dot size to 0.8px in dotty mode', async () => {
      const image = await createImageFile({
        symbology: SymbologyType.DOTCODE,
        renderType: RenderType.PNG,
        dotty: true
      }, '12345')

      expect(image).toMatchImageSnapshot()
    })

    it('should render the dot size as 1px in dotty mode', async () => {
      const image = await createImageFile({
        symbology: SymbologyType.DOTCODE,
        dotty: true,
        renderType: RenderType.PNG,
        dotSize: 1
      }, '12345')

      expect(image).toMatchImageSnapshot()
    })
  })

  describe('Scalable Vector Graphics', () => {
    it('should stream an SVG image', async () => {
      const image = await renderSymbol({
        symbology: SymbologyType.CODE128,
        renderType: RenderType.SVG
      }, '12345')

      expect(image.data).toMatchSnapshot()
    })

    it('should render an SVG file', async () => {
      const image = await createImageFile({
        symbology: SymbologyType.CODE128,
        renderType: RenderType.SVG
      }, '12345')

      expect(image.toString()).toMatchSnapshot()
    })
  })

  describe('PostScript', () => {
    it('should stream a PostScript image', async () => {
      const image = await renderSymbol({
        symbology: SymbologyType.CODE128,
        renderType: RenderType.EPS
      }, '12345')

      expect(image.data).toMatchSnapshot()
    })

    it('should render an eps file', async () => {
      const image = await createImageFile({
        symbology: SymbologyType.CODE128,
        renderType: RenderType.EPS
      }, '12345')

      expect(image.toString()).toMatchSnapshot()
    })
  })

  describe('Portable Network Graphics', () => {
    it('should stream a base64-encoded image', async () => {
      const image = await renderSymbol({
        symbology: SymbologyType.CODE128,
        renderType: RenderType.PNG
      }, '12345')

      expect(image.data).toMatchSnapshot()
    })
  })
})
