<p align="center">
  <a href="https://symbology.dev/">
    <img src="https://symbology.dev/assets/hero.svg" width="159" height="95" />
  </a>

  <h1 style="text-align: center;" align="center">Symbology</h1>
</p>

<p align="center">A Node.js module that generates barcode images. Supports 50+ different 1D or 2D symbologies in png, eps, or svg formats.</p>

<p align="center">
  <a href="https://app.codecov.io/gh/jshor/symbology"><img
    src="https://img.shields.io/codecov/c/gh/jshor/symbology?style=for-the-badge"
    alt="Code coverage"
  /></a> <a href="https://github.com/jshor/symbology/actions/workflows/merge.yml"><img
    src="https://img.shields.io/github/actions/workflow/status/jshor/symbology/merge.yml?branch=main&style=for-the-badge"
    alt="Build status"
  /></a> <a href="https://npmjs.com/package/symbology"><img
    src="http://img.shields.io/npm/v/symbology.svg?style=for-the-badge"
    alt="npm version"
  /></a>
</p>

## Introduction

This Node.js module will allow you to generate over 50+ different types of 1D or 2D symbologies, including barcodes for books, grocery, shipping carriers, healthcare, and international codes.

It can create a PNG, SVG, or EPS image file, or return a string containing SVG, PostScript, or base64-encoded PNG data.

## Documentation

[Read the docs →](https://symbology.dev/docs/)

## Quick start

```sh
yarn add symbology
```

## Quick Examples

### Code 11 Example

```ts
import { SymbologyType, createStream } from 'symbology'

(async () => {
  const { data } = await createStream({
    symbology: SymbologyType.CODE11
  }, '8765432164')

  console.log('Result: ', data)
})()
```

This will log:

```json
{
  "data": "data:image/png+data;base64,PHN [...] eFd==",
  "message": "Symbology successfully created.",
  "code": 0
}
```

And the base64 PNG generated will look like:

![code 11](https://symbology.dev/assets/barcodes/barcode_14.png)

### MaxiCode Example

```ts
import { SymbologyType, createFile } from 'symbology'

(async () => {
  const { data } = await createFile({
    symbology: SymbologyType.MAXICODE,
    option1: 2,
    primary: '999999999840012',
    fileName: 'maxiCodeExample.svg'
  }, 'Secondary Message Here')

  console.log('Result: ', data)
})()
```

This creates `maxiCodeExample.svg` which looks like:

![MaxiCode](https://symbology.dev/assets/barcodes/barcode_47.png)

### USPS Example

```ts
import { SymbologyType, createFile } from 'symbology'

(async () => {
  const { data } = await createFile({
    symbology: SymbologyType.ONECODE
    fileName: 'uspsExample.eps'
  }, '01234567094987654321-01234')

  console.log('Result: ', data)
})()
```

This creates `uspsExample.eps` which looks like:

![USPS](https://symbology.dev/assets/barcodes/barcode_42.png)

## License

[GPL-3](LICENSE.md).
