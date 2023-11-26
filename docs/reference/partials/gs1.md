While characters in the Latin-1 are set by default, it is also possible to encode [GS1 data](/docs/advanced.md#gs1-data) or other character sets by utilizing the [ECI mechanism](/docs/advanced.md#eci-encoding).

By default, any GS1 data would be encoded using `FNC1`. To use `GS` as the separator, set `gs1` to `true`.
