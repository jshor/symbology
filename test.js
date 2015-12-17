var assert = require('assert');
var zint = require('./');

assert.equal(typeof zint.foo, 'function');

var BINARY_MODE = 1;

var zintSymbol = {
  symbology: 57,
  height: 50,
  whitespace_width: 0,
  border_width: 0,
  // output_options: 
  fgcolour: 'fff000',
  bgcolour: '000000',
  outfile: 'outsd.png',
  scale: 1.0,
  option_1: -1,
  option_2: -1,
  option_3: -1
  // show_hrt: 
  // input_mode: BINARY_MODE,
};

function createFile(symbologyStruct) {
  return runZint(symbologyStruct, "hello world", 1);
}

//   int symbology;
//   int height;
//   int whitespace_width;
//   int border_width;
//   int output_options;
//   char fgcolour[10];
//   char bgcolour[10];
//   char outfile[FILENAME_MAX];
//   float scale;
//   int option_1;
//   int option_2;
//   int option_3;
//   int show_hrt;
//   int input_mode;
//   uint8_t text[128];
function runZint(symbologyStruct, barcodeData, action) {
  zint.foo(
    barcodeData,
    symbologyStruct.symbology,
    symbologyStruct.height,
    symbologyStruct.whitespace_width,
    symbologyStruct.border_width,
    symbologyStruct.output_options,
    symbologyStruct.fgcolour,
    symbologyStruct.bgcolour,
    symbologyStruct.outfile,
    symbologyStruct.scale,
    symbologyStruct.option_1,
    symbologyStruct.option_2,
    symbologyStruct.option_3,
    // symbologyStruct.show_hrt,
    // symbologyStruct.input_mode,
    (symbologyStruct.text || barcodeData),
    action
  );
}

console.log('---- Running ----');
createFile(zintSymbol, "test stuff", 1);
console.log('------ End ------');
