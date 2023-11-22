import { EncodingMode } from '../enums/EncodingMode'
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
export type BasicOptions = {
  /** The symbology type. */
  symbology: SymbologyType
  /** The height (in pixels) of the symbology. */
  height?: number
  /** Scale of the symbol image. Defaults to `1.0`. */
  scale?: number
  /** The width (in pixels) of the whitespace. */
  whitespaceWidth?: number
  /** The height (in pixels) of the whitespace. */
  whitespaceHeight?: number
  /** The width (in pixels) of the surrounding border. */
  borderWidth?: number
  /** 6-digit (or 8-digit with alpha) hexadecimal foreground color. */
  foregroundColor?: string
  /** 6-digit (or 8-digit with alpha) hexadecimal background color. */
  backgroundColor?: string
  /** The type of image to render. */
  renderType: RenderType
  /** Symbology-specific option value. */
  option1?: number
  /** Symbology-specific option value. */
  option2?: number
  /** Symbology-specific option value. */
  option3?: number
  /** Whether or not to show human-readable text on the image. */
  showHumanReadableText?: boolean
  eci?: number // TODO
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
  /** Title of the rendered symbol. */
  title?: string
  /** Input options. */
  inputMode?: number
  /** Output options. */
  outputOptions?: number
  /** Whether or not to use CMYK color space for Encapsulated PostScript (PS) renders. */
  cymkColor?: boolean
  /** Name of the file to generate. If omitted, the generated result will contain streaming data. */
  fileName?: string
}


export enum RenderType {
  PNG,
  SVG,
  EPS
}

export enum QuietZoneMode {
  /** Use default quiet zones (if any). */
  DEFAULT,
  /** Disable quiet zones (if any). */
  NONE,
  /** Add compliant quiet zones (in additional to any specified whitespace). */
  COMPLIANT
}

// TODO: add support for output_options:
// BARCODE_BIND, COMPLIANT_HEIGHT

type VeryBasicOptions = {
  /** The width (in pixels) of the surrounding border. */
  borderWidth?: number
  /** Scale of the symbol image. Defaults to `1.0`. */
  scale?: number
  /** The height (in pixels) of the symbology. */
  height?: number
  /** Interpret `height` as per-row rather than as overall height. */
  heightPerRow?: boolean
  /** The width (in pixels) of the whitespace, from `0` to `100`. Defaults to `0`. */
  whitespaceWidth?: number
  /** The height (in pixels) of the whitespace, from `0` to `100`. Defaults to `0`. */
  whitespaceHeight?: number
  /** 6-character (or 8-character with alpha) hexadecimal foreground color. Defaults to `#000000FF`. */
  foregroundColor?: string
  /** 6-character (or 8-character with alpha) hexadecimal background color. Defaults to `#FFFFFFFF`. */
  backgroundColor?: string
  /** Primary text (if differs from secondary text). */
  primary?: string
  /** Degrees of right-angle rotation (`0`, `90`, `180`, or `270`). Defaults to `0`. */
  rotation?: number
  /** Title of the rendered symbol. Only applies to vector graphics (SVG or EPS). */
  title?: string // TODO: only SVG or EPS
  /** The encoding mode applicable to this symbol. Default: `EncodingMode.DATA`. */
  encodingMode?: Exclude<EncodingMode, EncodingMode.GS1>
  /** Whether or not to process input data for escape sequences. */
  escape?: boolean
  /** Whether or not to render a box surrounding the symbol and its whitespace. */
  box?: boolean
  /**
   * Quiet zone control.
   *
   * See {@link https://TODO | Quiet Zones}.
   */
  quietZoneMode?: QuietZoneMode
  /** The type of image to render. */
  renderType: RenderType
  /** Whether or not to use CMYK color space for Encapsulated PostScript (PS) renders. */
  cymkColor?: boolean
  /** Name of the file to generate. If omitted, the generated result will contain streaming data. */
  fileName?: string
}

type OptionsWithBasicSymbologyType = {
  /** The type of symbology to use. */
  symbology: SymbologyType
}


/** Two-dimensional symbols */


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
  errorCorrectionLevel?: number
} | OptionsWithBasicSymbologyType

type OptionsWithHumanReadableText = {
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
  humanReadableText?: {
    /** Whether or not to show human-readable text on the image. */
    visible?: boolean
    /** Whether or not the human-readable text should be bold. */
    bold?: boolean
    /** Whether or not the human-readable text should be rendered with a smaller font size. */
    smallFont?: boolean
    /** Gap between barcode and the human-readable text (in X-dimensions). Default: `1`. */
    gapSize?: number
  }
} | OptionsWithBasicSymbologyType

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
  dotty?: boolean // TODO: output_options |= DOTTY_MODE
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
    SymbologyType.CODEONE |
    SymbologyType.DOTCODE
  /** The size of the generated symbol. */
  symbolSize?: number
} | OptionsWithBasicSymbologyType

