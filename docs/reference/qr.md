# QR Code

Quick Response (QR) code is a two-dimensional matrix barcode that consists of black squares arranged in a square grid on a white background. It includes some [fiducial markers](https://en.wikipedia.org/wiki/Fiducial_marker) which can be read by an imaging device (i.e., a camera) and processed using [Reed–Solomon error correction](https://en.wikipedia.org/wiki/Reed%E2%80%93Solomon_error_correction) until the image can be appropriately interpreted.

## Standard QR Code (ISO 18004)

The standard QR symbology can rendered by using the `QRCODE` symbology type.

### Example

```ts
createStream({
  symbology: SymbologyType.QRCODE
}, 'https://example.com/hello-world')
```

### Encoding

* QR Code symbols can by default encode either characters in the Latin-1 set, or members of the Shift JIS encoding scheme (Kanji, Katakana, or related ASCII characters).
* Other character sets are supported via the [ECI encoding mechanism](/docs/advanced.md#eci-encoding).
* Input should usually be entered as UTF-8. Conversion to Latin-1 or Shift JIS would be carried out automatically.

#### Full multibyte encoding

<!--@include: ./partials/fullmultibyte.md-->

#### GS1 data encoding

<!--@include: ./partials/gs1.md-->

### Masking

There are 8 possible [mask patterns](https://en.wikipedia.org/wiki/QR_code#Encoding) to use. The optimal one is automatically selected but one may be defined explicitly by specifying `mask` to the desired value (any integer in the range `0` to `7`).

#### Example with masking

![QR Code](/assets/barcodes/qr-mask.svg)

```ts
createStream({
  symbology: SymbologyType.QRCODE,
  mask: 3 // [!code focus]
}, 'https://example.com/hello-world')
```

### QR Code Size

The size of the symbol can be set to the QR Code version required (`1` to `40`).

The size of symbol generated can be set by setting `symbolSize` to one of the following values:

| `symbolSize` | Symbol Size | `symbolSize` | Symbol Size |
|--------------|-------------|--------------|-------------|
| 1            | 21 x 21     | 21           | 101 x 101   |
| 2            | 25 x 25     | 22           | 105 x 105   |
| 3            | 29 x 29     | 23           | 109 x 109   |
| 4            | 33 x 33     | 24           | 113 x 113   |
| 5            | 37 x 37     | 25           | 117 x 117   |
| 6            | 41 x 41     | 26           | 121 x 121   |
| 7            | 45 x 45     | 27           | 125 x 125   |
| 8            | 49 x 49     | 28           | 129 x 129   |
| 9            | 53 x 53     | 29           | 133 x 133   |
| 10           | 57 x 57     | 30           | 137 x 137   |
| 11           | 61 x 61     | 31           | 141 x 141   |
| 12           | 65 x 65     | 32           | 145 x 145   |
| 13           | 69 x 69     | 33           | 149 x 149   |
| 14           | 73 x 73     | 34           | 153 x 153   |
| 15           | 77 x 77     | 35           | 157 x 157   |
| 16           | 81 x 81     | 36           | 161 x 161   |
| 17           | 85 x 85     | 37           | 165 x 165   |
| 18           | 89 x 89     | 38           | 169 x 169   |
| 19           | 93 x 93     | 39           | 173 x 173   |
| 20           | 97 x 97     | 40           | 177 x 177   |

:::tip Note
The maximum capacity of a QR Code symbol (i.e., `symbolSize` = `40`) is `7089` numeric digits (`4296` alphanumeric characters, or `2953` bytes of data).
:::

#### Example with symbol size

![QR Code](/assets/barcodes/qr-173 x 173.svg)

```ts
createStream({
  symbology: SymbologyType.QRCODE,
  symbolSize: 39
}, '1234567890')
```

### Error correction

Four levels of error correction are available and can be defined by setting `errorCorrectionLevel` to one of the following values:

| `errorCorrectionLevel` | ECC Level     | Error Correction Capacity | Recovery Capacity |
|------------------------|---------------|---------------------------|-------------------|
| 1                      | `L` (default) | ~20% of symbol            | ~7%               |
| 2                      | `M`           | ~37% of symbol            | ~15%              |
| 3                      | `Q`           | ~55% of symbol            | ~25%              |
| 4                      | `H`           | ~65% of symbol            | ~30%              |

#### Example with error correction

![QR Code](/assets/barcodes/qr-ecc.svg)

```ts
createStream({
  symbology: SymbologyType.QRCODE,
  errorCorrectionLevel: 3 // [!code focus]
}, 'https://example.com/hello-world')
```

## Health Industry Barcode (HIBC) Data

![HIBC QR Code](/assets/barcodes/qr-hibc.svg)

[Health Industry Barcode (HIBC)](one-dimensional.md#hibc-code-39) data, which prepends a plus sign character (`+`) and a modulo-49 check digit to the encoded data, can be rendered by using the `HIBC_QR` symbology type.

:::tip Note
The same [encoding](#encoding), [masking](#masking), and [size](#qr-code-size) features that apply to regular QR codes also apply to `HIBC_QR`.
:::

### Example

```ts
createStream({
  symbology: SymbologyType.HIBC_QR,
  symbolSize: 39
}, '1234567890')
```

## Micro QR Code (ISO 18004)

The micro version of QR code can rendered by using the `MICROQR` symbology type.

:::tip Note
The same [encoding](#encoding) features that apply to regular QR codes also apply to `MICROQR`.
:::

### Masking

There are four possible [mask patterns](https://en.wikipedia.org/wiki/QR_code#Encoding) to use. The optimal one is automatically selected but one may be defined explicitly by specifying `mask` to the desired value (any integer in the range `0` to `3`).

### Micro QR Code Size

A preferred symbol size can be selected by using the `symbolSize` value to one of the following values:

| `symbolSize` | Version | Symbol Size | Allowed Characters    |
|--------------|---------|-------------|-----------------------|
| 1            | `M1`    | 11 x 11     | Numeric only          |
| 2            | `M2`    | 13 x 13     | Numeric, uppercase letters, space, and the characters: `$`, `%`, `*`, `+`, `-`, `.`, `/`, and `:` |
| 3            | `M3`    | 15 x 15     | Latin-1 and Shift JIS |
| 4            | `M4`    | 17 x 17     | Latin-1 and Shift JIS |

### Error correction

Depending on the Micro QR version, up to three levels of error correction may be available. The desired ECC can be defined by setting `errorCorrectionLevel` to one of the following values:

| `errorCorrectionLevel` | ECC Level | Error Correction Capacity | Recovery Capacity | Supported Versions     |
|------------------------|-----------|---------------------------|-------------------|------------------------|
| 1                      | `L`       | ~20% of symbol            | ~7%               | `M1`, `M2`, `M3`, `M4` |
| 2                      | `M`       | ~37% of symbol            | ~15%              | `M2`, `M3`, `M4`       |
| 3                      | `Q`       | ~55% of symbol            | ~25%              | `M4`                   |

### Example

![Micro QR Code](/assets/barcodes/barcode_46.png)

```ts
createStream({
  symbology: SymbologyType.MICROQR,
  symbolSize: 2
}, '123')
```

## Rectangular Micro QR Code (rMQR)

Like regular [micro QR codes](#micro-qr-code-iso-18004), rMQR utilizes the `MICROQR` symbology type. Its resolution is dictated by [`symbolSize`](#rmqr-size).

:::tip Note
Most [encoding](#encoding) features that apply to regular QR codes also apply to `MICROQR`, however unlike regular QR codes **it does not support other [ISO/IEC 8859](https://en.wikipedia.org/wiki/ISO/IEC_8859) character sets or Unicode**.
:::

### Error correction

The amount of ECC codewords can be adjusted the same way as for [QR Code](#error-correction) by setting `errorCorrectionLevel`.

| `errorCorrectionLevel` | ECC Level | Error Correction Capacity | Recovery Capacity |
|------------------------|-----------|---------------------------|-------------------|
| 2                      | `M`       | Approx 37% of symbol      | Approx 15%        |
| 4                      | `H`       | Approx 65% of symbol      | Approx 30%        |

### rMQR Size

The size of the symbol can be defined by setting `symbolSize` to one of the following values:

| `symbolSize` | Version   | Symbol Size | `symbolSize` | Version         | Symbol Size |
|--------------|-----------|-------------|--------------|-----------------|-------------|
| 1            | R7 x 43   | 7 x 43      | 20           | R13 x 77        | 13 x 77     |
| 2            | R7 x 59   | 7 x 59      | 21           | R13 x 99        | 13 x 99     |
| 3            | R7 x 77   | 7 x 77      | 22           | R13 x 139       | 13 x 139    |
| 4            | R7 x 99   | 7 x 99      | 23           | R17 x 43        | 15 x 43     |
| 5            | R7 x 139  | 7 x 139     | 24           | R15 x 59        | 15 x 59     |
| 6            | R9 x 43   | 9 x 43      | 25           | R15 x 77        | 15 x 77     |
| 7            | R9 x 59   | 9 x 59      | 26           | R15 x 99        | 15 x 99     |
| 8            | R9 x 77   | 9 x 77      | 27           | R15 x 139       | 15 x 139    |
| 9            | R9 x 99   | 9 x 99      | 28           | R17 x 43        | 17 x 43     |
| 10           | R9 x 139  | 9 x 139     | 29           | R17 x 59        | 17 x 59     |
| 11           | R11 x 27  | 11 x 27     | 30           | R17 x 77        | 17 x 77     |
| 12           | R11 x 43  | 11 x 43     | 31           | R17 x 99        | 17 x 99     |
| 13           | R11 x 59  | 11 x 59     | 32           | R17 x 139       | 17 x 139    |
| 14           | R11 x 77  | 11 x 77     | 33           | Fixed height 7  |             |
| 15           | R11 x 99  | 11 x 99     | 34           | Fixed height 9  |             |
| 16           | R11 x 139 | 11 x 139    | 35           | Fixed height 11 |             |
| 17           | R13 x 27  | 13 x 27     | 36           | Fixed height 13 |             |
| 18           | R13 x 43  | 13 x 43     | 37           | Fixed height 15 |             |
| 19           | R13 x 59  | 13 x 59     | 38           | Fixed height 17 |             |

:::tip Note
Input values between `33` and `38` fix the height of the symbol while allowing the minimum symbol width to be automatically computed.
:::

### Example

![Micro QR Code](/assets/barcodes/barcode_46.png)

```ts
createStream({
  symbology: SymbologyType.MICROQR,
  symbolSize: 31
}, '123')
```

## UPNQR - Univerzalni Plačilni Nalog QR

This is a variation of QR code used **Združenje Bank Slovenije (Bank Association of Slovenia)**. Its symbology type is `UPNQR`.

:::tip Note
The size, error correction level and ECI are automatically set and do not need to be specified.
:::

### UPNQR Encoding

UPNQR is unusual in that it uses [ISO-8859-2](https://en.wikipedia.org/wiki/ISO/IEC_8859-2)-encoded data. Any UTF-8 data will be automatically converted to ISO-8859-2 format.

:::tip Note
If your data is already formatted as ISO-8859-2, set `encoding` to `EncodingMode.DATA_MODE`.
:::

### Example

![Micro QR Code](/assets/barcodes/barcode_46.png)

```ts
createStream({
  symbology: SymbologyType.UPNQR,
  option1: 2,
  borderWidth: 5,
  scale: 3,
  encoding: EncodingMode.DATA_MODE
}, 'to je testna črtna koda')
```
