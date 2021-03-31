# Options

## Basic Config

The following symbology options are available:

| Enumerated type         | Type            | Meaning                                                                                         | Required? | Default value            |
|-------------------------|-----------------|-------------------------------------------------------------------------------------------------|-----------|--------------------------|
| `symbology`             | `SymbologyType` | The enumerated type of the symbology (see [Reference](../reference/README.md) for a list).      | **Yes**   |                          |
| `height`                | `Number`        | The height of the image. If specified, this will maintain the aspect ratio.                     | No        | `50`                     |
| `whitespaceWidth`       | `Number`        | Width of whitespace, for barcodes which have this option.                                       | No        | `0`                      |
| `borderWidth`           | `Number`        | Width of border.                                                                                | No        | `0`                      |
| `outputOptions`         | `OutputOption`  | [Symbology-specific output options.](#output-options)                                           | No        | `0`                      |
| `foregroundColor`       | `String`        | Barcode foreground color. Supports [alpha channels](https://css-tricks.com/8-digit-hex-codes/). | No        | `FFFFFFFF`               |
| `backgroundColor`       | `String`        | Barcode background color. Supports [alpha channels](https://css-tricks.com/8-digit-hex-codes/). | No        | `000000FF`               |
| `fileName`              | `String`        | Full path to the file to render.                                                                | **Yes***  |                          |
| `scale`                 | `Number`        | Scale of the barcode image. Applies only to PNG.                                                | No        | `1.0`                    |
| `option1`               | `Number`        | Symbology-type-specific option value.                                                           | No        | `null`                   |
| `option2`               | `Number`        | Symbology-type-specific option value.                                                           | No        | `null`                   |
| `option3`               | `Number`        | Symbology-type-specific option value.                                                           | No        | `null`                   |
| `showHumanReadableText` | `Boolean`       | Show or hide the symbology data as human-readable text (if applicable).                         | No        | `true`                   |
| `encoding`              | `EncodingMode`  | [The enumerated encoding type of input data.](EncodingMode.md#encoding-modes)                   | No        | `EncodingMode.DATA_MODE` |
| `eci`                   | `Number`        | [ECI encoding mode.](EncodingMode.md#extended-channel-interpolation-eci)                        | No        | `0`                      |
| `primary`               | `String`        | Primary message data for more complex symbols.                                                  | No        | `null`                   |
| `rotation`              | `Number`        | Clockwise rotation of the SymbologyType. Valid values are `0`, `90`, `180`, or `270`.           | No        | `0`                      |
| `dotSize`               | `Number`        | Size of dot used in [`BARCODE_DOTTY_MODE`](#output-options).                                    | No        | `0.8`                    |
| `text`                  | `String`        | Human-readable text to display. Defaults to the input data value.                               | No        | (Data value)             |


\* required only if using [`createFile()`](api.md#createfile).

## Output Options

The `outputOptions` key in the `SymbologyConfig` object can be used to adjust various aspects of the rendered symbology.

| Value                | Effect                                                                 |
|----------------------|------------------------------------------------------------------------|
| `BARCODE_NO_ASCII`   | No options selected. (default)                                         |
| `BARCODE_BIND`       | Boundary bars above and below the symbol and between rows if stacking. |
| `BARCODE_BOX`        | Add a box surrounding the symbol and whitespace.                       |
| `READER_INIT`        | Add a reader initialisation symbol to the data before EncodingMode.        |
| `SMALL_TEXT`         | Use a smaller font for the human readable text.                        |
| `BOLD_TEXT`          | Embolden the human readable text.                                      |
| `CMYK_COLOUR`        | Select the CMYK colour space option for encapsulated PostScript files. |
| `BARCODE_DOTTY_MODE` | Plot a matrix symbol using dots rather than squares.                   |
| `GS1_GS_SEPARATOR`   | Use GS instead FNC1 as GS1 separator.                                  |

### Multiple Options

Options can be applied using the `OutputOption` enumerated type.

Multiple options can be selected by adding them together in the `outputOptions` value.

:::tip Deprecation Notice
Starting in version 2.1.0, the `Options` enum has been renamed to `OutputOption`, and `Options` will be removed in the next major release.
:::

#### Example

```ts
const symbology = require('symbology')

createStream({
  symbology: Symbology.SymbologyType.CODE128,
  outputOptions: Options.BARCODE_BIND + Options.READER_INIT
}, '12345')
```
