<template><div><h1 id="error-handling" tabindex="-1"><a class="header-anchor" href="#error-handling" aria-hidden="true">#</a> Error handling</h1>
<p>Each function returns an object having property <code v-pre>code</code>, which is the status code of the function, and <code v-pre>message</code>, which contains an error/warning message (if any).</p>
<p>Below are the possible status codes:</p>
<table>
<thead>
<tr>
<th>Code</th>
<th>Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>Symbology was generated successfully.</td>
</tr>
<tr>
<td>2</td>
<td>One or more options are invalid but the symbology was created anyway.</td>
</tr>
<tr>
<td>5</td>
<td>The file path was too long.</td>
</tr>
<tr>
<td>6</td>
<td>The data for the specified symbology is invalid.</td>
</tr>
<tr>
<td>7</td>
<td>Error checking (if any) on the rendered barcode failed.</td>
</tr>
<tr>
<td>8</td>
<td>One or more options are invalid and rendering failed.</td>
</tr>
<tr>
<td>9</td>
<td>Invalid characters in input data.</td>
</tr>
<tr>
<td>10</td>
<td>Cannot write to the given path.</td>
</tr>
<tr>
<td>11</td>
<td>Corrupt or insufficient memory.</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">Deprecation Notice</p>
<p>Starting in version 2.1.0, the <code v-pre>ErrorCode</code> enum has been deprecated and will be removed in the next major release.</p>
</div>
</div></template>


