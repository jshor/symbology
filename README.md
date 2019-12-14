<p align="center">
  <img src="./docs/symbology-logo.svg" alt="logo" width="500">
</p>

<p align="center">A Node.js module that generates barcode images. Supports 50+ different 1D or 2D symbologies in png, eps, or svg formats.</p>

<p align="center">
  <a href="https://coveralls.io/github/jshor/symbology?branch=master">
    <img src="https://img.shields.io/coveralls/github/jshor/symbology?style=for-the-badge"
      alt="Code coverage">
  </a>

  <a href="https://travis-ci.org/jshor/symbology">
    <img src="https://img.shields.io/travis/jshor/symbology?logo=travis&style=for-the-badge"
      alt="Build status: Travis">
  </a>

  <a href="https://ci.appveyor.com/project/jshor/symbology">
    <img src="https://img.shields.io/appveyor/ci/jshor/symbology?logo=appveyor&style=for-the-badge"
      alt="Build status: AppVeyor">
  </a>

  <a href="https://david-dm.org/jshor/symbology#info=dependencies">
    <img src="https://img.shields.io/david/jshor/symbology?style=for-the-badge"
      alt="Dependency Status">
  </a>
</p>

## Contents

- [1. Introduction](#1-introduction)
- [2. Installation](#2-installation)
  - [2.1. Manual installation](#21-manual-installation)
    - [2.1.1. Compiling on Windows](#211-compiling-on-windows)
    - [2.1.2. Compiling on Linux or macOS](#212-compiling-on-linux-or-macos)
- [3. API](#3-api)
  - [3.1. Stream a barcode](#31-stream-a-barcode)
  - [3.2. Render a file](#32-render-a-file)
- [4. Available options (`Symbol`)](#4-available-options-symbol)
- [5. Error handling](#5-error-handling)
- [6. Symbology types](#6-symbology-types)
- [7. Development](#7-development)
  - [7.1. Building](#71-building)
  - [7.2. Testing](#72-testing)
  - [7.3. Packaging](#73-packaging)
  - [7.4. Bugs](#74-bugs)
  - [7.5. Changelog](#75-changelog)
- [8. Supported platforms](#8-supported-platforms)
- [9. Credits](#9-credits)
- [10. License](#10-license)

# 1. Introduction

This Node.js module will allow you to generate over 50+ different types of 1D or 2D symbologies, including barcodes for books, grocery, shipping carriers, healthcare, and international codes. It can save a png, svg, or eps image, or render a base64 png bitmap.

# 2. Installation

```sh
yarn add symbology --fallback-to-build
```

## 2.1 Manual installation

If you run into issues downloading the binary, `--fallback-to-build` will compile the module from source.

You may also compile from source by running `npm rebuild`.

### 2.1.1 Compiling on Windows

Ensure you have [`windows-build-tools`](http://npmjs.com/package/windows-build-tools) globally installed, which bundles Visual C++ Build Tools.

```sh
yarn global add windows-build-tools
```

Then you can compile the module by running `npm rebuild` in your project directory.

### 2.1.2 Compiling on Linux or macOS

Simply run `npm rebuild` in your project directory. `node-gyp` will utilize the OS's bundled GCC compiler.

# 3. API

Each function returns a promise that completes with an object containing the exit code and message of the function (see [5. Error handling](#5-error-handling) for more info).

----------

## 3.1. Stream a barcode:

`createStream(symbol, data, outputType)`

Writes the file string to the output object in a property `data`. Returns a `Promise`.

**Note**: For png, it will render `data` as a base64 string.

| Parameter    | Type     | Values                       | Default    |
|--------------|----------|------------------------------|------------|
| `symbol`     | `Symbol` | Struct of symbology settings |            |
| `data`       | `String` | Desired data to encode       |            |
| `outputType` | `String` | Output type                  | `PNG`      |

### Output Types

| Enum   | Description                          |
|--------|--------------------------------------|
| `EPS`  | Adobe encapsulated postscript vector |
| `SVG`  | Scalable vector graphics             |
| `PNG`  | Portable network graphics            |

### Example

```js
try {
  await data = symbology.createStream(Symbol, '12345', symbology.Output.PNG)

  console.log('Result: ', data)
} catch (err) {
  console.error('Error: ', err)
}
```

Returns:

```json
{
  "message": "",
  "code": 0,
  "data": "data:image/png;base64,iVBOR [...] g=="
}
```
----------

## 3.2. Render a file:

`createFile(Symbol, data)`

Creates a file with the requested barcode. Returns a `Promise`.

**Note**: The file type of the barcode to render is based on the extension `fileName` setting.
For example, to render an svg, the `fileName` must be of the format: `<myfile>.svg`.

| Parameter    | Type     | Values                       |
|--------------|----------|------------------------------|
| `symbol`     | `Symbol` | Object of symbology settings |
| `data`       | `String` | Desired data to encode       |

### Example

```js
try {
  await data = symbology.createFile(Symbol, '12345', symbology.Output.PNG)

  console.log('File created! Result: ', data)
} catch (err) {
  console.error('Error: ', err)
}
```

This creates a file in the specified `fileName` and will log:

```json
{
  "message": "",
  "code": 0,
  "fileName": "barcode.png"
}
```

# 4. Available options (`Symbol`)

A `Symbol` is a regular JavaScript object with the following available properties:

| Enumerated type       | Type               | Meaning                                                                                                         | Required? | Default value |
|-----------------------|--------------------|-----------------------------------------------------------------------------------------------------------------|-----------|---------------|
| symbology             | Symbology enum     | The enumerated type of the symbology (see [Enumerated Barcode Types](docs/symbology-types.md) for more info). | **Yes**   |               |
| height                | Number             | The height of the image. If specified, this will maintain the aspect ratio.                                     | No        | 50            |
| whitespaceWidth       | Number             | Width of whitespace, for barcodes which have this option.                                                       | No        | 0             |
| borderWidth           | Number             | Width of border.                                                                                                | No        | 0             |
| outputOptions         | Number             | Symbology-specific output option.                                                                               | No        | `NULL`        |
| foregroundColor       | Hexadecimal number | Barcode foreground color.                                                                                       | No        |  FFFFFF       |
| backgroundColor       | Hexadecimal number | Barcode background color.                                                                                       | No        |  000000       |
| fileName              | String             | Full path to the file to render.                                                                                | **Yes***   |               |
| scale                 | Number             | Scale of the barcode image. Applies only to PNG.                                                                | No        | 1.0           |
| option1               | Number             | Symbology-type-specific option value.                                                                           | No        | `NULL`        |
| option2               | Number             | Symbology-type-specific option value.                                                                           | No        | `NULL`        |
| option3               | Number             | Symbology-type-specific option value.                                                                           | No        | `NULL`        |
| showHumanReadableText | Boolean            | Show or hide the symbology data as human-readable text (if applicable).                                         | No        | `true`        |

\* required only if using [`createFile()`](#32-render-a-file).

# 5. Error handling

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

# 6. Symbology types

There are 53 different available symbology types. For an exhaustive list, please see the [Barcode Types list](docs/symbology-types.md).

# 7. Development

## 7.1. Building

```
yarn build
```

## 7.2. Testing

```
yarn test
```

## 7.3. Packaging

```
yarn package:binary
```

## 7.4. Bugs

Please report any bugs [here](https://github.com/jshor/symbology/issues).

## 7.5. Changelog

Available [here](https://github.com/jshor/symbology/blob/master/CHANGELOG.md).

# 8. Supported platforms

Node.js 10+ is supported for macOS, Linux, Windows (x32), and Windows (x64).

# 9. Credits

This library is a JS/C++ wrapper module for the terrific C/C++ library [Zint](https://zint.github.io/), (C) [Robin Stuart](https://github.com/g3rrk). Module by [Josh Shor](https://github.com/jshor).

# 10. License

[MIT](LICENSE.md).
