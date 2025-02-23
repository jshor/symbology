<template><div><h1 id="other-barcode-like-markings" tabindex="-1"><a class="header-anchor" href="#other-barcode-like-markings" aria-hidden="true">#</a> Other Barcode-Like Markings</h1>
<p><RouterLink to="/reference/#other-barcode-like-markings">Click here</RouterLink> for a condensed list of these symbologies.</p>
<h2 id="facing-identification-mark-fim" tabindex="-1"><a class="header-anchor" href="#facing-identification-mark-fim" aria-hidden="true">#</a> Facing Identification Mark (FIM)</h2>
<p><img src="/assets/barcodes/barcode_52.png" alt="FIM"></p>
<p>Used by the United States Postal Service (USPS), the FIM symbology is used to assist automated mail processing. There are only 4 valid symbols which can be generated using the characters A-D as shown in the table below.</p>
<table>
<thead>
<tr>
<th>Letter Code</th>
<th>Usage</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>A</code></td>
<td>Used for courtesy reply mail and metered reply mail with a pre-printed PostNet symbol.</td>
</tr>
<tr>
<td><code v-pre>B</code></td>
<td>Used for business reply mail without a pre-printed zip code.</td>
</tr>
<tr>
<td><code v-pre>C</code></td>
<td>Used for business reply mail with a pre-printed zip code.</td>
</tr>
<tr>
<td><code v-pre>D</code></td>
<td>Used for Information Based Indicia (IBI) postage.</td>
</tr>
</tbody>
</table>
<h2 id="flattermarken" tabindex="-1"><a class="header-anchor" href="#flattermarken" aria-hidden="true">#</a> Flattermarken</h2>
<p><img src="/assets/barcodes/barcode_53.png" alt="Flattermarken"></p>
<p>Used for the recognition of page sequences in print-shops, the Flattermarken is not a true barcode symbol and requires precise knowledge of the position of the mark on the page. The Flattermarken system can encode any length numeric data and does not include a check digit.</p>
<h2 id="daft-code" tabindex="-1"><a class="header-anchor" href="#daft-code" aria-hidden="true">#</a> DAFT Code</h2>
<p>This is a method for creating 4-state codes where the data encoding is provided by an external program. Input data should consist of the letters <code v-pre>D</code>, <code v-pre>A</code>, <code v-pre>F</code>, and <code v-pre>T</code>, where these refer to <strong>descender</strong>, <strong>ascender</strong>, <strong>full</strong> (ascender and descender) or <strong>tracker</strong> (neither ascender nor descender) respectively.</p>
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>Any characters other than <code v-pre>D</code>, <code v-pre>A</code>, <code v-pre>F</code>, or <code v-pre>T</code> are ignored.</p>
</div>
</div></template>


