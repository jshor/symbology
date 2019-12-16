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

  <a href="https://david-dm.org/jshor/symbology#info=dependencies">
    <img src="https://img.shields.io/david/jshor/symbology?label=deps&style=for-the-badge"
      alt="Dependency Status">
  </a>
</p>

## Introduction

This Node.js module will allow you to generate over 50+ different types of 1D or 2D symbologies, including barcodes for books, grocery, shipping carriers, healthcare, and international codes. It can save a png, svg, or eps image, or render a base64 png bitmap.

## Quick start

```sh
yarn add symbology
```

### Example usage

```js
const symbology = require('symbology')

(async function () {
  try {
    await data = symbology.createStream({
      symbology: symbology.Barcode.CODE128,
      backgroundColor: 'ff00ff',
      foregroundColor: '00ff00'
    }, '12345')

    console.log('Result: ', data)
  } catch (err) {
    console.error('Error: ', err)
  }
})()
```

## Documentation

[Read the comprehensive docs →](https://symbology.dev)

## License

[MIT](LICENSE.md).
