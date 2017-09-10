# ![Symbology.js](https://raw.githubusercontent.com/jshor/symbology/master/symbologyjs-logo.png) Symbology.js

### v1.1.0

Generate 50+ different 1D or 2D barcodes in png, eps, or svg format.

[![Coverage Status](https://coveralls.io/repos/github/jshor/symbology/badge.svg?branch=master)](https://coveralls.io/github/jshor/symbology?branch=master) [![Build Status](https://travis-ci.org/jshor/symbology.svg?branch=master)](https://travis-ci.org/jshor/symbology) [![npm version](https://badge.fury.io/js/symbology.svg)](https://badge.fury.io/js/symbology) [![License](http://img.shields.io/:license-mit-blue.svg)](http://doge.mit-license.org)

[![dependency Status](https://david-dm.org/jshor/symbology/status.png)](https://david-dm.org/jshor/symbology#info=dependencies) [![devDependency Status](https://david-dm.org/jshor/symbology/dev-status.png)](https://david-dm.org/jshor/symbology#info=devDependencies)

## 0. Contents

- [1. Introduction](#1-introduction)
- [2. Installation](#2-installation)
- [3. Usage](#3-usage)
    - [3.1. Import the module](#31-import-the-module)
    - [3.2. Struct](#32-struct)
    - [3.3. Available functions](#33-available-functions)
      - [3.3.1. Render a base64 png](#331-render-a-base64-png)
      - [3.3.2. Render a file](#332-render-a-file)
- [4. Available options (struct)](#4-available-options-struct)
- [5. Error handling](#5-error-handling)
- [6. Symbology types](#6-symbology-types)
- [7. Development](#7-development)
    - [7.1. Building](#71-building)
        - [7.1.1. Prerequisites](#711-prerequisites)
    - [7.2. Testing](#72-testing)
    - [7.3. Packaging](#73-packaging)
    - [7.4. Bugs](#74-bugs)
    - [7.5. Changelog](#75-changelog)
- [8. Credits](#8-credits)
- [9. License](#9-license)

## 1. Introduction

This Node.js module will allow you to generate over 50+ different types of 1D or 2D symbologies, including barcodes for books, grocery, shipping carriers, healthcare, and international codes. It can save a png, svg, or eps image, or render a base64 png bitmap.

## 2. Installation

```
yarn add symbology
```

or:


```
npm install symbology --save
```

If you run into issues when building compiling the module locally, please make sure you have the prerequisites installed. For more info, see: [7.1.1. Prerequisites](#711-prerequisites).

## 3. Usage

### 3.1. Import the module

```javascript
var symbology = require('symbology');
```

### 3.2. Struct

Prepare a Symbol json object with your desired settings (see [4. Available options (struct)](#4-available-options-struct) for more info):
```javascript
var Symbol = {
  symbology: symbology.Barcode.CODE128,
  foregroundColor: 'fff000',
  backgroundColor: '000000',
  fileName: '/my/directory/barcode.png'
};
```
### 3.3. Available functions

Each function returns a promise that completes with an object containing the exit code and message of the function (see [5. Error handling](#5-error-handling) for more info).

----------

### 3.3.1. Render a base64 png:

`createStream(Symbol, data)`

Writes a base64 string to the output object in a property `data`. Returns a `Promise`.

**Note**: The file type of the barcode to render is based on the extension `fileName` setting.
For example, to render an svg, the `fileName` must be of the format: `<myfile>.svg`.

| Parameter    | Type     | Values                       |
|--------------|----------|------------------------------|
| `Symbol`     | `Struct` | Struct of symbology settings |
| `data`       | `String` | Desired data to encode       |


#### Example

```javascript
symbology
  .createStream(Symbol, '12345')
  .then(function(data) {
    console.log('Result: ', data);
  }, function(err) {
    console.log('Error: ', err);
  });
```
Returns:
```javascript
Result: {
  message: '',
  code: 0,
  data: 'data:image/png;base64,iVBOR [...] g=='
}
```
----------

### 3.3.2. Render a file:

`createFile(Symbol, data, type)`

Writes a stream in to the output object in a property `data`. Returns a `Promise`.

| Parameter    | Type     | Values                       | Default |
|--------------|----------|------------------------------|---------|
| `Symbol`     | `Struct` | Struct of symbology settings |         |
| `data`       | `String` | Desired data to encode       |         |
| `type`       | `String` | `png`, `svg`, `eps`          | `png`   |

#### Example

```javascript
symbology
  .createFile(Symbol, '12345')
  .then(function(data) {
    console.log('Result: ', data);
  }, function(err) {
    console.log('Error: ', err);
  });
```

This creates a file in the specified `fileName` and will log:

```javascript
Result: {
  message: '',
  code: 0,
  fileName: 'barcode.png'
}
```

## 4. Available options (struct)

A Symbol is a regular JavaScript object with the following available properties:

| Enumerated type | Type               | Meaning                                                                                                         | Required? | Default value |
|-----------------|--------------------|-----------------------------------------------------------------------------------------------------------------|-----------|---------------|
| symbology       | Symbology enum     | The enumerated type of the symbology (see [Enumerated Barcode Types](#enumerated-barcode-types) for more info). | **Yes**   |               |
| height          | Number             | The height of the image. If specified, this will maintain the aspect ratio.                                     | No        | 50            |
| whitespaceWidth | Number             | Width of whitespace, for barcodes which have this option.                                                       | No        | 0             |
| borderWidth     | Number             | Width of border.                                                                                                | No        | 0             |
| outputOptions   | Number             | Symbology-specific output option.                                                                               | No        | `NULL`        |
| foregroundColor | Hexadecimal number | Barcode foreground color.                                                                                       | No        | #FFFFFF       |
| backgroundColor | Hexadecimal number | Barcode background color.                                                                                       | No        | #000000       |
| fileName        | String             | Full path to the file to render.                                                                                | **Yes***  |               |
| scale           | Number             | Scale of the barcode image. Applies only to PNG.                                                                | No        | 1.0           |
| option1         | Number             | Symbology-type-specific option value.                                                                           | No        | `NULL`        |
| option2         | Number             | Symbology-type-specific option value.                                                                           | No        | `NULL`        |
| option3         | Number             | Symbology-type-specific option value.                                                                           | No        | `NULL`        |

\* required only if using `createFile`.

## 5. Error handling

Each function returns an object having property `code`, which is the status code of the function, and `message`, which contains an error/warning message (if any).

Below are the possible status codes:

| Code          | Enumerated type         | Meaning                                                             |
|---------------|-------------------------|---------------------------------------------------------------------|
| 2             | ZWARN_INVALID_OPTION    | One or more options are invalid but the barcode was created anyway. |
| 5             | ZERROR_TOO_LONG         | The file path was too long.                                         |
| 6             | ZERROR_INVALID_DATA     | The data for the specified symbology is invalid.                    |
| 7             | ZERROR_INVALID_CHECK    | Error checking (if any) on the rendered barcode failed.             |
| 8             | ZERROR_INVALID_OPTION   | One or more options are invalid and rendering failed.               |
| 9             | ZERROR_ENCODING_PROBLEM | Invalid characters in input data.                                   |
| 10            | ZERROR_FILE_ACCESS      | Cannot write to the given path.                                     |
| 11            | ZERROR_MEMORY           | Corrupt or insufficient memory.                                     |

## 6. Symbology types

There are 53 different available symbology types. For an exhaustive list, please see the [Barcode Types list](https://github.com/jshor/symbology/wiki/Barcode-types).

## 7. Development

### 7.1. Building

```
yarn build
```

#### 7.1.1. Prerequisites

[libpng](http://www.libpng.org/pub/png/libpng.html) is a required for building this module. If you receive an error that png.h was not found, it is because libpng is not installed locally.

### 7.2. Testing

```
yarn test
```

### 7.3. Packaging

```
yarn package-binary
```

### 7.4. Bugs

Please report any bugs [here](https://github.com/jshor/symbology/issues).

### 7.5. Changelog

Available [here](https://github.com/jshor/symbology/blob/master/CHANGELOG.md).

## 8. Credits

This library is a JS/C++ wrapper module for the terrific C/C++ library [Zint](https://zint.github.io/), (C) [Robin Stuart](https://github.com/g3rrk). Module by [Josh Shor](https://github.com/jshor).

## 9. License

MIT.
