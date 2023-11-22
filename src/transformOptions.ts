import SymbologyType from "./types/enums/SymbologyType"
import { BasicGS1DataOptions, BasicOptions, QuietZoneMode, RenderType, SymbologyOptions } from "./types/options/BasicOptions"


enum OutputOption {
  /* Boundary bars above & below the symbol and between stacked symbols */
  BARCODE_BIND = 0x00002, // TODO: only applicable for stacked symbols
  /* Box around symbol */
  BARCODE_BOX = 0x00004,
  /** Whether or not to redirect output. */
  BARCODE_STDOUT = 0x00008,
  /**
   * Whether or not to encode
   * {@link http://localhost:5173/reference/two-dimensional/datamatrix.html#data-matrix-rectangular-extension-dmre GS1 Data}
   * using `GS` instead of `FNC1` as a separator.
   */
  GS1_GS_SEPARATOR = 0x00200,
  /** Whether or not the human-readable text should be rendered with a smaller font size. */
  SMALL_TEXT = 0x00020,
  /** Whether or not the human-readable text can be bold. */
  BOLD_TEXT = 0x00040,
  /** Use the CMYK colour space option for Encapsulated PostScript (PS) renders. */
  CMYK_COLOUR = 0x00080,
  /* Plot a matrix symbol using dots rather than squares. */
  BARCODE_DOTTY_MODE = 0x00100,
  /**
   * Add compliant quiet zones (additional to any specified whitespace).
   * Note: CODE16K, CODE49, CODABLOCKF, ITF14, EAN/UPC have default quiet zones
   */
  BARCODE_QUIET_ZONES = 0x00800,
   /* Disable quiet zones, notably those with defaults as listed above */
  BARCODE_NO_QUIET_ZONES = 0x01000,
  /* Warn if height not compliant, or use standard height (if any) as default */
  COMPLIANT_HEIGHT = 0x02000, // TODO: not yet implemented
  /** Whether or not to write the barcode to memory. */
  BARCODE_MEMORY_FILE = 0x10000
}

export enum InputOption {
  /** Whether or not to process input data for escape sequences. */
  ESCAPE_MODE = 0x0008,
  /**
   * Whether or not to use parentheses in GS1 data instead of square brackets to delimit
   * Application Identifiers (parentheses must not otherwise occur in the data).
   */
  GS1PARENS_MODE = 0x0008,
  /**
   * Whether or not to disable the checking of GS1 data for validity
   * (i.e., suppress checks for valid AIs and data lengths).
   * Invalid characters (e.g., control characters, extended ASCII characters) will still be checked.
   */
  GS1NOCHECK_MODE = 0x0010,
  /** Interpret height as per-row rather than as overall height. */
  HEIGHTPERROW_MODE = 0x0020,
   /** Whether or not to use a faster (if less optimal) encoding procedure. Defaults to `false`. */
  FAST_MODE = 0x0040
}

enum DataMatrixMode {
  DM_DMRE = 100,
  DM_SQUARE = 101,
}

export function transformOptions (options: SymbologyOptions): BasicOptions {
  return {
    symbology: options.symbology,
    borderWidth: options.borderWidth,
    scale: options.scale,
    height: options.height,
    whitespaceWidth: options.whitespaceWidth,
    whitespaceHeight: options.whitespaceHeight,
    foregroundColor: options.foregroundColor,
    backgroundColor: options.backgroundColor,
    rotation: options.rotation,
    title: options.title,
    renderType: options.renderType,
    primary: options.primary,
    guardDescentHeight: getGuardDescentHeight(options),
    option1: getOption1(options),
    option2: getOption2(options),
    option3: getOption3(options),
    showHumanReadableText: getHumanReadableTextVisibility(options),
    outputOptions: getOutputOptions(options),
    inputMode: getInputMode(options),
    gapSize: getGapSize(options),
    dotSize: getDotSize(options),
    eci: getEci(options)
  }
}

function getEci (options: SymbologyOptions) {
  if ('eci' in options) {
    return options.eci
  }
}

function getDotSize (options: SymbologyOptions) {
  if ('dotSize' in options) {
    return options.dotSize
  }
}

function getOutputOptions (options: SymbologyOptions) {
  let outputOptions = OutputOption.BARCODE_MEMORY_FILE

  outputOptions |= OutputOption.BARCODE_STDOUT

  if (options.box) {
    outputOptions |= OutputOption.BARCODE_BOX
  }

  if ('humanReadableText' in options) {
    if (options.humanReadableText?.smallFont) {
      outputOptions |= OutputOption.SMALL_TEXT
    }

    if (options.humanReadableText?.bold) {
      outputOptions |= OutputOption.BOLD_TEXT
    }
  }

  if ('cymkColor' in options && options.cymkColor) {
    outputOptions |= OutputOption.CMYK_COLOUR
  }

  if ('dotty' in options && options.dotty) {
    outputOptions |= OutputOption.BARCODE_DOTTY_MODE
  }

  if ('gs1' in options && options.gs1) {
    outputOptions |= getGS1OutputOptions(options.gs1)
  }

  if ('quietZoneMode' in options && options.quietZoneMode) {
    outputOptions |= getQuietZoneOutputOption(options.quietZoneMode)
  }

  return outputOptions
}

