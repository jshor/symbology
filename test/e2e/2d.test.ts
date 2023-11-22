import  { EncodingMode } from '../../src/types/enums/EncodingMode'
import SymbologyType from '../../src/types/enums/SymbologyType'
import { RenderType } from '../../src/types/options/BasicOptions'
import { createImageFile } from '../helpers'

describe('Two-dimensional barcodes', () => {
  it('should render a Data Matrix png image file', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.DATAMATRIX,
      renderType: RenderType.PNG,
      square: true
    }, '12345')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a QR code as a png image file', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.QRCODE,
      renderType: RenderType.PNG
    }, '8765432164')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a 13x13 (M2) Micro-QR code as a png image file', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.QRCODE,
      renderType: RenderType.PNG,
      symbolSize: 2
    }, '12345')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a UPNQR code as a png image file', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.UPNQR,
      renderType: RenderType.PNG,
      // option1: 2, // TODO
      borderWidth: 5,
      scale: 3,
      encodingMode: EncodingMode.DATA
    }, 'to je testna črtna koda')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a 13x13 (M2) Micro-QR code as a png image file', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.MICROQR,
      renderType: RenderType.PNG,
      // option1: 2, // TODO
      borderWidth: 5,
      scale: 3,
      encodingMode: EncodingMode.DATA
    }, '12345')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a Maxicode barcode with a secondary message as a png image file', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.MAXICODE,
      renderType: RenderType.PNG,
      mode: 2,
      primary: '999999999840012'
    }, 'Secondary Message Here')

    expect(image).toMatchImageSnapshot()
  })

  it('should render an 45x45 Aztec Code barcode with 23% error correction capacity as a png image file', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.AZTEC,
      renderType: RenderType.PNG,
      errorCorrectionLevel: 2,
      symbolSize: 11
    }, '12345')

    expect(image).toMatchImageSnapshot()
  })

  it('should render an Aztec Runes barcode as a png image file', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.AZRUNE,
      renderType: RenderType.PNG
    }, '123')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a Code One barcode as a png image file', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.CODEONE,
      renderType: RenderType.PNG,
      symbolSize: 2
    }, 'An Example')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a 30x30 Grid Matrix barcode with 20% error correction as a png image file', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.GRIDMATRIX,
      renderType: RenderType.PNG,
      errorCorrectionLevel: 2,
      symbolSize: 2
    }, '12345')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a DotCode barcode as a png image file', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.DOTCODE,
      renderType: RenderType.PNG
    }, '12345')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a 33x33 Han Xin barcode with 23% error correction as a png image file', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.HANXIN,
      renderType: RenderType.PNG,
      errorCorrectionLevel: 3,
      symbolSize: 6
    }, '12345')

    expect(image).toMatchImageSnapshot()
  })
})
