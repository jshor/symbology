# Code 128 (ISO 15417)

[Code 128](https://en.wikipedia.org/wiki/Code_128) is a high-density linear barcode symbology used for alphanumeric or numeric-only barcodes.

It can encode all 128 characters of ASCII and, by use of an extension symbol (FNC4), the Latin-1 characters defined in [ISO/IEC 8859-1](https://en.wikipedia.org/wiki/ISO/IEC_8859-1).

To encode all 128 ASCII characters, one of three modes are activated: `A`, `B`, or `C`. Modes `A` and `B` together encompass the entire ASCII range, while mode `C` is optimized for encoding numeric strings efficiently. 

The initial modes is determined by a designated start symbol. Each modes includes a portion of the 103 data code points, with specific points reserved for switching between modes. Switching is accomplished using code points 98 and 99 in modes `A` and `B`, 100 in modes `A` and `C`, and 101 in modes `B` and `C`:

* `128A` (Mode `A`) – ASCII characters `00` to `95` (`0`-`9`, `A`-`Z` and control codes), special characters, and `FNC` `1`–`4`.
* `128B` (Mode `B`) – ASCII characters `32` to `127` (`0`-`9`, `A`-`Z`, `a`-`z`), special characters, and `FNC` `1`–`4`.
* `128C` (Mode `C`) – `00`–`99` (encodes two digits with a single code point) and `FNC1`.

## Standard Code 128

This symbology supports full ASCII text and uses a three-mode system to compress the data into a smaller symbol. It can be rendered by using the `CODE128` symbology type.

### Example

![Code 128](/assets/barcodes/one-dimensional/code128.svg)

```ts
createStream({
  symbology: SymbologyType.CODE128
}, '123456789')
```

### Check digit

A modulo-103 check digit is added by default.

## Code 128 (Mode B)

Code 128B can be used to suppress mode `C` which compresses numerical data. The symbology type, `CODE128B`, can be used to force-render Code 128B.

### Example

![Code 128B](/assets/barcodes/one-dimensional/code128b.svg)

```ts
createStream({
  symbology: SymbologyType.CODE128B
}, '123456789')
```

### Check digit

A modulo-103 check digit is added by default.


## GS1-128

[GS1](https://en.wikipedia.org/wiki/GS1#Standards)-128, also known as UCC/EAN-128 and can be rendered using the `EAN128` symbology type.

:::tip Note
As with [GS1 DataBar Expanded](./gs1databar.md#gs1-databar-expanded), Application Identifiers (AIs) are demarcated using square brackets (`[` and `]`). In human-readable text, these brackets will be displayed as parentheses (`(` and `)`).
:::

### Example

![GS1-128](/assets/barcodes/one-dimensional/ean128.svg)

```ts
createStream({
  symbology: SymbologyType.EAN128
}, '[01]98898765432106[3202]012345[15]991231')
```

### Parentheses

If AIs are demarcated using parentheses (`(` and `)`) instead of brackets (`[` and `]`) then the `gs1.parentheses` option can be set to `true` to indicate so.

```ts
createStream({
  symbology: SymbologyType.EAN128,
  gs1: {
    parentheses: true
  }
}, '(01)98898765432106(3202)012345(15)991231')
```

### Encoding

* Fixed length data should be entered at the appropriate length for correct encoding.
* GS1-128 does not support extended ASCII characters.

### Check digits

Check digits for GTIN data AI (01) are not automatically generated and must be included in the input data.

## EAN-14

A shorter version of GS1-128 which can be rendered using the `EAN14` symbology type.

### Example

![EAN-14](/assets/barcodes/one-dimensional/ean14.svg)

```ts
createStream({
  symbology: SymbologyType.EAN14
}, '5901234123457')
```

### Encoding

Encodes [Global Trade Item Numbers](https://en.wikipedia.org/wiki/Global_Trade_Item_Number) (GTINs) only.

## NVE-18 (SSCC-18)

[Nummer der Versandeinheit (NVE) `de`](https://de.wikipedia.org/wiki/Nummer_der_Versandeinheit)-18, also known as [Serial Shipping Container Code (SSCC)](https://en.wikipedia.org/wiki/Serial_shipping_container_code)-18, encodes an 18-digit numeric barcode for logistics.

NVE-18 can be rendered using the `NVE18` symbology type.

### Check digits

NVE-18 includes both modulo-10 and modulo-103 check digits. AI (`00`) is automatically prepended.

### Example

![NVE-18](/assets/barcodes/one-dimensional/nve18.svg)

```ts
createStream({
  symbology: SymbologyType.NVE18
}, '37612345000001003')
```

## Health Industry Barcode (HIBC)

Health Industry Barcode (HIBC) is a variant of Code 128 used in the pharmaceutical industry.

HIBC-128 can be rendered using the `HIBC_128` symbology type.

### Check digits

A trailing modulo-49 check digit is added automatically. A leading `+` character is automatically prepended.

### Example

![HIBC 128](/assets/barcodes/one-dimensional/hibc128.svg)

```ts
createStream({
  symbology: SymbologyType.HIBC_128
}, 'A123BJC5D6E71')
```

## DPDCode

DPDCode by [Geopost `de`](https://de.wikipedia.org/wiki/Geopost) (formerly *Deutscher Paket Dienst*, DPDgroup) is a variant of Code 128 used for shipping and logistics.

The human-readable text is automatically formatted according to Geopost's standard.

This barcode requires a 28-character alphanumeric input and can be rendered using the `DPD` symbology type.

### Check digits

A modulo-36 check digit is automatically added.

### Example

![DPDCode](/assets/barcodes/one-dimensional/dpdcode.svg)

```ts
createStream({
  symbology: SymbologyType.DPD
}, '000393206219912345678101040')
```