# Ultracode

![Ultracode](/assets/barcodes/two-dimensional/ultracode.png)

Ultracode uses a grid of coloured elements to encode data. It can be rendered using the `ULTRA` symbology type.

:::warning Warning
Ultracode is experimental only. Its use in production environments is discouraged.
:::

## Error correction capacity

The amount of error correction can be set by setting `errorCorrectionLevel` to one of the following values:

| `errorCorrectionLevel` | Level | Amount of symbol-holding error correction data |
| ---------------------- | ----- | ---------------------------------------------- |
| 1                      | `EC0` | 0% (error detection)                           |
| 2                      | `EC1` | ~5%                                            |
| 3                      | `EC2` | ~9% (default)                                  |
| 4                      | `EC3` | ~17%                                           |
| 5                      | `EC4` | ~25%                                           |
| 6                      | `EC5` | ~33%                                           |

## Encoding

<!--@include: ./partials/gs1.md-->

## Example

![Ultracode](/assets/barcodes/two-dimensional/ultracode.png)

```ts
createStream({
  symbology: SymbologyType.ULTRA,
  errorCorrectionLevel: 4
}, '1234567890121234')
```
