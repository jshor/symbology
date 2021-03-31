enum EncodingMode {
  /** Uses full ASCII range interpreted as Latin-1 or binary data. **/
  DATA_MODE = 0,
  /** Uses pre-formatted UTF-8 input. */
  UNICODE_MODE = 1,
  /** Encodes GS1 data using FNC1 characters. */
  GS1_MODE = 2,
  /** Process input data for escape sequences. */
  ESCAPE_MODE = 8
}

export default EncodingMode
