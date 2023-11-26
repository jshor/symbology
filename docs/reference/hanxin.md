
# Han Xin Code

![Han Xin Code](/assets/barcodes/hanxin.svg)

This symbology can be rendered using the `HANXIN` type.

## Error correction

There are four levels of error correction capacity available. 

To specify one, set `errorCorrectionLevel` to one of the following values:

| `errorCorrectionLevel` | Recovery Capacity |
| ---------------------- | ----------------- |
| 1                      | Approx 8%         |
| 2                      | Approx 15%        |
| 3                      | Approx 23%        |
| 4                      | Approx 30%        |

## Symbol size

The size of the symbol can be specified by setting `symbolSize` to one of the following values:

| `symbolSize` | Symbol Size | Input | Symbol Size |
| ------------ | ----------- | ----- | ----------- |
| 1            | 23 x 23     | 43    | 107 x 107   |
| 2            | 25 x 25     | 44    | 109 x 109   |
| 3            | 27 x 27     | 45    | 111 x 111   |
| 4            | 29 x 29     | 46    | 113 x 113   |
| 5            | 31 x 31     | 47    | 115 x 115   |
| 6            | 33 x 33     | 48    | 117 x 117   |
| 7            | 35 x 35     | 49    | 119 x 119   |
| 8            | 37 x 37     | 50    | 121 x 121   |
| 9            | 39 x 39     | 51    | 123 x 123   |
| 10           | 41 x 41     | 52    | 125 x 125   |
| 11           | 43 x 43     | 53    | 127 x 127   |
| 12           | 45 x 45     | 54    | 129 x 129   |
| 13           | 47 x 47     | 55    | 131 x 131   |
| 14           | 49 x 49     | 56    | 133 x 133   |
| 15           | 51 x 51     | 57    | 135 x 135   |
| 16           | 53 x 53     | 58    | 137 x 137   |
| 17           | 55 x 55     | 59    | 139 x 139   |
| 18           | 57 x 57     | 60    | 141 x 141   |
| 19           | 59 x 59     | 61    | 143 x 143   |
| 20           | 61 x 61     | 62    | 145 x 145   |
| 21           | 63 x 63     | 63    | 147 x 147   |
| 22           | 65 x 65     | 64    | 149 x 149   |
| 23           | 67 x 67     | 65    | 151 x 151   |
| 24           | 69 x 69     | 66    | 153 x 153   |
| 25           | 71 x 71     | 67    | 155 x 155   |
| 26           | 73 x 73     | 68    | 157 x 157   |
| 27           | 75 x 75     | 69    | 159 x 159   |
| 28           | 77 x 77     | 70    | 161 x 161   |
| 29           | 79 x 79     | 71    | 163 x 163   |
| 30           | 81 x 81     | 72    | 165 x 165   |
| 31           | 83 x 83     | 73    | 167 x 167   |
| 32           | 85 x 85     | 74    | 169 x 169   |
| 33           | 87 x 87     | 75    | 171 x 171   |
| 34           | 89 x 89     | 76    | 173 x 173   |
| 35           | 91 x 91     | 77    | 175 x 175   |
| 36           | 93 x 93     | 78    | 177 x 177   |
| 37           | 95 x 95     | 79    | 179 x 179   |
| 38           | 97 x 97     | 80    | 181 x 181   |
| 39           | 99 x 99     | 81    | 183 x 183   |
| 40           | 101 x 101   | 82    | 185 x 185   |
| 41           | 103 x 103   | 83    | 187 x 187   |
| 42           | 105 x 105   | 84    | 189 x 189   |

:::warning Important
It is not possible to select both symbol size and error correction capacity for the same symbol. If both options are selected then the error correction capacity selection will be ignored. 
:::

## Encoding

This symbology is capable of encoding characters in the [GB-18030 character set](https://en.wikipedia.org/wiki/GB_18030) and is also supports [ECI encoding](/docs/advanced.md#eci-encoding).

<!--@include: ./partials/fullmultibyte.md-->

### Masking

There are four possible mask patterns to use. The optimal one is automatically selected but one may be defined explicitly by specifying `mask` to the desired value (any integer in the range `0` to `3`).

## Examples

The following will render a Han Xin symbol encoding `12345` with ~23% error correction:

```ts
createStream({
  symbology: SymbologyType.HANXIN,
  symbolSize: 6
}, '1234567890121234')
```

The following will render a 33 x 33 Han Xin symbol encoding `12345`:

```ts
createStream({
  symbology: SymbologyType.HANXIN,
  errorCorrectionLevel: 3
}, '1234567890121234')
```
