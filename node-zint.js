var zint = require('./');
var exp = require('./enums');

/**
 * zintSymbol struct, populated with default values
 */
var zintSymbol = {
  symbology: 20,
  height: 50,
  whitespaceWidth: 0,
  borderWidth: 0,
  outputOptions: -1,
  fgColor: '000000',
  bgColour: 'ffffff',
  outFile: 'outsd.png',
  scale: 1.0,
  option1: -1,
  option2: -1,
  option3: -1
  // show_hrt: 
  // input_mode: BINARY_MODE,
};

/**
 * Merges zintSymbol struct with user-defined symbologyStruct
 * properties. Ensures properties sent are valid.
 */
function mergeSettings(symbologyStruct) {
  var keys = Object.keys(zintSymbol);

  for(var i=0; i<keys.length; i++) {
    if(!symbologyStruct[keys[i]]) {
      symbologyStruct[keys[i]] = zintSymbol[keys[i]];
    }
  }
}

/**
 * Create a new file on the file system.
 */
exp.createFile = function(symbologyStruct, barcodeData) {
  mergeSettings(symbologyStruct);

  return zint.createSymbology(
    barcodeData,
    symbologyStruct.symbology,
    symbologyStruct.height,
    symbologyStruct.whitespaceWidth,
    symbologyStruct.borderWidth,
    symbologyStruct.outputOptions,
    symbologyStruct.fgColor,
    symbologyStruct.bgColor,
    symbologyStruct.outFile,
    symbologyStruct.scale,
    symbologyStruct.option1,
    symbologyStruct.option2,
    symbologyStruct.option3,
    // symbologyStruct.show_hrt,
    // symbologyStruct.input_mode,
    (symbologyStruct.text || barcodeData)
  );
};

module.exports = exp;
