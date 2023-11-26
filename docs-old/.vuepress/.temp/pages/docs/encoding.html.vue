<template><div><h1 id="encoding" tabindex="-1"><a class="header-anchor" href="#encoding" aria-hidden="true">#</a> Encoding</h1>
<p>By default, all input data is assumed to be encoded in Unicode (UTF-8) format. Many barcode symbologies encode data using Latin-1 (<a href="https://en.wikipedia.org/wiki/ISO/IEC_8859-1" target="_blank" rel="noopener noreferrer">ISO-8851-1<ExternalLinkIcon/></a>) character encoding, which means the input data will be converted from Unicode to Latin-1 before being put in the symbol. <RouterLink to="/guide/symbologies/two-dimensional.html#qr-code-iso-18004">QR Code</RouterLink>, <RouterLink to="/guide/symbologies/two-dimensional.html#micro-qr-code-iso-18004">Micro QR Code</RouterLink>, <RouterLink to="/guide/symbologies/two-dimensional.html#han-xin-code">Han Xin Code</RouterLink>, and <RouterLink to="/guide/symbologies/two-dimensional.html#grid-matrix">Grid Matrix</RouterLink> standards can encode Chinese or Japanese characters, which are also converted from Unicode.</p>
<p>If characters which can not be encoded using the default character encoding are encountered during render, the <a href="#extended-channel-interpolation-eci">Extended Channel Interpolation (ECI)</a> method will be used to encode the data.</p>
<div class="custom-container warning"><p class="custom-container-title">Important</p>
<p>Not all barcode readers support ECI mode, so using ECI can sometimes result in unreadable barcodes. If you are using characters beyond those supported by Latin-1, you should check that the resulting barcode can be understood by your target barcode reader.</p>
</div>
<h3 id="extended-channel-interpolation-eci" tabindex="-1"><a class="header-anchor" href="#extended-channel-interpolation-eci" aria-hidden="true">#</a> Extended Channel Interpolation (ECI)</h3>
<p>If you are passing in input data from file which is not encoded in UTF-8, you can specify the encoding using the <code v-pre>eci</code> option with the appropriate ECI code.</p>
<p>This procedure will add an ECI flag in the barcode data that tells the barcode reader to change character encoding.</p>
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>A warning message will be generated when ECI codes have been inserted into a symbol.</p>
</div>
<h3 id="available-eci-codes" tabindex="-1"><a class="header-anchor" href="#available-eci-codes" aria-hidden="true">#</a> Available ECI Codes</h3>
<p>The following is a list of available ECI codes:</p>
<table>
<thead>
<tr>
<th>ECI Code</th>
<th>Character Encoding Scheme</th>
</tr>
</thead>
<tbody>
<tr>
<td>3</td>
<td>ISO-8859-1 - Latin alphabet No. 1 (default)</td>
</tr>
<tr>
<td>4</td>
<td>ISO-8859-2 - Latin alphabet No. 2</td>
</tr>
<tr>
<td>5</td>
<td>ISO-8859-3 - Latin alphabet No. 3</td>
</tr>
<tr>
<td>6</td>
<td>ISO-8859-4 - Latin alphabet No. 4</td>
</tr>
<tr>
<td>7</td>
<td>ISO-8859-5 - Latin/Cyrillic alphabet</td>
</tr>
<tr>
<td>8</td>
<td>ISO-8859-6 - Latin/Arabic alphabet</td>
</tr>
<tr>
<td>9</td>
<td>ISO-8859-7 - Latin/Greek alphabet</td>
</tr>
<tr>
<td>10</td>
<td>ISO-8859-8 - Latin/Hebrew alphabet</td>
</tr>
<tr>
<td>11</td>
<td>ISO-8859-9 - Latin alphabet No. 5</td>
</tr>
<tr>
<td>12</td>
<td>ISO-8859-10 - Latin alphabet No. 6</td>
</tr>
<tr>
<td>13</td>
<td>ISO-8859-11 - Latin/Thai alphabet</td>
</tr>
<tr>
<td>15</td>
<td>ISO-8859-13 - Latin alphabet No. 7</td>
</tr>
<tr>
<td>16</td>
<td>ISO-8859-14 - Latin alphabet No. 8 (Celtic)</td>
</tr>
<tr>
<td>17</td>
<td>ISO-8859-15 - Latin alphabet No. 9</td>
</tr>
<tr>
<td>18</td>
<td>ISO-8859-16 - Latin alphabet No. 10</td>
</tr>
<tr>
<td>20</td>
<td>Shift-Jis (JISX 0208 and JISX 0201) ❖</td>
</tr>
<tr>
<td>21</td>
<td>Windows-1250 - Latin 2 (Central Europe)</td>
</tr>
<tr>
<td>22</td>
<td>Windows-1251 - Cyrillic</td>
</tr>
<tr>
<td>23</td>
<td>Windows-1252 – Latin 1</td>
</tr>
<tr>
<td>24</td>
<td>Windows-1256 - Arabic</td>
</tr>
<tr>
<td>25</td>
<td>UCS-2 Unicode (High Order Byte First) ❖</td>
</tr>
<tr>
<td>26</td>
<td>Unicode (UTF-8)</td>
</tr>
<tr>
<td>27</td>
<td>ISO-646:1991 7bit Charset</td>
</tr>
<tr>
<td>28</td>
<td>Big-5 (Taiwan) Chinese Charset ❖</td>
</tr>
<tr>
<td>29</td>
<td>GB(PRC) Chinese Charset ❖</td>
</tr>
<tr>
<td>30</td>
<td>Korean Charset (KSX1001:1998) ❖</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">❖ Note</p>
<p>When using the ECI flag, all input data will be treated as raw binary. This means that any data which is encoded using a multible byte encoding scheme (one other than UTF-8) will not use optimal compression.</p>
<p>It's recomended that data using these schemes are converted to UTF-8 before rendering the SymbologyType.</p>
</div>
<h3 id="gs1-data" tabindex="-1"><a class="header-anchor" href="#gs1-data" aria-hidden="true">#</a> GS1 Data</h3>
<p>GS1 data can be encoded in a number of symbologies. Application identifiers should be enclosed in square brackets (<code v-pre>[...]</code>) followed by the data to be encoded.</p>
<p>To encode GS1 data, set the <code v-pre>encoding</code> option to <code v-pre>EncodingMode.GS1_MODE</code> (see <a href="#encoding-modes">Encoding Modes</a>).</p>
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>GS1 mode is automatically assumed for EAN-128, DataBar and Composite symbologies but is also available for <RouterLink to="/guide/symbologies/stacked.html#code-16k-en-12323">Code 16k</RouterLink>, <RouterLink to="/guide/symbologies/two-dimensional.html#data-matrix-ecc200-iso-16022">Data Matrix</RouterLink>, <RouterLink to="/guide/symbologies/two-dimensional.html#qr-code-iso-18004">QR Code</RouterLink>, <RouterLink to="/guide/symbologies/two-dimensional.html#aztec-code-iso-24778">Aztec Code</RouterLink>, <RouterLink to="/guide/symbologies/two-dimensional.html#dotcode">DotCode</RouterLink>, and <RouterLink to="/guide/symbologies/two-dimensional.html#qr-code-iso-18004">QR Code</RouterLink>.</p>
</div>
<h3 id="hibc-data" tabindex="-1"><a class="header-anchor" href="#hibc-data" aria-hidden="true">#</a> HIBC Data</h3>
<p><strong>Health Industry Bar Code (HIBC)</strong> data may also be encoded in the <RouterLink to="/guide/symbologies/one-dimensional.html#code-39">Code 39</RouterLink>, <RouterLink to="/guide/symbologies/one-dimensional.html#code-128">Code 128</RouterLink>, <RouterLink to="/guide/symbologies/stacked.html#codablock-f">Codablock-F</RouterLink>, <RouterLink to="/guide/symbologies/two-dimensional.html#data-matrix-ecc200-iso-16022">Data Matrix</RouterLink>, <RouterLink to="/guide/symbologies/two-dimensional.html#qr-code-iso-18004">QR Code</RouterLink>, <RouterLink to="/guide/symbologies/stacked.html#pdf417-iso-15438">PDF417</RouterLink> and <RouterLink to="/guide/symbologies/two-dimensional.html#aztec-code-iso-24778">Aztec Code</RouterLink> symbologies. Within this mode, the leading <code v-pre>+</code> and the check character are automatically added.</p>
<h2 id="encoding-modes" tabindex="-1"><a class="header-anchor" href="#encoding-modes" aria-hidden="true">#</a> Encoding Modes</h2>
<p>The way in which the input data is encoded can be set using the <code v-pre>encoding</code> property. Valid values are described below.</p>
<p>Values can be accessed using the <code v-pre>EncodingMode</code> enumerated type.</p>
<h3 id="basic-modes" tabindex="-1"><a class="header-anchor" href="#basic-modes" aria-hidden="true">#</a> Basic Modes</h3>
<table>
<thead>
<tr>
<th>Value</th>
<th>Effect</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>DATA_MODE</code></td>
<td>Uses full ASCII range interpreted as Latin-1 or binary data.</td>
</tr>
<tr>
<td><code v-pre>UNICODE_MODE</code></td>
<td>Uses pre-formatted UTF-8 input.</td>
</tr>
<tr>
<td><code v-pre>GS1_MODE</code></td>
<td>Encodes GS1 data using FNC1 characters.</td>
</tr>
</tbody>
</table>
<h3 id="advanced-modes" tabindex="-1"><a class="header-anchor" href="#advanced-modes" aria-hidden="true">#</a> Advanced Modes</h3>
<table>
<thead>
<tr>
<th>Value</th>
<th>Effect</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>ESCAPE_MODE</code></td>
<td>Process escape sequences.</td>
</tr>
<tr>
<td><code v-pre>GS1PARENS_MODE</code></td>
<td>Process parentheses as GS1 AI delimiters (instead of square brackets).</td>
</tr>
<tr>
<td><code v-pre>GS1NOCHECK_MODE</code></td>
<td>Do not check validity of GS1 data (except that printable ASCII only).</td>
</tr>
<tr>
<td><code v-pre>HEIGHTPERROW_MODE</code></td>
<td>Interpret <code v-pre>height</code> as per-row rather than as overall height.</td>
</tr>
<tr>
<td><code v-pre>FAST_MODE</code></td>
<td>Use faster (if less optimal) encoding or other shortcuts if available.</td>
</tr>
<tr>
<td><code v-pre>EXTRA_ESCAPE_MODE</code></td>
<td>Process special symbology-specific escape sequences. Currently only supports Code 128.</td>
</tr>
</tbody>
</table>
<h3 id="combining-modes" tabindex="-1"><a class="header-anchor" href="#combining-modes" aria-hidden="true">#</a> Combining Modes</h3>
<p>Multiple modes can be combined by adding their enum values together.</p>
<p>The following example informs the renderer to both accept pre-formatted UTF-8 input and encode GS1 data using FNC1 characters:</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code>EncodingMode<span class="token punctuation">.</span><span class="token constant">DATA_MODE</span> <span class="token operator">+</span> EncodingMode<span class="token punctuation">.</span><span class="token constant">GS1_MODE</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Additionally, modes can be arranged to allow multiple options by performing a bitwise OR operation, depending on its context.</p>
<p>The following example informs the renderer to accept pre-formatted UTF-8 input <strong>or</strong> encode GS1 data using FNC1 characters.</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code>EncodingMode<span class="token punctuation">.</span><span class="token constant">DATA_MODE</span> <span class="token operator">|</span> EncodingMode<span class="token punctuation">.</span><span class="token constant">GS1_MODE</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token function">createStream</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  symbology<span class="token operator">:</span> SymbologyType<span class="token punctuation">.</span><span class="token constant">CODE128</span><span class="token punctuation">,</span>
  encoding<span class="token operator">:</span> EncodingMode<span class="token punctuation">.</span><span class="token constant">GS1_MODE</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'12345'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


