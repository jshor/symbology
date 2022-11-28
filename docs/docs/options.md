# Options

## symbology

The enumerated type of the symbology (see [Reference](../reference/) for a list).

* Type: [`SymbologyType`](../reference/)
* Required: **yes**

## fileName

Full path to the file to create.

* Type: `string`
* Required: **yes**, if using [`createFile()`](api.md#createfile)

## text

Human-readable text to display.

* Type: `string`
* Required: no
* Default value: the input data value

## primary

Primary message data, for more complex symbols.

* Type: `string`
* Required: no
* Default value: `null`

## showHumanReadableText

If true, shows text underneath a barcode (if the symbology supports it). If false, text will not show.

* Type: `boolean`
* Required: no
* Default value: `true`

## foregroundColor

Barcode foreground color. [Supports alpha channels](https://css-tricks.com/8-digit-hex-codes/).

* Type: `string`
* Required: no
* Default value: `FFFFFFFF`

## backgroundColor

Barcode background color. [Supports alpha channels](https://css-tricks.com/8-digit-hex-codes/).

* Type: `string`
* Required: no
* Default value: `000000FF`

## encoding

The [encoding type](EncodingMode.md#encoding-modes) of the input data, if applicable.

* Type: [`EncodingMode`](EncodingMode.md#encoding-modes)
* Required: no
* Default value: `EncodingMode.DATA_MODE`

## eci

The [ECI encoding mode](https://en.wikipedia.org/wiki/Extended_Channel_Interpretation#Types_of_ECI_indicator) of the input data, if applicable.

* Type: `number`
* Required: no
* Default value: `0`

## height

The height of the image, in pixels. If specified, this will maintain the aspect ratio.

* Type: `number`
* Required: no
* Default value: `50`

## whitespaceWidth

The width of whitespace, for barcodes which have this option.

* Type: `number`
* Required: no
* Default value: `0`

## borderWidth

The width of the border.

* Type: `number`
* Required: no
* Default value: `0`

## scale

Scale of the barcode image. **Applies only to PNG**.

* Type: `number`
* Required: no
* Default value: `1.0`

## rotation

The clockwise rotation of the SymbologyType.

* Type: `number`
* Required: no
* Default value: `0`
* Valid values: `0`, `90`, `180`, `270`

## dotSize

Size of dot used in [`BARCODE_DOTTY_MODE`](#output-options).

* Type: `number`
* Required: no
* Default value: `0.8`

## outputOptions

Symbology-specific [output options](#output-options).

* Type: [`OutputOption`](#output-options)
* Required: no
* Default value: `0`

## option1

Symbology-type-specific option value.

* Type: `number`
* Required: no
* Default value: `null`

## option2

Symbology-type-specific option value.

* Type: `number`
* Required: no
* Default value: `null`

## option3

Symbology-type-specific option value.

* Type: `number`
* Required: no
* Default value: `null`

## Output Options

The `outputOptions` key in the `SymbologyConfig` object can be used to adjust various aspects of the rendered symbology.

| Value                | Effect                                                                 |
|----------------------|------------------------------------------------------------------------|
| `BARCODE_NO_ASCII`   | No options selected. (default)                                         |
| `BARCODE_BIND`       | Boundary bars above and below the symbol and between rows if stacking. |
| `BARCODE_BOX`        | Add a box surrounding the symbol and whitespace.                       |
| `READER_INIT`        | Add a reader initialisation symbol to the data before EncodingMode.    |
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
import {
  OutputOption,
  OutputType,
  SymbologyType,
  createStream
} from 'symbology'

createStream({
  symbology: SymbologyType.CODE128,
  outputOptions: OutputOption.BARCODE_BIND + OutputOption.READER_INIT
}, '12345', OutputType.PNG)
```
