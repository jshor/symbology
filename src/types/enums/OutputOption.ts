enum OutputOption {
  /** No options selected. (default) */
  BARCODE_NO_ASCII = 1,
  /** Boundary bars above and below the symbol and between rows if stacking. */
  BARCODE_BIND = 2,
  /** Add a box surrounding the symbol and whitespace. */
  BARCODE_BOX = 4,
  /** Add a reader initialisation symbol to the data before encoding. */
  READER_INIT = 16,
  /** Use a smaller font for the human readable text. */
  SMALL_TEXT = 32,
  /** Embolden the human readable text. */
  BOLD_TEXT = 64,
  /** Select the CMYK colour space option for encapsulated PostScript files. */
  CMYK_COLOUR = 128,
  /** Plot a matrix symbol using dots rather than squares. */
  BARCODE_DOTTY_MODE = 256,
  /** Use GS instead FNC1 as GS1 separator. */
  GS1_GS_SEPARATOR = 512
}

export default OutputOption
