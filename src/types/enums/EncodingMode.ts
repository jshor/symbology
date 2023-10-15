enum EncodingMode {
  /** Uses full ASCII range interpreted as Latin-1 or binary data. **/
  DATA_MODE = 0,
  /** Uses pre-formatted UTF-8 input. */
  UNICODE_MODE = 1,
  /** Encodes GS1 data using FNC1 characters. */
  GS1_MODE = 2,
  /** Processes input data for escape sequences. */
  ESCAPE_MODE = 8,
  /** Processes parentheses as GS1 AI delimiters (instead of square brackets). */
  GS1PARENS_MODE = 16,
  /** Does not check validity of GS1 data (except that printable ASCII only). */
  GS1NOCHECK_MODE = 32,
  /** Interprets `height` as per-row rather than as overall height. */
  HEIGHTPERROW_MODE = 64,
  /** Uses faster (if less optimal) encoding or other shortcuts if available. */
  FAST_MODE = 128,
  /** Processes special symbology-specific escape sequences. Currently only supports Code 128. */
  EXTRA_ESCAPE_MODE = 256
}

export default EncodingMode
