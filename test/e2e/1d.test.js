const symbology = require('../../src')

describe('One-dimensional barcodes', () => {
  it('should render a Code 11 png image file', async () => {
    const image = await createImageFile({
      symbology: symbology.Barcode.CODE11
    }, 'png', '8765432164')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a standard Code 2-of-5 barcode as a png image file', async () => {
    const image = await createImageFile({
      symbology: symbology.Barcode.C25IATA
    }, 'png', '32109876543211')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a UPC-A barcode as a png image file', async () => {
    const image = await createImageFile({
      symbology: symbology.Barcode.UPCA,
      mode: 1,
      primary: '331234567890',
    }, 'png', '72527270270+12345')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a UPC-E barcode as a png image file', async () => {
    const image = await createImageFile({
      symbology: symbology.Barcode.UPCE
    }, 'png', '1123456')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a EAN-5 barcode as a png image file', async () => {
    const image = await createImageFile({
      symbology: symbology.Barcode.EANX
    }, 'png', '54321')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a EAN-8 with EAN-5 addon barcode as a png image file', async () => {
    const image = await createImageFile({
      symbology: symbology.Barcode.EANX
    }, 'png', '7432365+54321')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a Plessey barcode as a png image file', async () => {
    const image = await createImageFile({
      symbology: symbology.Barcode.PLESSEY
    }, 'png', '7432365')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a mod-10 MSI Plessey barcode as a png image file', async () => {
    const image = await createImageFile({
      symbology: symbology.Barcode.MSI_PLESSEY,
      option2: 1
    }, 'png', '7432365')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a mod-10 MSI Plessey barcode as a png image file', async () => {
    const image = await createImageFile({
      symbology: symbology.Barcode.MSI_PLESSEY,
      option2: 1
    }, 'png', '7432365')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a Telepen Alpha barcode as a png image file', async () => {
    const image = await createImageFile({
      symbology: symbology.Barcode.TELEPEN
    }, 'png', '466333')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a Code 39 barcode as a png image file', async () => {
    const image = await createImageFile({
      symbology: symbology.Barcode.CODE39
    }, 'png', 'CODE39')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a Pharmacode barcode as a png image file', async () => {
    const image = await createImageFile({
      symbology: symbology.Barcode.PHARMA
    }, 'png', '131070')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a UCC/EAN-128 barcode as a png image file', async () => {
    const image = await createImageFile({
      symbology: symbology.Barcode.EAN128
    }, 'png', '[01]98898765432106[3202]012345[15]991231')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a DataBar Expanded barcode as a png image file', async () => {
    const image = await createImageFile({
      symbology: symbology.Barcode.RSS_EXP
    }, 'png', '[01]98898765432106[3202]012345[15]991231')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a 6-channel Channel Code barcode as a png image file', async () => {
    const image = await createImageFile({
      symbology: symbology.Barcode.CHANNEL,
      option2: 6
    }, 'png', '12345')

    expect(image).toMatchImageSnapshot()
  })
})
