# Symbology types

Each symbology type values can be represented using an enumerated type. The types are stored in the `Barcode` member of the library. To use these, use `{library reference}.Barcode.{type}`.

## Example usage:

```
const symbology = require('symbology')
const type = symbology.Barcode.CODE11
```

## Supported barcode types:

| Enum name      |  Number value   |
|----------------|-----------------|
| CODE11         |       1         |
| C25MATRIX      |       2         |
| C25INTER       |       3         |
| C25IATA        |       4         |
| C25LOGIC       |       6         |
| C25IND         |       7         |
| CODE39         |       8         |
| EXCODE39       |       9         |
| EANX           |       13        |
| EAN128         |       16        |
| CODABAR        |       18        |
| CODE128        |       20        |
| DPLEIT         |       21        |
| DPIDENT        |       22        |
| CODE16K        |       23        |
| CODE49         |       24        |
| CODE93         |       25        |
| FLAT           |       28        |
| RSS14          |       29        |
| RSS_LTD        |       30        |
| RSS_EXP        |       31        |
| TELEPEN        |       32        |
| UPCA           |       34        |
| UPCE           |       37        |
| POSTNET        |       40        |
| MSI_PLESSEY    |       47        |
| FIM            |       49        |
| LOGMARS        |       50        |
| PHARMA         |       51        |
| PZN            |       52        |
| PHARMA_TWO     |       53        |
| PDF417         |       55        |
| PDF417TRUNC    |       56        |
| MAXICODE       |       57        |
| QRCODE         |       58        |
| CODE128B       |       60        |
| AUSPOST        |       63        |
| AUSREPLY       |       66        |
| AUSROUTE       |       67        |
| AUSREDIRECT    |       68        |
| ISBNX          |       69        |
| RM4SCC         |       70        |
| DATAMATRIX     |       71        |
| EAN14          |       72        |
| CODABLOCKF     |       74        |
| NVE18          |       75        |
| JAPANPOST      |       76        |
| KOREAPOST      |       77        |
| RSS14STACK     |       79        |
| RSS14STACK_OMNI|       80        |
| RSS_EXPSTACK   |       81        |
| PLANET         |       82        |
| MICROPDF417    |       84        |
| ONECODE        |       85        |
| PLESSEY        |       86        |
| TELEPEN_NUM    |       87        |
| ITF14          |       89        |
| KIX            |       90        |
| AZTEC          |       92        |
| DAFT           |       93        |
| MICROQR        |       97        |
| HIBC_128       |       98        |
| HIBC_39        |       99        |
| HIBC_DM        |       102       |
| HIBC_QR        |       104       |
| HIBC_PDF       |       106       |
| HIBC_MICPDF    |       108       |
| HIBC_BLOCKF    |       110       |
| HIBC_AZTEC     |       112       |
| AZRUNE         |       128       |
| CODE32         |       129       |
| EANX_CC        |       130       |
| EAN128_CC      |       131       |
| RSS14_CC       |       132       |
| RSS_LTD_CC     |       133       |
| RSS_EXP_CC     |       134       |
| UPCA_CC        |       135       |
| UPCE_CC        |       136       |
| RSS14STACK_CC  |       137       |
| RSS14_OMNI_CC  |       138       |
| RSS_EXPSTACK_CC|       139       |
| CHANNEL        |       140       |
| CODEONE        |       141       |
| GRIDMATRIX     |       142       |