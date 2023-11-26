# Code One

Code One was the first two-dimensional matrix symbology in the public domain and encodes data in a way similar to [Data Matrix ECC 200](#data-matrix-ecc200-iso-16022). It is used only with some Intermec printers.

This symbology can rendered by using the `CODEONE` symbology type.

## Symbol size

There are two types of Code One symbols:

* **Variable height symbols**, which are roughly square (versions `A` thought to `H`).
* **Fixed-height versions** (version `S` and `T`).

The type can be specified by setting `symbolSize` to one of the following input values:

| `symbolSize` | Version | Size       | Numeric Data Capacity | Alphanumeric Data Capacity |
|--------------|---------|------------|-----------------------|----------------------------|
| 1            | `A`     | 16 x 18    | 22                    | 13                         |
| 2            | `B`     | 22 x 22    | 44                    | 27                         |
| 3            | `C`     | 28 x 32    | 104                   | 64                         |
| 4            | `D`     | 40 x 42    | 217                   | 135                        |
| 5            | `E`     | 52 x 54    | 435                   | 271                        |
| 6            | `F`     | 70 x 76    | 886                   | 553                        |
| 7            | `G`     | 104 x 98   | 1755                  | 1096                       |
| 8            | `H`     | 148 x 134  | 3550                  | 2218                       |
| 9            | `S`     | 8X height  | 18                    | **N/A**                    |
| 10           | `T`     | 16X height | 90                    | 55                         |

## Encoding

Aztec Code supports [ECI encoding](/docs/advanced.md#eci-encoding) and can supports all 256 ASCII characters, one pad/message separator character, and 8-bit binary data.

### GS1 Data

<!--@include: ./partials/gs1.md-->

## Example

The following will render a 22 x 22 Code One symbol encoding `An Example`:

```ts
createStream({
  symbology: SymbologyType.CODEONE,
  option2: 2
}, 'An Example')
```

:::warning Important
* Version `S` symbols can only encode numeric data.
* The widths of version `S` and version `T` symbols are determined by the lengths of their input data.
:::
