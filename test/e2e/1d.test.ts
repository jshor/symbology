import EncodingMode from '../../src/types/enums/EncodingMode'
import OutputType from '../../src/types/enums/OutputType'
import SymbologyType from '../../src/types/enums/SymbologyType'
import { createImageFile } from '../helpers'

describe('One-dimensional barcodes', () => {
  it('should render a Code 11 png image file', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.CODE11
    }, OutputType.PNG, '8765432164')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a standard Code 2-of-5 barcode as a png image file', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.C25IATA
    }, OutputType.PNG, '32109876543211')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a UPC-A barcode as a png image file', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.UPCA,
      encoding: EncodingMode.DATA_MODE,
      primary: '331234567890',
    }, OutputType.PNG, '72527270270+12345')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a UPC-E barcode as a png image file', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.UPCE
    }, OutputType.PNG, '1123456')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a EAN-5 barcode as a png image file', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.EANX
    }, OutputType.PNG, '54321')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a EAN-8 with EAN-5 addon barcode as a png image file', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.EANX
    }, OutputType.PNG, '7432365+54321')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a Plessey barcode as a png image file', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.PLESSEY
    }, OutputType.PNG, '7432365')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a mod-10 MSI Plessey barcode as a png image file', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.MSI_PLESSEY,
      option2: 1
    }, OutputType.PNG, '7432365')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a mod-10 MSI Plessey barcode as a png image file', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.MSI_PLESSEY,
      option2: 1
    }, OutputType.PNG, '7432365')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a Telepen Alpha barcode as a png image file', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.TELEPEN
    }, OutputType.PNG, '466333')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a Code 39 barcode as a png image file', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.CODE39
    }, OutputType.PNG, 'CODE39')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a Pharmacode barcode as a png image file', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.PHARMA
    }, OutputType.PNG, '131070')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a UCC/EAN-128 barcode as a png image file', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.EAN128
    }, OutputType.PNG, '[01]98898765432106[3202]012345[15]991231')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a DataBar Expanded barcode as a png image file', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.RSS_EXP
    }, OutputType.PNG, '[01]98898765432106[3202]012345[15]991231')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a 6-channel Channel Code barcode as a png image file', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.CHANNEL,
      option2: 6
    }, OutputType.PNG, '12345')

    expect(image).toMatchImageSnapshot()
  })
})
