# Code 11

![Code 11](/assets/barcodes/one-dimensional/code11.svg)

[Code 11](https://en.wikipedia.org/wiki/Code_11) is a barcode symbology primarily used in telecommunications. 

This symbology is discrete and binary, with each digit represented by three bars and two spaces. A narrow space separates consecutive symbols. The width of each digit varies: three digits (`0`, `9`, and `-`) feature one wide element, while the remaining digits have two wide elements.

Code 11 can encode strings of any length made up of the digits `0–9` and the dash character (`-`). A special twelfth code is used to indicate the start/stop character, typically represented by `*`.

A Code 11 symbol can rendered by using the `CODE11` symbology type.

## Example

![Code 11](/assets/barcodes/one-dimensional/code11.svg)

```ts
createStream({
  symbology: SymbologyType.CODE11
}, '9212320967')
```

:::tip Note
By default, two modulo-11 check digits are added.
* To add only one check digit, set `checkDigit` to `1`
* To omit check digits entirely, set `checkDigit` to `0`.
:::
