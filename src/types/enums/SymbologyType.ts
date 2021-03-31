enum SymbologyType {
  /** Code 11 */
  CODE11 = 1,
  /** Standard Code 2 of 5 */
  C25MATRIX = 2,
  /** Interleaved 2 of 5 */
  C25INTER = 3,
  /** Channel Code */
  CHANNEL = 140,
  /** Codabar */
  CODABAR = 18,
  /** Code 128 (automatic subset switching) */
  CODE128 = 20,
  /** Code 128 (subset B) */
  CODE128B = 60,
  /** Code 2 of 5 IATA */
  C25IATA = 4,
  /** Code 2 of 5 Data Logic */
  C25LOGIC = 6,
  /** Code 2 of 5 Industrial */
  C25IND = 7,
  /** Code 3 of 9 (Code 39) */
  CODE39 = 8,
  /** Code 32 */
  CODE32 = 129,
  /** Code 93 */
  CODE93 = 25,
  /** Deutshe Post Leitcode */
  DPLEIT = 21,
  /** Deutshe Post Identcode */
  DPIDENT = 22,
  /** EAN */
  EANX = 13,
  /** EAN + Check Digit */
  EANX_CHK = 14,
  /** EAN-14 */
  EAN14 = 72,
  /** Extended Code 3 of 9 (Code 39+) */
  EXCODE39 = 9,
  /** GS1-128 (UCC/EAN-128) */
  EAN128 = 16,
  /** GS1 DataBar-14 */
  RSS14 = 29,
  /** GS1 DataBar Expanded */
  RSS_EXP = 31,
  /** GS1 DataBar Limited */
  RSS_LTD = 30,
  /** HIBC Code 128 */
  HIBC_128 = 98,
  /** HIBC Code 39 */
  HIBC_39 = 99,
  /** ISBN (EAN-13 with verification stage) */
  ISBNX = 69,
  /** ITF-14 */
  ITF14 = 89,
  /** Korea Post */
  KOREAPOST = 77,
  /** LOGMARS */
  LOGMARS = 50,
  /** MSI Plessey */
  MSI_PLESSEY = 47,
  /** NVE-18 */
  NVE18 = 75,
  /** Pharmacode One-Track */
  PHARMA = 51,
  /** Plessey Code */
  PLESSEY = 86,
  /** PZN */
  PZN = 52,
  /** Telepen Alpha */
  TELEPEN = 32,
  /** Telepen Numeric */
  TELEPEN_NUM = 87,
  /** UPC A */
  UPCA = 34,
  /** UPC A + Check Digit */
  UPCA_CHK = 35,
  /** UPC E */
  UPCE = 37,
  /** UPC E + Check Digit */
  UPCE_CHK = 38,
  /** Ultracode */
  ULTRA = 144,
  /** UPNQR (Univerzalni Plačilni Nalog QR) */
  UPNQR = 143,
  /** Vehicle Identification Number (United States) */
  VIN = 73,
  /** Aztec Code */
  AZTEC = 92,
  /** Aztec Runes */
  AZRUNE = 128,
  /** Code One */
  CODEONE = 141,
  /** Data Matrix ECC200 */
  DATAMATRIX = 71,
  /** DotCode */
  DOTCODE = 115,
  /** Grid Matrix */
  GRIDMATRIX = 142,
  /** Han Xin (Chinese Sensible) Code */
  HANXIN = 116,
  /** HIBC Aztec Code */
  HIBC_AZTEC = 112,
  /** Micro QR Code */
  MICROQR = 97,
  /** HIBC Data Matrix ECC200 */
  HIBC_DM = 102,
  /** HIBC QR Code */
  HIBC_QR = 104,
  /** Maxicode */
  MAXICODE = 57,
  /** QR Code */
  QRCODE = 58,
  /** Australia Post Redirection */
  AUSREDIRECT = 68,
  /** Australia Post Reply Paid */
  AUSREPLY = 66,
  /** Australia Post Routing */
  AUSROUTE = 67,
  /** Australia Post Standard Customer */
  AUSPOST = 63,
  /** Dutch Post KIX Code */
  KIX = 90,
  /** Japanese Postal Code */
  JAPANPOST = 76,
  /** Pharmacode Two-Track */
  PHARMA_TWO = 53,
  /** PLANET */
  PLANET = 82,
  /** PostNet */
  POSTNET = 40,
  /** Royal Mail 4-State (RM4SCC) */
  RM4SCC = 70,
  /** Royal Mail 4-State Mailmark */
  MAILMARK = 121,
  /** USPS OneCode */
  ONECODE = 85,
  /** Codablock-F */
  CODABLOCKF = 74,
  /** Code 16K */
  CODE16K = 23,
  /** Code 49 */
  CODE49 = 24,
  /** GS1 DataBar-14 Stacked */
  RSS14STACK = 79,
  /** GS1 DataBar-14 Stacked Omnidirectional */
  RSS14STACK_OMNI = 80,
  /** GS1 DataBar Expanded Stacked */
  RSS_EXPSTACK = 81,
  /** HIBC PDF417 */
  HIBC_PDF = 106,
  /** HIBC MicroPDF417 */
  HIBC_MICPDF = 108,
  /** PDF417 */
  PDF417 = 55,
  /** PDF417 Truncated */
  PDF417TRUNC = 56,
  /** MicroPDF417 */
  MICROPDF417 = 84,
  /** Composite symbol with EAN linear component */
  EANX_CC = 130,
  /** Composite symbol with GS1-128 linear component */
  EAN128_CC = 131,
  /** Composite symbol with GS1 DataBar Limited component */
  RSS_LTD_CC = 133,
  /** Composite symbol with GS1 DataBar Extended component */
  RSS_EXP_CC = 134,
  /** Composite symbol with GS1 DataBar-14 Linear component */
  RSS14_CC = 132,
  /** Composite symbol with GS1 DataBar-14 Stacked component */
  RSS14STACK_CC = 137,
  /** Composite symbol with GS1 DataBar-14 Stacked Omnidirectional component */
  RSS14_OMNI_CC = 138,
  /** Composite symbol with GS1 DataBar Expanded Stacked component */
  RSS_EXPSTACK_CC = 139,
  /** Composite symbol with UPC A linear component */
  UPCA_CC = 135,
  /** Composite symbol with UPC E linear component */
  UPCE_CC = 136,
  /** DAFT Code */
  DAFT = 93,
  /** FIM */
  FIM = 49,
  /** Flattermarken */
  FLAT = 28
}

export default SymbologyType
