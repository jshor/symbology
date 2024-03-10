import { DataMatrix, EncodingMode, OutputType, SymbologyType, createFile, createStream } from './src'

(async () => {
  try {
    await createFile({
      symbology: SymbologyType.DATAMATRIX,
      fileName: 'something.EPS', // must be one of 'SVG', 'EPS', or 'PNG' (uppercase!)
      backgroundColor: 'ffffff',
      foregroundColor: 'a8b1ff',
      showHumanReadableText: false,

      // option1: 4,
      scale: 3
    }, 'HEIMASÍÐA KENNARAHÁSKÓLA ÍSLANDS')
  } catch (e) {
    console.log('E: ', e)
  }
})()
