import{_ as s,r as o,o as r,c as l,a as n,e,b as d,d as a}from"./app.5a29efec.js";const t={},c=a(`<h1 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> symbology
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="non-ubuntu-linux-distributions" tabindex="-1"><a class="header-anchor" href="#non-ubuntu-linux-distributions" aria-hidden="true">#</a> Non-Ubuntu Linux distributions</h2><p>The default Linux pre-built binaries are designed to run on Ubuntu. Running Symbology on some non-Ubuntu Linux distros may result in segmentation faults or strange behavior. These problems can be circumvented by building Symbology from the source instead of using the default binary.</p><p><strong>Using Yarn:</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">npm_config_build_from_source</span><span class="token operator">=</span>true <span class="token function">yarn</span> <span class="token function">add</span> symbology
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Using npm:</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i symbology --build-from-source<span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="building-a-fresh-binary" tabindex="-1"><a class="header-anchor" href="#building-a-fresh-binary" aria-hidden="true">#</a> Building a fresh binary</h3><p>The following command can be run to create a fresh build:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> install:rebuild
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="binary-download-failures" tabindex="-1"><a class="header-anchor" href="#binary-download-failures" aria-hidden="true">#</a> Binary download failures</h2><p>If you run into issues downloading the binary, the library will attempt to compile the module from source.</p><h2 id="manual-compilation" tabindex="-1"><a class="header-anchor" href="#manual-compilation" aria-hidden="true">#</a> Manual compilation</h2><p>You may also compile from source by running <code>npm rebuild</code>. See below for OS-specific details.</p><h3 id="compiling-on-windows" tabindex="-1"><a class="header-anchor" href="#compiling-on-windows" aria-hidden="true">#</a> Compiling on Windows</h3>`,16),u={href:"http://npmjs.com/package/windows-build-tools",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"windows-build-tools",-1),p=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> global <span class="token function">add</span> windows-build-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then you can compile the module by running <code>npm rebuild</code> in your project directory.</p><h3 id="compiling-on-linux-or-macos" tabindex="-1"><a class="header-anchor" href="#compiling-on-linux-or-macos" aria-hidden="true">#</a> Compiling on Linux or macOS</h3><p>Simply run <code>npm rebuild</code> in your project directory. <code>node-gyp</code> will utilize the OS&#39;s bundled GCC compiler.</p>`,4);function b(m,g){const i=o("ExternalLinkIcon");return r(),l("div",null,[c,n("p",null,[e("Ensure you have "),n("a",u,[h,d(i)]),e(" globally installed, which bundles Visual C++ Build Tools.")]),p])}const y=s(t,[["render",b],["__file","installation.html.vue"]]);export{y as default};
