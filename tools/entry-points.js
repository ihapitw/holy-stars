const path = require('path')

const entryPoints = [
  [],
  ['core'],
  ['render'],
  ['utilities'],
]

const entryPointPaths = entryPoints.map(entryPoint => path.join(...entryPoint))

module.exports = {
  entryPoints,
  entryPointPaths,
}

