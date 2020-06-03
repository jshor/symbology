<p align="center">
  <a href="https://symbology.dev"><img src="https://raw.githubusercontent.com/jshor/symbology/master/docs/.vuepress/public/assets/symbology-logo.svg?sanitize=true" alt="Symbology Logo" width="500"></a>
</p>

<p align="center">A Node.js module that generates barcode images. Supports 50+ different 1D or 2D symbologies in png, eps, or svg formats.</p>

<p align="center">
  <a href="https://coveralls.io/github/jshor/symbology?branch=master">
    <img src="https://img.shields.io/coveralls/github/jshor/symbology?style=for-the-badge"
      alt="Code coverage">
  </a>

  <a href="https://travis-ci.org/jshor/symbology?branch=master">
    <img src="https://img.shields.io/travis/com/jshor/symbology/master?logo=travis&style=for-the-badge"
      alt="Build status: Travis">
  </a>

  <a href="https://ci.appveyor.com/project/jshor/symbology?branch=master">
    <img src="https://img.shields.io/appveyor/ci/jshor/symbology/master?logo=appveyor&style=for-the-badge"
      alt="Build status: AppVeyor">
  </a>
</p>

## Introduction

This Node.js module will allow you to generate over 50+ different types of 1D or 2D symbologies, including barcodes for books, grocery, shipping carriers, healthcare, and international codes.

It can create a PNG, SVG, or EPS image file, or return a string containing SVG, PostScript, or base64-encoded PNG data.

## Documentation

[Read the comprehensive docs →](https://symbology.dev)

## Quick start

```sh
yarn add symbology
```

## Quick Examples

### Code 11 Example

```js
const symbology = require('symbology')

symbology
  .createStream({
    symbology: symbology.Barcode.CODE128
  }, '8765432164')
  .then((data) => {
    console.log('Result: ', data)
  })
```

This will log:

```json
{
  "data": "data:image/png+data;base64,PHN [...] eFd==",
  "message": "",
  "code": 0
}
```

And the base64 PNG generated will look like:

![code 11](https://symbology.dev/assets/barcodes/barcode_14.png)

### MaxiCode Example

```js
symbology
  .createFile({
    symbology: Symbology.Barcode.MAXICODE,
    option1: 2,
    primary: '999999999840012',
    fileName: 'maxiCodeExample.svg'
  }, 'Secondary Message Here')
  .then((data) => {
    console.log('Result: ', data)
  })
```

This creates `maxiCodeExample.svg` which looks like:

![MaxiCode](https://symbology.dev/assets/barcodes/barcode_47.png)

### USPS Example

```js
symbology
  .createFile({
    symbology: Symbology.Barcode.ONECODE
    fileName: 'uspsExample.eps'
  }, '01234567094987654321-01234')
  .then((data) => {
    console.log('Result: ', data)
  })
```

This creates `uspsExample.eps` which looks like:

![USPS](https://symbology.dev/assets/barcodes/barcode_42.png)

## License

[GPL-3](LICENSE.md).
