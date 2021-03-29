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
})
