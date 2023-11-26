# Aztec

## Aztec Code (ISO 24778)

![Aztec Code](/assets/barcodes/barcode_48.png)

Invented by Andrew Longacre at Welch Allyn Inc in 1995, the Aztec Code symbol is a matrix symbol with a distinctive bulls-eye finder pattern.

:::warning Important
Depending on the length of the input data, a **Compact Aztec Code** (sometimes called Small Aztec Code) or a "full-range" Aztec Code may be selected.
:::

Aztec Code supports ECI encoding and can encode up to a maximum length of approximately 3823 numeric or 3067 alphabetic characters or 1914 bytes of data.

:::tip Note
A separate symbology ID can be used to encode [Health Industry Barcode (HIBC)](one-dimensional.md#hibc-code-39) data which adds a leading `+` character and a modulo-49 check digit to the encoded data.
:::

## Error correction

Error correction codewords will normally be generated to fill at least 23% of the symbol. Symbols which have a specified size the amount of error correction is dependent on the length of the data input. Error correction capacities as low as 3 codewords are acceptable.

There are two ways to change this behavior:

* Specifying the [Error correction capacity](#error-correction-capacity), via `option1`
* Specifying the [Symbol Size](#symbol-size) via `option2`

### Error correction capacity

The amount of error correction data can be specified by setting `option1` to one of the following modes:

| Mode | Error Correction Capacity |
|------|---------------------------|
| 1    | >10% + 3 codewords        |
| 2    | >23% + 3 codewords        |
| 3    | >36% + 3 codewords        |
| 4    | >50% + 3 codewords        |

## Symbol Size

To specify the desired size of the symbol, set `option2` to one of the following input values:

| Input | Symbol Size | Input | Symbol Size |
|-------|-------------|-------|-------------|
| 1     | 15 x 15*    | 19    | 79 x 79     |
| 2     | 19 x 19*    | 20    | 83 x 83     |
| 3     | 23 x 23*    | 21    | 87 x 87     |
| 4     | 27 x 27*    | 22    | 91 x 91     |
| 5     | 19 x 19     | 23    | 95 x 95     |
| 6     | 23 x 23     | 24    | 101 x 101   |
| 7     | 27 x 27     | 25    | 105 x 105   |
| 8     | 31 x 31     | 26    | 109 x 109   |
| 9     | 37 x 37     | 27    | 113 x 113   |
| 10    | 41 x 41     | 28    | 117 x 117   |
| 11    | 45 x 45     | 29    | 121 x 121   |
| 12    | 49 x 49     | 30    | 125 x 125   |
| 13    | 53 x 53     | 31    | 131 x 131   |
| 14    | 57 x 57     | 32    | 135 x 135   |
| 15    | 61 x 61     | 33    | 139 x 139   |
| 16    | 67 x 67     | 34    | 143 x 143   |
| 17    | 71 x 71     | 35    | 147 x 147   |
| 18    | 75 x 75     | 36    | 151 x 151   |

## Example

The following will render a 45x45 Aztec Code symbol with 23% error correction capacity:

```ts
createStream({
  symbology: SymbologyType.AZTEC,
  option1: 2,
  option2: 11
}, '12345')
```

:::tip Note
The symbols marked with an asterisk (`*`) in the table below are "compact" symbols, meaning they have a smaller bulls-eye pattern at the centre of the symbol.
:::

:::warning Important
It is not possible to select both symbol size and error correction capacity for the same symbol. If both options are selected then the error correction capacity selection will be ignored.
:::

## Aztec Rune

![Aztec Rune](/assets/barcodes/barcode_49.png)

Defined in [ISO/IEC 24778 (Annex A)](https://www.iso.org/standard/41548.html), a truncated version of compact [Aztec Code](l#aztec-code-iso-24778) for encoding whole integers between `0` and `255`. Includes [Reed-Solomon error correction](https://en.wikipedia.org/wiki/Reed%E2%80%93Solomon_error_correction).

#### Example

The following will render an Aztec Rune symbol encoding `123`:

```ts
createStream({
  symbology: SymbologyType.AZRUNE
}, '123')
```
