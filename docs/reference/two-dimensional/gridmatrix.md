# Grid Matrix (AIMD014)

![Grid Matrix](/assets/barcodes/two-dimensional/grid-matrix-basic.svg)

Grid Matrix is a scalable two-dimensional square matrix symbology specifically designed for encoding Chinese characters. The symbol is composed of an arrangement of square blocks, known as macromodules, each featuring a distinct dark or light frame.

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

### Example

The following example renders a Grid Matrix having error correction level of ~50%.

![Grid Matrix ECC 5](/assets/barcodes/two-dimensional/grid-matrix-ecc-5.svg)

```ts
createStream({
  symbology: SymbologyType.GRIDMATRIX,
  errorCorrectionLevel: 5
}, 'AAT2556 电池充电器+降压转换器 200mA至2A tel:86 019 82512738')
```

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
| 7            | 90 x 90   |
| 8            | 102 x 102 |
| 9            | 114 x 114 |
| 10           | 126 x 126 |
| 11           | 138 x 138 |
| 12           | 150 x 150 |
| 13           | 162 x 162 |

### Example

The following example renders a Grid Matrix of size 102 x 102.

![Grid Matrix (102 x 102)](/assets/barcodes/two-dimensional/grid-matrix-size-8.svg)

```ts
createStream({
  symbology: SymbologyType.GRIDMATRIX,
  errorCorrectionLevel: 8
}, 'AAT2556 电池充电器+降压转换器 200mA至2A tel:86 019 82512738')
```

:::tip Note
When both `symbolSize` and `errorCorrectionLevel` are specified, an attempt will be made to satisfy both.
:::

## Encoding

By default Grid Matrix supports encoding in Latin-1 and Chinese characters within the [GB 2312 standard set](https://en.wikipedia.org/wiki/GB_2312) to be encoded in a checkerboard pattern.

Input should be entered as a Unicode UTF-8 stream with conversion to GB 2312 being carried out automatically.

This symbology also supports [ECI encoding](/docs/advanced.md#eci-encoding).

<!--@include: ./partials/fullmultibyte.md-->

:::tip Note
GS1 data is not supported.
:::
