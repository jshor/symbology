var assert = require('assert');
var zint = require('../node-zint');

assert.equal(typeof zint, 'function');

var zintSymbol = {
  symbology: 57,
  fgColor: 'fff000',
  bgColor: '000000',
  outFile: 'outsd.png',
  scale: 1.0,
  option1: -1,
  option2: -1,
  option3: -1
  // show_hrt: 
  // input_mode: BINARY_MODE,
};

console.log('---- Running ----');
console.log('Result: ', zint(zintSymbol, "test stuff"));
console.log('------ End ------');