/**
 * List of patches to apply to C source and header files in the Zint source.
 * These patches will be applied after each time time the library is cloned.
 */
module.exports = [
    {
      files: '.zint/**/zint.h',
      from: /struct zint_symbol \{/g,
      to: `
      struct zint_symbol {
          char rendered_data[100000000];
  `
    },
    {
      files: '.zint/**/*.{c,h}',
      from: /\<malloc\.h\>/g,
      to: '<stdlib.h>'
    },
    {
      files: '.zint/**/{svg,ps}.{c,h}',
      from: /\<stdlib\.h\>/g,
      to: `<stdlib.h>
    #include <stdio.h>
      `
    },
    {
      files: '.zint/**/{svg,ps}.{c,h}',
      from: /([a-z]+) = stdout;\n/g,
      to: `
          #ifndef _WIN32
              pipe(p);
              $1 = fdopen(p[1], "w");
          #else
              $1 = fopen("NUL", "w");
              setvbuf($1, buf, _IOLBF, sizeof(symbol->rendered_data));
          #endif
  `
    },
    {
      files: '.zint/**/{svg,ps}.{c,h}',
      from: /int ([a-z]+)_plot([^\n]+)/g,
      to: `
  int pipe(int fd[2]);
  int close(int fildes);
  int read(int fildes, void *buf, unsigned nbytes);
  
  int $1_plot$2
      char *buf = malloc(sizeof(symbol->rendered_data));
      int p[2];`
    },
    {
      files: '.zint/**/{svg,ps}.{c,h}',
      from: /fflush\(([a-z]+)\);/g,
      to: `
          #ifndef _WIN32
              fflush($1);
              close(p[1]);
              read(p[0], symbol->rendered_data, sizeof(symbol->rendered_data));
          #else
              strcpy(symbol->rendered_data, buf);
          #endif
  `
    }
  ]
  