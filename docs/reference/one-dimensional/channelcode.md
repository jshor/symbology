# Channel Code

![Channel Code](/assets/barcodes/one-dimensional/channel-code-overview.svg)

[Channel Code](https://barcodeguide.seagullscientific.com/Content/Symbologies/Channel_Code.htm) encodes a numeric string consisting of two to seven digits into a single symbol using the shortest length possible.

This symbol can be rendered using the `CHANNEL` symbology type.

## Channels

The channel can be set using the `channel` parameter, with six possible channels to choose from.

| Channel | Min Value | Max Value |
|---------|-----------|-----------|
| `3`     | `00`      | `26`      |
| `4`     | `000`     | `292`     |
| `5`     | `0000`    | `3493`    |
| `6`     | `00000`   | `44072`   |
| `7`     | `000000`  | `576688`  |
| `8`     | `0000000` | `7742862` |

:::tip Tip
The channel number generally corresponds to one more than the length of the string encoded in the barcode (e.g., channel `4` encodes three digits).
:::

## Example

![Channel Code](/assets/barcodes/one-dimensional/channel-code.svg)

```ts
createStream({
  symbology: SymbologyType.CHANNEL,
  channel: 4
}, '123')
```