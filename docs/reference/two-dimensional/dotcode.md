# DotCode (ISO/IEC 15434)

![DotCode](/assets/barcodes/two-dimensional/dotcode.svg)

[DotCode](https://en.wikipedia.org/wiki/DotCode) uses a grid of dots in a rectangular formation to encode characters up to a maximum of ~450 characters (or 900 numeric digits).

This symbology can be rendered using the `DOTCODE` type.

## Encoding

<!--@include: ./partials/encoding.md-->

## Size

The default output is a symbol that is approximately square.

To adjust the width of the symbol, set `symbolSize` to width of any integer in the range `1` to `200`.

:::warning Important
Outputting DotCode to PNG will require setting the scale of the image to a larger value than its default (~10) for the dots to render readably.
:::

## Error correction

This symbol uses [Reed–Solomon error correction](https://en.wikipedia.org/wiki/Reed%E2%80%93Solomon_error_correction) until the image can be appropriately interpreted.

:::tip Note
Approximately 33% of the resulting symbol is comprised of error correction codewords.
:::

## Masking

The optimal mask is automatically selected but one may be defined explicitly by defining `mask` as an integer between `0` and `7`.

* The first set of values (`0` to `3`) are mask patterns *without* corners lit.
* The second set of values (`4` to `7`) are identical to `0` to `3` except *with* corners lit.

## Examples

### Basic encoding

![Basic example](/assets/barcodes/two-dimensional/dotcode.svg)

```ts
createStream({
  symbology: SymbologyType.DOTCODE
}, '1234567890121234')
```

### With masking (normal)

![Example with masking, normal](/assets/barcodes/two-dimensional/dotcode-mask-3.svg)

```ts
createStream({
  symbology: SymbologyType.DOTCODE,
  mask: 3 // [!code focus]
}, '1234567890121234')
```

### With masking (corners lit)

![Example with masking, corners lit](/assets/barcodes/two-dimensional/dotcode-mask-7.svg)

```ts
createStream({
  symbology: SymbologyType.DOTCODE,
  mask: 7 // [!code focus]
}, '1234567890121234')
```

### With GS1 Data

![Example with GS1 data](/assets/barcodes/two-dimensional/dotcode-gs1.svg)

```ts
createStream({
  symbology: SymbologyType.DOTCODE,
  gs1: true
}, '[01]00012345678905[17]201231[10]ABC123456')
```

