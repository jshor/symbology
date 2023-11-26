<template><div><h1 id="composite-symbols-iso-24723" tabindex="-1"><a class="header-anchor" href="#composite-symbols-iso-24723" aria-hidden="true">#</a> Composite symbols (ISO 24723)</h1>
<p>Composite symbols employ a mixture of components to give more comprehensive information about a product. The permissible contents of a composite symbol is determined by the terms of the <a href="https://www.gs1.org/docs/barcodes/GS1_General_Specifications.pdf" target="_blank" rel="noopener noreferrer">GS1 General Specifications<ExternalLinkIcon/></a>.</p>
<p>Composite symbols consist of a linear component which can be an <RouterLink to="/reference/one-dimensional.html#european-article-number-en-797">EAN</RouterLink>, <RouterLink to="/reference/one-dimensional.html#universal-product-code-en-797">UPC</RouterLink>, <RouterLink to="/reference/one-dimensional.html#gs1-128">GS1-128</RouterLink> or <RouterLink to="/reference/one-dimensional.html#gs1-databar-iso-24724">GS1 DataBar</RouterLink> symbol, a 2D component which is based on <RouterLink to="/reference/stacked.html#pdf417-iso-15438">PDF417</RouterLink> or <RouterLink to="/reference/stacked.html#micropdf417-iso-24728">MicroPDF417</RouterLink>, and a separator pattern.</p>
<p>The type of linear component to be used is determined by the <code v-pre>symbology</code> option parameter. <RouterLink to="/reference/#composite-symbologies-iso-24723">Click here</RouterLink> for a condensed list of composite symbologies.</p>
<p>The data to be encoded in the linear component of a composite symbol should be set in the <code v-pre>primary</code> option.</p>
<h4 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h4>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token function">createStream</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  symbology<span class="token operator">:</span> SymbologyType<span class="token punctuation">.</span><span class="token constant">EANX_CC</span><span class="token punctuation">,</span>
  option1<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  primary<span class="token operator">:</span> <span class="token string">'331234567890'</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'[99]1234-abcd'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This will create an EAN-13 linear component with the data <code v-pre>331234567890</code> and a 2D <a href="#cc-a">CC-A</a> (see below) component with the data <code v-pre>(99)1234-abcd</code>.</p>
<p>EAN-2 and EAN-5 add-on data can be used with <RouterLink to="/reference/one-dimensional.html#european-article-number-en-797">EAN</RouterLink> and <RouterLink to="/reference/one-dimensional.html#universal-product-code-en-797">UPC</RouterLink> symbols using the <code v-pre>+</code> character.</p>
<p>The 2D component of a composite symbol can use one of three systems: <a href="#cc-a">CC-A</a>, <a href="#cc-b">CC-B</a> and <a href="#cc-c">CC-C</a>. The 2D component type may be selected automatically depending on the length of the input string, or by using the <code v-pre>option1</code> option setting as described below.</p>
<h2 id="cc-a" tabindex="-1"><a class="header-anchor" href="#cc-a" aria-hidden="true">#</a> CC-A</h2>
<p><img src="/assets/barcodes/barcode_34.png" alt="EAN-13 with CC-A composite component"></p>
<p>This system uses a variation of <RouterLink to="/reference/stacked.html#micropdf417-iso-24728">MicroPDF417</RouterLink> which optimised to fit into a small space. The size of the 2D component and the amount of error correction is determined by the amount of data to be encoded and the type of linear component which is being used. CC-A can encode up to 56 numeric digits or an alphanumeric string of shorter length.</p>
<p>To select CC-A set <code v-pre>option1</code> to <code v-pre>1</code>.</p>
<h2 id="cc-b" tabindex="-1"><a class="header-anchor" href="#cc-b" aria-hidden="true">#</a> CC-B</h2>
<p>This system uses <RouterLink to="/reference/stacked.html#micropdf417-iso-24728">MicroPDF417</RouterLink> to encode the 2D component. The size of the 2D component and the amount of error correction is determined by the amount of data to be encoded and the type of linear component which is being used. CC-B can encode up to 338 numeric digits or an alphanumeric string of shorter length.</p>
<p>To select CC-B set <code v-pre>option1</code> to <code v-pre>2</code>.</p>
<h2 id="cc-c" tabindex="-1"><a class="header-anchor" href="#cc-c" aria-hidden="true">#</a> CC-C</h2>
<p>This system uses <RouterLink to="/reference/stacked.html#pdf417-iso-15438">PDF417</RouterLink> and can only be used in conjunction with a <RouterLink to="/reference/one-dimensional.html#gs1-128">GS1-128</RouterLink> linear component. CC-C can encode up to 2361 numeric digits or an alphanumeric string of shorter length.</p>
<p>To select CC-C set <code v-pre>option1</code> to <code v-pre>3</code>.</p>
</div></template>


