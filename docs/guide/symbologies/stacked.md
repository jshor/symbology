# Stacked symbologies

An early innovation to get more information into a symbol, used primarily in the vehicle industry, is to simply stack one-dimensional codes on top of each other. The stacked symbologies listed on this page are available.

## Codablock-F

![Codablock-F](/assets/barcodes/codablockf.png)

This is a stacked symbology based on [Code 128](one-dimensional.md#code-128) which can encode ASCII code set data up to a maximum length of 2725 characters. 

The width of the Codablock-F symbol can be specified via `option2` **or** the height (number of rows) can be specified via `option1`. The encoding of GS1 data in Codablock-F symbols is not supported.

#### Example

The following renders a a 5-row Codablock-F symbol:

```js
symbology.createStream({
  symbology: symbology.Barcode.CODABLOCKF,
  option1: 5,
}, '11010000100101111011101001000011010100011000101000110001010001100010100011000110011001101100011101011')
```

## Code 16k (EN 12323)

![Code 16K](/assets/barcodes/barcode_27.png)

Code 16k uses a Code 128 based system which can stack up to 16 rows in a block. This gives a maximum data capacity of 77 characters (or 154 numerical digits) and includes two modulo-107 check digits.

Code 16k also supports extended ASCII character encoding in the same manner as [Code 128](one-dimensional.md#code-128).

## PDF417 (ISO 15438)

![PDF417](/assets/barcodes/barcode_28.png)

Heavily used in the parcel industry, the PDF417 symbology can encode a vast amount of data into a small space. Encoding up to the ISO standard maximum symbol size of 925 codewords which, at error correction level `0`, allows a maximum data size of 1850 text characters (or 2710 digits) is supported.

### Security

The amount of check digit information can be specified by setting `option1` to the number of codewords (between `0` and `8`). The number of codewords used for check information is determined by 2<sup>(value + 1)</sup>

:::tip Note
The default level of check information is determined by the amount of data being encoded. This symbology uses Latin-1 character encoding by default but also supports the ECI encoding mechanism. 
:::

### Width

The width of the generated PDF417 symbol can be specified by setting `option2` to a number between `1` and `30`.

:::tip Note
A separate symbology ID can be used to encode [Health Industry Barcode (HIBC)](one-dimensional.md#hibc-code-39) data which adds a leading `+` character and a modulo-49 check digit to the encoded data.
:::

#### Example

The following renders a 5-row Codablock-F symbol:

```js
symbology.createStream({
  symbology: symbology.Barcode.CODABLOCKF,
  option1: 5,
}, '11010000100101111011101001000011010100011000101000110001010001100010100011000110011001101100011101011')
```

## Compact PDF417

Also known as truncated PDF417. Options are the same as for PDF417 above.
## MicroPDF417 (ISO 24728)

![MicroPDF417](/assets/barcodes/barcode_29.png)

A variation of the [PDF417 standard](#pdf417-iso-15438), MicroPDF417 is intended for applications where symbol size needs to be kept to a minimum. 34 predefined symbol sizes are available with 1 to 4 columns and 4 to 44 rows.

MicroPDF417 symbol can hold up to 250 alphanumeric characters (or 366 digits).

### Error correction capacity

The amount of error correction used is dependent on symbol size.

### Symbol Size

Like PDF417, the number of columns used can be determined by specifying `option2`.

:::tip Note
This symbology uses Latin-1 character encoding by default but also supports the ECI encoding mechanism.
:::

:::tip Note
A separate symbology ID can be used to encode [Health Industry Barcode (HIBC)](one-dimensional.md#hibc-code-39) data which adds a leading `+` character and a modulo-49 check digit to the encoded data.
:::

## GS1 DataBar-14 Stacked (ISO 24724)

![GS1 DataBar-14 Stacked](/assets/barcodes/barcode_30.png)

A stacked variation of [GS1 DataBar-14](one-dimensional.md#gs1-databar-iso-24724), this symbol requires the [same type of input](one-dimensional.md#databar-14-and-databar-14-truncated).

:::tip Note
* The height of this symbol is fixed.
* The data is encoded in two rows of bars with a central finder pattern.
* This symbol can be generated with a two-dimensional component to make a composite symbol.
:::

## GS1 DataBar-14 Stacked Omnidirectional (ISO 24724)

![GS1 DataBar-14 Stacked Omnidirectional](/assets/barcodes/barcode_31.png)

Another stacked variation of [GS1 DataBar-14](one-dimensional.md#gs1-databar-iso-24724), this symbol requires the [same type of input](one-dimensional.md#databar-14-and-databar-14-truncated).

:::tip Note
* The data is encoded in two rows of bars with a central finder pattern.
* This symbol can be generated with a two-dimensional component to make a composite symbol.
:::

## GS1 DataBar Expanded Stacked (ISO 24724)

![GS1 DataBar Expanded Stacked](/assets/barcodes/barcode_32.png)

A stacked variation of the [GS1 DataBar Expanded](one-dimensional.md#databar-expanded) symbol for smaller packages. The input requirement is the same as for GS1 DataBar Expanded.

### Width

The width of the symbol can be altered by setting `option2` to the desired width.

:::tip Note
This symbol can be generated with a two-dimensional component to make a composite symbol. For symbols with a 2D component, the number of columns must be at least `2`.
:::

#### Example

```js
symbology.createStream({
  symbology: symbology.Barcode.EANX_CC,
  option1: 1,
  primary: '331234567890'
}, '[99]1234-abcd')
```

## Code 49

![Code 49](/assets/barcodes/barcode_33.png)

Developed in 1987 at Intermec, Code 49 is a cross between UPC and Code 39. It it one of the earliest stacked symbologies and influenced the design of Code 16K a few years later. It supports full 7-bit ASCII input up to a maximum of 49 characters or 81 numeric digits. GS1 data encoding is also supported.
