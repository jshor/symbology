import OutputOption from '../enums/OutputOption'
import SymbologyType from '../enums/SymbologyType'

/**
 * TODO: create ParallelProcessor().
 * e.g.,
 *
 * const processor = new ParallelProcessor({ max: 10 })
 *
 * const results = await processor.createStream(options)
 *
 * results.forEach(result => {
 *   if (result.error) {
 *     console.log('failed to render symbology:', result.error)
 *   } else {
 *     console.log('success!', result.data)
 *   }
 * })
 *
 * tip: use memoryUsage():
 * https://stackoverflow.com/questions/20018588/how-to-monitor-the-memory-usage-of-node-js
 */

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
  /** The height (in pixels) of the whitespace. */
  whitespaceHeight?: number
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
  inputMode?: number // TODO: maps from EncodingMode, other attrs...
  /** Primary text (if differs from secondary text). */
  primary?: string
  /** Degrees of right-angle rotation (`0`, `90`, `180`, or `270`). Defaults to `0`. */
  rotation?: number
  /** Dot size (for dotty mode). */
  dotSize?: number
  /** Gap between barcode and text (HRT) in X-dimensions. Default: `1`. */
  gapSize?: number
  /** Height in X-dimensions that EAN/UPC guard bars descend. Default `5`. */
  guardDescentHeight?: number
}

enum EncodingMode {
  DATA,
  UNICODE,
  GS1
}

// TODO: add support for output_options:
// CMYK_COLOUR, BARCODE_BIND, BARCODE_BOX, BARCODE_QUIET_ZONES, BARCODE_NO_QUIET_ZONES

type VeryBasicOptions = {
  /** The width (in pixels) of the surrounding border. */
  borderWidth?: number
  /** Scale of the symbol image. Defaults to `1.0`. */
  scale?: number
  /** The height (in pixels) of the symbology. */
  height?: number
  /** Interpret `height` as per-row rather than as overall height. */
  heightPerRow?: boolean // TODO: output_options |= HEIGHTPERROW_MODE
  /** The width (in pixels) of the whitespace, from `0` to `100`. Defaults to `0`. */
  whitespaceWidth?: number
  /** The height (in pixels) of the whitespace, from `0` to `100`. Defaults to `0`. */
  whitespaceHeight?: number
  /** 6-character (or 8-character with alpha) hexadecimal foreground color. Defaults to `#000000FF`. */
  foregroundColor?: string
  /** 6-character (or 8-character with alpha) hexadecimal background color. Defaults to `#FFFFFFFF`. */
  backgroundColor?: string
  /** Degrees of right-angle rotation (`0`, `90`, `180`, or `270`). Defaults to `0`. */
  rotation?: number
  /** Title of the rendered symbol. Only applies to vector graphics (SVG or EPS). */
  title?: string // TODO: only SVG or EPS
  /** The encoding mode applicable to this symbol. Default: `EncodingMode.DATA`. */
  encodingMode?: Exclude<EncodingMode, EncodingMode.GS1>
  /** Whether or not to process input data for escape sequences. */
  escape?: boolean // TODO: output_options |= ESCAPE_MODE
}

type OptionsWithBasicSymbologyType = {
  /** The type of symbology to use. */
  symbology: SymbologyType
}

type BasicGS1DataOptions = {
  /**
   * Whether or not to use parentheses in GS1 data instead of square brackets to delimit
   * Application Identifiers (parentheses must not otherwise occur in the data).
   */
  parentheses?: boolean // TODO: input_mode |= GS1PARENS_MODE
  /**
   * Whether or not to disable the checking of GS1 data for validity
   * (i.e., suppress checks for valid AIs and data lengths).
   * Invalid characters (e.g., control characters, extended ASCII characters) will still be checked.
   */
  disableCheck?: boolean // TODO: input_mode |= GS1NOCHECK_MODE
}

