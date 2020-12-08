/**
 * List of patches to apply to C source and header files in the Zint source.
 * These patches will be applied after each time time the library is cloned.
 */
module.exports = [
  /* initialize rendered_data, which will store the rendered SVG/PS string */
    {
      files: '.zint/**/zint.h',
      from: /struct zint_symbol \{/g,
      to: `
    struct zint_symbol {
        char rendered_data[1000000];
`
    },
    /* add stdlib as reference */
    {
      files: '.zint/**/*.{c,h}',
      from: /\<malloc\.h\>/g,
      to: '<stdlib.h>'
    },
    /* add stdio as reference */
    {
      files: '.zint/**/{svg,ps}.{c,h}',
      from: /\<stdlib\.h\>/g,
      to: `<stdlib.h>
#include <stdio.h>
`
    },
    /* redirects stdout to file buffer with size of symbol->rendered_data */
    {
      files: '.zint/**/{svg,ps}.{c,h}',
      from: /([a-z]+)\s*=\s*stdout;/g,
      to: `
#ifndef _MSC_VER
    pipe(p);
    $1 = fdopen(p[1], "w");
#else
    $1 = fopen("NUL", "w");
    setvbuf($1, buf, _IOLBF, sizeof(symbol->rendered_data));
#endif
`
    },
    /* assigns pointer to maintain file buffer */
    {
      files: '.zint/**/{svg,ps}.{c,h}',
      from: /INTERNAL int ([a-z]+)_plot([^\n]+)/g,
      to: `
int pipe(int fd[2]);
int close(int fildes);
int read(int fildes, void *buf, unsigned nbytes);

INTERNAL int $1_plot$2
    char *buf = malloc(sizeof(symbol->rendered_data));
    int p[2];`
    },
    /* reads file buffer into symbol->rendered_data */
    {
      files: '.zint/**/{svg,ps}.{c,h}',
      from: /fflush\(([a-z]+)\);/g,
      to: `
#ifndef _MSC_VER
    fflush($1);
    close(p[1]);
    read(p[0], symbol->rendered_data, sizeof(symbol->rendered_data));
#else
    strcpy(symbol->rendered_data, buf);
#endif
`
    }
  ]
