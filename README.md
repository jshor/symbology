# node-zint

[![Coverage Status](https://coveralls.io/repos/github/jshor/node-zint/badge.svg?branch=master)](https://coveralls.io/github/jshor/node-zint?branch=master) [![Coverage Status](https://coveralls.io/repos/jshor/node-zint/badge.svg)](https://coveralls.io/r/jshor/node-zint)

# ATTENTION: This module is still in development. It is not yet ready for public use.


## Introduction

A Node.js wrapper for the Zint Barcode generator library.

This library will allow you to generate over 50+ different types of 1D or 2D symbologies, including barcodes for books, grocery, shipping carriers, healthcare, and international codes. It can save a png or svg image, or stream a base64 png representation or svg.

## Installation

node-zint can be [downloaded directly]() or installed via [npm]().

    npm install node-zint --save

## Usage

### Import the module

    var zint = require('../node-zint');


### Struct

Prepare a zint-struct json object with your desired settings (see [docs]() for more info):

  var zintSymbol = {
    symbology: zint.BARCODE_CODE128,
    fgColor: 'fff000',
    bgColor: '000000',
    outFile: 'myBarcode.png'
  };

### Available functions

Each function returns a promise that completes with an object containing the exit code and message of the function (see [error handling]() for more info).

----------

`createStream(zintStruct, data, type)`

Writes a stream in to the output object in a property `data`.

| Parameter    | Type     | Values                       |
|--------------|----------|------------------------------|
| `zintStruct` | `Struct` | Struct of symbology settings |
| `data`       | `String` | Desired data to encode       |
| `type`       | `String` | `png` or `svg`               |


### Example:

    zint
      .createStream(zintSymbol, '12345', 'png')
      .then(function(data) {
        console.log('Result: ', data);
      }, function(err) { 
        console.log('Error: ', err); 
      });

### Returns:
```
  { 
    message: '',
    code: 0,
    data: 'data:image/png;base64,iVBOR [...] g==' 
  }
```
----------

`createFile(zintStruct, data)`

Writes a stream in to the output object in a property `data`.

| Parameter    | Type     | Values                       |
|--------------|----------|------------------------------|
| `zintStruct` | `Struct` | Struct of symbology settings |
| `data`       | `String` | Desired data to encode       |


### Example:

```
  zint
    .createFile(zintSymbol, '12345')
    .then(function(data) {
      console.log('Result: ', data);
    }, function(err) { 
      console.log('Error: ', err); 
    });
```

### This creates a file with the specified `outFile` and returns:

```
  { 
    message: 'error: specified symbology is out of range',
    code: 2
  }
```

## Available settings (struct)

A zint struct is a regular JavaScript object with the following available properties:

TODO: make a table for this...

## Error handling

Each function returns an object having property `code`, which is the status code of the function, and `message`, which contains an error/warning message (if any).

TODO: make a table for this...

## Data input modes

TODO: make a table for this...

## Symbology types

There are 53 different available symbology types. For an exhaustive list, please [see the symbology readme]().

## Development

To compile the latest, ensure you have [node-gyp]() installed. Then run:

```
  node-gyp build
```

For running tests,

```
  npm test
```