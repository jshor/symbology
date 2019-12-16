# Two-Track symbols
## Two-Track Pharmacode

![Pharmacode](/assets/barcodes/barcode_36.png)

Developed by Laetus, Pharmacode Two-Track is an alternative system to Pharmacode One-Track used for the identification of pharmaceuticals. The symbology is able to encode whole numbers between `4` and `64570080`.

## PostNet

![PostNet](/assets/barcodes/barcode_37.png)

Used by the United States Postal Service until 2009, the PostNet barcode was used for encoding zip-codes on mail items. PostNet uses numerical input data and includes a modulo-10 check digit.

While any length of PostNet symbols may be encoded, standard lengths as used by USPS were **PostNet6** (5 digits ZIP input), **PostNet10** (5 digit ZIP + 4 digit user data) and **PostNet12** (5 digit ZIP + 6 digit user data).

## PLANET

![PLANET](/assets/barcodes/barcode_38.png)

Used by the United States Postal Service until 2009, the PLANET (Postal Alpha Numeric Encoding Technique) barcode was used for encoding routing data on mail items.

Planet uses numerical input data and includes a modulo-10 check digit. While any length of PLANET symbols may be encoded, standard lengths used by USPS were **Planet12** (11 digit input) and **Planet14** (13 digit input).

## 4-State Postal Codes

![4-State barcode](/assets/barcodes/4-state.png)

4-State barcode systems are comprised of a series of bars, each of which can individually have one of four possible states, to encode information used in automated sortation and delivery onto each piece of mail. Each bar can either be short and centred (known as a **tracker**), medium and elevated (an **ascender**), medium and lowered (a **descender**), or full height.

## Australia Post 4-State symbols

### Customer Barcodes

![Australia Post symbol](/assets/barcodes/barcode_39.png)

This symbology was developed by Australia Post for printing [Delivery Point ID (DPID)](https://en.wikipedia.org/wiki/Delivery_point#Australia_Post) and customer information on mail items.

**Australia Post Standard Customer Barcode**, **Customer Barcode 2** and **Customer Barcode 3** are 37-bar, 52-bar and 67-bar specifications respectively.

Valid data characters are `0-9`, `A-Z`, `a-z`, space (` `), and hash (`#`). A Format Control Code (FCC) is automatically added and should not be included in the input data.

:::tip Note
[Reed-Solomon error correction](https://en.wikipedia.org/wiki/Reed-Solomon_error_correction) data is automatically computed.
:::

#### Encoding

Encoding behaviour is determined by the length of the input data according to the formula shown in the following table:

| Input Length | Required Input Format     | symbol Length | FCC | Encoding Table |
|--------------|---------------------------|---------------|-----|----------------|
| 8            | `99999999`                | 37-bar        | 11  | None           |
| 13           | `99999999AAAAA`           | 52-bar        | 59  | C              |
| 16           | `9999999999999999`        | 52-bar        | 59  | N              |
| 18           | `99999999AAAAAAAAAA`      | 67-bar        | 62  | C              |
| 23           | `99999999999999999999999` | 67-bar        | 62  | N              |

### Reply Paid Barcode

A Reply Paid version of the Australia Post 4-State Barcode (FCC 45) which requires an 8-digit DPID input.

### Routing Barcode

A Routing version of the Australia Post 4-State Barcode (FCC 87) which requires an 8-digit DPID input.

### Redirect Barcode

A Redirection version of the Australia Post 4-State Barcode (FCC 92) which requires an 8-digit DPID input.

## Dutch Post KIX Code

![Dutch Post KIX Code](/assets/barcodes/barcode_40.png)

This symbology is used by Royal Dutch TPG Post (Netherlands) for Postal code and automatic mail sorting. Data input can consist of numbers `0-9` and letters `A-Z`, and must be exactly 11 characters in length. No check digit is included.

## Royal Mail 4-State Country Code (RM4SCC)

![Royal Mail 4-State Code](/assets/barcodes/barcode_41.png)

The RM4SCC standard is used by the Royal Mail in the UK to encode postcode and customer data on mail items. Data input can consist of numbers `0-9` and letters `A-Z` and usually includes delivery postcode followed by house number. Check digit data is automatically computed.

## Royal Mail 4-State Mailmark

![barcode](/assets/barcodes/mailmark.png)

Developed in 2014 as a replacement for [RM4SCC](#royal-mail-4-state-country-code-rm4scc). Input is a pre-formatted alpanumeric string of 22 (for Barcode C) or 26 (for Barcode L) characters, producing a symbol with 66 or 78 bars respectively.

:::tip Note
[Reed-Solomon error correction](https://en.wikipedia.org/wiki/Reed-Solomon_error_correction) data is automatically computed.
:::

## USPS OneCode

![USPS OneCode](/assets/barcodes/barcode_42.png)

Also known as the **Intelligent Mail Barcode** and used in the US by the United States Postal Service (USPS), this system replaced the [PostNet](#postnet) and [PLANET](#planet) symbologies in 2009. OneCode is a fixed length (65-bar) symbol which combines routing and customer information in a single symbol.

Input data consists of a 20 digit tracking code, followed by a dash (`-`), followed by a delivery point zip-code which can be 0, 5, 9 or 11 digits in length. For example all of the following inputs are valid data entries:

### Examples

* `01234567094987654321`
* `01234567094987654321-01234`
* `01234567094987654321-012345678`
* `01234567094987654321-01234567891`

## Japanese Postal Code

![Japanese Postal Code](/assets/barcodes/barcode_43.png)

Used for address data on mail items for Japan Post. Accepted values are `0-9`, `A-Z` and dash (`-`). A modulo-19 check digit is automatically added.
