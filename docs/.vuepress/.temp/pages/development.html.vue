<template><div><h1 id="development" tabindex="-1"><a class="header-anchor" href="#development" aria-hidden="true">#</a> Development</h1>
<p>This module is a C++ wrapper around the <a href="https://github.com/zint/zint" target="_blank" rel="noopener noreferrer">Zint barcode library<ExternalLinkIcon/></a>. The version of zint that will be used will be determined by the git reference stored in the <code v-pre>zintVersion</code> field of <code v-pre>package.json</code>.</p>
<h2 id="source-code-management" tabindex="-1"><a class="header-anchor" href="#source-code-management" aria-hidden="true">#</a> Source code management</h2>
<p>Upon installation of dependencies (<code v-pre>yarn install</code>), a copy of the Zint source repo will be cloned in the Git-ignored <code v-pre>.zint</code> directory, and its relevant C source files are referenced in <a href="https://github.com/jshor/symbology/blob/master/binding.gyp" target="_blank" rel="noopener noreferrer"><code v-pre>binding.gyp</code><ExternalLinkIcon/></a>, along with <a href="https://github.com/jshor/symbology/blob/master/src/binding/main.cpp" target="_blank" rel="noopener noreferrer"><code v-pre>src/binding/main.cpp</code><ExternalLinkIcon/></a>. The compiled <code v-pre>.node</code> module is then available for use by the JavaScript source, in <a href="https://github.com/jshor/symbology/blob/master/src/index.js" target="_blank" rel="noopener noreferrer"><code v-pre>src/index.js</code><ExternalLinkIcon/></a>.</p>
<p>Once <code v-pre>.zint</code> is created, the same install script will then apply a small number of patches to some Zint source files to adapt it to the following needs:</p>
<ul>
<li>Add <code v-pre>rendered_data</code> as a char array to be populated with raw string output.</li>
<li>Update <code v-pre>svg.c</code> and <code v-pre>ps.c</code> to write to the <code v-pre>rendered_data</code> buffer instead of <code v-pre>stdout</code>.</li>
<li>Replace <code v-pre>malloc.h</code> references with <code v-pre>stdlib.h</code> for cross-compatibility.</li>
</ul>
<p>See <a href="https://github.com/jshor/symbology/blob/master/scripts/install.js" target="_blank" rel="noopener noreferrer"><code v-pre>scripts/install.js</code><ExternalLinkIcon/></a> and <a href="https://github.com/jshor/symbology/blob/master/scripts/patches.js" target="_blank" rel="noopener noreferrer"><code v-pre>scripts/patches.js</code><ExternalLinkIcon/></a> for more info.</p>
<h2 id="utilization-of-nan" tabindex="-1"><a class="header-anchor" href="#utilization-of-nan" aria-hidden="true">#</a> Utilization of Nan</h2>
<p>This project utilizes <a href="https://github.com/nodejs/nan" target="_blank" rel="noopener noreferrer">Nan<ExternalLinkIcon/></a> to make the project backwards-compatible and make bindings future-proof.</p>
<h2 id="building-the-project" tabindex="-1"><a class="header-anchor" href="#building-the-project" aria-hidden="true">#</a> Building the project</h2>
<p>Builds are created using <a href="https://github.com/mapbox/node-pre-gyp" target="_blank" rel="noopener noreferrer"><code v-pre>node-pre-gyp</code><ExternalLinkIcon/></a>.</p>
<p>Upon installation of dependencies, <code v-pre>node-pre-gyp build</code> will be run, which will compile the project from source.</p>
<h3 id="building-on-windows" tabindex="-1"><a class="header-anchor" href="#building-on-windows" aria-hidden="true">#</a> Building on Windows</h3>
<p>If you're using Windows (excluding <a href="https://docs.microsoft.com/en-us/windows/wsl/" target="_blank" rel="noopener noreferrer">WSL<ExternalLinkIcon/></a>), then you'll need to install <a href="https://github.com/felixrieseberg/windows-build-tools#windows-build-tools" target="_blank" rel="noopener noreferrer">windows-build-tools<ExternalLinkIcon/></a> to compile the native Node module.</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">--global</span> <span class="token parameter variable">--production</span> windows-build-tools <span class="token parameter variable">--vs2017</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> msvs_version <span class="token number">2017</span> –global
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>This install takes a while, but once it's complete, you can move on to <a href="#creating-a-build">Creating a build</a> below.</p>
<h3 id="creating-a-build" tabindex="-1"><a class="header-anchor" href="#creating-a-build" aria-hidden="true">#</a> Creating a build</h3>
<p>To create a packaged build, run:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> package:binary
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="running-tests" tabindex="-1"><a class="header-anchor" href="#running-tests" aria-hidden="true">#</a> Running tests</h3>
<p>Tests are written as <code v-pre>*.test.js</code> and utilize <a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer">Jest<ExternalLinkIcon/></a>.</p>
<p>Both <strong>unit</strong> and <strong>e2e</strong> tests are written for this project. To run all tests:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="unit-tests" tabindex="-1"><a class="header-anchor" href="#unit-tests" aria-hidden="true">#</a> Unit tests</h4>
<p>Unit tests are specified in the <code v-pre>__tests__</code> subdirectories under <code v-pre>src</code>.</p>
<p>To run unit tests:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> test:unit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Test coverage results are sent to <a href="https://app.codecov.io/gh/jshor/symbology" target="_blank" rel="noopener noreferrer">Codecov<ExternalLinkIcon/></a>.</p>
<h4 id="e2e-tests" tabindex="-1"><a class="header-anchor" href="#e2e-tests" aria-hidden="true">#</a> e2e tests</h4>
<p>e2e tests are specified in the <code v-pre>test/e2e</code> directory. They utilize <a href="https://github.com/americanexpress/jest-image-snapshot" target="_blank" rel="noopener noreferrer">jest-image-snapshot<ExternalLinkIcon/></a> for comparisons of barcode images in tandem with the helper test method, <code v-pre>createImageFile</code>.</p>
<p>To run e2e tests:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> test:e2e
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="committing" tabindex="-1"><a class="header-anchor" href="#committing" aria-hidden="true">#</a> Committing</h2>
<p>Commit message standards abide by <a href="https://github.com/conventional-changelog/conventional-changelog" target="_blank" rel="noopener noreferrer"><code v-pre>standard-changelog</code><ExternalLinkIcon/></a>. This module utilizes <a href="https://github.com/commitizen/cz-cli" target="_blank" rel="noopener noreferrer"><code v-pre>commitizen</code><ExternalLinkIcon/></a> as a devDependency to help developers write their commits, and commit messages are enforced using <a href="https://github.com/conventional-changelog/commitlint" target="_blank" rel="noopener noreferrer"><code v-pre>commitlint</code><ExternalLinkIcon/></a>.</p>
<h2 id="versioning" tabindex="-1"><a class="header-anchor" href="#versioning" aria-hidden="true">#</a> Versioning</h2>
<p>This package abides by the <a href="https://semver.org/" target="_blank" rel="noopener noreferrer">semver standard<ExternalLinkIcon/></a>. <a href="https://github.com/conventional-changelog/standard-version" target="_blank" rel="noopener noreferrer"><code v-pre>standard-version</code><ExternalLinkIcon/></a> will automatically update <a href="https://github.com/jshor/symbology/blob/master/CHANGELOG.md" target="_blank" rel="noopener noreferrer"><code v-pre>CHANGELOG.md</code><ExternalLinkIcon/></a> and bump the version.</p>
<h2 id="automated-builds-and-ci" tabindex="-1"><a class="header-anchor" href="#automated-builds-and-ci" aria-hidden="true">#</a> Automated builds and CI</h2>
<p>GitHub Actions will automatically build and test pull requests. At least one admin PR approval and all status checks are required to merge a PR.</p>
<p>The following status checks are implemented:</p>
<ul>
<li>Successful Windows builds (AppVeyor)</li>
<li>Successful Linux and macOS builds (Travis)</li>
<li>Sufficient code coverage (threshold &gt;90%)</li>
</ul>
<p>Upon the successful merge of a PR, CI will create an automated release of the binaries on GitHub (via <a href="https://github.com/bchr02/node-pre-gyp-github" target="_blank" rel="noopener noreferrer"><code v-pre>node-pre-gyp-github</code><ExternalLinkIcon/></a>), publish to npm, and push the updated changelog and version bump changes to GitHub.</p>
<div class="custom-container warning"><p class="custom-container-title">Important</p>
<p>The package version is automatically updated. <strong>Do not change any version references in this project.</strong></p>
</div>
<h2 id="contributing" tabindex="-1"><a class="header-anchor" href="#contributing" aria-hidden="true">#</a> Contributing</h2>
<p>All constructive feedback and pull request changes are welcome. For more information on contributing to this project, please see the <a href="https://github.com/jshor/symbology/blob/master/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">Contributing Guidelines<ExternalLinkIcon/></a>.</p>
</div></template>


