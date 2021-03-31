import DataMatrix from '../../src/types/enums/DataMatrix'
import EncodingMode from '../../src/types/enums/EncodingMode'
import OutputType from '../../src/types/enums/OutputType'
import SymbologyType from '../../src/types/enums/SymbologyType'
import { createImageFile } from '../helpers'

describe('Two-dimensional barcodes', () => {
  it('should render a Data Matrix png image file', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.DATAMATRIX,
      option3: DataMatrix.DM_SQUARE
    }, OutputType.PNG, '12345')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a QR code as a png image file', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.QRCODE
    }, OutputType.PNG, '8765432164')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a 13x13 (M2) Micro-QR code as a png image file', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.QRCODE,
      option2: 1
    }, OutputType.PNG, '12345')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a UPNQR code as a png image file', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.UPNQR,
      option1: 2,
      borderWidth: 5,
      scale: 3,
      encoding: EncodingMode.DATA_MODE
    }, OutputType.PNG, 'to je testna črtna koda')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a 13x13 (M2) Micro-QR code as a png image file', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.MICROQR,
      option1: 2,
      borderWidth: 5,
      scale: 3,
      encoding: EncodingMode.DATA_MODE
    }, OutputType.PNG, '12345')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a Maxicode barcode with a secondary message as a png image file', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.MAXICODE,
      option1: 2,
      primary: '999999999840012'
    }, OutputType.PNG, 'Secondary Message Here')

    expect(image).toMatchImageSnapshot()
  })

  it('should render an 45x45 Aztec Code barcode with 23% error correction capacity as a png image file', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.AZTEC,
      option1: 2,
      option2: 11
    }, OutputType.PNG, '12345')

    expect(image).toMatchImageSnapshot()
  })

  it('should render an Aztec Runes barcode as a png image file', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.AZRUNE
    }, OutputType.PNG, '123')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a Code One barcode as a png image file', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.CODEONE,
      option2: 2
    }, OutputType.PNG, 'An Example')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a 30x30 Grid Matrix barcode with 20% error correction as a png image file', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.GRIDMATRIX,
      option1: 2,
      option2: 2
    }, OutputType.PNG, '12345')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a DotCode barcode as a png image file', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.DOTCODE
    }, OutputType.PNG, '12345')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a 33x33 Han Xin barcode with 23% error correction as a png image file', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.HANXIN,
      option1: 3,
      option2: 6
    }, OutputType.PNG, '12345')

    expect(image).toMatchImageSnapshot()
  })
})
