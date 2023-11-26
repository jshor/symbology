<template><div><h1 id="one-dimensional-symbols" tabindex="-1"><a class="header-anchor" href="#one-dimensional-symbols" aria-hidden="true">#</a> One-Dimensional symbols</h1>
<p>One-Dimensional symbols are what most people associate with the term SymbologyType. They consist of a number of bars and a number of spaces of differing widths.</p>
<p><RouterLink to="/reference/#one-dimensional-symbologies">Click here</RouterLink> for a condensed list of one-dimensional symbologies.</p>
<h2 id="code-11" tabindex="-1"><a class="header-anchor" href="#code-11" aria-hidden="true">#</a> Code 11</h2>
<p><img src="/assets/barcodes/barcode_14.png" alt="Code 11"></p>
<p>Developed by Intermec in 1977, Code 11 is similar to <a href="#code-2-of-5">Code 2 of 5 Matrix</a> and is primarily used in telecommunications. The symbol can encode any length string consisting of the digits <code v-pre>0-9</code> and the dash character (<code v-pre>-</code>). One modulo-11 check digit is calculated.</p>
<h4 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h4>
<p>The following will render a Code 11 symbol encoding <code v-pre>8765432164</code>:</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token function">createStream</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  symbology<span class="token operator">:</span> SymbologyType<span class="token punctuation">.</span><span class="token constant">CODE11</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'8765432164'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="code-2-of-5" tabindex="-1"><a class="header-anchor" href="#code-2-of-5" aria-hidden="true">#</a> Code 2 of 5</h2>
<p><img src="/assets/barcodes/barcode_15.png" alt="Code 2 of 5"></p>
<p>Code 2 of 5 is a family of one-dimensional symbols, 8 of which are supported. Note that the names given to these standards alters from one source to another so you should take care to ensure that you have the right barcode type before using these standards.</p>
<h3 id="standard-code-2-of-5" tabindex="-1"><a class="header-anchor" href="#standard-code-2-of-5" aria-hidden="true">#</a> Standard Code 2 of 5</h3>
<p>Also known as <strong>Code 2 of 5 Matrix</strong>, this symbology is a self-checking code used in industrial applications and photo development. Standard Code 2 of 5 will encode any length numeric input (digits <code v-pre>0-9</code>).</p>
<h4 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1" aria-hidden="true">#</a> Example</h4>
<p>The following will render a standard Code 2 of 5 symbol encoding <code v-pre>32109876543211</code>:</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token function">createStream</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  symbology<span class="token operator">:</span> SymbologyType<span class="token punctuation">.</span><span class="token constant">C25IATA</span><span class="token punctuation">,</span>
  borderWidth<span class="token operator">:</span> <span class="token number">6</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'32109876543211'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="iata-code-2-of-5" tabindex="-1"><a class="header-anchor" href="#iata-code-2-of-5" aria-hidden="true">#</a> IATA Code 2 of 5</h3>
