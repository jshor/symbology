const clone = require('git-clone')
const replace = require('replace-in-file')
const rimraf = require('rimraf')
const path = require('path')


const patches = [
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
    from: /([a-z]+) = stdout;\n/g,
    to: `#ifndef _WIN32
            pipe(p);
        #endif

        $1 = fdopen(p[1], "w");
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
    int p[2];`
  },
  {
    files: '.zint/**/{svg,ps}.{c,h}',
    from: /(fflush\([a-z]+\);)/g,
    to: `$1
        close(p[1]);
        read(p[0], symbol->rendered_data, 100000000);`
  }
]

console.log('Removing any existing .zint directory...')

rimraf(path.join(__dirname, '../.zint'), () => {
  console.log('Cloning zint...', path.join(__dirname, '.zint'))

  clone('https://github.com/woo-j/zint.git', '.zint', () => {
    console.log('Successfully cloned. Applying code patches...')
    
    patches.forEach(patch => replace.sync(patch))
    
    console.log('Done.')
  })
})