type OptionsWithGS1Data = {
  /** The type of symbology to use. */
  symbology: SymbologyType.EANX_CC |
    // SymbologyType.GS1_128_CC |
    SymbologyType.EAN128_CC |
    // SymbologyType.DBAR_OMN_CC |
    SymbologyType.RSS14_CC |
    // SymbologyType.DBAR_LTD_CC |
    SymbologyType.RSS_LTD_CC |
    // SymbologyType.DBAR_EXP_CC |
    SymbologyType.RSS_EXP_CC |
    SymbologyType.UPCA_CC |
    SymbologyType.UPCE_CC |
    // SymbologyType.DBAR_STK_CC |
    SymbologyType.RSS14STACK_CC |
    // SymbologyType.DBAR_OMNSTK_CC |
    SymbologyType.RSS14_OMNI_CC |
    // SymbologyType.DBAR_EXPSTK_CC |
    // SymbologyType.GS1_128 |
    SymbologyType.EAN14 |
    SymbologyType.NVE18 |
    // SymbologyType.DBAR_EXP |
    // SymbologyType.DBAR_EXPSTK |
    SymbologyType.CODE16K |
    SymbologyType.AZTEC |
    SymbologyType.DATAMATRIX |
    SymbologyType.CODE49 |
    SymbologyType.QRCODE |
    SymbologyType.DOTCODE |
    SymbologyType.CODEONE |
    SymbologyType.ULTRA |
    SymbologyType.RMQR
  /** The encoding mode applicable to this symbol. Default: `EncodingMode.DATA`. */
  encodingMode?: EncodingMode
  /** GS1-data-specific options. */
  gs1?: BasicGS1DataOptions
} | OptionsWithBasicSymbologyType

type OptionsWithErrorCorrection = {
  /** The type of symbology to use. */
  symbology: SymbologyType.AZTEC |
    SymbologyType.AZRUNE |
    SymbologyType.HIBC_AZTEC |
    SymbologyType.GRIDMATRIX |
    SymbologyType.HANXIN |
    SymbologyType.QRCODE |
    SymbologyType.MICROQR |
    SymbologyType.HIBC_QR |
    SymbologyType.UPNQR |
    SymbologyType.RMQR
  /** Error correction level. */
  errorCorrectionLevel?: number // option1
} | OptionsWithBasicSymbologyType

type OptionsWithHumanReadableText = ({
  /** The type of symbology to use. */
  symbology: Exclude<SymbologyType, SymbologyType.CODE16K |
    SymbologyType.CODE49 |
    SymbologyType.FLAT |
    SymbologyType.POSTNET |
    SymbologyType.FIM |
    SymbologyType.PHARMA |
    SymbologyType.PHARMA_TWO |
    // SymbologyType.CEPNET |
    SymbologyType.PDF417 |
    // SymbologyType.PDF417COMP |
    SymbologyType.AUSPOST |
    SymbologyType.AUSREPLY |
    SymbologyType.AUSROUTE |
    SymbologyType.AUSREDIRECT |
    SymbologyType.RM4SCC |
    SymbologyType.CODABLOCKF |
    SymbologyType.JAPANPOST |
    // SymbologyType.DBAR_STK |
    // SymbologyType.DBAR_OMNSTK |
    // SymbologyType.DBAR_EXPSTK |
    SymbologyType.PLANET |
    SymbologyType.MICROPDF417 |
    // SymbologyType.USPS_IMAIL |
    SymbologyType.KIX |
    SymbologyType.DAFT |
    // SymbologyType.HIBC_BLOCKF |
    // SymbologyType.MAILMARK_2D |
    // SymbologyType.MAILMARK_4S |
    // SymbologyType.DBAR_STK_CC |
    // SymbologyType.DBAR_OMNSTK_CC |
    // SymbologyType.DBAR_EXPSTK_CC
    SymbologyType.HIBC_PDF |
    SymbologyType.HIBC_MICPDF
  >
} & {
  /** Whether or not to show human-readable text on the image. */
  showHumanReadableText: true // TODO: show_hrt
  /** Human-readable text */
  text?: string // TODO: text
  /** Whether or not the human-readable text can be bold. */
  bold?: boolean // TODO: output_options |= BOLD_TEXT
  /** Whether or not the human-readable text should be rendered with a smaller font size. */
  smallFont?: boolean // TODO: output_options |= SMALL_TEXT
  /** Gap between barcode and the human-readable text (in X-dimensions). Default: `1`. */
  gapSize?: number
} | {
  /** Whether or not to show human-readable text on the image. */
  showHumanReadableText?: false
}) | OptionsWithBasicSymbologyType