type OptionsWithEci = {
  /** The type of symbology to use. */
  symbology: SymbologyType.AZTEC |
    SymbologyType.CODEONE |
    SymbologyType.DATAMATRIX |
    SymbologyType.DOTCODE |
    SymbologyType.GRIDMATRIX |
    SymbologyType.HANXIN |
    SymbologyType.MAXICODE |
    SymbologyType.MICROPDF417 |
    SymbologyType.PDF417 |
    SymbologyType.QRCODE |
    SymbologyType.RMQR |
    SymbologyType.ULTRA
  /** Extended Channel Interpretation. */
  eci?: number
} | OptionsWithBasicSymbologyType

type OptionsForDataMatrix = ({
  /** The type of symbology to use. */
  symbology: SymbologyType.DATAMATRIX | SymbologyType.HIBC_DM
  /** Whether or not to use a faster (if less optimal) encoding procedure. Defaults to `false`. */
  fast?: boolean
  gs1?: BasicGS1DataOptions & {
    /**
     * Whether or not to encode
     * {@link http://localhost:5173/reference/two-dimensional/datamatrix.html#data-matrix-rectangular-extension-dmre GS1 Data}
     * using `GS` instead of `FNC1` as a separator.
     */
    separator?: boolean
  }
} & ({
  /**
   * Whether or not to activate
   * [DMRE (Data Matrix Rectangular Extension)](http://localhost:5173/reference/two-dimensional/datamatrix.html#data-matrix-rectangular-extension-dmre)
   * in automatic size mode.
   */
  dmre?: boolean
} | {
  /** Whether or not to force the symbol to render as a square. */
  square?: boolean
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
  fullMultibyte?: boolean
} | OptionsWithBasicSymbologyType

type OptionsForMaxicode = {
  /** The type of symbology to use. */
  symbology: SymbologyType.MAXICODE
  /** The {@link http://localhost:5173/reference/two-dimensional/maxicode.html#modes-2-and-3 MaxiCode} mode to use. */
  mode?: 2 | 3 | 4 | 5 | 6
} | OptionsWithBasicSymbologyType



/** One-dimensional symbols */


type OptionsWithCheckDigitWithoutShowOption = {
  /** The type of symbology to use. */
  symbology: SymbologyType.C25IATA |
    SymbologyType.C25IND |
    SymbologyType.C25INTER |
    SymbologyType.C25LOGIC |
    SymbologyType.C25MATRIX |
    SymbologyType.CODABAR |
    SymbologyType.CODE11 |
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
    SymbologyType.C25IATA |
    SymbologyType.C25IND |
    SymbologyType.C25INTER |
    SymbologyType.C25LOGIC |
    SymbologyType.C25MATRIX |
    SymbologyType.CODABAR |
  // TODO: the following map to (option2 = checkDigit + 10, to hide it) if showCheckDigit is false AND checkDigit > 0
    SymbologyType.MSI_PLESSEY |
  // TODO: the following map to (option2 = 1, to show it) if showCheckDigit is true AND checkDigit > 0
    SymbologyType.CODABAR
  /** Number of check digit(s) to incorporate. */
  checkDigit: number
  /** Whether or not to show the check digit(s) in the human-readable text. */
  showCheckDigit?: boolean
} | OptionsWithBasicSymbologyType

type OptionsForCode93 = {
  /** The type of symbology to use. */
  symbology: SymbologyType.CODE93
  /** Whether or not to show the check digit(s) in the human-readable text. */
  // TODO: the following map to (option2 = 1, to show it) if showCheckDigit is true
  showCheckDigit?: boolean
} | OptionsWithBasicSymbologyType

type OptionsForUPC = {
  /** The type of symbology to use. */
  symbology: SymbologyType.UPCA |
    SymbologyType.UPCA_CHK |
    SymbologyType.UPCA_CHK
  /** Gap between barcode and human-readable text in X-dimensions. Default: `9`. */
  addonGap?: number
  /** Height in X-dimensions that EAN/UPC guard bars descend. Default `5`. */
  guardDescentHeight?: number
} | OptionsWithBasicSymbologyType

type OptionsForVIN = {
  /** The type of symbology to use. */
  symbology: SymbologyType.VIN
  /** Whether or not to provide a prefix corresponding to this Symbol type. */
  importPrefix?: boolean
} | OptionsWithBasicSymbologyType

type OptionsForChannelCode = {
  /** The type of symbology to use. */
  symbology: SymbologyType.CHANNEL
  /** The channel to use. */
  channels: number
} | OptionsWithBasicSymbologyType




/** GS1 symbols */

export type BasicGS1DataOptions = {
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


type OneDimensionalOptions = VeryBasicOptions &
  OptionsWithGS1Data &
  OptionsWithCheckDigitWithoutShowOption &
  OptionsWithCheckDigitWithShowOption &
  OptionsWithHumanReadableText & (
    OptionsForChannelCode |
    OptionsForVIN |
    OptionsForCode93 |
    OptionsForUPC
  )

type TwoDimensionalOptions = VeryBasicOptions &
  OptionsWithGS1Data &
  OptionsWithErrorCorrection &
  OptionsWithSymbolSize &
  OptionsWithDots &
  OptionsWithMask &
  OptionsWithFullMultibyte &
  OptionsWithEci & (
    OptionsForDataMatrix |
    OptionsForMaxicode
  )

export type SymbologyOptions = VeryBasicOptions & (
  OneDimensionalOptions |
  TwoDimensionalOptions
)
