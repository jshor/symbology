# GS1 DataBar (ISO 24724)

[GS1 DataBar Coupon](https://en.wikipedia.org/wiki/GS1_DataBar_Coupon), formerly known as **Reduced Space Symbology (RSS-14)**, is a one-dimensional barcode variant that has been in use in the retail industry since the mid-1980s.

This family of barcodes has two categories of variants:

### Symbols for [point of sale](https://en.wikipedia.org/wiki/Point_of_sale) scanning:
  * [GS1 DataBar Omnidirectional](#gs1-databar-omnidirectional)
  * GS1 DataBar Stacked Omnidirectional
  * GS1 DataBar Expanded Omnidirectional
  * GS1 DataBar Expanded Stacked
### Non-point-of-sale symbols:
  * [GS1 DataBar Truncated](#gs1-databar-truncated)
  * [GS1 DataBar Limited](#gs1-databar-limited)
  * GS1 DataBar Stacked

## GS1 DataBar Omnidirectional

**GS1 DataBar Omnidirectional** encodes a 13-digit numeric input. This symbology can be rendered using the `RSS14STACK_OMNI` symbology type.


### Check digit

A check digit is automatically added for a 13-digit input. If a 14-digit input is provided, the check digit is assumed and verified prior to rendering.

An Application Identifier (AI) of `01` will be automatically prepended.

### Example

![GS1 DataBar Omnidirectional](/assets/barcodes/one-dimensional/rss14omni.svg)

```ts
createStream({
  symbology: SymbologyType.RSS14STACK_OMNI
}, '0950110153001')
```

## GS1 DataBar Truncated

A variant of [GS1 DataBar Omnidirectional](#gs1-databar-omnidirectional), this symbology can also be rendered using the `RSS14STACK_OMNI` symbology type and by setting the `height` to a value between `13` and `32`.

### Example

![GS1 DataBar Truncated](/assets/barcodes/one-dimensional/rss14truncated.svg)

```ts
createStream({
  symbology: SymbologyType.RSS14STACK_OMNI,
  height: 13
}, '0950110153001')
```

:::warning Important
Truncated symbols may not be scannable by omnidirectional scanners.
:::

## GS1 DataBar Limited

Also known as **RSS Limited**, this symbology can encode a 13-digit item code similarly to how [GS1 DataBar Omnidirectional](#gs1-databar-omnidirectional) does it, with the exception that its data is limited to the range `0` to `1999999999999`.

### Check digit

A check digit is automatically added for a 13-digit input. If a 14-digit input is provided, the check digit is assumed and verified prior to rendering.

An Application Identifier (AI) of `01` will be automatically prepended.

### Example

![GS1 DataBar Limited](/assets/barcodes/one-dimensional/rss-limited.svg)

```ts
createStream({
  symbology: SymbologyType.RSS_LTD
}, '0950110153001')
```

## GS1 DataBar Expanded

Also known as **RSS Expanded**, this symbology can encode data from multiple Application Identifiers (AIs) into a single symbol and can be rendered using the `RSS_EXP` symbology type.

:::tip Note
As with [GS1-128](./code128.md#gs1-128), AIs are demarcated using square brackets (`[` and `]`). In human-readable text, these brackets will be displayed as parentheses (`(` and `)`).
:::

### Check digits

Check digits for GTIN data AI (01) are not automatically generated and must be included in the input data.

### Example

![GS1 DataBar Expanded](/assets/barcodes/one-dimensional/rss-expanded.svg)

```ts
createStream({
  symbology: SymbologyType.RSS_EXP
}, '[01]98898765432106[3202]012345[15]991231')
```