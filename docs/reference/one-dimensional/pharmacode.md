# Pharmacode (EN 798)

[Pharmacode](https://en.wikipedia.org/wiki/Pharmacode), also known as **Laetuscode** or **Pharmaceutical Binary Code**, is a symbology used in the pharmaceutical industry, designed to be readable in spite of printing errors.

Its input consists of an integer between `3` and `131070`.

The standard Code 39 symbol can rendered by using the `PHARMA` symbology type.

## Example

![Pharmacode](/assets/barcodes/one-dimensional/pharmacode.svg)

```ts
createStream({
  symbology: SymbologyType.PHARMA
}, '100574')
```
