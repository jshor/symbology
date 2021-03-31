import EncodingMode from './enums/EncodingMode'
import OutputOption from './enums/OutputOption'
import SymbologyType from './enums/SymbologyType'

/**
 * Represents configuration options for a symbology.
 */
type SymbologyConfig = {
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
  /** 6-digit (or 8-digit with alpha) hexadecimal foreground color. */
  foregroundColor?: string
  /** 6-digit (or 8-digit with alpha) hexadecimal background color. */
  backgroundColor?: string
  /** File path (if saving image to file system). */
  fileName?: string
  /** Scale of the symbol image. */
  scale?: number
  /** Symbology-specific option value. */
  option1?: number
  /** Symbology-specific option value. */
  option2?: number
  /** Symbology-specific option value. */
  option3?: number
  /** Human-readable text */
  text?: string
  /** Whether or not to show human-readable text on the image. */
  showHumanReadableText?: boolean
  /** Encoding mode. */
  encoding?: EncodingMode
  /** Extended Channel Interpretation. */
  eci?: number
  /** Primary text (if differs from secondary text). */
  primary?: string
  /** Degrees of right-angle rotation (0, 90, 180, or 270). */
  rotation?: number
  /** Dot size (for dotty mode). */
  dotSize?: number
}

export default SymbologyConfig
