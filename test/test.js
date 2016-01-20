var chai = require('chai');
var mocha = require('mocha');
var zint = require('../node-zint');

chai.expect();

var zintSymbol = {
  symbology: 20,
  fgColor: 'fff000',
  bgColor: '000000',
  outFile: 'outFile.png',
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