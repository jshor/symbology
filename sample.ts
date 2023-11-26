import { DataMatrix, EncodingMode, OutputType, SymbologyType, createStream } from './src'

(async () => {
  await createStream({
    symbology: SymbologyType.ULTRA,
    fileName: './docs/assets/barcodes/ultracode.svg',
    backgroundColor: 'ffffff',
    foregroundColor: 'a8b1ff',
    showHumanReadableText: false,
    // option1: 4,
    scale: 3
  }, 'HEIMASÍÐA KENNARAHÁSKÓLA ÍSLANDS', OutputType.SVG)
})()
