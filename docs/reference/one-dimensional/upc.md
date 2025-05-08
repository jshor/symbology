# Universal Product Code (UPC) (ISO 15420)

![UPC](/assets/barcodes/one-dimensional/upce.svg)

[Universal Product Code (UPC)](https://en.wikipedia.org/wiki/Universal_Product_Code) is a barcode symbology used for tracking retail items.

## UPC-A

UPC-A is a variant of UPC that accepts an 11-digit (`0`-`9`) article number, with a calculated check-digit (added automatically) for a total of 12 digits.

## Example

![UPC-E](/assets/barcodes/one-dimensional/upca.svg)

```ts
createStream({
  symbology: SymbologyType.UPCA
}, '72527270270')
```

### Check digit

A special symbol, `UPCA_CHK`, can be used if the input data already includes a check digit. This type will validate the 12-digit input prior to encoding the symbol.

### EAN add-on

[EAN-2 and EAN-5](ean.md#ean-2-ean-5-ean-8-and-ean-13) add-on symbols can be added by using `+` as a separator.

The gap between the main symbol and the add-on can be adjusted by specifying `addonGap` to any value between `9` (default) and `12`.

The `guardDescentHeight` can be set to a value between `0` and `20` (default: `5`) to define the height in which the *guard bars* descend below the *main bars*.

### Example

![UPC-E with EAN-5 add-on](/assets/barcodes/one-dimensional/upca-addon.svg)

In this example, `72527270270` is the primary data and `12345` is the EAN-5 add-on.

```ts
createStream({
  symbology: SymbologyType.UPCA,
  addonGap: 12,
  guardDescentHeight: 10
}, '72527270270+12345')
```






























## UPC-E

UPC-E is a variant of UPC-A that accepts an 6-digit (`0`-`9`) article number, with a calculated check-digit (added automatically) for a total of 7 digits.

[Number System One](https://en.wikipedia.org/wiki/Universal_Product_Code#Number_system_digit) is supported and can be inferred by prepending a 7-digit input with `1`.

## Example

![UPC-E](/assets/barcodes/one-dimensional/upce.svg)

```ts
createStream({
  symbology: SymbologyType.UPCE
}, '1234567')
```

### Check digit

A special symbol, `UPCE_CHK`, can be used if the input data already includes a check digit. This type will validate the 7-digit (or 8-digit if **Number System One** is used) input prior to encoding the symbol.

### EAN add-on

[EAN-2 and EAN-5](ean.md#ean-2-ean-5-ean-8-and-ean-13) add-on symbols can be added by using `+` as a separator.

The gap between the main symbol and the add-on can be adjusted by specifying `addonGap` to any value between `9` (default) and `12`.

The `guardDescentHeight` can be set to a value between `0` and `20` (default: `5`) to define the height in which the *guard bars* descend below the *main bars*.

### Example

![UPC-A with EAN-5 add-on](/assets/barcodes/one-dimensional/upce-addon.svg)

In this example, `72527270270` is the primary data and `12345` is the EAN-5 add-on.

```ts
createStream({
  symbology: SymbologyType.UPCE,
  addonGap: 12,
  guardDescentHeight: 10
}, '1234567+12345')
```