<p>Used for baggage handling in the air-transport industry by the International Air Transport Agency, this self-checking code will encode any length numeric input (digits <code v-pre>0-9</code>) and does not include a check digit.</p>
<h3 id="industrial-code-2-of-5" tabindex="-1"><a class="header-anchor" href="#industrial-code-2-of-5" aria-hidden="true">#</a> Industrial Code 2 of 5</h3>
<p>Industrial Code 2 of 5 can encode any length numeric input (digits <code v-pre>0-9</code>) and does not include a check digit.</p>
<h3 id="interleaved-code-2-of-5" tabindex="-1"><a class="header-anchor" href="#interleaved-code-2-of-5" aria-hidden="true">#</a> Interleaved Code 2 of 5</h3>
<p>This self-checking symbology encodes pairs of numbers, and so can only encode an even number of digits (<code v-pre>0-9</code>). If an odd number of digits is entered a leading zero is automatically added. No check digit is added.</p>
<h3 id="code-2-of-5-data-logic" tabindex="-1"><a class="header-anchor" href="#code-2-of-5-data-logic" aria-hidden="true">#</a> Code 2 of 5 Data Logic</h3>
<p>Data Logic does not include a check digit and can encode any length numeric input (digits <code v-pre>0-9</code>).</p>
<h3 id="itf-14" tabindex="-1"><a class="header-anchor" href="#itf-14" aria-hidden="true">#</a> ITF-14</h3>
<p>ITF-14, also known as <strong>UPC Shipping Container</strong> symbol or <strong>Case Code</strong>, is based on <a href="#interleaved-code-2-of-5">Interleaved Code 2 of 5</a> and requires a 13 digit numeric input (digits <code v-pre>0-9</code>). One modulo-10 check digit is automatically added.</p>
<p>By default, a bounding box with a border width of 5 pixels will be added. To specify a border width, set <RouterLink to="/docs/options.html#borderwidth"><code v-pre>borderWidth</code></RouterLink> option to the desired border in pixels (or <code v-pre>0</code> to remove it).</p>
<h3 id="deutsche-post-leitcode" tabindex="-1"><a class="header-anchor" href="#deutsche-post-leitcode" aria-hidden="true">#</a> Deutsche Post Leitcode</h3>
<p>Leitcode is based on <a href="#interleaved-code-2-of-5">Interleaved Code 2 of 5</a> and is used by Deutsche Post for mailing purposes. Leitcode requires a 13-digit numerical input and includes a check digit.</p>
<h3 id="deutsche-post-identcode" tabindex="-1"><a class="header-anchor" href="#deutsche-post-identcode" aria-hidden="true">#</a> Deutsche Post Identcode</h3>
<p>Identcode is based on <a href="#interleaved-code-2-of-5">Interleaved Code 2 of 5</a> and is used by Deutsche Post for mailing purposes. Identcode requires an 11-digit numerical input and includes a check digit.</p>
<h2 id="universal-product-code-iso-15420" tabindex="-1"><a class="header-anchor" href="#universal-product-code-iso-15420" aria-hidden="true">#</a> Universal Product Code (<a href="https://www.iso.org/standard/46143.html" target="_blank" rel="noopener noreferrer">ISO-15420<ExternalLinkIcon/></a>)</h2>
<h3 id="upc-version-a" tabindex="-1"><a class="header-anchor" href="#upc-version-a" aria-hidden="true">#</a> UPC Version A</h3>
<p><img src="/assets/barcodes/barcode_16.png" alt="UPC-A"></p>
<p>UPC-A is used in the United States for retail applications. The symbol requires an 11 digit article number. The check digit is automatically computed. In addition EAN-2 and EAN-5 add-on symbols can be added using the <code v-pre>+</code> character.</p>
<h4 id="example-2" tabindex="-1"><a class="header-anchor" href="#example-2" aria-hidden="true">#</a> Example</h4>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token function">createStream</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  symbology<span class="token operator">:</span> SymbologyType<span class="token punctuation">.</span><span class="token constant">UPCA</span><span class="token punctuation">,</span>
  encoding<span class="token operator">:</span> EncodingMode<span class="token punctuation">.</span><span class="token constant">UNICODE_MODE</span><span class="token punctuation">,</span>
  primary<span class="token operator">:</span> <span class="token string">'331234567890'</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'72527270270+12345'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="check-digit" tabindex="-1"><a class="header-anchor" href="#check-digit" aria-hidden="true">#</a> Check Digit</h4>
