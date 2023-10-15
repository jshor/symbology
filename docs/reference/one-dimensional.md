# One-Dimensional symbols

One-Dimensional symbols are what most people associate with the term SymbologyType. They consist of a number of bars and a number of spaces of differing widths.

[Click here](/reference/#one-dimensional-symbologies) for a condensed list of one-dimensional symbologies.

## Code 11

![Code 11](/assets/barcodes/barcode_14.png)

Developed by Intermec in 1977, Code 11 is similar to [Code 2 of 5 Matrix](#code-2-of-5) and is primarily used in telecommunications. The symbol can encode any length string consisting of the digits `0-9` and the dash character (`-`). One modulo-11 check digit is calculated.

#### Example

The following will render a Code 11 symbol encoding `8765432164`:

```ts
createStream({
  symbology: SymbologyType.CODE11
}, '8765432164')
```

## Code 2 of 5

![Code 2 of 5](/assets/barcodes/barcode_15.png)

Code 2 of 5 is a family of one-dimensional symbols, 8 of which are supported. Note that the names given to these standards alters from one source to another so you should take care to ensure that you have the right barcode type before using these standards.

### Standard Code 2 of 5

Also known as **Code 2 of 5 Matrix**, this symbology is a self-checking code used in industrial applications and photo development. Standard Code 2 of 5 will encode any length numeric input (digits `0-9`).

#### Example

The following will render a standard Code 2 of 5 symbol encoding `32109876543211`:

```ts
createStream({
  symbology: SymbologyType.C25IATA,
  borderWidth: 6
}, '32109876543211')
```

### IATA Code 2 of 5

Used for baggage handling in the air-transport industry by the International Air Transport Agency, this self-checking code will encode any length numeric input (digits `0-9`) and does not include a check digit.

### Industrial Code 2 of 5

Industrial Code 2 of 5 can encode any length numeric input (digits `0-9`) and does not include a check digit.

### Interleaved Code 2 of 5

This self-checking symbology encodes pairs of numbers, and so can only encode an even number of digits (`0-9`). If an odd number of digits is entered a leading zero is automatically added. No check digit is added.

### Code 2 of 5 Data Logic

Data Logic does not include a check digit and can encode any length numeric input (digits `0-9`).

### ITF-14

ITF-14, also known as **UPC Shipping Container** symbol or **Case Code**, is based on [Interleaved Code 2 of 5](#interleaved-code-2-of-5) and requires a 13 digit numeric input (digits `0-9`). One modulo-10 check digit is automatically added.

By default, a bounding box with a border width of 5 pixels will be added. To specify a border width, set [`borderWidth`](/docs/options.md#borderwidth) option to the desired border in pixels (or `0` to remove it).

### Deutsche Post Leitcode

Leitcode is based on [Interleaved Code 2 of 5](#interleaved-code-2-of-5) and is used by Deutsche Post for mailing purposes. Leitcode requires a 13-digit numerical input and includes a check digit.

### Deutsche Post Identcode

Identcode is based on [Interleaved Code 2 of 5](#interleaved-code-2-of-5) and is used by Deutsche Post for mailing purposes. Identcode requires an 11-digit numerical input and includes a check digit.

## Universal Product Code ([ISO-15420](https://www.iso.org/standard/46143.html))

### UPC Version A

![UPC-A](/assets/barcodes/barcode_16.png)

UPC-A is used in the United States for retail applications. The symbol requires an 11 digit article number. The check digit is automatically computed. In addition EAN-2 and EAN-5 add-on symbols can be added using the `+` character.

#### Example

```ts
createStream({
  symbology: SymbologyType.UPCA,
  encoding: EncodingMode.UNICODE_MODE,
  primary: '331234567890'
}, '72527270270+12345')
```

#### Check Digit

If your input data already includes the check digit, symbology type `BARCODE_UPCA_CHK` can be used to take in a 12-digit input and validate its check digit before encoding.

:::tip Tips
* The gap between the main symbol and an add-on can be adjusted by setting `option2` to the desired value (a multiple of the `x`-dimension).
* The height in `x`-dimensions that the guard bars descend below the main bars can be adjusted by setting the [`guardDescent`](/docs/options.md#guarddescent) option to a value between `0` and `20` (defaults to `5`).
:::

### UPC Version E

UPC-E is a zero-compressed version of [UPC-A](#upc-version-a) developed for smaller packages.

The code requires a 6 digit article number (digits `0-9`). The check digit is automatically computed. EAN-2 and EAN-5 add-on symbols can be added using the `+` character as with UPC-A.

#### Number System 1 Example

This library also supports Number System 1 encoding by entering a 7-digit article number stating with the digit 1.

```ts
createStream({
  symbology: SymbologyType.UPCE
}, '1123456')
```

#### Check Digit

If your input data already includes the check digit, symbology type `BARCODE_UPCE_CHK` can be used to take in a 12-digit input and validate its check digit before encoding.

:::tip Tips
* The gap between the main symbol and an add-on can be adjusted by setting `option2` to a value between `7` (default) and `12`.
* The height in `x`-dimensions that the guard bars descend below the main bars can be adjusted by setting the [`guardDescent`](/docs/options.md#guarddescent) option to a value between `` and `20` (defaults to `5`).
:::

## European Article Number ([ISO-15420](https://www.iso.org/standard/46143.html))

The International Article Number is a standard describing a barcode symbology and numbering system used in global trade to identify a specific retail product type, in a specific packaging configuration, from a specific manufacturer.

### EAN-2, EAN-5, EAN-8 and EAN-13

![EAN-13](/assets/barcodes/barcode_17.png)

The EAN system is used in retail across Europe and includes standards for EAN-2 and EAN-5 add-on codes, EAN-8 and EAN-13 which encode 2, 5, 7 or 12 digit numbers respectively.

EAN-2 and EAN-5 add-on symbols can be added using the `+` symbol as with UPC symbols.

:::tip Note
The symbology to use is automatically selected depending on the length of the input data.
:::

#### EAN-5 Example

The following example will encode a standalone EAN-5:

```ts
createStream({
  symbology: SymbologyType.EANX
}, '54321')
```

#### EAN-8 with EAN-5 Add-on Example

The following example will encode an EAN-8 symbol with an EAN-5 add-on:

```ts
createStream({
  symbology: Symbology.SymbologyType.EANX
}, '7432365+54321')
```

:::tip Note
:::

#### Check Digit

By default, all EAN symbologies include check digits which are added automatically.

If your input data already includes the check digit, symbology type `BARCODE_EANX_CHK` can be used to take in an 8- or 13-digit input and validate its check digit before encoding.

:::tip Tips
* The gap between the main symbol and an add-on can be adjusted by setting `option2` to a value between `7` (default) and `12`.
* The height in `x`-dimensions that the guard bars descend below the main bars can be adjusted by setting the [`guardDescent`](/docs/options.md#guarddescent) option to a value between `0` and `20` (defaults to `5`).
:::

### SBN, ISBN and ISBN-13

EAN-13 symbols (also known as **bookland EAN-13**) can also be produced from 9-digit SBN, 10-digit ISBN or 13-digit ISBN-13 data.

EAN-2 and EAN-5 add-on symbols can also be added using the `+` symbol, as with [UPC symbols](#universal-product-code-en-797).

:::warning Important
The relevant check digit must be present in the input data and will be verified before the symbol is generated.
:::

## Plessey

![Plessey Code](/assets/barcodes/barcode_18.png)

Also known as **Plessey Code**, this symbology was developed by the Plessey Company Ltd. in the UK. The symbol can encode any length data consisting of digits (`0-9`) or letters `AF` and includes a CRC check digit.

## MSI Plessey

Based on Plessey and developed by MSE Data Corporation, MSI Plessey is available with a range of check digit options available by setting `option2`.

The table below shows the options available:

| Value of `option2` | Check Digits          |
|--------------------|-----------------------|
| 0                  | None                  |
| 1                  | Modulo-10             |
| 2                  | Modulo-10 & Modulo-10 |
| 3                  | Modulo-11             |
| 4                  | Modulo-11 & Modulo-10 |


#### Example

The following example will create an MSI Plessey symbol with modulo-10 check digit encoding `7432365`:

```ts
createStream({
  symbology: SymbologyType.MSI_PLESSEY,
  option2: 1
}, '7432365')
```

:::tip Note
Any length numeric (digits `0-9`) input can be encoded.
:::

## Telepen

### Telepen Alpha

![Telepen](/assets/barcodes/barcode_19.png)

Telepen Alpha was developed by SB Electronic Systems Limited and can encode any length of ASCII text input. Telepen includes a modulo-127 check digit.

### Telepen Numeric

Telepen Numeric allows compression of numeric data into a Telepen symbol.

Data can consist of pairs of numbers or pairs consisting of a numerical digit followed an `X` character. For example `466333` and `466X33` are valid codes, whereas `46X333` is not (the digit pair `X3` is not valid). Telepen Numeric includes a modulo-127 check digit which is automatically added.

## Code 39

### Standard Code 39 (ISO 16388)

![Code 39](/assets/barcodes/barcode_20.png)

Standard Code 39 was developed in 1974 by Intermec. Input data can be of any length and can include the characters `0-9`, `A-Z`, dash (`-`), full stop (`.`), space (` `), asterisk (`*`), dollar (`$`), slash (`/`), plus (`+`) and percent (`%`).

#### Example

The following example will create a Code 39 symbol with modulo-10 check digit encoding `CODE39`:

```ts
createStream({
  symbology: SymbologyType.CODE39
}, 'CODE39')
```

:::tip Note
The standard does not require a check digit, but a modulo-43 check digit can be added via `option2`.
:::

### Extended Code 39

Also known as **Code 39e** and **Code39+**, this symbology expands on Standard Code 39 to provide support to the full ASCII character set.

:::tip Note
The standard does not require a check digit, but a modulo-43 check digit can be added via `option2`.
:::

### Code 93

A variation of Extended Code 39, Code 93 also supports full ASCII text. Two check digits are automatically added.

### PZN

PZN is a Code 39 based symbology used by the pharmaceutical industry in Germany. PZN encodes a six-digit number to which a modulo-10 check digit will be added.

### LOGMARS

LOGMARS (**Logistics Applications of Automated Marking and Reading Symbols**) is a variation of the Code 39 symbology used by the United States Department of Defense. LOGMARS encodes the same character set as Standard Code 39 and adds a modulo-43 check digit.

### Code 32

A variation of Code 39 used by the Italian Ministry of Health ("Ministero della Sanità") for encoding identifiers on pharmaceutical products. Used for encoding identifiers on pharmaceutical products. A check digit is automatically added.

:::warning Important
This symbology requires a numeric input up to 8 digits in length.
:::

### HIBC Code 39

This option adds a leading `+` character and a trailing modulo-49 check digit to a standard Code 39 symbol as required by the Health Industry Barcode standards.

### Vehicle Identification Number

This option includes a verification stage for vehicle identification numbers used in North America which include a check digit.

:::tip Note
For European vehicle identification numbers, use [Standard Code 39](#code-39) instead.
:::

## Codabar (EN 798)

![Codabar](/assets/barcodes/barcode_21.png)

Also known as **NW-7**, **Monarch**, **ABC Codabar**, **USD-4**, **Ames Code**, or **Code 27**, this symbology was developed in 1972 by Monarch Marketing Systems for retail purposes. The American Blood Commission adopted Codabar in 1977 as the standard symbology for blood identification.

Codabar can encode any length string starting and ending with the letters A-D and containing between these letters the numbers `0-9`, dash (`-`), dollar (`$`), colon (`:`), slash (`/`), full stop (`.`) or plus sign (`+`).

:::tip Note
No check digit is generated.
:::

## Pharmacode

![Pharmacode](/assets/barcodes/barcode_22.png)

Developed by Laetus, Pharmacode is used for the identification of pharmaceuticals. The symbology is able to encode whole numbers between `3` and `131070`.

#### Example

The following example will create a Pharmacode symbol with modulo-10 check digit encoding `131070`:

```ts
createStream({
  symbology: SymbologyType.PHARMA
}, '131070')
```

## Code 128

### Standard Code 128 ([ISO-15417](https://www.iso.org/standard/43896.html))

![Code 128](/assets/barcodes/barcode_23.png)

One of the most ubiquitous one-dimensional barcode symbologies, Code 128 was developed in 1981 by Computer Identics. This symbology supports full ASCII text and uses a three-mode system to compress the data into a smaller symbol.

This library automatically switches between modes and adds a modulo-103 check digit. 

:::tip Note
This library supports the encoding of Latin-1 characters in Code 128 symbols.
:::

### Code 128 Subset B

It is sometimes advantageous to stop Code 128 from using subset mode C which compresses numerical data. The `CODE128B` symbology suppresses mode C in favour of mode B.

### DPD Code

A variation of Code 128, used by Deutsher Paket Dienst (DPD). 

:::tip Note
* Requires a 28-character alphanumeric input.
* The human readable text is applied according to DPD format and a modulo-36 check digit is added.
:::

### GS1-128

Also known as **UCC/EAN-128**, this variation of Code 128 is defined by the [GS1 General Specifications](https://www.gs1.org/docs/barcodes/GS1_General_Specifications.pdf).

#### Example

The following is an example of a valid GS1-128 input:

```ts
createStream({
  symbology: Symbology.SymbologyType.EAN128
}, '[01]98898765432106[3202]012345[15]991231')
```

:::tip Note
  * AIs should be encased in square brackets (`[...]`) in the input data. This will be converted to parentheses (`(...)`) before it is included in the human readable text attached to the symbol.
    * Parentheses (`(...)`) can be included in the encoding data if desired.
  * GTIN data (AI `01`) should also include the check digit data.
  * Fixed length data should be entered at the appropriate length for correct encoding.
:::

### EAN-14

A shorter version of GS1-128 which encodes GTIN data only. A 13 digit number is required. The GTIN check digit and AI (`01`) are automatically added.

### NVE-18

The **Nummer der Versandeinheit** standard is a variation of Code 128 that includes both modulo-10 and modulo-103 check digits.

:::tip Note
NVE-18 requires a 17 digit numerical input and check digits are automatically added.
:::

### HIBC Code 128

This option adds a leading `+` character and a trailing modulo-49 check digit to a standard Code 128 symbol as required by the Health Industry Barcode standards.

### GS1 DataBar (ISO 24724)

![GS1 DataBar](/assets/barcodes/barcode_24.png)

Also known as **RSS** (Reduced Spaced symbology), these symbols are due to replace GS1-128 symbols in accordance with the [GS1 General Specifications](https://www.gs1.org/docs/barcodes/GS1_General_Specifications.pdf).

To set a GS1 DataBar symbol to print with a 2D component (as specified in [ISO 24723](https://www.iso.org/standard/51425.html)), set `option1` to `2`.

:::tip Tip
See [Composite Symbols](composite.md) to find out how to generate DataBar symbols with 2D components.
:::

### DataBar-14 and DataBar-14 Truncated

Also known as **RSS-14**, this standard encodes a 13-digit item code. A check digit and application identifier of (`01`) are automatically added.

:::tip Tip
To produce a truncated symbol set the symbol height to a value between `32` and `13`.
:::

:::warning Important
Normal DataBar-14 symbols should have a height of `33` or greater.
:::

### DataBar Limited

Also known as RSS Limited this standard encodes a 13 digit item code and can be used in the same way as [DataBar-14](#databar-14-and-databar-14-truncated). DataBar Limited, however, is limited to data starting with digits `0` and `1` (i.e., numbers in the range of `0` to `1999999999999`).

:::tip Note
As with [DataBar-14](#databar-14-and-databar-14-truncated), a check digit and application identifier of (`01`) are automatically added.
:::

### DataBar Expanded

Also known as **RSS Expanded**, this is a variable length symbology capable of encoding data from a number of AIs in a single symbol. 

:::warning Important
  * AIs should be encased in square brackets (`[...]`) in the input data. This will be converted to (rounded brackets) before it is included in the human readable text attached to the symbol.
  * GTIN data (AI `01`) should also include the check digit data.
  * Fixed length data should be entered at the appropriate length for correct EncodingMode.
:::

#### Example

```ts
createStream({
  symbology: Symbology.SymbologyType.RSS_EXP
}, '[01]98898765432106[3202]012345[15]991231')
```

## Korea Post Barcode

![Korea Post Barcode](/assets/barcodes/barcode_25.png)

The Korean Postal Barcode is used to encode a six-digit number and includes one check digit.

## Channel Code

![Channel Code](/assets/barcodes/barcode_26.png)

A highly-compressed symbol for numeric data. The number of channels in the symbol can be between `3` and `8` by setting the value of `option2`. It can also be determined by the length of the input data (e.g., a three-character input string generates a four-channel code by default).

The maximum values permitted depend on the number of channels used:

| Channels | Minimum Value | Maximum Value |
|----------|---------------|---------------|
| 3        | 00            | 26            |
| 4        | 000           | 292           |
| 5        | 0000          | 3493          |
| 6        | 00000         | 44072         |
| 7        | 000000        | 576688        |
| 8        | 0000000       | 7742862       |

#### Example

The following example renders a 5-channel Channel Code symbol:

```ts
createStream({
  symbology: SymbologyType.CHANNEL,
  option2: 6
}, '12345')
```

:::tip Note
Channel codes `7` and `8` require a processor-intensive algorithm to generate and so response times when generating these codes will be relatively slow.
:::
