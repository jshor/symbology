# symbology

[![Coverage Status](https://coveralls.io/repos/github/jshor/symbology/badge.svg?branch=master)](https://coveralls.io/github/jshor/symbology?branch=master) [![Build Status](https://travis-ci.org/jshor/symbology.svg?branch=master)](https://travis-ci.org/jshor/symbology) [![npm version](https://badge.fury.io/js/barnode.svg)](https://badge.fury.io/js/barnode)


## Introduction

This Node.js module will allow you to generate over 50+ different types of 1D or 2D symbologies, including barcodes for books, grocery, shipping carriers, healthcare, and international codes. It can save a png, svg, or eps image, or render a base64 png bitmap.

## Installation

symbology can be [downloaded directly]() or installed via [npm]().

```
npm install symbology --save
```
## Usage

### Import the module

```
var symbology = require('../symbology');
```

### Struct

Prepare a Symbol json object with your desired settings (see [docs]() for more info):
```
var Symbol = {
  symbology: symbology.BARCODE_CODE128,
  foregroundColor: 'fff000',
  backgroundColor: '000000',
  fileName: '/my/directory/barcode.png'
};
```
### Available functions

Each function returns a promise that completes with an object containing the exit code and message of the function (see [error handling]() for more info).

----------

`createStream(Symbol, data, type)`

Writes a stream in to the output object in a property `data`.

| Parameter    | Type     | Values                       |
|--------------|----------|------------------------------|
| `Symbol`     | `Struct` | Struct of symbology settings |
| `data`       | `String` | Desired data to encode       |
| `type`       | `String` | `png`, `svg` or `eps`        |


### Example:
```
symbology
  .createStream(Symbol, '12345', 'png')
  .then(function(data) {
    console.log('Result: ', data);
  }, function(err) { 
    console.log('Error: ', err); 
  });
```
### Returns:
```
{ 
  message: '',
  code: 0,
  data: 'data:image/png;base64,iVBOR [...] g==' 
}
```
----------

`createFile(Symbol, data)`

Writes a stream in to the output object in a property `data`.

| Parameter    | Type     | Values                       |
|--------------|----------|------------------------------|
| `Symbol`     | `Struct` | Struct of symbology settings |
| `data`       | `String` | Desired data to encode       |


### Example:

```
symbology
  .createFile(Symbol, '12345')
  .then(function(data) {
    console.log('Result: ', data);
  }, function(err) { 
    console.log('Error: ', err); 
  });
```

### This creates a file in the specified `fileName` and returns:

```
{ 
  message: 'error: specified symbology is out of range',
  code: 2
}
```

## Available settings (struct)

A Symbol is a regular JavaScript object with the following available properties:

TODO: make a table for this...

## Error handling

Each function returns an object having property `code`, which is the status code of the function, and `message`, which contains an error/warning message (if any).

TODO: make a table for this...

## Data input modes

TODO: make a table for this...

## Symbology types

There are 53 different available symbology types. For an exhaustive list, please [see the symbology readme]().

## Development (outdated info)

To compile the latest, ensure you have [node-gyp]() installed. Then run:

```
node-gyp build
```

For running tests,

```
npm test
```