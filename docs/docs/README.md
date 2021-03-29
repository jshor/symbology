# Documentation

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
    const data = await symbology.createStream({
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

## Further reading

[Let's get started →](api.md)
