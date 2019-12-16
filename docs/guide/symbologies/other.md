# Other Barcode-Like Markings
## Facing Identification Mark (FIM)

![FIM](/assets/barcodes/barcode_52.png)

Used by the United States Postal Service (USPS), the FIM symbology is used to assist automated mail processing. There are only 4 valid symbols which can be generated using the characters A-D as shown in the table below.

| Letter Code   | Usage                                                                                  |
|---------------|----------------------------------------------------------------------------------------|
| `A`           | Used for courtesy reply mail and metered reply mail with a pre-printed PostNet symbol. |
| `B`           | Used for business reply mail without a pre-printed zip code.                           |
| `C`           | Used for business reply mail with a pre-printed zip code.                              |
| `D`           | Used for Information Based Indicia (IBI) postage.                                      |


## Flattermarken

![Flattermarken](/assets/barcodes/barcode_53.png)

Used for the recognition of page sequences in print-shops, the Flattermarken is not a true barcode symbol and requires precise knowledge of the position of the mark on the page. The Flattermarken system can encode any length numeric data and does not include a check digit.

## DAFT Code

This is a method for creating 4-state codes where the data encoding is provided by an external program. Input data should consist of the letters `D`, `A`, `F`, and `T`, where these refer to **descender**, **ascender**, **full** (ascender and descender) or **tracker** (neither ascender nor descender) respectively.

:::tip Note
Any characters other than `D`, `A`, `F`, or `T` are ignored.
:::