import OutputType from '../../src/types/enums/OutputType'
import SymbologyType from '../../src/types/enums/SymbologyType'
import { createImageFile } from '../helpers'

describe('Symbology Colors', () => {
  it('should render a black background with a white foreground', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.CODE128,
      backgroundColor: '000000ff',
      foregroundColor: 'ffffffff'
    }, OutputType.PNG, '12345')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a black background with a red foreground', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.CODE128,
      backgroundColor: '000000ff',
      foregroundColor: 'ff0000ff'
    }, OutputType.PNG, '12345')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a blue background with a white foreground', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.CODE128,
      backgroundColor: '0000ffff',
      foregroundColor: 'ffffffff'
    }, OutputType.PNG, '12345')

    expect(image).toMatchImageSnapshot()
  })

  it('should render a black foreground with a transparent background', async () => {
    const image = await createImageFile({
      symbology: SymbologyType.CODE128,
      backgroundColor: '00000000',
      foregroundColor: 'ffffffff'
    }, OutputType.PNG, '12345')

    expect(image).toMatchImageSnapshot()
  })
})
