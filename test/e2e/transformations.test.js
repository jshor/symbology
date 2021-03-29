const symbology = require('../../src')

describe('Symbology Transformations', () => {
  describe('rotations', () => {
    it('should rotate the symbol 90 degrees clockwise', async () => {
      const image = await createImageFile({
        symbology: symbology.Barcode.CODE128,
        rotation: 90
      }, 'png', '12345')

      expect(image).toMatchImageSnapshot()
    })

    it('should rotate the symbol 180 degrees clockwise', async () => {
      const image = await createImageFile({
        symbology: symbology.Barcode.CODE128,
        rotation: 180
      }, 'png', '12345')

      expect(image).toMatchImageSnapshot()
    })

    it('should rotate the symbol 270 degrees clockwise', async () => {
      const image = await createImageFile({
        symbology: symbology.Barcode.CODE128,
        rotation: 270
      }, 'png', '12345')

      expect(image).toMatchImageSnapshot()
    })
  })

  describe('dot size', () => {
    it('should set the default dot size to 0.8px in dotty mode', async () => {
      const image = await createImageFile({
        symbology: symbology.Barcode.DOTCODE,
        outputOptions: symbology.Options.BARCODE_DOTTY_MODE
      }, 'png', '12345')

      expect(image).toMatchImageSnapshot()
    })

    it('should render the dot size as 1px in dotty mode', async () => {
      const image = await createImageFile({
        symbology: symbology.Barcode.DOTCODE,
        outputOptions: symbology.Options.BARCODE_DOTTY_MODE,
        dotSize: 1
      }, 'png', '12345')

      expect(image).toMatchImageSnapshot()
    })
  })

  describe('Scalable Vector Graphics', () => {
    it('should render an SVG', async () => {
      const image = await createImageFile({
        symbology: symbology.Barcode.CODE128,
      }, 'svg', '12345')

      expect(image).toMatchSnapshot()
    })
  })

  describe('PostScript', () => {
    it('should render an eps', async () => {
      const image = await createImageFile({
        symbology: symbology.Barcode.CODE128,
      }, 'eps', '12345')

      expect(image).toMatchSnapshot()
    })
  })
})
