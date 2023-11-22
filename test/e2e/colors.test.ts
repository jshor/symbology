import SymbologyType from '../../src/types/enums/SymbologyType'
import { RenderType } from '../../src/types/options/BasicOptions'
import { createImageFile } from '../helpers'

describe('Symbology Colors', () => {
  it('should render a black background with a white foreground', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.CODE128,
      backgroundColor: '000000ff',
      foregroundColor: 'ffffffff',
      renderType: RenderType.PNG
    }, '12345')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a black background with a red foreground', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.CODE128,
      backgroundColor: '000000ff',
      foregroundColor: 'ff0000ff',
      renderType: RenderType.PNG
    }, '12345')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a blue background with a white foreground', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.CODE128,
      backgroundColor: '0000ffff',
      foregroundColor: 'ffffffff',
      renderType: RenderType.PNG
    }, '12345')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a black foreground with a transparent background', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.CODE128,
      backgroundColor: '00000000',
      foregroundColor: 'ffffffff',
      renderType: RenderType.PNG
    }, '12345')

    expect(image).toMatchImageSnapshot()
  })
})
