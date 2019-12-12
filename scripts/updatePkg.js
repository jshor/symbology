const fs = require('fs-extra')
const child_process = require('child_process')
const pkg = require('../package.json')

const main = async () => {
    pkg.version = child_process
    .execSync(`git describe --tags --abbrev=0`, { encoding: 'utf8' })
    .trim()
    .slice(1)
    
  try {
    await fs.writeJson('./package.json', pkg, { spaces: 2 })
  } catch (err) {
    throw err
  }
  child_process.execSync('git add package.json')
  child_process.execSync('git commit --amend --no-edit')
}

main()