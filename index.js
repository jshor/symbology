var binary = require('node-pre-gyp');
var path = require('path');
var binding_path = binary.find(path.resolve(path.join(__dirname,'./package.json')));
var barnode = require(binding_path);

var exp = require('./enums');
var fs = require('fs');
var PNGImage = require('pngjs-image');

/**
 * Symbol struct, populated with default values
 */
var defaultSymbol = {
  symbology: 20,
  height: 50,
  whitespaceWidth: 0,
  borderWidth: 0,
  outputOptions: -1,
  foregroundColor: '000000',
  backgroundColor: 'ffffff',
  fileName: 'out.png',
  scale: 1.0,
  option1: -1,
  option2: -1,
  option3: -1,
  show_hrt: 1 // show human-readable text
  // input_mode: BINARY_MODE,
};

/**
 * Merges Symbol struct with user-defined symbologyStruct
 * properties. Ensures properties sent are valid.
 * 
 * @param  {Symbol} obj Symbol struct
 * @return {Symbol} obj Symbol struct
 */
function validateSymbol(symbologyStruct) {
  var keys = Object.keys(defaultSymbol);

  for(var i=0; i<keys.length; i++) {
    if(!symbologyStruct[keys[i]]) {
      symbologyStruct[keys[i]] = defaultSymbol[keys[i]];
    }
  }
}

/**
 * Calls the given function name from the c++ library wrapper, validates
 * the struct values and passes the arguments sent in symbologyStruct
 * in the correct order.
 * 
 * @param  {Symbol} symbologyStruct
 * @param  {String}     barcodeData
 * @param  {String}     fnName          name of fn to call from c++ lib
 * @return {Struct}                     result of called function
 */
function createSymbology(symbologyStruct, barcodeData, fnName) {
  validateSymbol(symbologyStruct);

  return barnode[fnName](
    barcodeData,
    symbologyStruct.symbology,
    symbologyStruct.height,
    symbologyStruct.whitespaceWidth,
    symbologyStruct.borderWidth,
    symbologyStruct.outputOptions,
    symbologyStruct.backgroundColor,
    symbologyStruct.foregroundColor,
    symbologyStruct.fileName,
    symbologyStruct.scale,
    symbologyStruct.option1,
    symbologyStruct.option2,
    symbologyStruct.option3,
    // symbologyStruct.showHrt,
    // symbologyStruct.input_mode,
    (symbologyStruct.text || barcodeData)
  );
}

/**
 * Renders a PNG Blob stream to a base64 PNG.
 * 
 * @param  {PNGJS} image
 * @return {Promise<String>} base64 representation
 */
function blobToBase64Png(image) {
  var png = image.getImage();
  var chunks = [];

  return new Promise(function(resolve) {
    png.pack();
    png.on('data', function(chunk) {
      chunks.push(chunk);
    });
    png.on('end', function() {
      var result = Buffer.concat(chunks);
      resolve('data:image/png;base64,' + result.toString('base64')); 
    });
  });
}

/**
 * Renders RGB 24 bitmap into an image instance of PNG
 * 
 * @param  {Array}  bitmap  containing RGB values
 * @param  {Number} width   width of bitmap
 * @param  {Number} height  height of bitmap
 * @return {PNG}            instance of PNG (not PNGJS!)
 */
function pngRender(bitmap, width, height) {
  var image = PNGImage.createImage(width, height);
  var i = 0;

  for(var y = 0; y<height; y++) {
    for(var x = 0; x<width; x++) {
      image.setAt(x, y, {
        red: bitmap[i],
        green: bitmap[i+1],
        blue: bitmap[i+2],
        alpha: 200
      });
      i += 3;
    }
  }

  return image;
}

/**
 * Creates a base64 bitmap of a sybology.
 * If PNG, returns the stream is returned in base64 format.
 * 
 * @param  {Symbol} symbol Symbol struct
 * @param  {String} type   'png', 'svg', or 'eps'
 * @return {Promise<Object>}   object with resulting props (see docs)
 */
exp.createStream = function(symbol, barcodeData) {
  // note: unfortunately, Zint only knows to stream pngs and, further,
  // will only do so if a filename is specified with a png extension
  // it will NOT actually create out.png in the file system
  symbol.fileName = 'out.png';
  var res = createSymbology(symbol, barcodeData, 'createStream');

  if(res.code <= 2) {
    var pngData = pngRender(res.encodedData, res.width, res.height);

    return blobToBase64Png(pngData)
      .then(function(base64Data) {
        return {
          data: base64Data,
          width: res.width,
          height: res.height,
          message: res.message,
          code: res.code
        };
      });
  }
  return new Promise(function(resolve) {
    resolve(res);
  });
};

/**
 * Creates a stream of a PNG, SVG or EPS file in the specified fileName path.
 * 
 * @param  {Symbol} symbol symbol struct
 * @param  {String} filePath
 * @param  {String} type   'png', 'svg', or 'eps'
 * @return {Promise<Object>} object with resulting props (see docs)
 */
exp.createFile = function(symbol, barcodeData) {
  var res = createSymbology(symbol, barcodeData, 'createFile');

  return new Promise(function(resolve) {
    resolve(res);
  });
};

module.exports = exp;