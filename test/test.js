var chai = require('chai');
var mocha = require('mocha');
var fs = require('fs');
var zint = require('../node-zint');
var regex = require('./regex');
var expect = chai.expect;

function getSymbol(obj) {
  obj = obj || {};
  return {
    symbology: obj.symbology || 20,
    fgColor: obj.fgColor || 'fff000',
    bgColor: obj.bgColor || '000000',
    outFile: obj.outFile || 'outFile.png',
    scale: obj.scale || 1.0,
    option1: obj.option1 || -1,
    option2: obj.option2 || -1,
    option3: obj.option3 || -1,
    show_hrt: obj.show_hrt || 1
    // input_mode: BINARY_MODE,
  }
}

function fileExists(filePath) {
  try {
    return fs.statSync(filePath).isFile();
  } catch (e) {
    return false;
  }
}


var deleteFolderRecursive = function(path) {
  if(fs.existsSync(path)) {
    fs.readdirSync(path).forEach(function(file, index){
      var curPath = path + '/' + file;
      if(fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
  }
};

var createFolder = function(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}

var noop = function() {};

// console.log('---- Running ----');

describe('the barnode library', function() {
  describe('the createStream function', function() {
    it('should return an object with status code and png base64 data', function() {
      return zint
        .createStream(getSymbol(), '12345', 'png')
        .then(function(data) {
          expect(data.code).to.be.a('number');
          expect(data.code).to.equal(0);
          expect(data.data).to.match(regex.base64);
        });
    });

    it('should return an object with status code and svg xml data', function() {
      return zint
        .createStream(getSymbol(), '12345', 'svg')
        .then(function(data) {
          expect(data.code).to.be.a('number');
          expect(data.code).to.equal(0);
          expect(data.data).to.match(regex.xml);
        });
    });

    it('should fail with a nonzero status code and a message', function() {

      return zint
        .createStream(getSymbol({symbology: 500}), '12345', 'png')
        .then(noop, function(data) {
          expect(data.code).to.be.a('number');
          expect(data.code).to.not.equal(0);
          expect(data.message).to.not.be.null;
          expect(data.message).to.be.a('string');
          expect(data.message).to.have.length.at.least(1);
        });
    });
  });


  describe('the createFile function to create png files', function() {
    // beforeEach(function(done) {
      
    // });

    it('should return a zero status code and render a png file', function() {
      var fileName = 'testfile.png';

      return zint
        .createFile(getSymbol({outFile: fileName}), '12345', 'png')
        .then(function(data) {
          var itExists = fileExists(fileName);

          expect(data.code).to.be.a('number');
          expect(data.code).to.equal(0);
          expect(itExists).to.be.true;
        });
    });

    it('should render a png file', function() {
      
    });

    // it('should not render a file when given invalid param(s)', function() {
    //   return zint
    //     .createStream(getSymbol({symbology: 500}), '12345', 'png')
    //       .then(noop, function(data) {
    //         expect(data.code).to.be.a('number');
    //         expect(data.code).to.not.equal(0);
    //         expect(data.message).to.not.be.null;
    //         expect(data.message).to.be.a('string');
    //         expect(data.message).to.have.length.at.least(1);

    //         return ensureFileNotExists(fileNamePng);
    //       });
    // });
  });
});



// console.log('------ End ------');