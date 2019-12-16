# Composite symbols (ISO 24723)

Composite symbols employ a mixture of components to give more comprehensive information about a product. The permissible contents of a composite symbol is determined by the terms of the [GS1 General Specifications](https://www.gs1.org/docs/barcodes/GS1_General_Specifications.pdf).

Composite symbols consist of a linear component which can be an [EAN](one-dimensional.md#european-article-number-en-797), [UPC](one-dimensional.md#universal-product-code-en-797), [GS1-128](one-dimensional.md#gs1-128) or [GS1 DataBar](one-dimensional.md#gs1-databar-iso-24724) symbol, a 2D component which is based on [PDF417](stacked.md#pdf417-iso-15438) or [MicroPDF417](stacked.md#micropdf417-iso-24728), and a separator pattern.

The type of linear component to be used is determined by the `symbology` option parameter. Valid values are shown below.

| Numeric Value | Name              | Symbology                                                              |
|---------------|-------------------|------------------------------------------------------------------------|
| 130           | `EANX_CC`         | Composite symbol with EAN linear component                             |
| 131           | `EAN128_CC`       | Composite symbol with GS1-128 linear component                         |
| 132           | `RSS14_CC`        | Composite symbol with GS1 DataBar-14 linear component                  |
| 133           | `RSS_LTD_CC`      | Composite symbol with GS1 DataBar Limited component                    |
| 134           | `RSS_EXP_CC`      | Composite symbol with GS1 DataBar Extended component                   |
| 135           | `UPCA_CC`         | Composite symbol with UPC A linear component                           |
| 136           | `UPCE_CC`         | Composite symbol with UPC E linear component                           |
| 137           | `RSS14STACK_CC`   | Composite symbol with GS1 DataBar-14 Stacked component                 |
| 138           | `RSS14_OMNI_CC`   | Composite symbol with GS1 DataBar-14 Stacked Omnidirectional component |
| 139           | `RSS_EXPSTACK_CC` | Composite symbol with GS1 DataBar Expanded Stacked component           |

The data to be encoded in the linear component of a composite symbol should be set in the `primary` option.

#### Example

```js
symbology.createStream({
  symbology: symbology.Barcode.EANX_CC,
  option1: 1,
  primary: '331234567890'
}, '[99]1234-abcd')
```

This will create an EAN-13 linear component with the data `331234567890` and a 2D [CC-A](#cc-a) (see below) component with the data `(99)1234-abcd`.

EAN-2 and EAN-5 add-on data can be used with [EAN](one-dimensional.md#european-article-number-en-797) and [UPC](one-dimensional.md#universal-product-code-en-797) symbols using the `+` character.

The 2D component of a composite symbol can use one of three systems: [CC-A](#cc-a), [CC-B](#cc-b) and [CC-C](#cc-c). The 2D component type may be selected automatically depending on the length of the input string, or by using the `option1` option setting as described below.

## CC-A

![EAN-13 with CC-A composite component](/assets/barcodes/barcode_34.png)

This system uses a variation of [MicroPDF417](stacked.md#micropdf417-iso-24728) which optimised to fit into a small space. The size of the 2D component and the amount of error correction is determined by the amount of data to be encoded and the type of linear component which is being used. CC-A can encode up to 56 numeric digits or an alphanumeric string of shorter length.

To select CC-A set `option1` to `1`.

## CC-B

This system uses [MicroPDF417](stacked.md#micropdf417-iso-24728) to encode the 2D component. The size of the 2D component and the amount of error correction is determined by the amount of data to be encoded and the type of linear component which is being used. CC-B can encode up to 338 numeric digits or an alphanumeric string of shorter length.

To select CC-B set `option1` to `2`.

## CC-C

This system uses [PDF417](stacked.md#pdf417-iso-15438) and can only be used in conjunction with a [GS1-128](one-dimensional.md#gs1-128) linear component. CC-C can encode up to 2361 numeric digits or an alphanumeric string of shorter length.

To select CC-C set `option1` to `3`.
