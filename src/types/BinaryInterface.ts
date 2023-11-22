import { BinResult } from "./BinResult"
import SymbologyType from "./enums/SymbologyType"

export type BinaryInterface = {

  createStream: (
    /** Input data to encode into the symbol. */
    input: string,
    /** The symbology type. */
    symbology: SymbologyType,
    /** The height (in pixels) of the symbology. */
    height: number,
    /** The width (in pixels) of the whitespace. */
    whitespaceWidth: number,
    /** The height (in pixels) of the whitespace. */
    whitespaceHeight: number,
    /** The width (in pixels) of the surrounding border. */
    borderWidth: number,
    /** Output options. */
    outputOptions: number,
    /** 6-digit (or 8-digit with alpha) hexadecimal background color. */
    backgroundColor: string,
    /** 6-digit (or 8-digit with alpha) hexadecimal foreground color. */
    foregroundColor: string,
    /** Name of the file to generate. If omitted, the generated result will contain streaming data. */
    fileName: string,
    /** Scale of the symbol image. Defaults to `1.0`. */
    scale: number,
    /** Symbology-specific option value. */
    option1: number,
    /** Symbology-specific option value. */
    option2: number,
    /** Symbology-specific option value. */
    option3: number,
    /** Whether or not to show human-readable text on the image. */
    showHumanReadableText: number,
    _: any, // TODO: dead code
    /** Input options. */
    inputMode: number,
    eci: number, // TODO
    /** Primary text (if differs from secondary text). */
    primary: string,
    /** Degrees of right-angle rotation (`0`, `90`, `180`, or `270`). Defaults to `0`. */
    rotation: number,
    /** Dot size (for dotty mode). */
    dotSize: number,
    /** Gap between barcode and text (HRT) in X-dimensions. Default: `1`. */
    gapSize: number,
    /** Height in X-dimensions that EAN/UPC guard bars descend. Default `5`. */
    guardDescentHeight: number
  ) => BinResult
}