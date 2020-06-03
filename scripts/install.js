const clone = require('git-clone')
const replace = require('replace-in-file')
const rimraf = require('rimraf')
const path = require('path')
const patches = require('./patches')
const { zintVersion } = require('../package.json')

const checkout = zintVersion || 'master'

console.log('Removing any existing .zint directory...')

rimraf(path.join(__dirname, '../.zint'), () => {
  console.log(`Cloning zint at '${checkout}' in`, path.join(__dirname, '../.zint'))

  clone(`https://github.com/woo-j/zint.git`, './.zint', { checkout }, (err) => {
    if (err) {
      console.error(err)
    } else {
      console.log('Successfully cloned. Applying code patches...')

      patches.forEach(patch => replace.sync(patch))

      console.log('Done.')
    }
  })
})

