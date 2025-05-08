# Plessey Code

![MSI Plessey Code](/assets/barcodes/one-dimensional/plessey-msi.svg)

[Plessey Code](https://en.wikipedia.org/wiki/Plessey_Code) is a barcode based on pulse-width modulation. It encodes hexadecimal digit inputs (consisting of `0`-`9`, `A`-`F`) of up to 65 characters. It includes a check digit.

A Plessey Code symbol can rendered by using the `PLESSEY` symbology type.

## Example

![Plessey Code](/assets/barcodes/one-dimensional/plessey.svg)

```ts
createStream({
  symbology: SymbologyType.PLESSEY
}, '87F80886699')
```

## MSI Plessey Code

Also known as [Modified Plessey](https://en.wikipedia.org/wiki/MSI_Barcode), this variant of Plessey was developed by MSI Data Corporation, and is primarily used for inventory control.

This variant only supports digits (`0`-`9`). It does not support hexadecimal letters or symbols up to 65 digits.

The check-digit option can be determined by setting `checkDigit` to one of the following values:

| Value | Check Digits                | Show in human-readable text? |
|-------|-----------------------------|------------------------------|
| `0`   | None                        | Yes                          |
| `1`   | Modulo-10 (Luhn)            | Yes                          |
| `2`   | Modulo-10 & Modulo-10       | Yes                          |
| `3`   | Modulo-11 (IBM)             | Yes                          |
| `4`   | Modulo-11 (IBM) & Modulo-10 | Yes                          |
| `5`   | Modulo-11 (NCR)             | Yes                          |
| `6`   | Modulo-11 (NCR) & Modulo-10 | Yes                          |
| `10`  | None                        | No                           |
| `11`  | Modulo-10 (Luhn)            | No                           |
| `12`  | Modulo-10 & Modulo-10       | No                           |
| `13`  | Modulo-11 (IBM)             | No                           |
| `14`  | Modulo-11 (IBM) & Modulo-10 | No                           |
| `15`  | Modulo-11 (NCR)             | No                           |
| `16`  | Modulo-11 (NCR) & Modulo-10 | No                           |

### MSI Plessey example

![MSI Plessey Code](/assets/barcodes/one-dimensional/plessey-msi.svg)

```ts
createStream({
  symbology: SymbologyType.MSI_PLESSEY
}, '87980886699')
```
