var binary = require('node-pre-gyp');
var path = require('path');
var binding_path = binary.find(path.resolve(path.join(__dirname,'../package.json')));
var symbology = require(binding_path);
var fs = require('fs');
var PNGImage = require('pngjs-image');

/* enumerated types in exports */
var exp = {
  Barcode: require('./enums/barcode'),
  ErrorCode: require('./enums/errorCode'),
  Options: require('./enums/options'),
  Output: require('./enums/output')
};

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
  showHumanReadableText: 1 // show human-readable text
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

  return symbology[fnName](
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
    symbologyStruct.showHumanReadableText ? 1 : 0,
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
 * Renders a png, svg, or eps barcode.
 * If PNG, it returns the stream as a base64 string.
 * 
 * @note The file will be created in memory and then passed to the returned object.
 *
 * @param {Symbol} symbol - Symbol struct
 * @param {String} barcodeData - data to encode
 * @param {String} outputType - 'png', 'svg', or 'eps' (default: 'png')
 * @returns {Promise<Object>} object with resulting props (see docs)
 */
exp.createStream = function(symbol, barcodeData, outputType) {
  outputType = outputType || exp.Output.PNG
  symbol.fileName = 'out.' + outputType
  symbol.outputOptions = 8; // force buffer to write to rendered_data

  var res = createSymbology(symbol, barcodeData, 'createStream');

  if(res.code <= 2) {
    if (outputType === exp.Output.PNG) {
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
    return Promise.resolve({
      data: res.encodedData,
      message: res.message,
      code: res.code
    });
  }
  return Promise.reject({
    message: res.message,
    code: res.code
  });
};

/**
 * Creates a stream of a PNG, SVG or EPS file in the specified fileName path.
 * 
 * @note: Zint will render the file type based on the extension of the given file path.
 *
 * @param {Symbol} symbol - symbol struct
 * @param {String} barcodeData - data to encode
 * @returns {Promise<Object>} object with resulting props (see docs)
 */
exp.createFile = function(symbol, barcodeData) {
  var res = createSymbology(symbol, barcodeData, 'createFile');

  return new Promise(function(resolve) {
    resolve(res);
  });
};

module.exports = exp;
