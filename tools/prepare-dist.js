const fs = require('fs')

const packageJson = require('../package.json')

packageJson.private = false
delete packageJson.scripts

const distPackageJson = JSON.stringify(packageJson, (_, value) => {
  if (typeof value === 'string' && value.startsWith('dist/')) {
    return value.split('/').slice(1).join('/')
  }
  return value
}, 2) + '\n'

const distRoot = `${__dirname}/../dist`
fs.writeFileSync(`${distRoot}/package.json`, distPackageJson)

const srcDir = `${__dirname}/../src`
fs.copyFileSync(`${srcDir}/../README.md`,  `${distRoot}/README.md`)
fs.copyFileSync(`${srcDir}/index.css`,  `${distRoot}/index.css`)
