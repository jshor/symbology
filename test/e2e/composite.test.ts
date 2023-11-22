import SymbologyType from '../../src/types/enums/SymbologyType'
import { RenderType } from '../../src/types/options/BasicOptions'
import { createImageFile } from '../helpers'

describe('Stacked symbols', () => {
//   it('should render a 5-row Codablock-F symbol as a png image file', async () => {
//     const image = await createImageFile({
//       symbology: SymbologyType.CODABLOCKF,
//       renderType: RenderType.PNG,
//       option1: 5
//     }, '11010000100101111011101001000011010100011000101000110001010001100010100011000110011001101100011101011')

//     expect(image).toMatchImageSnapshot()
//   })

//   it('should render a 30-width PDF417 symbol as a png image file', async () => {
//     const image = await createImageFile({
//       symbology: SymbologyType.PDF417,
//       renderType: RenderType.PNG,
//       option2: 30
//     }, 'Example Parcel Information')

//     expect(image).toMatchImageSnapshot()
//   })
// })

// describe('Composite symbols', () => {
//   it('should render a Extended EAN composite symbol as a png image file', async () => {
//     const image = await createImageFile({
//       symbology: SymbologyType.EANX_CC,
//       renderType: RenderType.PNG,
//       option1: 1,
//       primary: '331234567890'
//     }, '[99]1234-abcd')

//     expect(image).toMatchImageSnapshot()
//   })

  it('should render a GS1 DataBar-14 Stacked Omnidirectional component symbol as a png image file', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.RSS14_OMNI_CC,
      renderType: RenderType.PNG,
      primary: '331234567890'
    }, '[99]1234-abcd')

    expect(image).toMatchImageSnapshot()
  })
})
