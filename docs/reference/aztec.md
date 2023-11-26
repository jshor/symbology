# Aztec Code

![Aztec](/assets/barcodes/aztec.svg)

Aztec Code is a two-dimensional symbol that features a bulls-eye center and bears visual resemblance to the top-down view of an Aztec pyramid.

It has the potential to use less space than other matrix barcodes because it does not require a surrounding blank "quiet zone."

## Aztec Code (ISO 24778)

Depending on the length of the input data, a **Compact Aztec Code** (sometimes called Small Aztec Code) or a "full-range" Aztec Code may be rendered.

The standard Aztec symbology can rendered by using the `AZTEC` symbology type.

## Encoding

Aztec Code supports [ECI encoding](/docs/advanced.md#eci-encoding) and can encode up to a maximum length of approximately 1914 bytes of data (3823 numeric characters or 3067 alphabetic characters).

## Symbol size

To specify the desired size of the symbol, set `symbolSize` to one of the following input values:

| `symbolSize` | Symbol Size | `symbolSize` | Symbol Size |
|--------------|-------------|--------------|-------------|
| 1            | 15 x 15[^1] | 19           | 79 x 79     |
| 2            | 19 x 19[^1] | 20           | 83 x 83     |
| 3            | 23 x 23[^1] | 21           | 87 x 87     |
| 4            | 27 x 27[^1] | 22           | 91 x 91     |
| 5            | 19 x 19     | 23           | 95 x 95     |
| 6            | 23 x 23     | 24           | 101 x 101   |
| 7            | 27 x 27     | 25           | 105 x 105   |
| 8            | 31 x 31     | 26           | 109 x 109   |
| 9            | 37 x 37     | 27           | 113 x 113   |
| 10           | 41 x 41     | 28           | 117 x 117   |
| 11           | 45 x 45     | 29           | 121 x 121   |
| 12           | 49 x 49     | 30           | 125 x 125   |
| 13           | 53 x 53     | 31           | 131 x 131   |
| 14           | 57 x 57     | 32           | 135 x 135   |
| 15           | 61 x 61     | 33           | 139 x 139   |
| 16           | 67 x 67     | 34           | 143 x 143   |
| 17           | 71 x 71     | 35           | 147 x 147   |
| 18           | 75 x 75     | 36           | 151 x 151   |

[^1]: This symbol is "compact," meaning it has a smaller bulls-eye pattern at the center of the symbol.

### Example

![Aztec](/assets/barcodes/aztec.svg)

```ts
createStream({
  symbology: SymbologyType.AZTEC,
  symbolSize: 11 // [!code focus]
}, '123456789012')
```

## Error correction

Error correction codewords will normally be generated to fill at least 23% of the symbol.

There are two ways to change this behavior:

* Specifying the [error correction capacity](#error-correction-capacity), via `errorCorrectionLevel`
* Specifying the [symbol size](#symbol-size), via `symbolSize`

Error correction capacities as low as 3 codewords are acceptable.

:::tip Note
Symbols which have a specified size the amount of error correction dependend on the length of the data input.
:::

:::warning Important
It is not possible to select both symbol size and error correction capacity for the same symbol. If both options are selected then the error correction capacity selection will be ignored.
:::

### Error correction capacity

The amount of error correction data can be specified by setting `errorCorrectionLevel` to one of the following levels:

| `errorCorrectionLevel` | Error Correction Capacity |
|------------------------|---------------------------|
| 1                      | >10% + 3 codewords        |
| 2                      | >23% + 3 codewords        |
| 3                      | >36% + 3 codewords        |
| 4                      | >50% + 3 codewords        |

## Health Industry Barcode (HIBC) Data

[Health Industry Barcode (HIBC)](one-dimensional.md#hibc-code-39) data, which prepends a plus sign character (`+`) and a modulo-49 check digit to the encoded data, can be rendered by using the `HIBC_AZTEC` symbology type.

### Example

![HIBC Aztec](/assets/barcodes/azhibc.svg)

```ts
createStream({
  symbology: SymbologyType.HIBC_AZTEC
}, '123456789012')
```

## Aztec Rune

Defined in [ISO/IEC 24778 (Annex A)](https://www.iso.org/standard/41548.html), this is a truncated version of compact [Aztec Code](l#aztec-code-iso-24778) for encoding whole integers between `0` and `255`.

It includes [Reed-Solomon error correction](https://en.wikipedia.org/wiki/Reed%E2%80%93Solomon_error_correction).

It can be rendered by using the `AZRUNE` type.

### Example

![Aztec Rune](/assets/barcodes/azrunes.svg)

```ts
createStream({
  symbology: SymbologyType.AZRUNE
}, '123')
```
