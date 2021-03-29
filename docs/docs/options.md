# Options

## Basic Config

The following symbology options are available:

| Enumerated type         | Type       | Meaning                                                                                          | Required? | Default value |
|-------------------------|------------|--------------------------------------------------------------------------------------------------|-----------|---------------|
| `symbology`             | `Symbol`   | The enumerated type of the symbology (see [Reference](../guide/README.md) for a list).           | **Yes**   |               |
| `height`                | `Number`   | The height of the image. If specified, this will maintain the aspect ratio.                      | No        | `50`          |
| `whitespaceWidth`       | `Number`   | Width of whitespace, for barcodes which have this option.                                        | No        | `0`           |
| `borderWidth`           | `Number`   | Width of border.                                                                                 | No        | `0`           |
| `outputOptions`         | `Number`   | [Symbology-specific output options.](#output-options)                                            | No        | `0`           |
| `foregroundColor`       | `String`   | Barcode foreground color. Supports [alpha channels](https://css-tricks.com/8-digit-hex-codes/).  | No        | `FFFFFFFF`    |
| `backgroundColor`       | `String`   | Barcode background color.  Supports [alpha channels](https://css-tricks.com/8-digit-hex-codes/). | No        | `000000FF`    |
| `fileName`              | `String`   | Full path to the file to render.                                                                 | **Yes***  |               |
| `scale`                 | `Number`   | Scale of the barcode image. Applies only to PNG.                                                 | No        | `1.0`         |
| `option1`               | `Number`   | Symbology-type-specific option value.                                                            | No        | `null`        |
| `option2`               | `Number`   | Symbology-type-specific option value.                                                            | No        | `null`        |
| `option3`               | `Number`   | Symbology-type-specific option value.                                                            | No        | `null`        |
| `showHumanReadableText` | `Boolean`  | Show or hide the symbology data as human-readable text (if applicable).                          | No        | `true`        |
| `encoding`              | `Encoding` | [The enumerated encoding type of input data.](encoding.md#encoding-modes)                        | No        | `DATA_MODE`   |
| `eci`                   | `Number`   | [ECI encoding mode.](encoding.md#extended-channel-interpolation-eci)                             | No        | `0`           |
| `primary`               | `String`   | Primary message data for more complex symbols.                                                   | No        | `null`        |
| `text`                  | `String`   | Human-readable text to display. Defaults to the input data value.                                | No        | (Data value)  |

\* required only if using [`createFile()`](api.md#createfile).

## Output Options

`outputOptions` can be used to adjust various aspects of the rendered symbology.

| Value                | Effect                                                                 |
|----------------------|------------------------------------------------------------------------|
| `BARCODE_NO_ASCII`   | No options selected. (default)                                         |
| `BARCODE_BIND`       | Boundary bars above and below the symbol and between rows if stacking. |
| `BARCODE_BOX`        | Add a box surrounding the symbol and whitespace.                       |
| `READER_INIT`        | Add a reader initialisation symbol to the data before encoding.        |
| `SMALL_TEXT`         | Use a smaller font for the human readable text.                        |
| `BOLD_TEXT`          | Embolden the human readable text.                                      |
| `CMYK_COLOUR`        | Select the CMYK colour space option for encapsulated PostScript files. |
| `BARCODE_DOTTY_MODE` | Plot a matrix symbol using dots rather than squares.                   |

### Multiple Options

Options can be applied using the `Options` enumerated type.

Multiple options can be selected by adding them together in the `outputOptions` value.

#### Example

```js
const symbology = require('symbology')

symbology.createStream({
  symbology: Symbology.Barcode.CODE128,
  outputOptions: symbology.Options.BARCODE_BIND + symbology.Options.READER_INIT
}, '12345')
```
