const clone = require('git-clone')
const replace = require('replace-in-file')
const rimraf = require('rimraf')
const path = require('path')
const fs = require('fs')
const patches = require('./patches')
const { zintVersion } = require('../package.json')

/** Current zint git ref (specified in package.json) */
const checkout = zintVersion || 'master'

/**
 * Returns the absolute path to the given file in zint source.
 *
 * @param {string} p path names
 * @returns {string}
 */
const getPath = p => path.join(__dirname, '../.zint', p)

/**
 * Creates zintconfig.h, which contains version definitions from CMake.
 */
const createConfigFile = () => {
  const fileData = fs
    .readFileSync(getPath('CMakeLists.txt'))
    .toString()
    .match(/ZINT_VERSION_[A-Z]+\s+[0-9]+/gi)
    .map(s => `#define ${s}`)
    .join('\n')

  fs.writeFileSync(getPath('backend/zintconfig.h'), fileData)
}

/**
 * Clones zint, then applies C source patches.
 */
const cloneAndPatch = () => {
  console.log('Removing any existing .zint directory...')

  rimraf(path.join(__dirname, '../.zint'), () => {
    console.log(`Cloning zint at '${checkout}' in`, path.join(__dirname, '../.zint'))

    clone(`https://github.com/woo-j/zint.git`, './.zint', { checkout }, (err) => {
      if (err) {
        console.error(err)
      } else {
        console.log('Successfully cloned. Applying code patches...')

        patches.forEach(patch => replace.sync(patch))

        console.log('Creating zint config header file...')

        createConfigFile()

        console.log('Done.')
      }
    })
  })
}

cloneAndPatch()

