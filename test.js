var assert = require('assert');
var zint = require('./');

assert.equal(typeof zint.foo, 'function');

console.log(zint.foo());
