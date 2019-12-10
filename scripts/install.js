const clone = require('git-clone')
const replace = require('replace-in-file')

console.log('Cloning zint library...')

clone('https://github.com/woo-j/zint.git', '.zint', () => {
  replace.sync({
    files: '.zint/**/*.c',
    from: /\<malloc\.h\>/g,
    to: '<stdlib.h>'
  })
  console.log('Finished cloning zint.')
})