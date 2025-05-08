# Code 39 (ISO/IEC 16388)

Also known as **Alpha39**, **Code 3 of 9**, **Code 3/9**, **Type 39**, **USS Code 39**, or **USD-3**, [Code 39](https://en.wikipedia.org/wiki/Code_39) is a symbology whose input consists of up to 85 characters containing any of the following: 

* Letters (`A`-`Z`)
* Digits (`0`-`9`)
* Hyphen (`-`)
* Period (`.`)
* Space (` `)
* Asterisk (`*`)
* Dollar sign (`$`)
* Forward slash (`/`)
* Plus sign (`+`)
* Percent sign (`%`)

The standard Code 39 symbol can rendered by using the `CODE39` symbology type.

:::tip Note
The standard Code 39 symbology does not require a check digit, but a module-43 check digit can be added by setting `checkDigit` to `1`.
:::

## Example

![Code 39 (Standard)](/assets/barcodes/one-dimensional/code39.svg)

```ts
createStream({
  symbology: SymbologyType.CODE39
}, 'A12B3C4D5E6F')
```

## Extended Code 39

Also known as **Code 39E** or **Code 39+**, this variant of the standard Code 39 supports the full 7-bit ASCII character range.

The extended Code 39 symbol can rendered by using the `EXCODE39` symbology type.

:::tip Note
The standard Code 39 symbology does not require a check digit, but a module-43 check digit can be added by setting `checkDigit` to `1`.
:::

### Example

![Code 39 (Extended)](/assets/barcodes/one-dimensional/code39e.svg)

```ts
createStream({
  symbology: SymbologyType.EXCODE39
}, 'A12B3C@4D5E_6F')
```

## Extended Code 39

This variant of the *extended* Code 39 also supports the full 7-bit ASCII character range and two check digit characters are added by default. 

The extended Code 39 symbol can rendered by using the `CODE93` symbology type.

:::tip Note
The extended Code 39 symbology does not show the added check digit characters in the human readable text by default, but they can be by setting `checkDigit` to `1`.
:::

### Example

![Code 93](/assets/barcodes/one-dimensional/code93.svg)

```ts
createStream({
  symbology: SymbologyType.CODE93
}, 'A12B3C@4D5E_6F')
```

## Pharmazentralnummer (PZN)

[Pharmazentralnummer (DE)](https://de.wikipedia.org/wiki/Pharmazentralnummer) is a variant of Code 39 that is used for identification in the German medical and pharmaceutical industry.

This symbology encodes an input of up to a maximum of 8 digit (`0`-`9`) characters. A modulo-11 check digit is added automatically.

The Pharmazentralnummer symbol can rendered by using the `PZN` symbology type.

### Example

![Pharmazentralnummer](/assets/barcodes/one-dimensional/pzn.svg)

```ts
createStream({
  symbology: SymbologyType.PZN
}, '12345678')
```

## Code 32

Code 32 is a variant of Code 39 used by the the Italian pharmaceutical industry. 

Like Pharmazentralnummer, this symbology encodes an input of up to a maximum of 8 digit (`0`-`9`) characters. A check digit is added automatically.

The Pharmazentralnummer symbol can rendered by using the `CODE32` symbology type.

### Example

![Code 32](/assets/barcodes/one-dimensional/code32.svg)

```ts
createStream({
  symbology: SymbologyType.CODE32
}, '12345678')
```

## Health Industry Barcode (HIBC)

**Health Industry Barcode (HIBC)** is a variant of Code 39 used in the pharmaceutical industry.

This symbology encodes an input of up to a maximum of 8 digit (`0`-`9`) characters. A trailing modulo-49 check digit is added automatically. A leading `+` character is automatically prepended.

The Pharmazentralnummer symbol can rendered by using the `HIBC_39` symbology type.

### Example

![HIBC Code 39](/assets/barcodes/one-dimensional/code39-hibc.svg)

```ts
createStream({
  symbology: SymbologyType.HIBC_39
}, '12345678')
```

## LOGMARS (MIL-STD-129N)

**Logistics Applications of Automated Marking and Reading Symbols**, or [**LOGMARS**](https://www.barcodefaq.com/1d/code-39/logmars/), is a variant of the standard Code 39 used by the US Department of Defense. 

The LOGMARS symbol can rendered by using the `LOGMARS` symbology type.

:::tip Note
The standard Code 39 symbology does not require a check digit, but a module-43 check digit can be added by setting `checkDigit` to `1`.
:::

## Example

![LOGMARS](/assets/barcodes/one-dimensional/logmars.svg)

```ts
createStream({
  symbology: SymbologyType.LOGMARS
}, 'A12B3C4D5E6F')
```

## Vehicle Identification Number (VIN)

A [**Vehicle Identification Number (VIN)**](https://en.wikipedia.org/wiki/Vehicle_identification_number) is a variant of Code 39 used for the automotive industry in North America. The first character of its input is a number in the range of 1 to 5, and has a check character verifications stage.

This symbology encodes a 17-character input consisting of digits (`0`-`9`) or letters (`A`-`Z`, excluding `I`, `O`, and `Q`).

The Pharmazentralnummer symbol can rendered by using the `VIN` symbology type.

:::tip Note
An import character prefix, `I`, can be added by setting `importPrefix` to `true`. The character will not be included in human-readable text.
:::

### Example

![Vehicle Identification Number (VIN)](/assets/barcodes/one-dimensional/vin.svg)

```ts
createStream({
  symbology: SymbologyType.VIN,
  importPrefix: true
}, '2FTPX28L0XCA15511')
```





