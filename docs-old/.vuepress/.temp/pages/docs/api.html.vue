<template><div><h1 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h1>
<p>Each function returns a promise that completes with an object containing the exit code and message of the function (see <RouterLink to="/docs/error-handling.html">Error handling</RouterLink> for more info).</p>
<hr>
<h2 id="createstream-config-symbologyconfig-data-string-outputtype-outputtype-promise-symbologyresult" tabindex="-1"><a class="header-anchor" href="#createstream-config-symbologyconfig-data-string-outputtype-outputtype-promise-symbologyresult" aria-hidden="true">#</a> <code v-pre>createStream(config: SymbologyConfig, data: string[, outputType: OutputType]): Promise&lt;SymbologyResult&gt;</code></h2>
<p>Returns a <a href="#symbologyresult"><code v-pre>SymbologyResult</code></a> object containing the raw output of SVG, PNG, or EPS representation of the</p>
<h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h3>
<ul>
<li><strong><code v-pre>config: SymbologyConfig</code></strong>: Basic symbology <RouterLink to="/docs/options.html#basic-config">configuration options</RouterLink>.</li>
<li><strong><code v-pre>data: string</code></strong>: The primary symbology data to encode.</li>
<li><strong><code v-pre>outputType: OutputType</code></strong>: The <RouterLink to="/docs/options.html#output-options">output type</RouterLink> (PNG, EPS, or SVG). Defaults to <code v-pre>OutputType.PNG</code>.</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>For png, it will render <code v-pre>data</code> as a base64 string.</p>
</div>
<h3 id="output-types" tabindex="-1"><a class="header-anchor" href="#output-types" aria-hidden="true">#</a> Output Types</h3>
<p>Output types can be defined using the <code v-pre>OutputType</code> enumerated type.</p>
<table>
<thead>
<tr>
<th>Enum</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>EPS</code></td>
<td>Adobe encapsulated postscript vector</td>
</tr>
<tr>
<td><code v-pre>SVG</code></td>
<td>Scalable vector graphics</td>
</tr>
<tr>
<td><code v-pre>PNG</code></td>
<td>Portable network graphics</td>
</tr>
</tbody>
</table>
<h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  SymbologyType<span class="token punctuation">,</span>
  OutputType<span class="token punctuation">,</span>
  EncodingMode<span class="token punctuation">,</span>
  createStream
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'symbology'</span>

<span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createStream</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      symbology<span class="token operator">:</span> SymbologyType<span class="token punctuation">.</span><span class="token constant">CODE128</span><span class="token punctuation">,</span>
      encoding<span class="token operator">:</span> EncodingMode<span class="token punctuation">.</span><span class="token constant">GS1_MODE</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'12345'</span><span class="token punctuation">,</span> OutputType<span class="token punctuation">.</span><span class="token constant">PNG</span><span class="token punctuation">)</span>

    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Result: '</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Error: '</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns:</h4>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"Symbology successfully created."</span><span class="token punctuation">,</span>
  <span class="token property">"code"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token string">"data:image/png;base64,iVBOR [...] g=="</span><span class="token punctuation">,</span>
  <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
  <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">32</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="createfile-config-symbologyconfig-data-string-promise-symbologyresult" tabindex="-1"><a class="header-anchor" href="#createfile-config-symbologyconfig-data-string-promise-symbologyresult" aria-hidden="true">#</a> <code v-pre>createFile(config: SymbologyConfig, data: string): Promise&lt;SymbologyResult&gt;</code></h2>
<p>Creates an image file with the requested <RouterLink to="/docs/options.html#basic-config"><code v-pre>SymbologyConfig</code></RouterLink> and returns a <a href="#symbologyresult"><code v-pre>SymbologyResult</code></a>. This requires <code v-pre>fileName</code> to be specified.</p>
<h3 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h3>
<ul>
<li><strong><code v-pre>config: SymbologyConfig</code></strong>: Basic symbology <RouterLink to="/docs/options.html#basic-config">configuration options</RouterLink>.</li>
<li><strong><code v-pre>data: string</code></strong>: The primary symbology data to encode.</li>
<li><strong><code v-pre>outputType: OutputType</code></strong>: The <RouterLink to="/docs/options.html#output-options">output type</RouterLink> (PNG, EPS, or SVG).</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>The file type of the barcode to render is based on the extension <code v-pre>fileName</code> setting.
For example, to render an SVG, the <code v-pre>fileName</code> must be of the format: <code v-pre>&lt;myfile&gt;.svg</code>.</p>
</div>
<h3 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1" aria-hidden="true">#</a> Example</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  SymbologyType<span class="token punctuation">,</span>
  OutputTypes<span class="token punctuation">,</span>
  EncodingMode<span class="token punctuation">,</span>
  createStream
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'symbology'</span>

<span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createFile</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      symbology<span class="token operator">:</span> SymbologyType<span class="token punctuation">.</span><span class="token constant">CODE128</span><span class="token punctuation">,</span>
      encoding<span class="token operator">:</span> EncodingMode<span class="token punctuation">.</span><span class="token constant">GS1_MODE</span><span class="token punctuation">,</span>
      fileName<span class="token operator">:</span> <span class="token string">'out.svg'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'12345'</span><span class="token punctuation">)</span>

    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'File successfully created.'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Error: '</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1" aria-hidden="true">#</a> Returns:</h4>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"out.svg successfully created."</span><span class="token punctuation">,</span>
  <span class="token property">"code"</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="symbologyresult" tabindex="-1"><a class="header-anchor" href="#symbologyresult" aria-hidden="true">#</a> <code v-pre>SymbologyResult</code></h2>
<ul>
<li><strong><code v-pre>message</code>: <code v-pre>string</code></strong> - The resulting message from the symbology generation.</li>
<li><strong><code v-pre>code</code>: <code v-pre>number</code></strong> - Resulting status code from symbology generation. See <RouterLink to="/docs/error-handling.html">Error handling</RouterLink> for more info.</li>
<li><strong><code v-pre>data?</code>: <code v-pre>string</code></strong> - Resulting image data (if using <code v-pre>createStream()</code>). Only populated on successful symbology generation.</li>
<li><strong><code v-pre>width?</code>: <code v-pre>string</code></strong> - Resulting image width. Only populated on successful symbology generation.</li>
<li><strong><code v-pre>height?</code>: <code v-pre>string</code></strong> - Resulting image height. Only populated on successful symbology generation.</li>
</ul>
</div></template>


