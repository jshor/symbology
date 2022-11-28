import{_ as s,r as l,o as r,c,a as e,e as t,b as o,w as n,d}from"./app.5a29efec.js";const u={},p=e("h1",{id:"options",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),t(" Options")],-1),h=e("h2",{id:"symbology",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#symbology","aria-hidden":"true"},"#"),t(" symbology")],-1),f=e("code",null,"SymbologyType",-1),b=e("li",null,[t("Required: "),e("strong",null,"yes")],-1),m=e("h2",{id:"filename",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#filename","aria-hidden":"true"},"#"),t(" fileName")],-1),_=e("p",null,"Full path to the file to create.",-1),y=e("li",null,[t("Type: "),e("code",null,"string")],-1),g=e("strong",null,"yes",-1),v=e("code",null,"createFile()",-1),x=d('<h2 id="text" tabindex="-1"><a class="header-anchor" href="#text" aria-hidden="true">#</a> text</h2><p>Human-readable text to display.</p><ul><li>Type: <code>string</code></li><li>Required: no</li><li>Default value: the input data value</li></ul><h2 id="primary" tabindex="-1"><a class="header-anchor" href="#primary" aria-hidden="true">#</a> primary</h2><p>Primary message data, for more complex symbols.</p><ul><li>Type: <code>string</code></li><li>Required: no</li><li>Default value: <code>null</code></li></ul><h2 id="showhumanreadabletext" tabindex="-1"><a class="header-anchor" href="#showhumanreadabletext" aria-hidden="true">#</a> showHumanReadableText</h2><p>If true, shows text underneath a barcode (if the symbology supports it). If false, text will not show.</p><ul><li>Type: <code>boolean</code></li><li>Required: no</li><li>Default value: <code>true</code></li></ul><h2 id="foregroundcolor" tabindex="-1"><a class="header-anchor" href="#foregroundcolor" aria-hidden="true">#</a> foregroundColor</h2>',10),k={href:"https://css-tricks.com/8-digit-hex-codes/",target:"_blank",rel:"noopener noreferrer"},T=e("ul",null,[e("li",null,[t("Type: "),e("code",null,"string")]),e("li",null,"Required: no"),e("li",null,[t("Default value: "),e("code",null,"FFFFFFFF")])],-1),O=e("h2",{id:"backgroundcolor",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#backgroundcolor","aria-hidden":"true"},"#"),t(" backgroundColor")],-1),D={href:"https://css-tricks.com/8-digit-hex-codes/",target:"_blank",rel:"noopener noreferrer"},R=e("ul",null,[e("li",null,[t("Type: "),e("code",null,"string")]),e("li",null,"Required: no"),e("li",null,[t("Default value: "),e("code",null,"000000FF")])],-1),E=e("h2",{id:"encoding",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#encoding","aria-hidden":"true"},"#"),t(" encoding")],-1),w=e("code",null,"EncodingMode",-1),S=e("li",null,"Required: no",-1),q=e("li",null,[t("Default value: "),e("code",null,"EncodingMode.DATA_MODE")],-1),C=e("h2",{id:"eci",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#eci","aria-hidden":"true"},"#"),t(" eci")],-1),A={href:"https://en.wikipedia.org/wiki/Extended_Channel_Interpretation#Types_of_ECI_indicator",target:"_blank",rel:"noopener noreferrer"},B=d(`<ul><li>Type: <code>number</code></li><li>Required: no</li><li>Default value: <code>0</code></li></ul><h2 id="height" tabindex="-1"><a class="header-anchor" href="#height" aria-hidden="true">#</a> height</h2><p>The height of the image, in pixels. If specified, this will maintain the aspect ratio.</p><ul><li>Type: <code>number</code></li><li>Required: no</li><li>Default value: <code>50</code></li></ul><h2 id="whitespacewidth" tabindex="-1"><a class="header-anchor" href="#whitespacewidth" aria-hidden="true">#</a> whitespaceWidth</h2><p>The width of whitespace, for barcodes which have this option.</p><ul><li>Type: <code>number</code></li><li>Required: no</li><li>Default value: <code>0</code></li></ul><h2 id="borderwidth" tabindex="-1"><a class="header-anchor" href="#borderwidth" aria-hidden="true">#</a> borderWidth</h2><p>The width of the border.</p><ul><li>Type: <code>number</code></li><li>Required: no</li><li>Default value: <code>0</code></li></ul><h2 id="scale" tabindex="-1"><a class="header-anchor" href="#scale" aria-hidden="true">#</a> scale</h2><p>Scale of the barcode image. <strong>Applies only to PNG</strong>.</p><ul><li>Type: <code>number</code></li><li>Required: no</li><li>Default value: <code>1.0</code></li></ul><h2 id="rotation" tabindex="-1"><a class="header-anchor" href="#rotation" aria-hidden="true">#</a> rotation</h2><p>The clockwise rotation of the SymbologyType.</p><ul><li>Type: <code>number</code></li><li>Required: no</li><li>Default value: <code>0</code></li><li>Valid values: <code>0</code>, <code>90</code>, <code>180</code>, <code>270</code></li></ul><h2 id="dotsize" tabindex="-1"><a class="header-anchor" href="#dotsize" aria-hidden="true">#</a> dotSize</h2><p>Size of dot used in <a href="#output-options"><code>BARCODE_DOTTY_MODE</code></a>.</p><ul><li>Type: <code>number</code></li><li>Required: no</li><li>Default value: <code>0.8</code></li></ul><h2 id="outputoptions" tabindex="-1"><a class="header-anchor" href="#outputoptions" aria-hidden="true">#</a> outputOptions</h2><p>Symbology-specific <a href="#output-options">output options</a>.</p><ul><li>Type: <a href="#output-options"><code>OutputOption</code></a></li><li>Required: no</li><li>Default value: <code>0</code></li></ul><h2 id="option1" tabindex="-1"><a class="header-anchor" href="#option1" aria-hidden="true">#</a> option1</h2><p>Symbology-type-specific option value.</p><ul><li>Type: <code>number</code></li><li>Required: no</li><li>Default value: <code>null</code></li></ul><h2 id="option2" tabindex="-1"><a class="header-anchor" href="#option2" aria-hidden="true">#</a> option2</h2><p>Symbology-type-specific option value.</p><ul><li>Type: <code>number</code></li><li>Required: no</li><li>Default value: <code>null</code></li></ul><h2 id="option3" tabindex="-1"><a class="header-anchor" href="#option3" aria-hidden="true">#</a> option3</h2><p>Symbology-type-specific option value.</p><ul><li>Type: <code>number</code></li><li>Required: no</li><li>Default value: <code>null</code></li></ul><h2 id="output-options" tabindex="-1"><a class="header-anchor" href="#output-options" aria-hidden="true">#</a> Output Options</h2><p>The <code>outputOptions</code> key in the <code>SymbologyConfig</code> object can be used to adjust various aspects of the rendered symbology.</p><table><thead><tr><th>Value</th><th>Effect</th></tr></thead><tbody><tr><td><code>BARCODE_NO_ASCII</code></td><td>No options selected. (default)</td></tr><tr><td><code>BARCODE_BIND</code></td><td>Boundary bars above and below the symbol and between rows if stacking.</td></tr><tr><td><code>BARCODE_BOX</code></td><td>Add a box surrounding the symbol and whitespace.</td></tr><tr><td><code>READER_INIT</code></td><td>Add a reader initialisation symbol to the data before EncodingMode.</td></tr><tr><td><code>SMALL_TEXT</code></td><td>Use a smaller font for the human readable text.</td></tr><tr><td><code>BOLD_TEXT</code></td><td>Embolden the human readable text.</td></tr><tr><td><code>CMYK_COLOUR</code></td><td>Select the CMYK colour space option for encapsulated PostScript files.</td></tr><tr><td><code>BARCODE_DOTTY_MODE</code></td><td>Plot a matrix symbol using dots rather than squares.</td></tr><tr><td><code>GS1_GS_SEPARATOR</code></td><td>Use GS instead FNC1 as GS1 separator.</td></tr></tbody></table><h3 id="multiple-options" tabindex="-1"><a class="header-anchor" href="#multiple-options" aria-hidden="true">#</a> Multiple Options</h3><p>Options can be applied using the <code>OutputOption</code> enumerated type.</p><p>Multiple options can be selected by adding them together in the <code>outputOptions</code> value.</p><div class="custom-container tip"><p class="custom-container-title">Deprecation Notice</p><p>Starting in version 2.1.0, the <code>Options</code> enum has been renamed to <code>OutputOption</code>, and <code>Options</code> will be removed in the next major release.</p></div><h4 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  OutputOption<span class="token punctuation">,</span>
  OutputType<span class="token punctuation">,</span>
  SymbologyType<span class="token punctuation">,</span>
  createStream
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;symbology&#39;</span>

<span class="token function">createStream</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  symbology<span class="token operator">:</span> SymbologyType<span class="token punctuation">.</span><span class="token constant">CODE128</span><span class="token punctuation">,</span>
  outputOptions<span class="token operator">:</span> OutputOption<span class="token punctuation">.</span><span class="token constant">BARCODE_BIND</span> <span class="token operator">+</span> OutputOption<span class="token punctuation">.</span><span class="token constant">READER_INIT</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;12345&#39;</span><span class="token punctuation">,</span> OutputType<span class="token punctuation">.</span><span class="token constant">PNG</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40);function I(N,F){const a=l("RouterLink"),i=l("ExternalLinkIcon");return r(),c("div",null,[p,h,e("p",null,[t("The enumerated type of the symbology (see "),o(a,{to:"/reference/"},{default:n(()=>[t("Reference")]),_:1}),t(" for a list).")]),e("ul",null,[e("li",null,[t("Type: "),o(a,{to:"/reference/"},{default:n(()=>[f]),_:1})]),b]),m,_,e("ul",null,[y,e("li",null,[t("Required: "),g,t(", if using "),o(a,{to:"/docs/api.html#createfile"},{default:n(()=>[v]),_:1})])]),x,e("p",null,[t("Barcode foreground color. "),e("a",k,[t("Supports alpha channels"),o(i)]),t(".")]),T,O,e("p",null,[t("Barcode background color. "),e("a",D,[t("Supports alpha channels"),o(i)]),t(".")]),R,E,e("p",null,[t("The "),o(a,{to:"/docs/EncodingMode.html#encoding-modes"},{default:n(()=>[t("encoding type")]),_:1}),t(" of the input data, if applicable.")]),e("ul",null,[e("li",null,[t("Type: "),o(a,{to:"/docs/EncodingMode.html#encoding-modes"},{default:n(()=>[w]),_:1})]),S,q]),C,e("p",null,[t("The "),e("a",A,[t("ECI encoding mode"),o(i)]),t(" of the input data, if applicable.")]),B])}const L=s(u,[["render",I],["__file","options.html.vue"]]);export{L as default};
