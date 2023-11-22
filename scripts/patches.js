/**
 * List of patches to apply to C source and header files in the Zint source.
 * These patches will be applied after each time time the library is cloned.
 */
module.exports = [
  /* defines the output buffer type based on the file name */
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
  },
  /* define the version in PostScript files */
  {
    files: '.zint/**/{ps,svg}.c',
    from: /%%Creator:\s+([\w\s]+)/g,
    to: '%%Version: '
  },
  /* support titles for PostScript files */
  {
    files: '.zint/**/{ps,svg}.c',
    from: /%%Title:\s+([\w\s]+)\s/g,
    to: '%%Title: {{ title }}'
  },
  /* support titles for SVG files */
  {
    files: '.zint/**/{ps,svg}.c',
    from: /<desc>\s*([\w\s]+)\s*<\/desc>/g,
    to: '<desc>{{ title }}</desc><title>{{ title }}</title>'
  }
]
