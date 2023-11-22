import { SymbologyType, renderSymbol } from './src'
import { RenderType } from './src/types/options/BasicOptions'

(async () => {
  try {
    await renderSymbol({
      symbology: SymbologyType.MAXICODE,
      renderType: RenderType.SVG,
      fileName: 'maxicode.SVG', // must be one of 'SVG', 'EPS', or 'PNG' (uppercase!)
      backgroundColor: 'ffffff00',
      foregroundColor: '000000'
    }, 'Secondary Message Here')
  } catch (e) {
    console.log('E: ', e)
  }
})()
