/**
 * List of patches to apply to C source and header files in the Zint source.
 * These patches will be applied after each time time the library is cloned.
 */
module.exports = [
  /* initialize rendered_data, which will store the rendered SVG/PS string */
//   {
//     files: '.zint/**/zint.h',
//     from: /struct zint_symbol \{/g,
//     to: `
//     struct zint_symbol {
//         char rendered_data[1000000];
// `
//   },
//   /* add stdlib as reference */
//   {
//     files: '.zint/**/*.{c,h}',
//     from: /\<malloc\.h\>/g,
//     to: '<stdlib.h>'
//   },
//   /* add stdio as reference */
//   {
//     files: '.zint/**/{svg,ps}.{c,h}',
//     from: /\<stdlib\.h\>/g,
//     to: `<stdlib.h>
// #include <stdio.h>
// `
//   },
//   /* redirects stdout to file buffer with size of symbol->rendered_data */
//   {
//     files: '.zint/**/{svg,ps}.{c,h}',
//     from: /([a-z]+)\s*=\s*stdout;/g,
//     to: ''
//   },
//   /* assigns pointer to maintain file buffer */
//   {
//     files: '.zint/**/{svg,ps}.{c,h}',
//     // from: /INTERNAL int ([a-z]+)_plot(.+)/g,
//     from: /(\n\s+)FILE \*([a-z]+);/g,
//     to: `$1char str[sizeof(symbol->rendered_data)];$1char *$2 = str;`
//   },
//   /* replaces the file buffer allocation with a string one */
//   {
//     files: '.zint/**/{svg,ps}.{c,h}',
//     from: /FILE \*([a-z]+)/g,
//     to: 'char *$1'
//   },
//   /* change file printing to string concatenation */
//   {
//     files: '.zint/**/{svg,ps}.{c,h}',
//     from: /fprintf\(([a-z]+), /g,
//     to: '$1 += sprintf($1, '
//   },
//   {
//     files: '.zint/**/{svg,ps}.{c,h}',
//     from: /fput(s|c)\((.*),\s*([a-z]+)\)/g,
//     to: '$3 += sprintf($3, $2)'
//   },
//   /* reads file buffer into symbol->rendered_data */
  {
    files: '.zint/**/library.c',
    from: 'OUT_BUFFER',
    to: 'OUT_REPLACE_BUFFER'
  },
  {
    files: '.zint/**/library.c',
    from: 'OUT_BUFFER',
    to: 'filetypes[filetype_idx(symbol->outfile + (int) strlen(symbol->outfile) - 3)].filetype'
  },
  {
    files: '.zint/**/library.c',
    from: 'OUT_REPLACE_BUFFER',
    to: 'OUT_BUFFER'
  }
]
