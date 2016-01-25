var zint = require('./');
var exp = require('./enums');
var fs = require('fs');

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
  option3: -1,
  show_hrt: 1 // show human-readable text
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
 * Returns a file extension from a given file name.
 */
function getExt(filePath) {
  return filePath.substring(filePath.lastIndexOf('.')+1, filePath.length);
}

/**
 * Reads a png, converts to base64 string, and returns it on callback.
 */
function readPngToBase64(onSuccess, onError, filePath) {
  fs.readFile(filePath, 'binary', function (err, data) {
    if (err) {
      onError(err);
    } else {
      var content = 'data:image/png;base64,';
      content += new Buffer(data, 'binary').toString('base64');
    }

    onSuccess(content);
  });
}

/**
 * Reads and returns an svg on callback.
 */
function readSvg(onSuccess, onError, filePath) {
  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
      onError(err);
    } else {
      onSuccess(data);
    }
  });
}

/**
 * Create a new symbology file using the zint endpoint.
 */
function createSymbology(symbologyStruct, barcodeData) {
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
}

/**
 * Returns a random file name for writing.
 */
function getTempFile(ext) {
  return './' 
    + Math.random().toString(36).substring(7)
    + '.' + ext;
}

/**
 * Create a new symbology and save it to the specified file.
 */
exp.createFile = function(symbologyStruct, barcodeData) {
  mergeSettings(symbologyStruct);
  
  return new Promise(function(resolve, reject) {
    var result = createSymbology(symbologyStruct, barcodeData);

    if(result.code <= 2) {
      resolve(result);
    } else {
      reject(result);
    }
  });
};

/**
 * Create and stream a new symbology.
 */
exp.createStream = function(symbologyStruct, barcodeData, type) {
  var filePath = getTempFile(type);
  symbologyStruct.outFile = filePath;
  var result = createSymbology(symbologyStruct, barcodeData);

  return new Promise(function(resolve, reject) {

    if(result.code <= 2) {
      /*
       * Success, attach file data to `data` property.
       */
      function onSuccess(data) {
        result.data = data;
        resolve(result);
      }

      /*
       * Error handling if file could not be read
       */
      function onError(err) {
        result = {
          code: 12,
          message: 'error: could not access ' + symbologyStruct.outFile
        };
        reject(result);
      }
      
      if(type === 'png') {
        readPngToBase64(onSuccess, onError, filePath);
      } else {
        readSvg(onSuccess, onError, filePath);
      }

      try {
        fs.unlinkSync(filePath);
      } catch (e) {
        onError(e);
      }
    } else {
      reject(result);
    }

  });
};

module.exports = exp;
