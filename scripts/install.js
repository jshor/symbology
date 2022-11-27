const replace = require('replace-in-file')
const fetch = require('node-fetch')
const tar = require('tar')
const path = require('path')
const fs = require('fs')
const rimraf = require('rimraf')
const patches = require('./patches')
const { zintVersion } = require('../package.json')

/** Current zint git ref (specified in package.json) */
const checkoutHash = zintVersion || 'master'
const file = 'zint.tgz'

/**
 * Returns the absolute path to the given file in zint source.
 *
 * @param {string} p path names
 * @returns {string}
 */
const getPath = (p = '.') => path.join(__dirname, '../.zint', p)

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

const downloadFile = (async (url, path) => {
  const res = await fetch(url)
  const fileStream = fs.createWriteStream(path)

  await new Promise((resolve, reject) => {
    res.body.pipe(fileStream)
    res.body.on('error', reject)
    fileStream.on('finish', resolve)
  })
})

function applyPatches () {
  console.log('Successfully cloned. Applying code patches...')

  patches.forEach(patch => replace.sync(patch))

  console.log('Creating zint config header file...')

  createConfigFile()
}

async function downloadAndExtract () {
  console.log(`Downloading zint at '${checkoutHash}' to`, getPath())

  try {
    await downloadFile(`https://github.com/zint/zint/tarball/${checkoutHash}`, getPath('../zint.tgz'))
    await tar.extract({ file })

    fs.renameSync(getPath(`../zint-zint-${checkoutHash}`), getPath())
    fs.rmSync(file)

    applyPatches()

    console.log('Done.')
  } catch (error) {
    console.error(error)
  }
}

/**
 * Clones zint, then applies C source patches.
 */
const cloneAndPatch = () => {
  if (fs.existsSync(path.join(__dirname, '../bin/binding/bin/symbology.node'))) {
    // if the binary already exists, do not recompile
    console.log('\x1b[32m ✓ Binary already exists. Nothing to install. \x1b[37m')
    return
  }

  console.log('Removing any existing .zint directory...')

  rimraf(path.join(__dirname, '../.zint'), downloadAndExtract)
}

cloneAndPatch()

