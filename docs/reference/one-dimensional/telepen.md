# Telepen

![Telepen Numeric](/assets/barcodes/one-dimensional/telepen-numeric.svg)

[Telepen](https://en.wikipedia.org/wiki/Telepen) is a barcode symbology that encodes all 128 ASCII characters without using shift characters for code switching. This symbology uses only two fixed widths for both spaces and bars.

## Telepen Alpha

This variant of Telepen encodes a maximum of 30 characters and includes a modulo-127 check digit. It is accessible using the `TELEPEN` symbology type.

![Telepen Alpha](/assets/barcodes/one-dimensional/telepen-alpha.svg)

```ts
createStream({
  symbology: SymbologyType.TELEPEN
}, '87F80886699')
```

## Telepen Numeric

This variant of Telepen allows compression of numeric data into a Telepen symbol, and its input can be comprised of numbers or pairs consisting of a digit followed by `X`.

A maximum of 60 characters and includes a modulo-127 check digit.

It is accessible using the `TELEPEN_NUM` symbology type.

![Telepen Numeric](/assets/barcodes/one-dimensional/telepen-numeric.svg)

```ts
createStream({
  symbology: SymbologyType.TELEPEN_NUM
}, '466X33')
```
