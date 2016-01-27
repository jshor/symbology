# Symbology.js

Generate 50+ different 1D or 2D barcodes in png, eps, or svg format.

[![Coverage Status](https://coveralls.io/repos/github/jshor/symbology/badge.svg?branch=master)](https://coveralls.io/github/jshor/symbology?branch=master) [![Build Status](https://travis-ci.org/jshor/symbology.svg?branch=master)](https://travis-ci.org/jshor/symbology) [![npm version](https://badge.fury.io/js/symbology.svg)](https://badge.fury.io/js/symbology) [![License](http://img.shields.io/:license-mit-blue.svg)](http://doge.mit-license.org)

[![dependency Status](https://david-dm.org/jshor/symbology/dev-status.png)](https://david-dm.org/jshor/symbology#info=dependencies) [![devDependency Status](https://david-dm.org/jshor/symbology/dev-status.png)](https://david-dm.org/jshor/symbology#info=devDependencies)

## 0. Contents

- [1. Introduction](#introduction)
- [2. Installation](#installation)
- [3. Usage](#usage)
    - [3.1. Import the module](#importing)
    - [3.2. Struct](#struct)
    - [3.3. Available functions](#functions)
      - [3.3.1. Render a base64 png](#createStream)
      - [3.3.2. Render a file](#createFile)
- [4. Available options (struct)](#options)
- [5. Error handling](#errors)
- [6. Symbology types](#types)
    - [6.1. Building](#building)
    - [6.2. Testing](#testing)
    - [6.3. Packaging](#packaging)
    - [6.4. Bugs](#bugs)
    - [6.5. Changelog](#changelog)
- [7. Credits](#credits)
- [8. License](#license)

## 1. [Introduction](#introduction)

This Node.js module will allow you to generate over 50+ different types of 1D or 2D symbologies, including barcodes for books, grocery, shipping carriers, healthcare, and international codes. It can save a png, svg, or eps image, or render a base64 png bitmap.

## 2. [Installation](#installation)

symbology can be [downloaded directly](https://github.com/jshor/symbology/archive/1.0.3.zip) or installed via [npm](https://www.npmjs.com/package/symbology).

```
npm install symbology --save
```

## 3. [Usage](#usage)

### 3.1. [Import the module](#importing)

```
var symbology = require('symbology');
```

### 3.2. [Struct](#struct)

Prepare a Symbol json object with your desired settings (see [Symbology Struct]() for more info):
```
var Symbol = {
  symbology: symbology.BARCODE_CODE128,
  foregroundColor: 'fff000',
  backgroundColor: '000000',
  fileName: '/my/directory/barcode.png'
};
```
### 3.3. [Available functions](#functions)

Each function returns a promise that completes with an object containing the exit code and message of the function (see [Error Handling]() for more info).

----------

### 3.3.1. [Render a base64 png](#createStream):

`createStream(Symbol, data, type)`

Writes a base64 string to the output object in a property `data`.

| Parameter    | Type     | Values                       |
|--------------|----------|------------------------------|
| `Symbol`     | `Struct` | Struct of symbology settings |
| `data`       | `String` | Desired data to encode       |


#### Example

```
symbology
  .createStream(Symbol, '12345', 'png')
  .then(function(data) {
    console.log('Result: ', data);
  }, function(err) { 
    console.log('Error: ', err); 
  });
```
Returns:
```
Result: { 
  message: '',
  code: 0,
  data: 'data:image/png;base64,iVBOR [...] g==' 
}
```
----------

### 3.3.2. [Render a file](#createFile):

`createFile(Symbol, data)`

Writes a stream in to the output object in a property `data`.

| Parameter    | Type     | Values                       |
|--------------|----------|------------------------------|
| `Symbol`     | `Struct` | Struct of symbology settings |
| `data`       | `String` | Desired data to encode       |

#### Example

```
symbology
  .createFile(Symbol, '12345')
  .then(function(data) {
    console.log('Result: ', data);
  }, function(err) { 
    console.log('Error: ', err); 
  });
```

This creates a file in the specified `fileName` and will log:

```
Result: { 
  message: '',
  code: 0,
  fileName: 'barcode.png'
}
```

## 4. [Available options (struct)](#options)

A Symbol is a regular JavaScript object with the following available properties:

TODO: make a table for this...

## 5. [Error handling](#errors)

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

## 6. [Symbology types](#types)

There are 53 different available symbology types. For an exhaustive list, please see the [Symbology Enum ]().

## Development (outdated info)

### 6.1. [Building](#building)

To compile the latest, ensure you have [node-pre-gyp](https://github.com/mapbox/node-pre-gyp) installed. Then run:

```
npm run build
```

### 6.2. [Testing](#testing)

```
npm test
```

### 6.3. [Packaging](#packaging)

```
npm run package-binary
```

### 6.4. [Bugs](#bugs)

Replace report all bugs [here]().

### 6.5. [Changelog](#changelog)

Available [here]().

## 7. [Credits](#credits)

This library is a JS/C++ wrapper module for the terrific C/C++ library [Zint](https://zint.github.io/), (C) [Robin Stuart](https://github.com/g3rrk). Module by [Josh Shor](https://github.com/jshor). 

## 8. [License](#license)

MIT.
