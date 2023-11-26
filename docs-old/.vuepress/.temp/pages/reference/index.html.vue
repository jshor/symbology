<template><div><h1 id="symbology-reference" tabindex="-1"><a class="header-anchor" href="#symbology-reference" aria-hidden="true">#</a> Symbology Reference</h1>
<p>Each symbology type values can be represented using an enumerated type. The types are stored in the <code v-pre>Barcode</code> enumerated type member of the library.</p>
<h2 id="supported-barcode-types" tabindex="-1"><a class="header-anchor" href="#supported-barcode-types" aria-hidden="true">#</a> Supported Barcode Types</h2>
<p>Below is a tabular list of all supported symbology types. Click on the barcode names for more info on each</p>
<h3 id="one-dimensional-symbologies" tabindex="-1"><a class="header-anchor" href="#one-dimensional-symbologies" aria-hidden="true">#</a> One-Dimensional Symbologies</h3>
<table>
<thead>
<tr>
<th>Numeric Value</th>
<th>Name</th>
<th>Barcode Name</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td><code v-pre>CODE11</code></td>
<td><RouterLink to="/reference/one-dimensional.html#code-11">Code 11</RouterLink></td>
</tr>
<tr>
<td>2</td>
<td><code v-pre>C25MATRIX</code></td>
<td><RouterLink to="/reference/one-dimensional.html#standard-code-2-of-5">Standard Code 2 of 5</RouterLink></td>
</tr>
<tr>
<td>3</td>
<td><code v-pre>C25INTER</code></td>
<td><RouterLink to="/reference/one-dimensional.html#interleaved-code-2-of-5">Interleaved 2 of 5</RouterLink></td>
</tr>
<tr>
<td>140</td>
<td><code v-pre>CHANNEL</code></td>
<td><RouterLink to="/reference/one-dimensional.html#channel-code">Channel Code</RouterLink></td>
</tr>
<tr>
<td>18</td>
<td><code v-pre>CODABAR</code></td>
<td><RouterLink to="/reference/one-dimensional.html#codabar-en-798">Codabar</RouterLink></td>
</tr>
<tr>
<td>20</td>
<td><code v-pre>CODE128</code></td>
<td><RouterLink to="/reference/one-dimensional.html#standard-code-128-iso-15417">Code 128 (automatic subset switching)</RouterLink></td>
</tr>
<tr>
<td>60</td>
<td><code v-pre>CODE128B</code></td>
<td><RouterLink to="/reference/one-dimensional.html#code-128-subset-b">Code 128 (subset B)</RouterLink></td>
</tr>
<tr>
<td>4</td>
<td><code v-pre>C25IATA</code></td>
<td><RouterLink to="/reference/one-dimensional.html#iata-code-2-of-5">Code 2 of 5 IATA</RouterLink></td>
</tr>
<tr>
<td>6</td>
<td><code v-pre>C25LOGIC</code></td>
<td><RouterLink to="/reference/one-dimensional.html#code-2-of-5-data-logic">Code 2 of 5 Data Logic</RouterLink></td>
</tr>
<tr>
<td>7</td>
<td><code v-pre>C25IND</code></td>
<td><RouterLink to="/reference/one-dimensional.html#industrial-code-2-of-5">Code 2 of 5 Industrial</RouterLink></td>
</tr>
<tr>
<td>8</td>
<td><code v-pre>CODE39</code></td>
<td><RouterLink to="/reference/one-dimensional.html#standard-code-39-iso-16388">Code 3 of 9 (Code 39)</RouterLink></td>
</tr>
<tr>
<td>129</td>
<td><code v-pre>CODE32</code></td>
<td><RouterLink to="/reference/one-dimensional.html#code-32">Code 32</RouterLink></td>
</tr>
<tr>
<td>25</td>
<td><code v-pre>CODE93</code></td>
<td><RouterLink to="/reference/one-dimensional.html#code-93">Code 93</RouterLink></td>
</tr>
<tr>
<td>21</td>
<td><code v-pre>DPLEIT</code></td>
<td><RouterLink to="/reference/one-dimensional.html#deutsche-post-leitcode">Deutshe Post Leitcode</RouterLink></td>
</tr>
<tr>
<td>22</td>
<td><code v-pre>DPIDENT</code></td>
<td><RouterLink to="/reference/one-dimensional.html#deutsche-post-identcode">Deutshe Post Identcode</RouterLink></td>
</tr>
<tr>
<td>13</td>
<td><code v-pre>EANX</code></td>
<td><RouterLink to="/reference/one-dimensional.html#european-article-number-en-797">EAN</RouterLink></td>
</tr>
<tr>
<td>14</td>
<td><code v-pre>EANX_CHK</code></td>
<td><RouterLink to="/reference/one-dimensional.html#european-article-number-en-797">EAN + Check Digit</RouterLink></td>
</tr>
<tr>
<td>72</td>
<td><code v-pre>EAN14</code></td>
<td><RouterLink to="/reference/one-dimensional.html#ean-14">EAN-14</RouterLink></td>
</tr>
<tr>
<td>9</td>
<td><code v-pre>EXCODE39</code></td>
<td><RouterLink to="/reference/one-dimensional.html#extended-code-39">Extended Code 3 of 9 (Code 39+)</RouterLink></td>
</tr>
<tr>
<td>16</td>
<td><code v-pre>EAN128</code></td>
<td><RouterLink to="/reference/one-dimensional.html#gs1-128">GS1-128 (UCC/EAN-128)</RouterLink></td>
</tr>
<tr>
<td>29</td>
<td><code v-pre>RSS14</code></td>
<td><RouterLink to="/reference/one-dimensional.html#databar-14-and-databar-14-truncated">GS1 DataBar-14</RouterLink></td>
</tr>
<tr>
<td>31</td>
<td><code v-pre>RSS_EXP</code></td>
<td><RouterLink to="/reference/one-dimensional.html#databar-expanded">GS1 DataBar Expanded</RouterLink></td>
</tr>
<tr>
<td>30</td>
<td><code v-pre>RSS_LTD</code></td>
<td><RouterLink to="/reference/one-dimensional.html#databar-limited">GS1 DataBar Limited</RouterLink></td>
</tr>
<tr>
<td>98</td>
<td><code v-pre>HIBC_128</code></td>
<td><RouterLink to="/reference/one-dimensional.html#hibc-code-128">HIBC Code 128</RouterLink></td>
</tr>
<tr>
<td>99</td>
<td><code v-pre>HIBC_39</code></td>
<td><RouterLink to="/reference/one-dimensional.html#hibc-code-39">HIBC Code 39</RouterLink></td>
</tr>
<tr>
<td>69</td>
<td><code v-pre>ISBNX</code></td>
<td><RouterLink to="/reference/one-dimensional.html#sbn-isbn-and-isbn-13">ISBN (EAN-13 with verification stage)</RouterLink></td>
</tr>
<tr>
<td>89</td>
<td><code v-pre>ITF14</code></td>
<td><RouterLink to="/reference/one-dimensional.html#itf-14">ITF-14</RouterLink></td>
</tr>
<tr>
<td>77</td>
<td><code v-pre>KOREAPOST</code></td>
<td><RouterLink to="/reference/one-dimensional.html#korea-post-barcode">Korea Post</RouterLink></td>
</tr>
<tr>
<td>50</td>
<td><code v-pre>LOGMARS</code></td>
<td><RouterLink to="/reference/one-dimensional.html#logmars">LOGMARS</RouterLink></td>
</tr>
<tr>
<td>47</td>
<td><code v-pre>MSI_PLESSEY</code></td>
<td><RouterLink to="/reference/one-dimensional.html#msi-plessey">MSI Plessey</RouterLink></td>
</tr>
<tr>
<td>75</td>
<td><code v-pre>NVE18</code></td>
<td><RouterLink to="/reference/one-dimensional.html#nve-18">NVE-18</RouterLink></td>
</tr>
<tr>
<td>51</td>
<td><code v-pre>PHARMA</code></td>
<td><RouterLink to="/reference/one-dimensional.html#pharmacode">Pharmacode One-Track</RouterLink></td>
</tr>
<tr>
<td>86</td>
<td><code v-pre>PLESSEY</code></td>
<td><RouterLink to="/reference/one-dimensional.html#plessey">Plessey Code</RouterLink></td>
</tr>
<tr>
<td>52</td>
<td><code v-pre>PZN</code></td>
<td><RouterLink to="/reference/one-dimensional.html#pzn">PZN</RouterLink></td>
</tr>
<tr>
<td>32</td>
<td><code v-pre>TELEPEN</code></td>
<td><RouterLink to="/reference/one-dimensional.html#telepen-alpha">Telepen Alpha</RouterLink></td>
</tr>
<tr>
<td>87</td>
<td><code v-pre>TELEPEN_NUM</code></td>
<td><RouterLink to="/reference/one-dimensional.html#telepen-numeric">Telepen Numeric</RouterLink></td>
</tr>
<tr>
<td>34</td>
<td><code v-pre>UPCA</code></td>
<td><RouterLink to="/reference/one-dimensional.html#upc-version-a">UPC A</RouterLink></td>
</tr>
<tr>
<td>35</td>
<td><code v-pre>UPCA_CHK</code></td>
<td><RouterLink to="/reference/one-dimensional.html#upc-version-a">UPC A + Check Digit</RouterLink></td>
</tr>
<tr>
<td>37</td>
<td><code v-pre>UPCE</code></td>
<td><RouterLink to="/reference/one-dimensional.html#upc-version-e">UPC E</RouterLink></td>
</tr>
<tr>
<td>38</td>
<td><code v-pre>UPCE_CHK</code></td>
<td><RouterLink to="/reference/one-dimensional.html#upc-version-e">UPC E + Check Digit</RouterLink></td>
</tr>
<tr>
<td>144</td>
<td><code v-pre>ULTRA</code></td>
<td><RouterLink to="/reference/one-dimensional.html#ultracode">Ultracode</RouterLink></td>
</tr>
<tr>
<td>143</td>
<td><code v-pre>UPNQR</code></td>
<td><RouterLink to="/reference/one-dimensional.html#upnqr-univerzalni-placilni-nalog-qr">UPNQR (Univerzalni Plačilni Nalog QR)</RouterLink></td>
</tr>
<tr>
<td>73</td>
<td><code v-pre>VIN</code></td>
<td><RouterLink to="/reference/one-dimensional.html#vehicle-identification-number">Vehicle Identification Number (United States)</RouterLink></td>
</tr>
</tbody>
</table>
<h3 id="two-dimensional-symbologies" tabindex="-1"><a class="header-anchor" href="#two-dimensional-symbologies" aria-hidden="true">#</a> Two-Dimensional Symbologies</h3>
<table>
<thead>
<tr>
<th>Numeric Value</th>
<th>Name</th>
<th>Barcode Name</th>
</tr>
</thead>
<tbody>
<tr>
<td>92</td>
<td><code v-pre>AZTEC</code></td>
<td><RouterLink to="/reference/two-dimensional.html#aztec-code-iso-24778">Aztec Code</RouterLink></td>
</tr>
<tr>
<td>128</td>
<td><code v-pre>AZRUNE</code></td>
<td><RouterLink to="/reference/two-dimensional.html#aztec-runes">Aztec Runes</RouterLink></td>
</tr>
<tr>
<td>141</td>
<td><code v-pre>CODEONE</code></td>
<td><RouterLink to="/reference/two-dimensional.html#code-one">Code One</RouterLink></td>
</tr>
<tr>
<td>71</td>
<td><code v-pre>DATAMATRIX</code></td>
<td><RouterLink to="/reference/two-dimensional.html#data-matrix-ecc200-iso-16022">Data Matrix ECC200</RouterLink></td>
</tr>
<tr>
<td>115</td>
<td><code v-pre>DOTCODE</code></td>
<td><RouterLink to="/reference/two-dimensional.html#dotcode">DotCode</RouterLink></td>
</tr>
<tr>
<td>142</td>
<td><code v-pre>GRIDMATRIX</code></td>
<td><RouterLink to="/reference/two-dimensional.html#grid-matrix">Grid Matrix</RouterLink></td>
</tr>
<tr>
<td>116</td>
<td><code v-pre>HANXIN</code></td>
<td><RouterLink to="/reference/two-dimensional.html#han-xin-code">Han Xin (Chinese Sensible) Code</RouterLink></td>
</tr>
<tr>
<td>112</td>
<td><code v-pre>HIBC_AZTEC</code></td>
<td><RouterLink to="/reference/two-dimensional.html#aztec-code-iso-24778">HIBC Aztec Code</RouterLink></td>
</tr>
<tr>
<td>97</td>
<td><code v-pre>MICROQR</code></td>
<td><RouterLink to="/reference/two-dimensional.html#micro-qr-code-iso-18004">Micro QR Code</RouterLink></td>
</tr>
<tr>
<td>102</td>
<td><code v-pre>HIBC_DM</code></td>
<td><RouterLink to="/reference/two-dimensional.html#data-matrix-ecc200-iso-16022">HIBC Data Matrix ECC200</RouterLink></td>
</tr>
<tr>
<td>104</td>
<td><code v-pre>HIBC_QR</code></td>
<td><RouterLink to="/reference/two-dimensional.html#encoding-gs1-data">HIBC QR Code</RouterLink></td>
</tr>
<tr>
<td>57</td>
<td><code v-pre>MAXICODE</code></td>
<td><RouterLink to="/reference/two-dimensional.html#maxicode-iso-16023">Maxicode</RouterLink></td>
</tr>
<tr>
<td>58</td>
<td><code v-pre>QRCODE</code></td>
<td><RouterLink to="/reference/two-dimensional.html#qr-code-iso-18004">QR Code</RouterLink></td>
</tr>
<tr>
<td>143</td>
<td><code v-pre>UPNQR</code></td>
<td><RouterLink to="/reference/two-dimensional.html#upnqr-univerzalni-placilni-nalog-qr">UPNQR (Univerzalni Plačilni Nalog QR)</RouterLink></td>
</tr>
</tbody>
</table>
<h3 id="two-track-symbologies" tabindex="-1"><a class="header-anchor" href="#two-track-symbologies" aria-hidden="true">#</a> Two-Track Symbologies</h3>
<table>
<thead>
<tr>
<th>Numeric Value</th>
<th>Name</th>
<th>Barcode Name</th>
</tr>
</thead>
<tbody>
<tr>
<td>68</td>
<td><code v-pre>AUSREDIRECT</code></td>
<td><RouterLink to="/reference/two-track.html#redirect-barcode">Australia Post Redirection</RouterLink></td>
</tr>
<tr>
<td>66</td>
<td><code v-pre>AUSREPLY</code></td>
<td><RouterLink to="/reference/two-track.html#reply-paid-barcode">Australia Post Reply Paid</RouterLink></td>
</tr>
<tr>
<td>67</td>
<td><code v-pre>AUSROUTE</code></td>
<td><RouterLink to="/reference/two-track.html#routing-barcode">Australia Post Routing</RouterLink></td>
</tr>
<tr>
<td>63</td>
<td><code v-pre>AUSPOST</code></td>
<td><RouterLink to="/reference/two-track.html#customer-barcodes">Australia Post Standard Customer</RouterLink></td>
</tr>
<tr>
<td>90</td>
<td><code v-pre>KIX</code></td>
<td><RouterLink to="/reference/two-track.html#dutch-post-kix-code">Dutch Post KIX Code</RouterLink></td>
</tr>
<tr>
<td>76</td>
<td><code v-pre>JAPANPOST</code></td>
<td><RouterLink to="/reference/two-track.html#japanese-postal-code">Japanese Postal Code</RouterLink></td>
</tr>
<tr>
<td>53</td>
<td><code v-pre>PHARMA_TWO</code></td>
<td><RouterLink to="/reference/two-track.html#two-track-pharmacode">Pharmacode Two-Track</RouterLink></td>
</tr>
<tr>
<td>82</td>
<td><code v-pre>PLANET</code></td>
<td><RouterLink to="/reference/two-track.html#planet">PLANET</RouterLink></td>
</tr>
<tr>
<td>40</td>
<td><code v-pre>POSTNET</code></td>
<td><RouterLink to="/reference/two-track.html#postnet">PostNet</RouterLink></td>
</tr>
<tr>
<td>70</td>
<td><code v-pre>RM4SCC</code></td>
<td><RouterLink to="/reference/two-track.html#royal-mail-4-state-country-code-rm4scc">Royal Mail 4-State (RM4SCC)</RouterLink></td>
</tr>
<tr>
<td>121</td>
<td><code v-pre>MAILMARK</code></td>
<td><RouterLink to="/reference/two-track.html#royal-mail-4-state-mailmark">Royal Mail 4-State Mailmark</RouterLink></td>
</tr>
<tr>
<td>85</td>
<td><code v-pre>ONECODE</code></td>
<td><RouterLink to="/reference/two-track.html#usps-onecode">USPS OneCode</RouterLink></td>
</tr>
</tbody>
</table>
<h3 id="stacked-symbologies" tabindex="-1"><a class="header-anchor" href="#stacked-symbologies" aria-hidden="true">#</a> Stacked Symbologies</h3>
<table>
<thead>
<tr>
<th>Numeric Value</th>
<th>Name</th>
<th>Barcode Name</th>
</tr>
</thead>
<tbody>
<tr>
<td>74</td>
<td><code v-pre>CODABLOCKF</code></td>
<td><RouterLink to="/reference/stacked.html#codablock-f">Codablock-F</RouterLink></td>
</tr>
<tr>
<td>23</td>
<td><code v-pre>CODE16K</code></td>
<td><RouterLink to="/reference/stacked.html#ode-16k-en-12323">Code 16K</RouterLink></td>
</tr>
<tr>
<td>24</td>
<td><code v-pre>CODE49</code></td>
<td><RouterLink to="/reference/stacked.html#code-49">Code 49</RouterLink></td>
</tr>
<tr>
<td>79</td>
<td><code v-pre>RSS14STACK</code></td>
<td><RouterLink to="/reference/stacked.html#gs1-databar-14-stacked-iso-24724">GS1 DataBar-14 Stacked</RouterLink></td>
</tr>
<tr>
<td>80</td>
<td><code v-pre>RSS14STACK_OMNI</code></td>
<td><RouterLink to="/reference/stacked.html#gs1-databar-14-stacked-omnidirectional-iso-24724">GS1 DataBar-14 Stacked Omnidirectional</RouterLink></td>
</tr>
<tr>
<td>81</td>
<td><code v-pre>RSS_EXPSTACK</code></td>
<td><RouterLink to="/reference/stacked.html#gs1-databar-expanded-stacked-iso-24724">GS1 DataBar Expanded Stacked</RouterLink></td>
</tr>
<tr>
<td>106</td>
<td><code v-pre>HIBC_PDF</code></td>
<td><RouterLink to="/reference/stacked.html#pdf417-iso-15438">HIBC PDF417</RouterLink></td>
</tr>
<tr>
<td>108</td>
<td><code v-pre>HIBC_MICPDF</code></td>
<td><RouterLink to="/reference/stacked.html#micropdf417-iso-24728">HIBC MicroPDF417</RouterLink></td>
</tr>
<tr>
<td>55</td>
<td><code v-pre>PDF417</code></td>
<td><RouterLink to="/reference/stacked.html#pdf417-iso-15438">PDF417</RouterLink></td>
</tr>
<tr>
<td>56</td>
<td><code v-pre>PDF417TRUNC</code></td>
<td><RouterLink to="/reference/stacked.html#compact-pdf417">PDF417 Truncated</RouterLink></td>
</tr>
<tr>
<td>84</td>
<td><code v-pre>MICROPDF417</code></td>
<td><RouterLink to="/reference/stacked.html#micropdf417-iso-24728">MicroPDF417</RouterLink></td>
</tr>
</tbody>
</table>
<h3 id="composite-symbologies-iso-24723" tabindex="-1"><a class="header-anchor" href="#composite-symbologies-iso-24723" aria-hidden="true">#</a> Composite Symbologies (ISO 24723)</h3>
<table>
<thead>
<tr>
<th>Numeric Value</th>
<th>Name</th>
<th>Symbology</th>
</tr>
</thead>
<tbody>
<tr>
<td>130</td>
<td><code v-pre>EANX_CC</code></td>
<td>Composite symbol with EAN linear component</td>
</tr>
<tr>
<td>131</td>
<td><code v-pre>EAN128_CC</code></td>
<td>Composite symbol with GS1-128 linear component</td>
</tr>
<tr>
<td>133</td>
<td><code v-pre>RSS_LTD_CC</code></td>
<td>Composite symbol with GS1 DataBar Limited component</td>
</tr>
<tr>
<td>134</td>
<td><code v-pre>RSS_EXP_CC</code></td>
<td>Composite symbol with GS1 DataBar Extended component</td>
</tr>
<tr>
<td>132</td>
<td><code v-pre>RSS14_CC</code></td>
<td>Composite symbol with GS1 DataBar-14 Linear component</td>
</tr>
<tr>
<td>137</td>
<td><code v-pre>RSS14STACK_CC</code></td>
<td>Composite symbol with GS1 DataBar-14 Stacked component</td>
</tr>
<tr>
<td>138</td>
<td><code v-pre>RSS14_OMNI_CC</code></td>
<td>Composite symbol with GS1 DataBar-14 Stacked Omnidirectional component</td>
</tr>
<tr>
<td>139</td>
<td><code v-pre>RSS_EXPSTACK_CC</code></td>
<td>Composite symbol with GS1 DataBar Expanded Stacked component</td>
</tr>
<tr>
<td>135</td>
<td><code v-pre>UPCA_CC</code></td>
<td>Composite symbol with UPC A linear component</td>
</tr>
<tr>
<td>136</td>
<td><code v-pre>UPCE_CC</code></td>
<td>Composite symbol with UPC E linear component</td>
</tr>
</tbody>
</table>
<h3 id="other-barcode-like-markings" tabindex="-1"><a class="header-anchor" href="#other-barcode-like-markings" aria-hidden="true">#</a> Other Barcode-Like Markings</h3>
<table>
<thead>
<tr>
<th>Numeric Value</th>
<th>Name</th>
<th>Barcode Name</th>
</tr>
</thead>
<tbody>
<tr>
<td>93</td>
<td><code v-pre>DAFT</code></td>
<td><RouterLink to="/reference/other.html#daft-code">DAFT Code</RouterLink></td>
</tr>
<tr>
<td>49</td>
<td><code v-pre>FIM</code></td>
<td><RouterLink to="/reference/other.html#facing-identification-mark-fim">FIM</RouterLink></td>
</tr>
<tr>
<td>28</td>
<td><code v-pre>FLAT</code></td>
<td><RouterLink to="/reference/other.html#flattermarken">Flattermarken</RouterLink></td>
</tr>
</tbody>
</table>
</div></template>


