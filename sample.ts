import { DataMatrix, EncodingMode, OutputType, SymbologyType, createFile, createStream } from './src'

(async () => {
  try {
    await createFile({
      symbology: SymbologyType.CHANNEL,
      fileName: 'test.SVG',
      option2: 8,
      backgroundColor: 'ffffff00',
      foregroundColor: '000000ff'
    }, '1234567')
  //     option2: 2,
  // primary: '999999999840012'
  //   }, 'Secondary Message Here')
  } catch (e) {
    console.log('E: ', e)
  }
})()

// ```ts
// createStream({
//   symbology: SymbologyType.MAXICODE,
//   mode: 2,
//   primary: '152382802840001'
// }, '1Z00004951\GUPSN\G06X610\G159\G1234567\G1/1\G\GY\G1 MAIN ST\GNY\GNY\R\E')
// ```
