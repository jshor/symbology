# Two-out-of-five Code

![Two-out-of-five Code](/assets/barcodes/one-dimensional/code2of5.svg)

[Two-out-of-five Code](https://en.wikipedia.org/wiki/Two-out-of-five_code) is an [*m*-of-*n* code](https://en.wikipedia.org/wiki/Constant-weight_code) that provides exactly ten possible combinations of two bits, and is thus used for representing the decimal digits using five bits. Each bit has an assigned weight such that the set bits sum to the desired value, with the exception of zero.

## Matrix Two-out-of-five

[Matrix Two-out-of-five](https://en.wikipedia.org/wiki/Matrix_2_of_5) is a self-checking code used in industrial applications and photo development. This symbology will encode numeric input (digits `0`-`9`) up to a maximum of 80 digits. 

:::tip Note
By default, no check digit is added.

* To add one check digit in the human-readable text, set `checkDigit` to `1`.
* To not have check digits shown in the human-readable text, set `showCheckDigit` to `false` (default: `true`).
:::

### Example

![Two-out-of-five Code (Standard)](/assets/barcodes/one-dimensional/code2of5.svg)

```ts
createStream({
  symbology: SymbologyType.C25MATRIX
}, '7212760942')
```

## IATA Two-out-of-five Code

Used in aviation for baggage handling, IATA Two-out-of-five Code is a self-checking variant that encodes numeric input (digits `0`-`9`) up to a maximum of 45 digits.

### Example

![Two-out-of-five Code (IATA)](/assets/barcodes/one-dimensional/code2of5-iata.svg)

```ts
createStream({
  symbology: SymbologyType.C25MATRIX
}, '7212760942')
```

:::tip Note
By default, no check digit is added.

* To add one check digit in the human-readable text, set `checkDigit` to `1`.
* To not have check digits shown in the human-readable text, set `showCheckDigit` to `false` (default: `true`).
:::

## Industrial Two-out-of-five Code

This variant encodes numeric input (digits `0`-`9`) up to a maximum of 45 digits.

### Example

![Two-out-of-five Code (Industrial)](/assets/barcodes/one-dimensional/code2of5-industrial.svg)

```ts
createStream({
  symbology: SymbologyType.C25IND
}, '7212760942')
```

:::tip Note
By default, no check digit is added.

* To add one check digit in the human-readable text, set `checkDigit` to `1`.
* To not have check digits shown in the human-readable text, set `showCheckDigit` to `false` (default: `true`).
:::

## Interleaved Two-out-of-five Code (ISO 16390)

The [Interleaved Two-out-of-five Code (ITF)](https://en.wikipedia.org/wiki/Interleaved_2_of_5) variant encodes an even number of digits as an input (`0`-`9`) up to a maximum of 45 pairs of digits (90 in total).

### Example

![Two-out-of-five Code (Interleaved)](/assets/barcodes/one-dimensional/code2of5-interleaved.svg)

```ts
createStream({
  symbology: SymbologyType.C25INTER
}, '7212760942')
```

:::tip Note
By default, no check digit is added.

* To add one check digit in the human-readable text, set `checkDigit` to `1`.
* To not have check digits shown in the human-readable text, set `showCheckDigit` to `false` (default: `true`).
:::

## Datalogic Two-out-of-five

[Datalogic Two-out-of-five](https://en.wikipedia.org/wiki/Matrix_2_of_5#Datalogic_2_of_5), also known as *China Post Code*, encodes numeric input (digits `0`-`9`) up to a maximum of 45 digits.

### Start/Stop values

| Value |  Bars  | Encoding |
|-------|--------|----------|
| Start | `\|\|` | `NNN`    |
| Stop  | `▮\|` | `WNN`    |

* `N` - narrow black bar or white space
* `W` - wide black bar or white space

### Example

![Datalogic Two-out-of-five](/assets/barcodes/one-dimensional/code2of5-datalogic.svg)

```ts
createStream({
  symbology: SymbologyType.C25LOGIC
}, '7212760942')
```

:::tip Note
By default, no check digit is added.

* To add one check digit in the human-readable text, set `checkDigit` to `1`.
* To not have check digits shown in the human-readable text, set `showCheckDigit` to `false` (default: `true`).
:::

## ITF-14

[ITF-14](https://en.wikipedia.org/wiki/Interleaved_2_of_5) is an interleaved variant used for shipping containers. It accepts exactly a 13-digit numeric input (`0`-`9`). By default, one check digit is added. 

### Example

![ITF-14](/assets/barcodes/one-dimensional/code2of5-itf.svg)

With border removed:

```ts
createStream({
  symbology: SymbologyType.ITF14,
  borderWidth: 0
}, '7212760942578')
```

:::tip Note
This symbology is typically used with a border, and if no border width is specified, this will render with a border having a width of `5` by default.

The border can be removed by setting `border` to `0`.
:::

:::tip See also
* [Universal Product Code (UPC)](upc.md)
* [International Article Number (EAN)](ean.md)
:::

## Deutsche Post

[Deutsche Post](https://en.wikipedia.org/wiki/Deutsche_Post) uses an interleaved variants for shipping containers. Its variants accept exactly a 13-digit numeric input (`0`-`9`). By default, one check digit is added.

There are two variants of Deutsche Post code:

* [Leitcode (DE)](https://de.wikipedia.org/wiki/Leitcode)
* [Identcode (DE)](https://de.wikipedia.org/wiki/Identcode)

### Leitcode Example

![Leitcode](/assets/barcodes/one-dimensional/code2of5-leitcode.svg)

```ts
createStream({
  symbology: SymbologyType.DPLEIT
}, '7212760942578')
```

### Identcode Example

![Identcode](/assets/barcodes/one-dimensional/code2of5-identcode.svg)

```ts
createStream({
  symbology: SymbologyType.DPIDENT
}, '7212760942578')
```
