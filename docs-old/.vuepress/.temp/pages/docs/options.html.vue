<template><div><h1 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h1>
<h2 id="symbology" tabindex="-1"><a class="header-anchor" href="#symbology" aria-hidden="true">#</a> symbology</h2>
<p>The enumerated type of the symbology (see <RouterLink to="/reference/">Reference</RouterLink> for a list).</p>
<ul>
<li>Type: <RouterLink to="/reference/"><code v-pre>SymbologyType</code></RouterLink></li>
<li>Required: <strong>yes</strong></li>
</ul>
<h2 id="filename" tabindex="-1"><a class="header-anchor" href="#filename" aria-hidden="true">#</a> fileName</h2>
<p>Full path to the file to create.</p>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Required: <strong>yes</strong>, if using <RouterLink to="/docs/api.html#createfile"><code v-pre>createFile()</code></RouterLink></li>
</ul>
<h2 id="text" tabindex="-1"><a class="header-anchor" href="#text" aria-hidden="true">#</a> text</h2>
<p>Human-readable text to display.</p>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Required: no</li>
<li>Default value: the input data value</li>
</ul>
<h2 id="primary" tabindex="-1"><a class="header-anchor" href="#primary" aria-hidden="true">#</a> primary</h2>
<p>Primary message data, for more complex symbols.</p>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Required: no</li>
<li>Default value: <code v-pre>null</code></li>
</ul>
<h2 id="showhumanreadabletext" tabindex="-1"><a class="header-anchor" href="#showhumanreadabletext" aria-hidden="true">#</a> showHumanReadableText</h2>
<p>If true, shows text underneath a barcode (if the symbology supports it). If false, text will not show.</p>
<ul>
<li>Type: <code v-pre>boolean</code></li>
<li>Required: no</li>
<li>Default value: <code v-pre>true</code></li>
</ul>
<h2 id="foregroundcolor" tabindex="-1"><a class="header-anchor" href="#foregroundcolor" aria-hidden="true">#</a> foregroundColor</h2>
<p>Barcode foreground color. <a href="https://css-tricks.com/8-digit-hex-codes/" target="_blank" rel="noopener noreferrer">Supports alpha channels<ExternalLinkIcon/></a>.</p>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Required: no</li>
<li>Default value: <code v-pre>FFFFFFFF</code></li>
</ul>
<h2 id="backgroundcolor" tabindex="-1"><a class="header-anchor" href="#backgroundcolor" aria-hidden="true">#</a> backgroundColor</h2>
<p>Barcode background color. <a href="https://css-tricks.com/8-digit-hex-codes/" target="_blank" rel="noopener noreferrer">Supports alpha channels<ExternalLinkIcon/></a>.</p>
<ul>
<li>Type: <code v-pre>string</code></li>
<li>Required: no</li>
<li>Default value: <code v-pre>000000FF</code></li>
</ul>
<h2 id="encoding" tabindex="-1"><a class="header-anchor" href="#encoding" aria-hidden="true">#</a> encoding</h2>
<p>The <RouterLink to="/docs/encoding.html#encoding-modes">encoding mode</RouterLink> of the input data, if applicable.</p>
<ul>
<li>Type: <RouterLink to="/docs/encoding.html#encoding-modes"><code v-pre>EncodingMode</code></RouterLink></li>
<li>Required: no</li>
<li>Default value: <code v-pre>EncodingMode.DATA_MODE</code></li>
</ul>
<h2 id="eci" tabindex="-1"><a class="header-anchor" href="#eci" aria-hidden="true">#</a> eci</h2>
<p>The <a href="https://en.wikipedia.org/wiki/Extended_Channel_Interpretation#Types_of_ECI_indicator" target="_blank" rel="noopener noreferrer">ECI encoding mode<ExternalLinkIcon/></a> of the input data, if applicable.</p>
<ul>
<li>Type: <code v-pre>number</code></li>
<li>Required: no</li>
<li>Default value: <code v-pre>0</code></li>
</ul>
<h2 id="height" tabindex="-1"><a class="header-anchor" href="#height" aria-hidden="true">#</a> height</h2>
<p>The height of the image, in pixels. If specified, this will maintain the aspect ratio.</p>
<ul>
<li>Type: <code v-pre>number</code></li>
<li>Required: no</li>
<li>Default value: <code v-pre>50</code></li>
</ul>
<h2 id="whitespacewidth" tabindex="-1"><a class="header-anchor" href="#whitespacewidth" aria-hidden="true">#</a> whitespaceWidth</h2>
<p>The width of whitespace, for barcodes which have this option.</p>
<ul>
<li>Type: <code v-pre>number</code></li>
<li>Required: no</li>
<li>Default value: <code v-pre>0</code></li>
</ul>
<h2 id="borderwidth" tabindex="-1"><a class="header-anchor" href="#borderwidth" aria-hidden="true">#</a> borderWidth</h2>
<p>The width of the border.</p>
<ul>
<li>Type: <code v-pre>number</code></li>
<li>Required: no</li>
<li>Default value: <code v-pre>0</code></li>
</ul>
<h2 id="scale" tabindex="-1"><a class="header-anchor" href="#scale" aria-hidden="true">#</a> scale</h2>
<p>Scale of the barcode image. <strong>Applies only to PNG</strong>.</p>
<ul>
<li>Type: <code v-pre>number</code></li>
<li>Required: no</li>
<li>Default value: <code v-pre>1.0</code></li>
</ul>
<h2 id="rotation" tabindex="-1"><a class="header-anchor" href="#rotation" aria-hidden="true">#</a> rotation</h2>
<p>The clockwise rotation of the SymbologyType.</p>
<ul>
<li>Type: <code v-pre>number</code></li>
<li>Required: no</li>
<li>Default value: <code v-pre>0</code></li>
<li>Valid values: <code v-pre>0</code>, <code v-pre>90</code>, <code v-pre>180</code>, <code v-pre>270</code></li>
</ul>
<h2 id="dotsize" tabindex="-1"><a class="header-anchor" href="#dotsize" aria-hidden="true">#</a> dotSize</h2>
<p>Size of dot used in <a href="#output-options"><code v-pre>BARCODE_DOTTY_MODE</code></a>.</p>
<ul>
<li>Type: <code v-pre>number</code></li>
<li>Required: no</li>
<li>Default value: <code v-pre>0.8</code></li>
</ul>
<h2 id="guarddescent" tabindex="-1"><a class="header-anchor" href="#guarddescent" aria-hidden="true">#</a> guardDescent</h2>
<p>Height in <code v-pre>x</code>-dimensions that <RouterLink to="/reference/one-dimensional.html#universal-product-code-iso-15420">EAN/UPC</RouterLink> guard bars descend.</p>
<ul>
<li>Type: <code v-pre>number</code></li>
<li>Required: no</li>
<li>Default value: <code v-pre>5</code></li>
</ul>
<h2 id="outputoptions" tabindex="-1"><a class="header-anchor" href="#outputoptions" aria-hidden="true">#</a> outputOptions</h2>
<p>Symbology-specific <a href="#output-options">output options</a>.</p>
<ul>
<li>Type: <a href="#output-options"><code v-pre>OutputOption</code></a></li>
<li>Required: no</li>
<li>Default value: <code v-pre>0</code></li>
</ul>
<h2 id="option1" tabindex="-1"><a class="header-anchor" href="#option1" aria-hidden="true">#</a> option1</h2>
<p>Symbology-type-specific option value.</p>
<ul>
<li>Type: <code v-pre>number</code></li>
<li>Required: no</li>
<li>Default value: <code v-pre>null</code></li>
</ul>
<h2 id="option2" tabindex="-1"><a class="header-anchor" href="#option2" aria-hidden="true">#</a> option2</h2>
<p>Symbology-type-specific option value.</p>
<ul>
<li>Type: <code v-pre>number</code></li>
<li>Required: no</li>
<li>Default value: <code v-pre>null</code></li>
</ul>
<h2 id="option3" tabindex="-1"><a class="header-anchor" href="#option3" aria-hidden="true">#</a> option3</h2>
<p>Symbology-type-specific option value.</p>
<ul>
<li>Type: <code v-pre>number</code></li>
<li>Required: no</li>
<li>Default value: <code v-pre>null</code></li>
</ul>
<h2 id="output-options" tabindex="-1"><a class="header-anchor" href="#output-options" aria-hidden="true">#</a> Output Options</h2>
<p>The <code v-pre>outputOptions</code> key in the <code v-pre>SymbologyConfig</code> object can be used to adjust various aspects of the rendered symbology.</p>
<table>
<thead>
<tr>
<th>Value</th>
<th>Effect</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>BARCODE_NO_ASCII</code></td>
<td>No options selected. (default)</td>
</tr>
<tr>
<td><code v-pre>BARCODE_BIND</code></td>
<td>Boundary bars above and below the symbol and between rows if stacking.</td>
</tr>
<tr>
<td><code v-pre>BARCODE_BOX</code></td>
<td>Add a box surrounding the symbol and whitespace.</td>
</tr>
<tr>
<td><code v-pre>READER_INIT</code></td>
<td>Add a reader initialisation symbol to the data before EncodingMode.</td>
</tr>
<tr>
<td><code v-pre>SMALL_TEXT</code></td>
<td>Use a smaller font for the human readable text.</td>
</tr>
<tr>
<td><code v-pre>BOLD_TEXT</code></td>
<td>Embolden the human readable text.</td>
</tr>
<tr>
<td><code v-pre>CMYK_COLOUR</code></td>
<td>Select the CMYK colour space option for encapsulated PostScript files.</td>
</tr>
<tr>
<td><code v-pre>BARCODE_DOTTY_MODE</code></td>
<td>Plot a matrix symbol using dots rather than squares.</td>
</tr>
<tr>
<td><code v-pre>GS1_GS_SEPARATOR</code></td>
<td>Use GS instead FNC1 as GS1 separator.</td>
</tr>
</tbody>
</table>
<h3 id="multiple-options" tabindex="-1"><a class="header-anchor" href="#multiple-options" aria-hidden="true">#</a> Multiple Options</h3>
<p>Options can be applied using the <code v-pre>OutputOption</code> enumerated type.</p>
<p>Multiple options can be selected by adding them together in the <code v-pre>outputOptions</code> value.</p>
<div class="custom-container tip"><p class="custom-container-title">Deprecation Notice</p>
<p>Starting in version 2.1.0, the <code v-pre>Options</code> enum has been renamed to <code v-pre>OutputOption</code>, and <code v-pre>Options</code> will be removed in the next major release.</p>
</div>
<h4 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h4>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  OutputOption<span class="token punctuation">,</span>
  OutputType<span class="token punctuation">,</span>
  SymbologyType<span class="token punctuation">,</span>
  createStream
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'symbology'</span>

<span class="token function">createStream</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  symbology<span class="token operator">:</span> SymbologyType<span class="token punctuation">.</span><span class="token constant">CODE128</span><span class="token punctuation">,</span>
  outputOptions<span class="token operator">:</span> OutputOption<span class="token punctuation">.</span><span class="token constant">BARCODE_BIND</span> <span class="token operator">+</span> OutputOption<span class="token punctuation">.</span><span class="token constant">READER_INIT</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'12345'</span><span class="token punctuation">,</span> OutputType<span class="token punctuation">.</span><span class="token constant">PNG</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


