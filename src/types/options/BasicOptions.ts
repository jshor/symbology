import EncodingMode from '../enums/EncodingMode'
import OutputOption from '../enums/OutputOption'
import SymbologyType from '../enums/SymbologyType'

/**
 * Represents configuration options for a symbology.
 */
type BasicOptions = {
  /** The symbology type. */
  symbology: SymbologyType
  /** The height (in pixels) of the symbology. */
  height?: number
  /** The width (in pixels) of the whitespace. */
  whitespaceWidth?: number
  /** The width (in pixels) of the surrounding border. */
  borderWidth?: number
  /** Output options. Add multiple options using (+). */
  outputOptions?: OutputOption | number
  /** File path (if saving image to file system). */
  fileName?: string
  /** Symbology-specific option value. */
  option1?: number
  /** Symbology-specific option value. */
  option2?: number
  /** Symbology-specific option value. */
  option3?: number
  /** Encoding mode. */
  encoding?: EncodingMode
  /** Primary text (if differs from secondary text). */
  primary?: string
  /** Degrees of right-angle rotation (0, 90, 180, or 270). */
  rotation?: number
  /** Dot size (for dotty mode). */
  dotSize?: number
}

type VeryBasicOptions = {
  /** Scale of the symbol image. Defaults to `1`. */
  scale?: number
  /** The width (in pixels) of the whitespace. Defaults to `0`. */
  whitespaceWidth?: number
  /** The height (in pixels) of the whitespace. Defaults to `0`. */
  whitespaceHeight?: number
  /** 6-character (or 8-character with alpha) hexadecimal foreground color. Defaults to `#000000FF`. */
  foregroundColor?: string
  /** 6-character (or 8-character with alpha) hexadecimal background color. Defaults to `#FFFFFFFF`. */
  backgroundColor?: string
  /** Degrees of right-angle rotation (0, 90, 180, or 270). Defaults to `0`. */
  rotation?: number
  /** Whether or not to use a faster (if less optimal) encoding procedure. Defaults to `false`. */
  fast?: boolean
}

type OptionsWithHumanReadableText = {
  /** Whether or not to show human-readable text on the image. */
  showHumanReadableText: true
  /** Human-readable text */
  text?: string
  /** Whether or not the human-readable text can be bold. */
  bold?: boolean
  /** Whether or not the human-readable text should be rendered with a smaller font size. */
  smallFont?: boolean
} | {
  /** Whether or not to show human-readable text on the image. */
  showHumanReadableText?: false
}

type OptionsWithBasicSymbologyType = {
  /** The type of symbology to use. */
  symbology: SymbologyType
}

type OptionsWithErrorCorrection = {
  /** The type of symbology to use. */
  symbology: SymbologyType.AZTEC |
    SymbologyType.AZRUNE |
    SymbologyType.QRCODE |
    SymbologyType.MICROQR |
    SymbologyType.HIBC_QR |
    SymbologyType.UPNQR
  /** Error correction level. */
  errorCorrectionLevel?: number
} | OptionsWithBasicSymbologyType

type OptionsWithSymbolSize = {
  /** The type of symbology to use. */
  symbology: SymbologyType.AZTEC |
    SymbologyType.AZRUNE |
    SymbologyType.QRCODE |
    SymbologyType.MICROQR |
    SymbologyType.HIBC_QR |
    SymbologyType.UPNQR |
    SymbologyType.ONECODE
  /** The size of the generated symbol. */
  symbolSize?: number
} | OptionsWithBasicSymbologyType

type OptionsWithEci = {
  /** The type of symbology to use. */
  symbology: SymbologyType.AZTEC |
    SymbologyType.QRCODE |
    SymbologyType.MICROQR |
    SymbologyType.HIBC_QR |
    SymbologyType.UPNQR
  /** Extended Channel Interpretation. */
  eci?: number
} | OptionsWithBasicSymbologyType

type OptionsWithDataMatrix = {
  /** The type of symbology to use. */
  symbology: SymbologyType.DATAMATRIX | SymbologyType.HIBC_DM
  /** Whether or not to force the symbol to render as a square. */
  square?: boolean
  /**
   * Whether or not to activate
   * {@link http://localhost:5173/reference/datamatrix.html#data-matrix-rectangular-extension-dmre DMRE (Data Matrix Rectangular Extension)}
   * in automatic size mode.
   */
  dmre?: boolean
} | OptionsWithBasicSymbologyType

type OptionsWithGS1 = {
  /** The type of symbology to use. */
  symbology: SymbologyType.DATAMATRIX |
    SymbologyType.HIBC_DM |
    SymbologyType.AZTEC |
    SymbologyType.QRCODE |
    SymbologyType.MICROQR |
    SymbologyType.HIBC_QR |
    SymbologyType.UPNQR
  /**
   * Whether or not to encode
   * {@link http://localhost:5173/reference/datamatrix.html#data-matrix-rectangular-extension-dmre GS1 Data}
   * using `FNC1` or `GS` as a separator.
   */
  gs1?: boolean
} | OptionsWithBasicSymbologyType

type OptionsWithMask = {
  /** The type of symbology to use. */
  symbology: SymbologyType.QRCODE |
    SymbologyType.MICROQR |
    SymbologyType.HIBC_QR |
    SymbologyType.UPNQR
  /**
   * The symbol mask to use.
   * For QR codes, this is any integer between 0 and 7.
   * For DotCode or Han Xin, this is any integer between 0 and 3.
   */
  mask?: number
} | OptionsWithBasicSymbologyType

type OptionsWithFullMultibyte = {
  /** The type of symbology to use. */
  symbology: SymbologyType.QRCODE |
    SymbologyType.MICROQR |
    SymbologyType.HIBC_QR |
    SymbologyType.UPNQR
  /**
   * Whether or not to encode full multibyte characters.
   * See {@link http://localhost:5173/docs/advanced.html#full-multibyte Full Multibyte}
   * for more information.
   */
  fullMultibyte?: boolean
} | OptionsWithBasicSymbologyType

type OptionsWithMode = {
  /** The type of symbology to use. */
  symbology: SymbologyType.QRCODE |
    SymbologyType.MICROQR |
    SymbologyType.HIBC_QR |
    SymbologyType.UPNQR
  /** The {@link http://localhost:5173/reference/maxicode.html MaxiCode} mode to use. */
  mode?: boolean
} | OptionsWithBasicSymbologyType

type AllOptions = VeryBasicOptions &
  OptionsWithHumanReadableText &
  OptionsWithErrorCorrection &
  OptionsWithSymbolSize &
  OptionsWithDataMatrix &
  OptionsWithFullMultibyte &
  OptionsWithEci &
  OptionsWithGS1 &
  OptionsWithMode

const options: AllOptions = {
  symbology: SymbologyType.AZRUNE,
  symbolSize: 30,
  errorCorrectionLevel: 1,
  showHumanReadableText: true,
  bold: true
}
