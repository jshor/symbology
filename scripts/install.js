const clone = require('git-clone')
const replace = require('replace-in-file')
const rimraf = require('rimraf')
const path = require('path')
const patches = require('./patches')

// test commit
console.log('Removing any existing .zint directory...')

rimraf(path.join(__dirname, '../.zint'), () => {
  console.log('Cloning zint...', path.join(__dirname, '.zint'))

  clone('https://github.com/woo-j/zint.git', '.zint', () => {
    console.log('Successfully cloned. Applying code patches...')
    
    patches.forEach(patch => replace.sync(patch))
    
    console.log('Done.')
  })
})

