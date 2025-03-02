# MaxiCode (ISO 16023)

Developed and utilized by the United Parcel Service (UPS), [MaxiCode](https://en.wikipedia.org/wiki/MaxiCode) employs a grid of hexagons surrounding a 'bulls-eye' finder pattern. This symbology is designed for the identification of parcels.

MaxiCode symbols can be encoded in one of five modes (by setting `mode` as explained below) and can be rendered using the `MAXICODE` symbology type.

## Encoding

This symbology uses Latin-1 character encoding by default but also supports [ECI encoding](/docs/advanced.md#eci-encoding).

The maximum length of text which can be placed in a Maxicode symbol depends on the type of characters used in the text.

Example maximum data lengths are provided in the table below.

| Mode                 | Maximum Data Length for Capital Letters | Maximum Data Length for Numeric Digits | Number of Error Correction Codewords |
|----------------------|-----------------------------------------|----------------------------------------|--------------------------------------|
| `2` (secondary only) | 84                                      | 126                                    | 50                                   |
| `3` (secondary only) | 84                                      | 126                                    | 50                                   |
| `4`                  | 93                                      | 135                                    | 50                                   |
| `5`                  | 77                                      | 110                                    | 66                                   |
| `6`                  | 93                                      | 135                                    | 50                                   |

## Scaling

MaxiCode uses a different scaling than other symbols for raster output.

For MaxiCode symbols, which use hexagons, the scale for raster output is multiplied by `10` before being applied. The minimum scale is `0.2`, so the minimum X-dimension is 2 pixels.

MaxiCode symbols have fixed size ranges of `24.82mm` to `27.93mm` width by `23.71mm` to `26.69mm` height (excluding quiet zones).

The following table shows the scale to use depending on the DPMM desired (with DPI equivalents):

| DPMM | DPI  | Scale |
|------|------|-------|
| 6    | 150  | 0.5   |
| 8    | 200  | 0.7   |
| 12   | 300  | 1     |
| 16   | 400  | 1.4   |
| 24   | 600  | 2.1   |
| 47   | 1200 | 4.1   |
| 95   | 2400 | 8.2   |
| 189  | 4800 | 16.4  |

## Modes `2` and `3`

In modes `2` and `3`, MaxiCode symbols are composed of two parts named the primary and secondary messages.

The primary message consists of a structured data field which includes various data about the package being sent, and the secondary message usually consists of address data in a data structure.

The format of the primary message required is given in the following table:

| Characters | Meaning                                                                                                                                                                                           |
|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1-9        | Postcode data which can consist of up to 9 digits (for mode `2`) or up to 6 alphanumeric characters (for mode `3`). Remaining unused characters should be filled with the empty space (` `) character. |
| 10-12      | Three digit country code according to [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes#Current_ISO_3166_country_codes).                                                                                                                                  |
| 13-15      | Three digit service code. This depends on your parcel courier.                                                                                                                                    |

The primary message can be set via the `primary` option. The secondary message uses the normal data entry method.

### Example

![MaxiCode Mode 2](/assets/barcodes/maxicode-mode-2.svg)

```ts
createStream({
  symbology: SymbologyType.MAXICODE,
  mode: 2,
  primary: '999999999840012'
}, 'Secondary Message Here')
```

:::warning Important
The primary message must be set as the `primary` value.
:::

:::tip Note
When no mode is selected, the appropriate mode will be automatically selected based on the content of the primary message.
:::

## Modes `4`, `5`, and `6`

Modes `4`, `5`, and `6` do not require a primary message.

### Example

![MaxiCode Mode 4](/assets/barcodes/maxicode-mode-4.svg)

```ts
createStream({
  symbology: SymbologyType.MAXICODE,
  mode: 4 // [!code focus]
}, 'A MaxiCode Message in Mode 4')
```

:::warning Important
Mode `6` is reserved for the maintenance of scanner hardware and should not be used to encode user data.
:::
