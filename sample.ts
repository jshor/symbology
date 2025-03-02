import { DataMatrix, EncodingMode, OutputType, SymbologyType, createFile, createStream } from './src'

(async () => {
  try {
    await createFile({
      symbology: SymbologyType.DATAMATRIX,
      fileName: 'something.PNG', // must be one of 'SVG', 'EPS', or 'PNG' (uppercase!)
      backgroundColor: 'ffffff',
      foregroundColor: 'a8b1ff',
      showHumanReadableText: false,
      option2: 2,
      scale: 3,
  primary: '999999999840012'
    }, 'Secondary Message Here')
  } catch (e) {
    console.log('E: ', e)
  }
})()
