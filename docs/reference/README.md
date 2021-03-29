# Symbology Reference

Each symbology type values can be represented using an enumerated type. The types are stored in the `Barcode` enumerated type member of the library.

## Supported Barcode Types

Below is a tabular list of all supported symbology types. Click on the barcode names for more info on each symbology.

### One-Dimensional Symbologies

| Numeric Value | Name          | Barcode Name                                                                                                 |
|---------------|---------------|--------------------------------------------------------------------------------------------------------------|
| 1             | `CODE11`      | [Code 11](/reference/one-dimensional.md#code-11)                                                             |
| 2             | `C25MATRIX`   | [Standard Code 2 of 5](/reference/one-dimensional.md#standard-code-2-of-5)                                   |
| 3             | `C25INTER`    | [Interleaved 2 of 5](/reference/one-dimensional.md#interleaved-code-2-of-5)                                  |
| 140           | `CHANNEL`     | [Channel Code](/reference/one-dimensional.md#channel-code)                                                   |
| 18            | `CODABAR`     | [Codabar](/reference/one-dimensional.md#codabar-en-798)                                                      |
| 20            | `CODE128`     | [Code 128 (automatic subset switching)](/reference/one-dimensional.md#standard-code-128-iso-15417)           |
| 60            | `CODE128B`    | [Code 128 (subset B)](/reference/one-dimensional.md#code-128-subset-b)                                       |
| 4             | `C25IATA`     | [Code 2 of 5 IATA](/reference/one-dimensional.md#iata-code-2-of-5)                                           |
| 6             | `C25LOGIC`    | [Code 2 of 5 Data Logic](/reference/one-dimensional.md#code-2-of-5-data-logic)                               |
| 7             | `C25IND`      | [Code 2 of 5 Industrial](/reference/one-dimensional.md#industrial-code-2-of-5)                               |
| 8             | `CODE39`      | [Code 3 of 9 (Code 39)](/reference/one-dimensional.md#standard-code-39-iso-16388)                            |
| 129           | `CODE32`      | [Code 32](/reference/one-dimensional.md#code-32)                                                             |
| 25            | `CODE93`      | [Code 93](/reference/one-dimensional.md#code-93)                                                             |
| 21            | `DPLEIT`      | [Deutshe Post Leitcode](/reference/one-dimensional.md#deutsche-post-leitcode)                                |
| 22            | `DPIDENT`     | [Deutshe Post Identcode](/reference/one-dimensional.md#deutsche-post-identcode)                              |
| 13            | `EANX`        | [EAN](/reference/one-dimensional.md#european-article-number-en-797)                                          |
| 14            | `EANX_CHK`    | [EAN + Check Digit](/reference/one-dimensional.md#european-article-number-en-797)                            |
| 72            | `EAN14`       | [EAN-14](/reference/one-dimensional.md#ean-14)                                                               |
| 9             | `EXCODE39`    | [Extended Code 3 of 9 (Code 39+)](/reference/one-dimensional.md#extended-code-39)                            |
| 16            | `EAN128`      | [GS1-128 (UCC/EAN-128)](/reference/one-dimensional.md#gs1-128)                                               |
| 29            | `RSS14`       | [GS1 DataBar-14](/reference/one-dimensional.md#databar-14-and-databar-14-truncated)                          |
| 31            | `RSS_EXP`     | [GS1 DataBar Expanded](/reference/one-dimensional.md#databar-expanded)                                       |
| 30            | `RSS_LTD`     | [GS1 DataBar Limited](/reference/one-dimensional.md#databar-limited)                                         |
| 98            | `HIBC_128`    | [HIBC Code 128](/reference/one-dimensional.md#hibc-code-128)                                                 |
| 99            | `HIBC_39`     | [HIBC Code 39](/reference/one-dimensional.md#hibc-code-39)                                                   |
| 69            | `ISBNX`       | [ISBN (EAN-13 with verification stage)](/reference/one-dimensional.md#sbn-isbn-and-isbn-13)                  |
| 89            | `ITF14`       | [ITF-14](/reference/one-dimensional.md#itf-14)                                                               |
| 77            | `KOREAPOST`   | [Korea Post](/reference/one-dimensional.md#korea-post-barcode)                                               |
| 50            | `LOGMARS`     | [LOGMARS](/reference/one-dimensional.md#logmars)                                                             |
| 47            | `MSI_PLESSEY` | [MSI Plessey](/reference/one-dimensional.md#msi-plessey)                                                     |
| 75            | `NVE18`       | [NVE-18](/reference/one-dimensional.md#nve-18)                                                               |
| 51            | `PHARMA`      | [Pharmacode One-Track](/reference/one-dimensional.md#pharmacode)                                             |
| 86            | `PLESSEY`     | [Plessey Code](/reference/one-dimensional.md#plessey)                                                        |
| 52            | `PZN`         | [PZN](/reference/one-dimensional.md#pzn)                                                                     |
| 32            | `TELEPEN`     | [Telepen Alpha](/reference/one-dimensional.md#telepen-alpha)                                                 |
| 87            | `TELEPEN_NUM` | [Telepen Numeric](/reference/one-dimensional.md#telepen-numeric)                                             |
| 34            | `UPCA`        | [UPC A](/reference/one-dimensional.md#upc-version-a)                                                         |
| 35            | `UPCA_CHK`    | [UPC A + Check Digit](/reference/one-dimensional.md#upc-version-a)                                           |
| 37            | `UPCE`        | [UPC E](/reference/one-dimensional.md#upc-version-e)                                                         |
| 38            | `UPCE_CHK`    | [UPC E + Check Digit](/reference/one-dimensional.md#upc-version-e)                                           |
| 144           | `ULTRA`       | [Ultracode](/reference/one-dimensional.md#ultracode)                                                         |
| 143           | `UPNQR`       | [UPNQR (Univerzalni Plačilni Nalog QR)](/reference/one-dimensional.md#upnqr-univerzalni-placilni-nalog-qr)   |
| 73            | `VIN`         | [Vehicle Identification Number (United States)](/reference/one-dimensional.md#vehicle-identification-number) |

### Two-Dimensional Symbologies

| Numeric Value | Name         | Barcode Name                                                                                               |
|---------------|--------------|------------------------------------------------------------------------------------------------------------|
| 92            | `AZTEC`      | [Aztec Code](/reference/two-dimensional.md#aztec-code-iso-24778)                                           |
| 128           | `AZRUNE`     | [Aztec Runes](/reference/two-dimensional.md#aztec-runes)                                                   |
| 141           | `CODEONE`    | [Code One](/reference/two-dimensional.md#code-one)                                                         |
| 71            | `DATAMATRIX` | [Data Matrix ECC200](/reference/two-dimensional.md#data-matrix-ecc200-iso-16022)                           |
| 115           | `DOTCODE`    | [DotCode](/reference/two-dimensional.md#dotcode)                                                           |
| 142           | `GRIDMATRIX` | [Grid Matrix](/reference/two-dimensional.md#grid-matrix)                                                   |
| 116           | `HANXIN`     | [Han Xin (Chinese Sensible) Code](/reference/two-dimensional.md#han-xin-code)                              |
| 112           | `HIBC_AZTEC` | [HIBC Aztec Code](/reference/two-dimensional.md#aztec-code-iso-24778)                                      |
| 97            | `MICROQR`    | [Micro QR Code](/reference/two-dimensional.md#micro-qr-code-iso-18004)                                     |
| 102           | `HIBC_DM`    | [HIBC Data Matrix ECC200](/reference/two-dimensional.md#data-matrix-ecc200-iso-16022)                      |
| 104           | `HIBC_QR`    | [HIBC QR Code](/reference/two-dimensional.md#encoding-gs1-data)                                            |
| 57            | `MAXICODE`   | [Maxicode](/reference/two-dimensional.md#maxicode-iso-16023)                                               |
| 58            | `QRCODE`     | [QR Code](/reference/two-dimensional.md#qr-code-iso-18004)                                                 |
| 143           | `UPNQR`      | [UPNQR (Univerzalni Plačilni Nalog QR)](/reference/two-dimensional.md#upnqr-univerzalni-placilni-nalog-qr) |

### Two-Track Symbologies

| Numeric Value | Name          | Barcode Name                                                                                  |
|---------------|---------------|-----------------------------------------------------------------------------------------------|
| 68            | `AUSREDIRECT` | [Australia Post Redirection](/reference/two-track.md#redirect-barcode)                        |
| 66            | `AUSREPLY`    | [Australia Post Reply Paid](/reference/two-track.md#reply-paid-barcode)                       |
| 67            | `AUSROUTE`    | [Australia Post Routing](/reference/two-track.md#routing-barcode)                             |
| 63            | `AUSPOST`     | [Australia Post Standard Customer](/reference/two-track.md#customer-barcodes)                 |
| 90            | `KIX`         | [Dutch Post KIX Code](/reference/two-track.md#dutch-post-kix-code)                            |
| 76            | `JAPANPOST`   | [Japanese Postal Code](/reference/two-track.md#japanese-postal-code)                          |
| 53            | `PHARMA_TWO`  | [Pharmacode Two-Track](/reference/two-track.md#two-track-pharmacode)                          |
| 82            | `PLANET`      | [PLANET](/reference/two-track.md#planet)                                                      |
| 40            | `POSTNET`     | [PostNet](/reference/two-track.md#postnet)                                                    |
| 70            | `RM4SCC`      | [Royal Mail 4-State (RM4SCC)](/reference/two-track.md#royal-mail-4-state-country-code-rm4scc) |
| 121           | `MAILMARK`    | [Royal Mail 4-State Mailmark](/reference/two-track.md#royal-mail-4-state-mailmark)            |
| 85            | `ONECODE`     | [USPS OneCode](/reference/two-track.md#usps-onecode)                                          |

### Stacked Symbologies

| Numeric Value | Name              | Barcode Name                                                                                                     |
|---------------|-------------------|------------------------------------------------------------------------------------------------------------------|
| 74            | `CODABLOCKF`      | [Codablock-F](/reference/stacked.md#codablock-f)                                                                 |
| 23            | `CODE16K`         | [Code 16K](/reference/stacked.md#ode-16k-en-12323)                                                               |
| 24            | `CODE49`          | [Code 49](/reference/stacked.md#code-49)                                                                         |
| 79            | `RSS14STACK`      | [GS1 DataBar-14 Stacked](/reference/stacked.md#gs1-databar-14-stacked-iso-24724)                                 |
| 80            | `RSS14STACK_OMNI` | [GS1 DataBar-14 Stacked Omnidirectional](/reference/stacked.md#gs1-databar-14-stacked-omnidirectional-iso-24724) |
| 81            | `RSS_EXPSTACK`    | [GS1 DataBar Expanded Stacked](/reference/stacked.md#gs1-databar-expanded-stacked-iso-24724)                     |
| 106           | `HIBC_PDF`        | [HIBC PDF417](/reference/stacked.md#pdf417-iso-15438)                                                            |
| 108           | `HIBC_MICPDF`     | [HIBC MicroPDF417](/reference/stacked.md#micropdf417-iso-24728)                                                  |
| 55            | `PDF417`          | [PDF417](/reference/stacked.md#pdf417-iso-15438)                                                                 |
| 56            | `PDF417TRUNC`     | [PDF417 Truncated](/reference/stacked.md#compact-pdf417)                                                         |
| 84            | `MICROPDF417`     | [MicroPDF417](/reference/stacked.md#micropdf417-iso-24728)                                                       |


### Composite Symbologies (ISO 24723)

| Numeric Value | Name              | Symbology                                                              |
|---------------|-------------------|------------------------------------------------------------------------|
| 130           | `EANX_CC`         | Composite symbol with EAN linear component                             |
| 131           | `EAN128_CC`       | Composite symbol with GS1-128 linear component                         |
| 133           | `RSS_LTD_CC`      | Composite symbol with GS1 DataBar Limited component                    |
| 134           | `RSS_EXP_CC`      | Composite symbol with GS1 DataBar Extended component                   |
| 132           | `RSS14_CC`        | Composite symbol with GS1 DataBar-14 Linear component                  |
| 137           | `RSS14STACK_CC`   | Composite symbol with GS1 DataBar-14 Stacked component                 |
| 138           | `RSS14_OMNI_CC`   | Composite symbol with GS1 DataBar-14 Stacked Omnidirectional component |
| 139           | `RSS_EXPSTACK_CC` | Composite symbol with GS1 DataBar Expanded Stacked component           |
| 135           | `UPCA_CC`         | Composite symbol with UPC A linear component                           |
| 136           | `UPCE_CC`         | Composite symbol with UPC E linear component                           |

### Other Barcode-Like Markings

| Numeric Value | Name   | Barcode Name                                              |
|---------------|--------|-----------------------------------------------------------|
| 93            | `DAFT` | [DAFT Code](/reference/other.md#daft-code)                |
| 49            | `FIM`  | [FIM](/reference/other.md#facing-identification-mark-fim) |
| 28            | `FLAT` | [Flattermarken](/reference/other.md#flattermarken)        |
