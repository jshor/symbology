# Options

The following symbology options are available:

| Enumerated type         | Type      | Meaning                                                                                                       | Required? | Default value |
|-------------------------|-----------|---------------------------------------------------------------------------------------------------------------|-----------|---------------|
| `symbology`             | `Symbol`  | The enumerated type of the symbology (see [Reference](../guide/README.md) for a list). | **Yes**   |               |
| `height`                | `Number`  | The height of the image. If specified, this will maintain the aspect ratio.                                   | No        | 50            |
| `whitespaceWidth`       | `Number`  | Width of whitespace, for barcodes which have this option.                                                     | No        | 0             |
| `borderWidth`           | `Number`  | Width of border.                                                                                              | No        | 0             |
| `outputOptions`         | `Number`  | Symbology-specific output option.                                                                             | No        | `NULL`        |
| `foregroundColor`       | `String`  | Barcode foreground color.                                                                                     | No        | `FFFFFF`        |
| `backgroundColor`       | `String`  | Barcode background color.                                                                                     | No        | `000000`        |
| `fileName`              | `String`  | Full path to the file to render.                                                                              | **Yes***  |               |
| `scale`                 | `Number`  | Scale of the barcode image. Applies only to PNG.                                                              | No        | 1.0           |
| `option1`               | `Number`  | Symbology-type-specific option value.                                                                         | No        | `NULL`        |
| `option2`               | `Number`  | Symbology-type-specific option value.                                                                         | No        | `NULL`        |
| `option3`               | `Number`  | Symbology-type-specific option value.                                                                         | No        | `NULL`        |
| `showHumanReadableText` | `Boolean` | Show or hide the symbology data as human-readable text (if applicable).                                       | No        | `true`        |


\* required only if using [`createFile()`](api.md#createfile).