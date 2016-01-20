var chai = require('chai');
var zint = require('../node-zint');

// assert.equal(typeof zint.createFile, 'function');

var zintSymbol = {
  symbology: 20,
  fgColor: 'fff000',
  bgColor: '000000',
  outFile: 'outsd.png',
  scale: 1.0,
  option1: -1,
  option2: -1,
  option3: -1,
  show_hrt: 1
  // input_mode: BINARY_MODE,
};

console.log('---- Running ----');

zint
  .createStream(zintSymbol, "yoyoyo", 'png')
  .then(function(data) {
    console.log('Result: ', data);
  }, function(err) { 
    console.log('FAIL: ', err); 
  });

console.log('------ End ------');