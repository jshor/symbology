# Grid Matrix

![Grid Matrix](/assets/barcodes/barcode_51.png)

This symbology can be rendered using the `GRIDMATRIX` type.

## Error correction

The error correction capacity can be specified by setting `errorCorrectionLevel` to one of the following values:

| `errorCorrectionLevel` | Error Correction Capacity |
| ---------------------- | ------------------------- |
| 1                      | Approximately 10%         |
| 2                      | Approximately 20%         |
| 3                      | Approximately 30%         |
| 4                      | Approximately 40%         |
| 5                      | Approximately 50%         |

## Symbol size

The symbol size can be specified by setting `symbolSize` to one of the following values:

| `symbolSize` | Size      |
| ------------ | --------- |
| 1            | 18 x 18   |
| 2            | 30 x 30   |
| 3            | 42 x 42   |
| 4            | 54 x 54   |
| 5            | 66 x 66   |
| 6            | 78 x 78   |
| 7            | 90 x 90    |
| 8            | 102 x 102 |
| 9            | 114 x 114 |
| 10           | 126 x 126 |
| 11           | 138 x 138 |
| 12           | 150 x 150 |
| 13           | 162 x 162 |

## Encoding

By default Grid Matrix supports encoding in Latin-1 and Chinese characters within the [GB 2312 standard set](https://en.wikipedia.org/wiki/GB_2312) to be encoded in a checkerboard pattern.

Input should be entered as a Unicode UTF-8 stream with conversion to GB 2312 being carried out automatically.

This symbology also supports [ECI encoding](/docs/advanced.md#eci-encoding).

<!--@include: ./partials/fullmultibyte.md-->

## Example

The following will render a 30 x 30 Grid Matrix symbol with 20% error correction encoding `12345`:

```ts
createStream({
  symbology: SymbologyType.GRIDMATRIX,
  symbolSize: 2,
  errorCorrectionLevel: 2
}, '12345')
```

:::warning Important
When `symbolSize` and `errorCorrectionLevel` are specified at the same time, both parameters will be attempted to be satisfied.
:::
