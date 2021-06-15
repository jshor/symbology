# API

Each function returns a promise that completes with an object containing the exit code and message of the function (see [Error handling](error-handling.md) for more info).

----------


## `createStream(config: SymbologyConfig, data: string[, outputType: OutputType]): Promise<SymbologyResult>`

Returns a [`SymbologyResult`](#symbologyresult) object containing the raw output of SVG, PNG, or EPS representation of the 

### Parameters

* **`config: SymbologyConfig`**: Basic symbology [configuration options](options.md#basic-config).
* **`data: string`**: The primary symbology data to encode.
* **`outputType: OutputType`**: The [output type](options.md#output-options) (PNG, EPS, or SVG). Defaults to `OutputType.PNG`.

:::tip Note
For png, it will render `data` as a base64 string.
:::

### Output Types

Output types can be defined using the `OutputType` enumerated type.

| Enum   | Description                          |
|--------|--------------------------------------|
| `EPS`  | Adobe encapsulated postscript vector |
| `SVG`  | Scalable vector graphics             |
| `PNG`  | Portable network graphics            |

### Example

```ts
import {
  SymbologyType,
  OutputType,
  EncodingMode,
  createStream
} from 'symbology'

(async () => {
  try {
    const { data } = await createStream({
      symbology: SymbologyType.CODE128,
      encoding: EncodingMode.GS1_MODE,
    }, '12345', OutputType.PNG)

    console.log('Result: ', data)
  } catch (err) {
    console.error('Error: ', err)
  }
})()
```

#### Returns:

```json
{
  "message": "Symbology successfully created.",
  "code": 0,
  "data": "data:image/png;base64,iVBOR [...] g==",
  "width": 32,
  "height": 32
}
```
----------

## `createFile(config: SymbologyConfig, data: string): Promise<SymbologyResult>`

Creates an image file with the requested [`SymbologyConfig`](options.md#basic-config) and returns a [`SymbologyResult`](#symbologyresult). This requires `fileName` to be specified.

### Parameters

* **`config: SymbologyConfig`**: Basic symbology [configuration options](options.md#basic-config).
* **`data: string`**: The primary symbology data to encode.
* **`outputType: OutputType`**: The [output type](options.md#output-options) (PNG, EPS, or SVG).

:::tip Note
The file type of the barcode to render is based on the extension `fileName` setting.
For example, to render an SVG, the `fileName` must be of the format: `<myfile>.svg`.
:::

### Example

```ts
import {
  SymbologyType,
  OutputTypes,
  EncodingMode,
  createStream
} from 'symbology'

(async () => {
  try {
    const { data } = await createFile({
      symbology: SymbologyType.CODE128,
      encoding: EncodingMode.GS1_MODE,
      fileName: 'out.svg'
    }, '12345')

    console.log('File successfully created.')
  } catch (err) {
    console.error('Error: ', err)
  }
})()
```

#### Returns:

```json
{
  "message": "out.svg successfully created.",
  "code": 0
}
```

## `SymbologyResult`

* **`message`: `string`** - The resulting message from the symbology generation.
* **`code`: `number`** - Resulting status code from symbology generation. See [Error handling](error-handling.md) for more info.
* **`data?`: `string`** - Resulting image data (if using `createStream()`). Only populated on successful symbology generation.
* **`width?`: `string`** - Resulting image width. Only populated on successful symbology generation.
* **`height?`: `string`** - Resulting image height. Only populated on successful symbology generation.
