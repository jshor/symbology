# International Article Number (EAN) (ISO 15420)

![ISBN-13](/assets/barcodes/one-dimensional/isbn.svg)

The [International Article Number](https://en.wikipedia.org/wiki/International_Article_Number) (also known as European Article Number, or **EAN**) is a standard describing a barcode symbology used in retail.

The most common EAN variant is [**EAN-13**](https://en.wikipedia.org/wiki/International_Article_Number#Binary_encoding_of_data_digits_into_EAN-13_barcode), which is a derivative of the [12-digit UPC-A standard](upc.md#upc-a).

## EAN-2, EAN-5, EAN-8, and EAN-13

EAN-2, EAN-5, EAN-8, and [EAN-13](https://en.wikipedia.org/wiki/International_Article_Number#Binary_encoding_of_data_digits_into_EAN-13_barcode) encode numeric inputs of lengths `2`, `5`, `7`, and `12`, respectively. The variant used will be automatically selected based on the length of the input.

## Example

![EAN-8](/assets/barcodes/one-dimensional/ean-8.svg)

```ts
createStream({
  symbology: SymbologyType.EANX
}, '1234567')
```

### Check digit

A special symbol, `EANX_CHK`, can be used if the input data already includes a check digit. This type will validate the 7- or 8-digit input prior to encoding the symbol.

### EAN-2 and EAN-5 add-on

EAN-2 and EAN-5 add-on symbols can be added by using `+` as a separator.

The gap between the main symbol and the add-on can be adjusted by specifying `addonGap` to any value between `7` (default) and `12`.

The `guardDescentHeight` can be set to a value between `0` and `20` (default: `5`) to define the height in which the *guard bars* descend below the *main bars*.

### Example

![EAN-8 with EAN-5 add-on](/assets/barcodes/one-dimensional/ean-addon.svg)

In this example, `1234567` is the primary data and `12345` is the EAN-5 add-on.

```ts
createStream({
  symbology: SymbologyType.EANX,
  addonGap: 12,
  guardDescentHeight: 10
}, '1234567+12345')
```






## International Standard Book Number (ISBN)

The [International Standard Book Number (ISBN)](https://en.wikipedia.org/wiki/ISBN) (also known as **SBN**, **ISBN**, or **ISBN-13**) is a subset of EAN for identifying books. 

:::info Note
Unlike other EAN variants, the check digit must be computed as part of the input.
:::

## Example

![ISBN-13](/assets/barcodes/one-dimensional/isbn.svg)

```ts
createStream({
  symbology: SymbologyType.ISBNX
}, '9789295055124')
```

### Check digit

A special symbol, `EANX_CHK`, can be used if the input data already includes a check digit. This type will validate the 7- or 8-digit input prior to encoding the symbol.

### EAN-2 and EAN-5 add-on

EAN-2 and EAN-5 add-on symbols can be added by using `+` as a separator.

The gap between the main symbol and the add-on can be adjusted by specifying `addonGap` to any value between `7` (default) and `12`.

The `guardDescentHeight` can be set to a value between `0` and `20` (default: `5`) to define the height in which the *guard bars* descend below the *main bars*.

### Example

![ISBN-13 with EAN-5 add-on](/assets/barcodes/one-dimensional/isbn-addon.svg)

In this example, `9789295055124` is the primary data and `12345` is the EAN-5 add-on.

```ts
createStream({
  symbology: SymbologyType.ISBNX,
  addonGap: 12,
  guardDescentHeight: 10
}, '9789295055124+12345')
```
