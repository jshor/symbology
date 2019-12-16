# API

Each function returns a promise that completes with an object containing the exit code and message of the function (see [Error handling](error-handling.md) for more info).

----------

## `createStream`

Returns an object containing the raw output of SVG, PNG, or EPS representation of the symbology. Returns a `Promise`.

```js
createStream(options, data[, outputType])
```

:::tip Note
For png, it will render `data` as a base64 string.
:::

| Parameter    | Type     | Values                       | Default    |
|--------------|----------|------------------------------|------------|
| `options`    | `Object` | Struct of symbology settings |            |
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

#### Returns:

```json
{
  "message": "",
  "code": 0,
  "data": "data:image/png;base64,iVBOR [...] g=="
}
```
----------

## `createFile`

Creates a file with the requested barcode. Returns a `Promise`.

```js
createFile(options, data)
```

:::tip Note
The file type of the barcode to render is based on the extension `fileName` setting.
For example, to render an svg, the `fileName` must be of the format: `<myfile>.svg`.
:::

| Parameter    | Type     | Values                       |
|--------------|----------|------------------------------|
| `options`    | `Object` | Object of symbology settings |
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

This creates a file in the specified `fileName`.

#### Returns

```json
{
  "message": "",
  "code": 0,
  "fileName": "barcode.png"
}
```