const symbology = require('../../src')

describe('Two-dimensional barcodes', () => {
  it('should render a Data Matrix png image file', async () => {
    const image = await createImageFile({
      symbology: symbology.Barcode.DATAMATRIX,
      option3: symbology.DataMatrix.DM_SQUARE
    }, 'png', '12345')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a QR code as a png image file', async () => {
    const image = await createImageFile({
      symbology: symbology.Barcode.QRCODE
    }, 'png', '8765432164')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a 13x13 (M2) Micro-QR code as a png image file', async () => {
    const image = await createImageFile({
      symbology: symbology.Barcode.QRCODE,
      option2: 1
    }, 'png', '12345')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a UPNQR code as a png image file', async () => {
    const image = await createImageFile({
      symbology: symbology.Barcode.UPNQR,
      option1: 2,
      borderWidth: 5,
      scale: 3,
      inputMode: symbology.Encoding.DATA_MODE
    }, 'png', 'to je testna črtna koda')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a 13x13 (M2) Micro-QR code as a png image file', async () => {
    const image = await createImageFile({
      symbology: symbology.Barcode.MICROQR,
      option1: 2,
      borderWidth: 5,
      scale: 3,
      inputMode: symbology.Encoding.DATA_MODE
    }, 'png', '12345')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a Maxicode barcode with a secondary message as a png image file', async () => {
    const image = await createImageFile({
      symbology: symbology.Barcode.MAXICODE,
      option1: 2,
      primary: '999999999840012'
    }, 'png', 'Secondary Message Here')

    expect(image).toMatchImageSnapshot()
  })

  it('should render an 45x45 Aztec Code barcode with 23% error correction capacity as a png image file', async () => {
    const image = await createImageFile({
      symbology: symbology.Barcode.AZTEC,
      option1: 2,
      option2: 11
    }, 'png', '12345')

    expect(image).toMatchImageSnapshot()
  })

  it('should render an Aztec Runes barcode as a png image file', async () => {
    const image = await createImageFile({
      symbology: symbology.Barcode.AZRUNE
    }, 'png', '123')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a Code One barcode as a png image file', async () => {
    const image = await createImageFile({
      symbology: symbology.Barcode.CODEONE,
      option2: 2
    }, 'png', 'An Example')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a 30x30 Grid Matrix barcode with 20% error correction as a png image file', async () => {
    const image = await createImageFile({
      symbology: symbology.Barcode.GRIDMATRIX,
      option1: 2,
      option2: 2
    }, 'png', '12345')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a DotCode barcode as a png image file', async () => {
    const image = await createImageFile({
      symbology: symbology.Barcode.DOTCODE
    }, 'png', '12345')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a 33x33 Han Xin barcode with 23% error correction as a png image file', async () => {
    const image = await createImageFile({
      symbology: symbology.Barcode.HANXIN,
      option1: 3,
      option2: 6
    }, 'png', '12345')

    expect(image).toMatchImageSnapshot()
  })
})
