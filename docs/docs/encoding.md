# Encoding

By default, all input data is assumed to be encoded in Unicode (UTF-8) format. Many barcode symbologies encode data using Latin-1 ([ISO-8851-1](https://en.wikipedia.org/wiki/ISO/IEC_8859-1)) character encoding, which means the input data will be converted from Unicode to Latin-1 before being put in the symbol. [QR Code](../guide/symbologies/two-dimensional.md#qr-code-iso-18004), [Micro QR Code](../guide/symbologies/two-dimensional.md#micro-qr-code-iso-18004), [Han Xin Code](../guide/symbologies/two-dimensional.md#han-xin-code), and [Grid Matrix](../guide/symbologies/two-dimensional.md#grid-matrix) standards can encode Chinese or Japanese characters, which are also converted from Unicode.

If characters which can not be encoded using the default character encoding are encountered during render, the [Extended Channel Interpolation (ECI)](#extended-channel-interpolation-eci) method will be used to encode the data.

:::warning Important
Not all barcode readers support ECI mode, so using ECI can sometimes result in unreadable barcodes. If you are using characters beyond those supported by Latin-1, you should check that the resulting barcode can be understood by your target barcode reader.
:::

### Extended Channel Interpolation (ECI)

If you are passing in input data from file which is not encoded in UTF-8, you can specify the encoding using the `eci` option with the appropriate ECI code.

This procedure will add an ECI flag in the barcode data that tells the barcode reader to change character encoding.

:::tip Note
A warning message will be generated when ECI codes have been inserted into a symbol.
:::

### Available ECI Codes

The following is a list of available ECI codes:

| ECI Code | Character Encoding Scheme                   |
|----------|---------------------------------------------|
| 3        | ISO-8859-1 - Latin alphabet No. 1 (default) |
| 4        | ISO-8859-2 - Latin alphabet No. 2           |
| 5        | ISO-8859-3 - Latin alphabet No. 3           |
| 6        | ISO-8859-4 - Latin alphabet No. 4           |
| 7        | ISO-8859-5 - Latin/Cyrillic alphabet        |
| 8        | ISO-8859-6 - Latin/Arabic alphabet          |
| 9        | ISO-8859-7 - Latin/Greek alphabet           |
| 10       | ISO-8859-8 - Latin/Hebrew alphabet          |
| 11       | ISO-8859-9 - Latin alphabet No. 5           |
| 12       | ISO-8859-10 - Latin alphabet No. 6          |
| 13       | ISO-8859-11 - Latin/Thai alphabet           |
| 15       | ISO-8859-13 - Latin alphabet No. 7          |
| 16       | ISO-8859-14 - Latin alphabet No. 8 (Celtic) |
| 17       | ISO-8859-15 - Latin alphabet No. 9          |
| 18       | ISO-8859-16 - Latin alphabet No. 10         |
| 20       | Shift-Jis (JISX 0208 and JISX 0201) ❖       |
| 21       | Windows-1250 - Latin 2 (Central Europe)     |
| 22       | Windows-1251 - Cyrillic                     |
| 23       | Windows-1252 – Latin 1                      |
| 24       | Windows-1256 - Arabic                       |
| 25       | UCS-2 Unicode (High Order Byte First) ❖     |
| 26       | Unicode (UTF-8)                             |
| 27       | ISO-646:1991 7bit Charset                   |
| 28       | Big-5 (Taiwan) Chinese Charset ❖            |
| 29       | GB(PRC) Chinese Charset ❖                   |
| 30       | Korean Charset (KSX1001:1998) ❖             |

:::tip ❖ Note 
When using the ECI flag, all input data will be treated as raw binary. This means that any data which is encoded using a multible byte encoding scheme (one other than UTF-8) will not use optimal compression.

It's recomended that data using these schemes are converted to UTF-8 before rendering the barcode.
:::

### GS1 Data

GS1 data can be encoded in a number of symbologies. Application identifiers should be enclosed in square brackets (`[...]`) followed by the data to be encoded.

To encode GS1 data, set the `encoding` option to `Encoding.GS1_MODE` (see [Encoding Modes](#encoding-modes)).

:::tip Note
GS1 mode is automatically assumed for EAN-128, DataBar and Composite symbologies but is also available for [Code 16k](../guide/symbologies/stacked.md#code-16k-en-12323), [Data Matrix](../guide/symbologies/two-dimensional.md#data-matrix-ecc200-iso-16022), [QR Code](../guide/symbologies/two-dimensional.md#qr-code-iso-18004), [Aztec Code](../guide/symbologies/two-dimensional.md#aztec-code-iso-24778), [DotCode](../guide/symbologies/two-dimensional.md#dotcode), and [QR Code](../guide/symbologies/two-dimensional.md#qr-code-iso-18004).
:::

### HIBC Data

**Health Industry Bar Code (HIBC)** data may also be encoded in the [Code 39](../guide/symbologies/one-dimensional.md#code-39), [Code 128](../guide/symbologies/one-dimensional.md#code-128), [Codablock-F](../guide/symbologies/stacked.md#codablock-f), [Data Matrix](../guide/symbologies/two-dimensional.md#data-matrix-ecc200-iso-16022), [QR Code](../guide/symbologies/two-dimensional.md#qr-code-iso-18004), [PDF417](../guide/symbologies/stacked.md#pdf417-iso-15438) and [Aztec Code](../guide/symbologies/two-dimensional.md#aztec-code-iso-24778) symbologies. Within this mode, the leading `+` and the check character are automatically added.

## Encoding Modes

The way in which the input data is encoded can be set using the `encoding` property. Valid values are described below.

| Value        | Effect                                                       |
|--------------|--------------------------------------------------------------|
| DATA_MODE    | Uses full ASCII range interpreted as Latin-1 or binary data. |
| UNICODE_MODE | Uses pre-formatted UTF-8 input.                              |
| GS1_MODE     | Encodes GS1 data using FNC1 characters.                      |

Values can be accessed using the `Encoding` enumerated type. 

### Example

```js
const symbology = require('symbology')

symbology.createStream({
  symbology: Symbology.Barcode.CODE128,
  encoding: symbology.Encoding.GS1_MODE
}, '12345')
```