<p>If your input data already includes the check digit, symbology type <code v-pre>BARCODE_UPCA_CHK</code> can be used to take in a 12-digit input and validate its check digit before encoding.</p>
<div class="custom-container tip"><p class="custom-container-title">Tips</p>
<ul>
<li>The gap between the main symbol and an add-on can be adjusted by setting <code v-pre>option2</code> to the desired value (a multiple of the <code v-pre>x</code>-dimension).</li>
<li>The height in <code v-pre>x</code>-dimensions that the guard bars descend below the main bars can be adjusted by setting the <RouterLink to="/docs/options.html#guarddescent"><code v-pre>guardDescent</code></RouterLink> option to a value between <code v-pre>0</code> and <code v-pre>20</code> (defaults to <code v-pre>5</code>).</li>
</ul>
</div>
<h3 id="upc-version-e" tabindex="-1"><a class="header-anchor" href="#upc-version-e" aria-hidden="true">#</a> UPC Version E</h3>
<p>UPC-E is a zero-compressed version of <a href="#upc-version-a">UPC-A</a> developed for smaller packages.</p>
<p>The code requires a 6 digit article number (digits <code v-pre>0-9</code>). The check digit is automatically computed. EAN-2 and EAN-5 add-on symbols can be added using the <code v-pre>+</code> character as with UPC-A.</p>
<h4 id="number-system-1-example" tabindex="-1"><a class="header-anchor" href="#number-system-1-example" aria-hidden="true">#</a> Number System 1 Example</h4>
<p>This library also supports Number System 1 encoding by entering a 7-digit article number stating with the digit 1.</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token function">createStream</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  symbology<span class="token operator">:</span> SymbologyType<span class="token punctuation">.</span><span class="token constant">UPCE</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'1123456'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="check-digit-1" tabindex="-1"><a class="header-anchor" href="#check-digit-1" aria-hidden="true">#</a> Check Digit</h4>
<p>If your input data already includes the check digit, symbology type <code v-pre>BARCODE_UPCE_CHK</code> can be used to take in a 12-digit input and validate its check digit before encoding.</p>
<div class="custom-container tip"><p class="custom-container-title">Tips</p>
<ul>
<li>The gap between the main symbol and an add-on can be adjusted by setting <code v-pre>option2</code> to a value between <code v-pre>7</code> (default) and <code v-pre>12</code>.</li>
<li>The height in <code v-pre>x</code>-dimensions that the guard bars descend below the main bars can be adjusted by setting the <RouterLink to="/docs/options.html#guarddescent"><code v-pre>guardDescent</code></RouterLink> option to a value between `` and <code v-pre>20</code> (defaults to <code v-pre>5</code>).</li>
</ul>
</div>
<h2 id="european-article-number-iso-15420" tabindex="-1"><a class="header-anchor" href="#european-article-number-iso-15420" aria-hidden="true">#</a> European Article Number (<a href="https://www.iso.org/standard/46143.html" target="_blank" rel="noopener noreferrer">ISO-15420<ExternalLinkIcon/></a>)</h2>
<p>The International Article Number is a standard describing a barcode symbology and numbering system used in global trade to identify a specific retail product type, in a specific packaging configuration, from a specific manufacturer.</p>
<h3 id="ean-2-ean-5-ean-8-and-ean-13" tabindex="-1"><a class="header-anchor" href="#ean-2-ean-5-ean-8-and-ean-13" aria-hidden="true">#</a> EAN-2, EAN-5, EAN-8 and EAN-13</h3>
<p><img src="/assets/barcodes/barcode_17.png" alt="EAN-13"></p>
<p>The EAN system is used in retail across Europe and includes standards for EAN-2 and EAN-5 add-on codes, EAN-8 and EAN-13 which encode 2, 5, 7 or 12 digit numbers respectively.</p>
<p>EAN-2 and EAN-5 add-on symbols can be added using the <code v-pre>+</code> symbol as with UPC symbols.</p>
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>The symbology to use is automatically selected depending on the length of the input data.</p>
</div>
<h4 id="ean-5-example" tabindex="-1"><a class="header-anchor" href="#ean-5-example" aria-hidden="true">#</a> EAN-5 Example</h4>
<p>The following example will encode a standalone EAN-5:</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token function">createStream</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  symbology<span class="token operator">:</span> SymbologyType<span class="token punctuation">.</span><span class="token constant">EANX</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'54321'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ean-8-with-ean-5-add-on-example" tabindex="-1"><a class="header-anchor" href="#ean-8-with-ean-5-add-on-example" aria-hidden="true">#</a> EAN-8 with EAN-5 Add-on Example</h4>
<p>The following example will encode an EAN-8 symbol with an EAN-5 add-on:</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token function">createStream</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  symbology<span class="token operator">:</span> Symbology<span class="token punctuation">.</span>SymbologyType<span class="token punctuation">.</span><span class="token constant">EANX</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'7432365+54321'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Note</p>
</div>
<h4 id="check-digit-2" tabindex="-1"><a class="header-anchor" href="#check-digit-2" aria-hidden="true">#</a> Check Digit</h4>
<p>By default, all EAN symbologies include check digits which are added automatically.</p>
<p>If your input data already includes the check digit, symbology type <code v-pre>BARCODE_EANX_CHK</code> can be used to take in an 8- or 13-digit input and validate its check digit before encoding.</p>
<div class="custom-container tip"><p class="custom-container-title">Tips</p>
<ul>
<li>The gap between the main symbol and an add-on can be adjusted by setting <code v-pre>option2</code> to a value between <code v-pre>7</code> (default) and <code v-pre>12</code>.</li>
<li>The height in <code v-pre>x</code>-dimensions that the guard bars descend below the main bars can be adjusted by setting the <RouterLink to="/docs/options.html#guarddescent"><code v-pre>guardDescent</code></RouterLink> option to a value between <code v-pre>0</code> and <code v-pre>20</code> (defaults to <code v-pre>5</code>).</li>
</ul>
</div>
<h3 id="sbn-isbn-and-isbn-13" tabindex="-1"><a class="header-anchor" href="#sbn-isbn-and-isbn-13" aria-hidden="true">#</a> SBN, ISBN and ISBN-13</h3>
<p>EAN-13 symbols (also known as <strong>bookland EAN-13</strong>) can also be produced from 9-digit SBN, 10-digit ISBN or 13-digit ISBN-13 data.</p>
<p>EAN-2 and EAN-5 add-on symbols can also be added using the <code v-pre>+</code> symbol, as with <a href="#universal-product-code-en-797">UPC symbols</a>.</p>
<div class="custom-container warning"><p class="custom-container-title">Important</p>
<p>The relevant check digit must be present in the input data and will be verified before the symbol is generated.</p>
</div>
<h2 id="plessey" tabindex="-1"><a class="header-anchor" href="#plessey" aria-hidden="true">#</a> Plessey</h2>
<p><img src="/assets/barcodes/barcode_18.png" alt="Plessey Code"></p>
<p>Also known as <strong>Plessey Code</strong>, this symbology was developed by the Plessey Company Ltd. in the UK. The symbol can encode any length data consisting of digits (<code v-pre>0-9</code>) or letters <code v-pre>AF</code> and includes a CRC check digit.</p>
<h2 id="msi-plessey" tabindex="-1"><a class="header-anchor" href="#msi-plessey" aria-hidden="true">#</a> MSI Plessey</h2>
<p>Based on Plessey and developed by MSE Data Corporation, MSI Plessey is available with a range of check digit options available by setting <code v-pre>option2</code>.</p>
<p>The table below shows the options available:</p>
<table>
<thead>
<tr>
<th>Value of <code v-pre>option2</code></th>
<th>Check Digits</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>None</td>
</tr>
<tr>
<td>1</td>
<td>Modulo-10</td>
</tr>
<tr>
<td>2</td>
<td>Modulo-10 &amp; Modulo-10</td>
</tr>
<tr>
<td>3</td>
<td>Modulo-11</td>
</tr>
<tr>
<td>4</td>
<td>Modulo-11 &amp; Modulo-10</td>
</tr>
</tbody>
</table>
<h4 id="example-3" tabindex="-1"><a class="header-anchor" href="#example-3" aria-hidden="true">#</a> Example</h4>
<p>The following example will create an MSI Plessey symbol with modulo-10 check digit encoding <code v-pre>7432365</code>:</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token function">createStream</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  symbology<span class="token operator">:</span> SymbologyType<span class="token punctuation">.</span><span class="token constant">MSI_PLESSEY</span><span class="token punctuation">,</span>
  option2<span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'7432365'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>Any length numeric (digits <code v-pre>0-9</code>) input can be encoded.</p>
