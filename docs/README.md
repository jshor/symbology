---
home: true
heroImage: /assets/hero.svg
actionText: Read the docs →
actionLink: /docs/
footer: © 2021 Symbology.js.
---

<div style="text-align: center">
  <Bit/>
</div>

<div class="features">
  <div class="feature">
    <h2>Cross Platform</h2>
    <p>Render barcodes on macOS, Linux, or Windows. Distribute the package on whatever system you need.</p>
  </div>
  <div class="feature">
    <h2>Eclectic</h2>
    <p>Supports over 50 unique symbologies including linear barcodes, one- and two-dimensional, stacked, composite, two-track, and more.</p>
  </div>
  <div class="feature">
    <h2>Open Source</h2>
    <p>Symbology.js and the Zint library are both fully open source and supported by the OSS community.</p>
  </div>
</div>

## Quick start

```sh
yarn add symbology
```

### Example usage

```js
const symbology = require('symbology')

(async function () {
  try {
    const data = await symbology.createStream({
      symbology: symbology.Barcode.CODE128,
      backgroundColor: 'ff00ff',
      foregroundColor: '00ff00'
    }, '12345')

    console.log('Result: ', data)
  } catch (err) {
    console.error('Error: ', err)
  }
})()
```

::: warning Compatibility Note
Symbology.js requires Node.js >= 10.0.
:::
