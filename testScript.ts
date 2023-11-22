import { SymbologyType, renderSymbol } from './src'
import { RenderType } from './src/types/options/BasicOptions'

(async () => {
  try {
    const result = await renderSymbol({
      symbology: SymbologyType.CODE128,
      renderType: RenderType.PNG,
      fileName: 'testing.png',
      height: 100,
      // channels: 8,
      rotation: 90,
      backgroundColor: 'ffffff00',
      foregroundColor: '000000ff'
    }, '1234567')

    console.log('result: ', result)
  } catch (e) {
    console.log('E: ', e)
  }
})()