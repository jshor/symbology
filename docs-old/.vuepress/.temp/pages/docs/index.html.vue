<template><div><h1 id="documentation" tabindex="-1"><a class="header-anchor" href="#documentation" aria-hidden="true">#</a> Documentation</h1>
<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>
<p>This Node.js module will allow you to generate over 50+ different types of 1D or 2D symbologies, including barcodes for books, grocery, shipping carriers, healthcare, and international codes. It can save a png, svg, or eps image, or render a base64 png bitmap.</p>
<h2 id="quick-start" tabindex="-1"><a class="header-anchor" href="#quick-start" aria-hidden="true">#</a> Quick start</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> symbology
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="example-usage" tabindex="-1"><a class="header-anchor" href="#example-usage" aria-hidden="true">#</a> Example usage</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  OutputOption<span class="token punctuation">,</span>
  EncodingMode<span class="token punctuation">,</span>
  SymbologyType<span class="token punctuation">,</span>
  createStream
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'symbology'</span>

<span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createFile</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      symbology<span class="token operator">:</span> SymbologyType<span class="token punctuation">.</span><span class="token constant">CODE128</span><span class="token punctuation">,</span>
      encoding<span class="token operator">:</span> EncodingMode<span class="token punctuation">.</span><span class="token constant">GS1_MODE</span><span class="token punctuation">,</span>
      fileName<span class="token operator">:</span> <span class="token string">'out.svg'</span><span class="token punctuation">,</span>
      backgroundColor<span class="token operator">:</span> <span class="token string">'00000000'</span><span class="token punctuation">,</span>
      foregroundColor<span class="token operator">:</span> <span class="token string">'00FF00FF'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'12345'</span><span class="token punctuation">)</span>

    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'File successfully created.'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Error: '</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="further-reading" tabindex="-1"><a class="header-anchor" href="#further-reading" aria-hidden="true">#</a> Further reading</h2>
<p><RouterLink to="/docs/api.html">Let's get started →</RouterLink></p>
</div></template>


