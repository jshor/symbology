# Documentation

## Introduction

This Node.js module will allow you to generate over 50+ different types of 1D or 2D symbologies, including barcodes for books, grocery, shipping carriers, healthcare, and international codes. It can save a png, svg, or eps image, or render a base64 png bitmap.

## Quick start

```sh
yarn add symbology
```

### Example usage

```ts
import {
  OutputOption,
  EncodingMode,
  SymbologyType,
  createStream
} from 'symbology'

(async () => {
  try {
    const { data } = await createFile({
      symbology: SymbologyType.CODE128,
      encoding: EncodingMode.GS1_MODE,
      fileName: 'out.svg',
      backgroundColor: '00000000',
      foregroundColor: '00FF00FF'
    }, '12345')

    console.log('File successfully created.')
  } catch (err) {
    console.error('Error: ', err)
  }
})()
```

## Further reading

[Let's get started →](api.md)