function getQuietZoneOutputOption (quietZoneMode: QuietZoneMode) {
  switch (quietZoneMode) {
    case QuietZoneMode.COMPLIANT:
      return OutputOption.BARCODE_QUIET_ZONES
    case QuietZoneMode.NONE:
      return OutputOption.BARCODE_NO_QUIET_ZONES
    default:
      return 0
  }
}

function getInputMode (options: SymbologyOptions) {
  let inputMode = options.encodingMode || 0

  if ('escape' in options && options.escape) {
    inputMode |= InputOption.ESCAPE_MODE
  }

  if ('gs1' in options && options.gs1) {
    inputMode |= getGS1InputMode(options.gs1)
  }

  if ('heightPerRow' in options && options.heightPerRow) {
    inputMode |= InputOption.HEIGHTPERROW_MODE
  }

  if ('fast' in options && options.fast) {
    inputMode |= InputOption.FAST_MODE
  }

  return inputMode
}

function getGS1OutputOptions (gs1: BasicGS1DataOptions) {
  let outputOptions = 0

  if ('separator' in gs1 && gs1.separator) {
    outputOptions |= OutputOption.GS1_GS_SEPARATOR
  }

  return outputOptions
}

function getGS1InputMode (gs1: BasicGS1DataOptions) {
  let inputMode = 0

  if (gs1.parentheses) {
    inputMode |= InputOption.GS1PARENS_MODE
  }

  if (gs1.disableCheck) {
    inputMode |= InputOption.GS1NOCHECK_MODE
  }

  return inputMode
}

function getOption1 (options: SymbologyOptions) {
  if ('errorCorrectionLevel' in options && options.errorCorrectionLevel) {
    return options.errorCorrectionLevel
  }

  if ('mode' in options && options.mode) {
    return options.mode
  }
}

function getOption2 (options: SymbologyOptions) {
  if ('symbolSize' in options && options.symbolSize) {
    return options.symbolSize
  }

  if ('addonGap' in options) {
    return options.addonGap
  }

  if ('checkDigit' in options) {
    return getCheckDigit(options)
  }

  if ('channels' in options && options.channels) {
    return options.channels
  }

  if ('importPrefix' in options && options.importPrefix) {
    return 1
  }
}

function getOption3 (options: SymbologyOptions) {
  if ('dmre' in options && options.dmre) {
    return DataMatrixMode.DM_DMRE
  }

  if ('square' in options && options.square) {
    return DataMatrixMode.DM_SQUARE
  }

  if ('mask' in options && options.mask) {
    return options.mask
  }

  if ('fullMultibyte' in options && options.fullMultibyte) {
    return getFullMultibyte(options)
  }
}

function getHumanReadableTextVisibility (options: SymbologyOptions) {
  if ('humanReadableText' in options) {
    return options.humanReadableText?.visible === false ? false : true
  }
  return true
}

function getGapSize (options: SymbologyOptions) {
  if ('humanReadableText' in options) {
    return options.humanReadableText?.gapSize || 0
  }
}

function getFullMultibyte (options: SymbologyOptions) {
  const fullMultibyte = 200
  const isComputed = [
    SymbologyType.QRCODE,
    SymbologyType.HIBC_QR,
    SymbologyType.HANXIN
  ].some(type => type === options.symbology)
  const mask = ('mask' in options && options.mask) || 0

  if (isComputed && mask) {
    return fullMultibyte | (mask + 1) << 8
  }

  return fullMultibyte
}

function getCheckDigit (options: SymbologyOptions) {
  switch (options.symbology) {
    case SymbologyType.CODE39:
    case SymbologyType.EXCODE39:
    case SymbologyType.LOGMARS:
      return getSingleCheckDigit(options)
    case SymbologyType.CODE11:
      return getCode11CheckDigit(options)
    case SymbologyType.MSI_PLESSEY:
      return getMsiPlessyCheckDigit(options)
    case SymbologyType.C25IATA:
    case SymbologyType.C25IND:
    case SymbologyType.C25LOGIC:
    case SymbologyType.C25MATRIX:
    case SymbologyType.C25INTER:
      return getTwoOfFiveCheckDigit(options)
    default:
      return 0 // no check digit
  }
}

function getSingleCheckDigit (options: SymbologyOptions) {
  if ('checkDigit' in options && options.checkDigit === 1) {
    return 1
  }

  return 0
}

function getCode11CheckDigit (options: SymbologyOptions) {
  if ('checkDigit' in options) {
    if (options.symbology === SymbologyType.CODE11) {
      return options.checkDigit === 1
        ? options.checkDigit
        : 2 // 2 = no check digit
    }
  }

  return 0 // no check digit
}

function getMsiPlessyCheckDigit (options: SymbologyOptions) {
  if ('checkDigit' in options && options.checkDigit) {
    if ('showCheckDigit' in options && options.showCheckDigit === false) {
      return options.checkDigit + 10 // add 10 to hide check digit in HRT
    }

    return options.checkDigit
  }

  return 0 // no check digit
}

function getTwoOfFiveCheckDigit (options: SymbologyOptions) {
  if ('checkDigit' in options) {
    if (options.checkDigit === 1) {
      if ('showCheckDigit' in options && options.showCheckDigit === false) {
        return 2 // 2 = include a check digit, but hide it in HRT
      }

      return 1 // include 1 check digit, shown in human readable text
    }
  }

  return 0 // no check digit
}

function getGuardDescentHeight(options: SymbologyOptions) {
  if ('guardDescentHeight' in options && options.guardDescentHeight) {
    return options.guardDescentHeight
  }
}
