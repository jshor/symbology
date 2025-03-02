import { DataMatrix, EncodingMode, OutputType, SymbologyType, createFile, createStream } from './src'

(async () => {
  try {
    await createFile({
      symbology: SymbologyType.MAXICODE,
      fileName: 'maxicode.SVG', // must be one of 'SVG', 'EPS', or 'PNG' (uppercase!)
      backgroundColor: 'ffffff00',
      foregroundColor: '000000',
      // showHumanReadableText: false,

      option2: 2,
      scale: 3,
  primary: '999999999840012'
    }, 'Secondary Message Here')
  } catch (e) {
    console.log('E: ', e)
  }
})()