</div>
<h2 id="telepen" tabindex="-1"><a class="header-anchor" href="#telepen" aria-hidden="true">#</a> Telepen</h2>
<h3 id="telepen-alpha" tabindex="-1"><a class="header-anchor" href="#telepen-alpha" aria-hidden="true">#</a> Telepen Alpha</h3>
<p><img src="/assets/barcodes/barcode_19.png" alt="Telepen"></p>
<p>Telepen Alpha was developed by SB Electronic Systems Limited and can encode any length of ASCII text input. Telepen includes a modulo-127 check digit.</p>
<h3 id="telepen-numeric" tabindex="-1"><a class="header-anchor" href="#telepen-numeric" aria-hidden="true">#</a> Telepen Numeric</h3>
<p>Telepen Numeric allows compression of numeric data into a Telepen symbol.</p>
<p>Data can consist of pairs of numbers or pairs consisting of a numerical digit followed an <code v-pre>X</code> character. For example <code v-pre>466333</code> and <code v-pre>466X33</code> are valid codes, whereas <code v-pre>46X333</code> is not (the digit pair <code v-pre>X3</code> is not valid). Telepen Numeric includes a modulo-127 check digit which is automatically added.</p>
<h2 id="code-39" tabindex="-1"><a class="header-anchor" href="#code-39" aria-hidden="true">#</a> Code 39</h2>
<h3 id="standard-code-39-iso-16388" tabindex="-1"><a class="header-anchor" href="#standard-code-39-iso-16388" aria-hidden="true">#</a> Standard Code 39 (ISO 16388)</h3>
<p><img src="/assets/barcodes/barcode_20.png" alt="Code 39"></p>
<p>Standard Code 39 was developed in 1974 by Intermec. Input data can be of any length and can include the characters <code v-pre>0-9</code>, <code v-pre>A-Z</code>, dash (<code v-pre>-</code>), full stop (<code v-pre>.</code>), space (<code v-pre> </code>), asterisk (<code v-pre>*</code>), dollar (<code v-pre>$</code>), slash (<code v-pre>/</code>), plus (<code v-pre>+</code>) and percent (<code v-pre>%</code>).</p>
<h4 id="example-4" tabindex="-1"><a class="header-anchor" href="#example-4" aria-hidden="true">#</a> Example</h4>
<p>The following example will create a Code 39 symbol with modulo-10 check digit encoding <code v-pre>CODE39</code>:</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token function">createStream</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  symbology<span class="token operator">:</span> SymbologyType<span class="token punctuation">.</span><span class="token constant">CODE39</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'CODE39'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>The standard does not require a check digit, but a modulo-43 check digit can be added via <code v-pre>option2</code>.</p>
</div>
<h3 id="extended-code-39" tabindex="-1"><a class="header-anchor" href="#extended-code-39" aria-hidden="true">#</a> Extended Code 39</h3>
<p>Also known as <strong>Code 39e</strong> and <strong>Code39+</strong>, this symbology expands on Standard Code 39 to provide support to the full ASCII character set.</p>
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>The standard does not require a check digit, but a modulo-43 check digit can be added via <code v-pre>option2</code>.</p>
</div>
<h3 id="code-93" tabindex="-1"><a class="header-anchor" href="#code-93" aria-hidden="true">#</a> Code 93</h3>
<p>A variation of Extended Code 39, Code 93 also supports full ASCII text. Two check digits are automatically added.</p>
<h3 id="pzn" tabindex="-1"><a class="header-anchor" href="#pzn" aria-hidden="true">#</a> PZN</h3>
<p>PZN is a Code 39 based symbology used by the pharmaceutical industry in Germany. PZN encodes a six-digit number to which a modulo-10 check digit will be added.</p>
<h3 id="logmars" tabindex="-1"><a class="header-anchor" href="#logmars" aria-hidden="true">#</a> LOGMARS</h3>
<p>LOGMARS (<strong>Logistics Applications of Automated Marking and Reading Symbols</strong>) is a variation of the Code 39 symbology used by the United States Department of Defense. LOGMARS encodes the same character set as Standard Code 39 and adds a modulo-43 check digit.</p>
<h3 id="code-32" tabindex="-1"><a class="header-anchor" href="#code-32" aria-hidden="true">#</a> Code 32</h3>
<p>A variation of Code 39 used by the Italian Ministry of Health (&quot;Ministero della Sanità&quot;) for encoding identifiers on pharmaceutical products. Used for encoding identifiers on pharmaceutical products. A check digit is automatically added.</p>
<div class="custom-container warning"><p class="custom-container-title">Important</p>
<p>This symbology requires a numeric input up to 8 digits in length.</p>
</div>
<h3 id="hibc-code-39" tabindex="-1"><a class="header-anchor" href="#hibc-code-39" aria-hidden="true">#</a> HIBC Code 39</h3>
<p>This option adds a leading <code v-pre>+</code> character and a trailing modulo-49 check digit to a standard Code 39 symbol as required by the Health Industry Barcode standards.</p>
<h3 id="vehicle-identification-number" tabindex="-1"><a class="header-anchor" href="#vehicle-identification-number" aria-hidden="true">#</a> Vehicle Identification Number</h3>
<p>This option includes a verification stage for vehicle identification numbers used in North America which include a check digit.</p>
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>For European vehicle identification numbers, use <a href="#code-39">Standard Code 39</a> instead.</p>
</div>
<h2 id="codabar-en-798" tabindex="-1"><a class="header-anchor" href="#codabar-en-798" aria-hidden="true">#</a> Codabar (EN 798)</h2>
<p><img src="/assets/barcodes/barcode_21.png" alt="Codabar"></p>
<p>Also known as <strong>NW-7</strong>, <strong>Monarch</strong>, <strong>ABC Codabar</strong>, <strong>USD-4</strong>, <strong>Ames Code</strong>, or <strong>Code 27</strong>, this symbology was developed in 1972 by Monarch Marketing Systems for retail purposes. The American Blood Commission adopted Codabar in 1977 as the standard symbology for blood identification.</p>
<p>Codabar can encode any length string starting and ending with the letters A-D and containing between these letters the numbers <code v-pre>0-9</code>, dash (<code v-pre>-</code>), dollar (<code v-pre>$</code>), colon (<code v-pre>:</code>), slash (<code v-pre>/</code>), full stop (<code v-pre>.</code>) or plus sign (<code v-pre>+</code>).</p>
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>No check digit is generated.</p>
</div>
<h2 id="pharmacode" tabindex="-1"><a class="header-anchor" href="#pharmacode" aria-hidden="true">#</a> Pharmacode</h2>
<p><img src="/assets/barcodes/barcode_22.png" alt="Pharmacode"></p>
<p>Developed by Laetus, Pharmacode is used for the identification of pharmaceuticals. The symbology is able to encode whole numbers between <code v-pre>3</code> and <code v-pre>131070</code>.</p>
<h4 id="example-5" tabindex="-1"><a class="header-anchor" href="#example-5" aria-hidden="true">#</a> Example</h4>
<p>The following example will create a Pharmacode symbol with modulo-10 check digit encoding <code v-pre>131070</code>:</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token function">createStream</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  symbology<span class="token operator">:</span> SymbologyType<span class="token punctuation">.</span><span class="token constant">PHARMA</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'131070'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="code-128" tabindex="-1"><a class="header-anchor" href="#code-128" aria-hidden="true">#</a> Code 128</h2>
<h3 id="standard-code-128-iso-15417" tabindex="-1"><a class="header-anchor" href="#standard-code-128-iso-15417" aria-hidden="true">#</a> Standard Code 128 (<a href="https://www.iso.org/standard/43896.html" target="_blank" rel="noopener noreferrer">ISO-15417<ExternalLinkIcon/></a>)</h3>
<p><img src="/assets/barcodes/barcode_23.png" alt="Code 128"></p>
<p>One of the most ubiquitous one-dimensional barcode symbologies, Code 128 was developed in 1981 by Computer Identics. This symbology supports full ASCII text and uses a three-mode system to compress the data into a smaller symbol.</p>
<p>This library automatically switches between modes and adds a modulo-103 check digit.</p>
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>This library supports the encoding of Latin-1 characters in Code 128 symbols.</p>
</div>
<h3 id="code-128-subset-b" tabindex="-1"><a class="header-anchor" href="#code-128-subset-b" aria-hidden="true">#</a> Code 128 Subset B</h3>
<p>It is sometimes advantageous to stop Code 128 from using subset mode C which compresses numerical data. The <code v-pre>CODE128B</code> symbology suppresses mode C in favour of mode B.</p>
<h3 id="dpd-code" tabindex="-1"><a class="header-anchor" href="#dpd-code" aria-hidden="true">#</a> DPD Code</h3>
<p>A variation of Code 128, used by Deutsher Paket Dienst (DPD).</p>
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<ul>
<li>Requires a 28-character alphanumeric input.</li>
<li>The human readable text is applied according to DPD format and a modulo-36 check digit is added.</li>
</ul>
</div>
<h3 id="gs1-128" tabindex="-1"><a class="header-anchor" href="#gs1-128" aria-hidden="true">#</a> GS1-128</h3>
<p>Also known as <strong>UCC/EAN-128</strong>, this variation of Code 128 is defined by the <a href="https://www.gs1.org/docs/barcodes/GS1_General_Specifications.pdf" target="_blank" rel="noopener noreferrer">GS1 General Specifications<ExternalLinkIcon/></a>.</p>
<h4 id="example-6" tabindex="-1"><a class="header-anchor" href="#example-6" aria-hidden="true">#</a> Example</h4>
<p>The following is an example of a valid GS1-128 input:</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token function">createStream</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  symbology<span class="token operator">:</span> Symbology<span class="token punctuation">.</span>SymbologyType<span class="token punctuation">.</span><span class="token constant">EAN128</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'[01]98898765432106[3202]012345[15]991231'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Note</p>
<ul>
<li>AIs should be encased in square brackets (<code v-pre>[...]</code>) in the input data. This will be converted to parentheses (<code v-pre>(...)</code>) before it is included in the human readable text attached to the symbol.
<ul>
<li>Parentheses (<code v-pre>(...)</code>) can be included in the encoding data if desired.</li>
</ul>
</li>
<li>GTIN data (AI <code v-pre>01</code>) should also include the check digit data.</li>
<li>Fixed length data should be entered at the appropriate length for correct encoding.</li>
</ul>
</div>
<h3 id="ean-14" tabindex="-1"><a class="header-anchor" href="#ean-14" aria-hidden="true">#</a> EAN-14</h3>
<p>A shorter version of GS1-128 which encodes GTIN data only. A 13 digit number is required. The GTIN check digit and AI (<code v-pre>01</code>) are automatically added.</p>
<h3 id="nve-18" tabindex="-1"><a class="header-anchor" href="#nve-18" aria-hidden="true">#</a> NVE-18</h3>
<p>The <strong>Nummer der Versandeinheit</strong> standard is a variation of Code 128 that includes both modulo-10 and modulo-103 check digits.</p>
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>NVE-18 requires a 17 digit numerical input and check digits are automatically added.</p>
</div>
<h3 id="hibc-code-128" tabindex="-1"><a class="header-anchor" href="#hibc-code-128" aria-hidden="true">#</a> HIBC Code 128</h3>
<p>This option adds a leading <code v-pre>+</code> character and a trailing modulo-49 check digit to a standard Code 128 symbol as required by the Health Industry Barcode standards.</p>
<h3 id="gs1-databar-iso-24724" tabindex="-1"><a class="header-anchor" href="#gs1-databar-iso-24724" aria-hidden="true">#</a> GS1 DataBar (ISO 24724)</h3>
<p><img src="/assets/barcodes/barcode_24.png" alt="GS1 DataBar"></p>
<p>Also known as <strong>RSS</strong> (Reduced Spaced symbology), these symbols are due to replace GS1-128 symbols in accordance with the <a href="https://www.gs1.org/docs/barcodes/GS1_General_Specifications.pdf" target="_blank" rel="noopener noreferrer">GS1 General Specifications<ExternalLinkIcon/></a>.</p>
<p>To set a GS1 DataBar symbol to print with a 2D component (as specified in <a href="https://www.iso.org/standard/51425.html" target="_blank" rel="noopener noreferrer">ISO 24723<ExternalLinkIcon/></a>), set <code v-pre>option1</code> to <code v-pre>2</code>.</p>
<div class="custom-container tip"><p class="custom-container-title">Tip</p>
<p>See <RouterLink to="/reference/composite.html">Composite Symbols</RouterLink> to find out how to generate DataBar symbols with 2D components.</p>
</div>
<h3 id="databar-14-and-databar-14-truncated" tabindex="-1"><a class="header-anchor" href="#databar-14-and-databar-14-truncated" aria-hidden="true">#</a> DataBar-14 and DataBar-14 Truncated</h3>
<p>Also known as <strong>RSS-14</strong>, this standard encodes a 13-digit item code. A check digit and application identifier of (<code v-pre>01</code>) are automatically added.</p>
<div class="custom-container tip"><p class="custom-container-title">Tip</p>
<p>To produce a truncated symbol set the symbol height to a value between <code v-pre>32</code> and <code v-pre>13</code>.</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">Important</p>
<p>Normal DataBar-14 symbols should have a height of <code v-pre>33</code> or greater.</p>
</div>
<h3 id="databar-limited" tabindex="-1"><a class="header-anchor" href="#databar-limited" aria-hidden="true">#</a> DataBar Limited</h3>
<p>Also known as RSS Limited this standard encodes a 13 digit item code and can be used in the same way as <a href="#databar-14-and-databar-14-truncated">DataBar-14</a>. DataBar Limited, however, is limited to data starting with digits <code v-pre>0</code> and <code v-pre>1</code> (i.e., numbers in the range of <code v-pre>0</code> to <code v-pre>1999999999999</code>).</p>
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>As with <a href="#databar-14-and-databar-14-truncated">DataBar-14</a>, a check digit and application identifier of (<code v-pre>01</code>) are automatically added.</p>
</div>
<h3 id="databar-expanded" tabindex="-1"><a class="header-anchor" href="#databar-expanded" aria-hidden="true">#</a> DataBar Expanded</h3>
<p>Also known as <strong>RSS Expanded</strong>, this is a variable length symbology capable of encoding data from a number of AIs in a single symbol.</p>
<div class="custom-container warning"><p class="custom-container-title">Important</p>
<ul>
<li>AIs should be encased in square brackets (<code v-pre>[...]</code>) in the input data. This will be converted to (rounded brackets) before it is included in the human readable text attached to the symbol.</li>
<li>GTIN data (AI <code v-pre>01</code>) should also include the check digit data.</li>
<li>Fixed length data should be entered at the appropriate length for correct EncodingMode.</li>
</ul>
</div>
<h4 id="example-7" tabindex="-1"><a class="header-anchor" href="#example-7" aria-hidden="true">#</a> Example</h4>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token function">createStream</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  symbology<span class="token operator">:</span> Symbology<span class="token punctuation">.</span>SymbologyType<span class="token punctuation">.</span><span class="token constant">RSS_EXP</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'[01]98898765432106[3202]012345[15]991231'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="korea-post-barcode" tabindex="-1"><a class="header-anchor" href="#korea-post-barcode" aria-hidden="true">#</a> Korea Post Barcode</h2>
<p><img src="/assets/barcodes/barcode_25.png" alt="Korea Post Barcode"></p>
<p>The Korean Postal Barcode is used to encode a six-digit number and includes one check digit.</p>
<h2 id="channel-code" tabindex="-1"><a class="header-anchor" href="#channel-code" aria-hidden="true">#</a> Channel Code</h2>
<p><img src="/assets/barcodes/barcode_26.png" alt="Channel Code"></p>
<p>A highly-compressed symbol for numeric data. The number of channels in the symbol can be between <code v-pre>3</code> and <code v-pre>8</code> by setting the value of <code v-pre>option2</code>. It can also be determined by the length of the input data (e.g., a three-character input string generates a four-channel code by default).</p>
<p>The maximum values permitted depend on the number of channels used:</p>
<table>
<thead>
<tr>
<th>Channels</th>
<th>Minimum Value</th>
<th>Maximum Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>3</td>
<td>00</td>
<td>26</td>
</tr>
<tr>
<td>4</td>
<td>000</td>
<td>292</td>
</tr>
<tr>
<td>5</td>
<td>0000</td>
<td>3493</td>
</tr>
<tr>
<td>6</td>
<td>00000</td>
<td>44072</td>
</tr>
<tr>
<td>7</td>
<td>000000</td>
<td>576688</td>
</tr>
<tr>
<td>8</td>
<td>0000000</td>
<td>7742862</td>
</tr>
</tbody>
</table>
<h4 id="example-8" tabindex="-1"><a class="header-anchor" href="#example-8" aria-hidden="true">#</a> Example</h4>
<p>The following example renders a 5-channel Channel Code symbol:</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token function">createStream</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  symbology<span class="token operator">:</span> SymbologyType<span class="token punctuation">.</span><span class="token constant">CHANNEL</span><span class="token punctuation">,</span>
  option2<span class="token operator">:</span> <span class="token number">6</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'12345'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>Channel codes <code v-pre>7</code> and <code v-pre>8</code> require a processor-intensive algorithm to generate and so response times when generating these codes will be relatively slow.</p>
</div>
</div></template>


