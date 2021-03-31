/* eslint-disable */
const path = require('path')
const gyp = require('@mapbox/node-pre-gyp')
const binding = gyp.find(path.join(__dirname,'../../package.json'))
const symbology = require(binding)

module.exports = symbology
