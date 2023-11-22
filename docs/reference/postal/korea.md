# Korea Post Barcode

[Korea Post](https://en.wikipedia.org/wiki/Korea_Post) Barcode encodes a six-digit number and can be rendered using the `KOREAPOST` symbology type.

A check digit is automatically added.

## Example

![Korea Post Barcode](/assets/barcodes/one-dimensional/korea.svg)

```ts
createStream({
  symbology: SymbologyType.KOREAPOST
}, '123456')
```