type OptionsWithDots = {
  symbology: SymbologyType.QRCODE |
    SymbologyType.DATAMATRIX |
    SymbologyType.MICROQR |
    SymbologyType.HIBC_DM |
    SymbologyType.AZTEC |
    SymbologyType.HIBC_QR |
    SymbologyType.HIBC_AZTEC |
    SymbologyType.AZRUNE |
    SymbologyType.CODEONE |
    SymbologyType.GRIDMATRIX |
    SymbologyType.HANXIN |
    SymbologyType.DOTCODE |
    SymbologyType.UPNQR |
    SymbologyType.RMQR
  /**
   * Dot size (for dotty mode). Default: `0.8`.
   * Setting `dots` is not necessary if this value is provided.
   */
  dotSize?: number
  /**
   * Whether or not to render the barcode in dotty mode.
   * If a value is provided for `dotSize`, this parameter is not needed.
   */
  dotty?: boolean
} | OptionsWithBasicSymbologyType

type OptionsWithSymbolSize = {
  /** The type of symbology to use. */
  symbology: SymbologyType.AZTEC |
    SymbologyType.AZRUNE |
    SymbologyType.HIBC_AZTEC |
    SymbologyType.DATAMATRIX |
    SymbologyType.HIBC_DM |
    SymbologyType.GRIDMATRIX |
    SymbologyType.HANXIN |
    SymbologyType.QRCODE |
    SymbologyType.MICROQR |
    SymbologyType.HIBC_QR |
    SymbologyType.UPNQR |
    SymbologyType.RMQR |
    SymbologyType.ONECODE |
    SymbologyType.DOTCODE
  /** The size of the generated symbol. */
  symbolSize?: number // option2
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

type OptionsWithDataMatrix = ({
  /** The type of symbology to use. */
  symbology: SymbologyType.DATAMATRIX | SymbologyType.HIBC_DM
  /** Whether or not to use a faster (if less optimal) encoding procedure. Defaults to `false`. */
  fast?: boolean // input_mode |= FAST_MODE
  gs1?: BasicGS1DataOptions & {
    /**
     * Whether or not to encode
     * {@link http://localhost:5173/reference/two-dimensional/datamatrix.html#data-matrix-rectangular-extension-dmre GS1 Data}
     * using `GS` instead of `FNC1` as a separator.
     */
    separator?: boolean // output_options |= GS1_GS_SEPARATOR
  }
} & ({
  /**
   * Whether or not to activate
   * [DMRE (Data Matrix Rectangular Extension)](http://localhost:5173/reference/two-dimensional/datamatrix.html#data-matrix-rectangular-extension-dmre)
   * in automatic size mode.
   */
  dmre?: boolean // option3 = DM_DMRE
} | {
  /** Whether or not to force the symbol to render as a square. */
  square?: boolean // option3 = DM_SQUARE
})) | OptionsWithBasicSymbologyType

type OptionsWithMask = {
  /** The type of symbology to use. */
  symbology: SymbologyType.QRCODE |
    SymbologyType.MICROQR |
    SymbologyType.UPNQR |
    SymbologyType.DOTCODE |
    SymbologyType.HANXIN
  /**
   * The symbol mask to use.
   * For QR codes, this is any integer between 0 and 7.
   * For DotCode or Han Xin, this is any integer between 0 and 3.
   */
  mask?: number // option3
} | OptionsWithBasicSymbologyType

type OptionsWithFullMultibyte = {
  /** The type of symbology to use. */
  symbology: SymbologyType.QRCODE |
    SymbologyType.MICROQR |
    SymbologyType.RMQR |
    SymbologyType.HANXIN |
    SymbologyType.GRIDMATRIX
  /**
   * Whether or not to encode full multibyte characters.
   * See {@link http://localhost:5173/docs/advanced.html#full-multibyte Full Multibyte}
   * for more information.
   */
  fullMultibyte?: boolean // option3 = ZINT_FULL_MULTIBYTE
  // TODO: if (QRCODE or HIBC_QR or HANXIN) and fullMultibyte is true and mask >= 0, then option3 = ZINT_FULL_MULTIBYTE | (mask + 1) << 8
} | OptionsWithBasicSymbologyType

type OptionsWithMaxicode = {
  /** The type of symbology to use. */
  symbology: SymbologyType.MAXICODE
  /** The {@link http://localhost:5173/reference/two-dimensional/maxicode.html#modes-2-and-3 MaxiCode} mode to use. */
  mode?: 2 | 3 | 4 | 5 | 6 // option1
} | OptionsWithBasicSymbologyType

type OptionsWithCheckDigitWithoutShowOption = { // all map to option2, unless stated otherwise
  /** The type of symbology to use. */
  symbology: SymbologyType.C25MATRIX |
    SymbologyType.C25IND |
    SymbologyType.C25INTER |
    SymbologyType.C25LOGIC |
    SymbologyType.CODABAR |
    SymbologyType.CODE11 | // option2 = 0 (no check digits) maps to option2 = 2
    SymbologyType.CODE39 |
    SymbologyType.EXCODE39 |
    SymbologyType.CODE93 |
    SymbologyType.LOGMARS
  /** Number of check digit(s) to incorporate. */
  checkDigit?: number
} | OptionsWithBasicSymbologyType

type OptionsWithCheckDigitWithShowOption = {
  /** The type of symbology to use. */
  // TODO: the following map to (option2 = 2, to hide it) if showCheckDigit is false AND checkDigit > 0
  symbology: SymbologyType.CODABAR |
    SymbologyType.C25IND |
    SymbologyType.C25INTER |
    SymbologyType.C25LOGIC |
    SymbologyType.CODABAR |
  // TODO: the following map to (option2 = checkDigit + 10, to hide it) if showCheckDigit is false AND checkDigit > 0
    SymbologyType.MSI_PLESSEY |
  // TODO: the following map to (option2 = 1, to show it) if showCheckDigit is false AND checkDigit > 0
    SymbologyType.MSI_PLESSEY
  /** Number of check digit(s) to incorporate. */
  checkDigit: number
  /** Whether or not to show the check digit(s) in the human-readable text. */
  showCheckDigit?: boolean
} | OptionsWithBasicSymbologyType

type OptionsWithOnlyShowOption = {
  /** The type of symbology to use. */
  symbology: SymbologyType.CODE93
  /** Whether or not to show the check digit(s) in the human-readable text. */
  // TODO: the following map to (option2 = 1, to show it) if showCheckDigit is true
  showCheckDigit?: boolean
} | OptionsWithBasicSymbologyType

type OptionsWithUPCGap = {
  /** The type of symbology to use. */
  symbology: SymbologyType.UPCA |
    SymbologyType.UPCA_CHK |
    SymbologyType.UPCA_CHK
  /** Gap between barcode and human-readable text in X-dimensions. Default: `9`. */
  addonGap?: number // option2
  /** Height in X-dimensions that EAN/UPC guard bars descend. Default `5`. */
  guardDescentHeight?: number // guard_descent
} | OptionsWithBasicSymbologyType

type OptionsWithPrefix = {
  /** The type of symbology to use. */
  symbology: SymbologyType.VIN
  /** Whether or not to provide a prefix corresponding to this Symbol type. */
  importPrefix?: boolean // option2 = 1
} | OptionsWithBasicSymbologyType

type OptionsWithChannels = {
  /** The type of symbology to use. */
  symbology: SymbologyType.CHANNEL
  /** The channel to use. */
  channels: number // option2
} | OptionsWithBasicSymbologyType

type AllOptions = VeryBasicOptions &
  OptionsWithHumanReadableText &
  OptionsWithChannels &
  OptionsWithErrorCorrection &
  OptionsWithSymbolSize &
  OptionsWithDataMatrix &
  OptionsWithDots &
  OptionsWithGS1Data &
  OptionsWithMask &
  OptionsWithFullMultibyte &
  OptionsWithEci &
  OptionsWithMaxicode &
  OptionsWithCheckDigitWithoutShowOption &
  OptionsWithCheckDigitWithShowOption &
  OptionsWithOnlyShowOption &
  OptionsWithUPCGap &
  OptionsWithPrefix

// const options: AllOptions = {
//   symbology: SymbologyType.AZRUNE,
//   symbolSize: 30,
//   errorCorrectionLevel: 1,
//   showHumanReadableText: true,
//   bold: true
// }

const sample: AllOptions = {
  // checkDigit: 1,
  symbology: SymbologyType.C25INTER,
  showCheckDigit: true
}

console.log(sample)
