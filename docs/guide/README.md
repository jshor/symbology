# Symbology Reference

Each symbology type values can be represented using an enumerated type. The types are stored in the `Barcode` member of the library. To use these, use `{library reference}.Barcode.{type}`.

## Example Usage

```js
const symbology = require('symbology')
const type = symbology.Barcode.CODE11
```

## Supported Barcode Types

| Numeric Value | Name            | Barcode Name                                                 |
|---------------|-----------------|--------------------------------------------------------------|
| 1             | CODE11          | Code 11                                                      |
| 2             | C25MATRIX       | Standard Code 2 of 5                                         |
| 3             | C25INTER        | Interleaved 2 of 5                                           |
| 4             | C25IATA         | Code 2 of 5 IATA                                             |
| 6             | C25LOGIC        | Code 2 of 5 Data Logic                                       |
| 7             | C25IND          | Code 2 of 5 Industrial                                       |
| 8             | CODE39          | Code 3 of 9 (Code 39)                                        |
| 9             | EXCODE39        | Extended Code 3 of 9 (Code 39+)                              |
| 13            | EANX            | EAN                                                          |
| 14            | EANX_CHK        | EAN + Check Digit                                            |
| 16            | EAN128          | GS1-128 (UCC.EAN-128)                                        |
| 18            | CODABAR         | Codabar                                                      |
| 20            | CODE128         | Code 128 (automatic subset switching)                        |
| 21            | DPLEIT          | Deutshe Post Leitcode                                        |
| 22            | DPIDENT         | Deutshe Post Identcode                                       |
| 23            | CODE16K         | Code 16K                                                     |
| 24            | CODE49          | Code 49                                                      |
| 25            | CODE93          | Code 93                                                      |
| 28            | FLAT            | Flattermarken                                                |
| 29            | RSS14           | GS1 DataBar-14                                               |
| 30            | RSS_LTD         | GS1 DataBar Limited                                          |
| 31            | RSS_EXP         | GS1 DataBar Extended                                         |
| 32            | TELEPEN         | Telepen Alpha                                                |
| 34            | UPCA            | UPC A                                                        |
| 35            | UPCA_CHK        | UPC A + Check Digit                                          |
| 37            | UPCE            | UPC E                                                        |
| 38            | UPCE_CHK        | UPC E + Check Digit                                          |
| 40            | POSTNET         | PostNet                                                      |
| 47            | MSI_PLESSEY     | MSI Plessey                                                  |
| 49            | FIM             | FIM                                                          |
| 50            | LOGMARS         | LOGMARS                                                      |
| 51            | PHARMA          | Pharmacode One-Track                                         |
| 52            | PZN             | PZN                                                          |
| 53            | PHARMA_TWO      | Pharmacode Two-Track                                         |
| 55            | PDF417          | PDF417                                                       |
| 56            | PDF417TRUNC     | PDF417 Truncated                                             |
| 57            | MAXICODE        | Maxicode                                                     |
| 58            | QRCODE          | QR Code                                                      |
| 60            | CODE128B        | Code 128 (Subset B)                                          |
| 63            | AUSPOST         | Australia Post Standard Customer                             |
| 66            | AUSREPLY        | Australia Post Reply Paid                                    |
| 67            | AUSROUTE        | Australia Post Routing                                       |
| 68            | AUSREDIRECT     | Australia Post Redirection                                   |
| 69            | ISBNX           | ISBN (EAN-13 with verification stage)                        |
| 70            | RM4SCC          | Royal Mail 4 State (RM4SCC)                                  |
| 71            | DATAMATRIX      | Data Matrix ECC200                                           |
| 72            | EAN14           | EAN-14                                                       |
| 73            | VIN             | Vehincle Identification Number (America)                     |
| 74            | CODABLOCKF      | Codablock-F                                                  |
| 75            | NVE18           | NVE-18                                                       |
| 76            | JAPANPOST       | Japanese Postal Code                                         |
| 77            | KOREAPOST       | Korea Post                                                   |
| 79            | RSS14STACK      | GS1 DataBar-14 Stacked                                       |
| 80            | RSS14STACK_OMNI | GS1 DataBar-14 Stacked Omnidirectional                       |
| 81            | RSS_EXPSTACK    | GS1 DataBar Expanded Stacked                                 |
| 82            | PLANET          | PLANET                                                       |
| 84            | MICROPDF417     | MicroPDF417                                                  |
| 85            | ONECODE         | USPS OneCode                                                 |
| 86            | PLESSEY         | Plessey Code                                                 |
| 87            | TELEPEN_NUM     | Telepen Numeric                                              |
| 89            | ITF14           | ITF-14                                                       |
| 90            | KIX             | Dutch Post KIX Code                                          |
| 92            | AZTEC           | Aztec Code                                                   |
| 93            | DAFT            | DAFT Code                                                    |
| 97            | MICROQR         | Micro QR Code                                                |
| 98            | HIBC_128        | HIBC Code 128                                                |
| 99            | HIBC_39         | HIBC Code 39                                                 |
| 102           | HIBC_DM         | HIBC Data Matrix ECC200                                      |
| 104           | HIBC_QR         | HIBC QR Code                                                 |
| 106           | HIBC_PDF        | HIBC PDF417                                                  |
| 108           | HIBC_MICPDF     | HIBC MicroPDF417                                             |
| 112           | HIBC_AZTEC      | HIBC Aztec Code                                              |
| 115           | DOTCODE         | DotCode                                                      |
| 116           | HANXIN          | Han Xin (Chinese Sensible) Code                              |
| 121           | MAILMARK        | Royal Mail 4-State Mailmark                                  |
| 128           | AZRUNE          | Aztec Runes                                                  |
| 129           | CODE32          | Code 32                                                      |
| 130           | EANX_CC         | Composite Symbol with EAN linear component                   |
| 131           | EAN128_CC       | Composite Symbol with GS1-128 linear component               |
| 132           | RSS14_CC        | Composite Symbol with GS1 DataBar-14 linear component        |
| 133           | RSS_LTD_CC      | Composite Symbol with GS1 DataBar Limited component          |
| 134           | RSS_EXP_CC      | Composite Symbol with GS1 DataBar Extended component         |
| 135           | UPCA_CC         | Composite Symbol with UPC A linear component                 |
| 136           | UPCE_CC         | Composite Symbol with UPC E linear component                 |
| 137           | RSS14STACK_CC   | Composite Symbol with GS1 DataBar-14 Stacked component       |
| 138           | RSS14_OMNI_CC   | Composite Symbol with GS1 DataBar-14 Stacked Omnidirectional |
| 139           | RSS_EXPSTACK_CC | Composite Symbol with GS1 DataBar Expanded Stacked component |
| 140           | CHANNEL         | Channel Code                                                 |
| 141           | CODEONE         | Code One                                                     |
| 142           | GRIDMATRIX      | Grid Matrix                                                  |
| 143           | UPNQR           | UPNQR (Univerzalni Plačilni Nalog QR)                        |
