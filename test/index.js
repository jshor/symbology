var chai = require('chai');
var sinon = require('sinon');
var mocha = require('mocha');
var fs = require('fs');
var symbology = require('../');
var regex = require('./regex');
var expect = chai.expect;
var stub = sinon.stub();
var binary = require('node-pre-gyp');
var path = require('path');
var binding_path = binary.find(path.resolve(path.join(__dirname,'../package.json')));
var barnode = require(binding_path);
var createStream = require('./createStreamStub');

function getSymbol(obj) {
  obj = obj || {};
  return {
    symbology: obj.symbology || symbology.BARCODE_CODE128,
    foregroundColor: obj.foregroundColor || 'fff000',
    backgroundColor: obj.backgroundColor || '000000',
    fileName: obj.fileName || 'out.png',
    scale: obj.scale || 1.0,
    option1: obj.option1 || -1,
    option2: obj.option2 || -1,
    option3: obj.option3 || -1,
    show_hrt: obj.show_hrt || 1
    // input_mode: BINARY_MODE,
  };
}

var noop = function() {};

describe('the barnode library', function() {

  describe('the createFile function to create PNG files', function() {
    var filePath = 'testfile.png';

    it('should return a status code and a message', function() {
      return symbology
        .createFile(getSymbol({fileName: filePath}), '54321')
        .then(function(data) {
          expect(data.code).to.be.a('number');
          expect(data.message).to.be.a('string');
        });
    });

    it('should return a message and a nonzero status code when invalid', function() {
      return symbology
        .createFile(getSymbol({
            symbology: -1,
            fileName: filePath
          }), '12345')
          .then(noop, function(data) {
            expect(data.code).to.be.a('number');
            expect(data.code).to.not.equal(0);
            expect(data.message).to.not.be.null;
            expect(data.message).to.be.a('string');
            expect(data.message).to.have.length.at.least(1);
          });
    });
  });

  describe('the createFile function to create SVG files', function() {
    var filePath = 'testfile.svg';

    it('should return a zero status code and render an SVG file', function() {
      return symbology
        .createFile(getSymbol({fileName: filePath}), '54321', 'svg')
        .then(function(data) {
          expect(data.code).to.be.a('number');
          expect(data.message).to.be.a('string');
        });
    });

    it('should render an SVG file with valid XML data', function() {
      return symbology
        .createFile(getSymbol({fileName: filePath}), '54321', 'svg')
        .then(function(data) {
          expect(data.code).to.be.a('number');
          expect(data.message).to.be.a('string');
        });
    });
  });

  sinon.stub(barnode, 'createStream', createStream);

  describe('the createStream function for png data', function() {
    it('should return an object with status code and base64 png data', function() {
      return symbology
        .createStream(getSymbol(), '12345')
        .then(function(data) {
          expect(data.code).to.be.a('number');
          expect(data.message).to.be.a('string');
          expect(data.data).to.match(regex.base64);
        });
    });

    it('should not stream base64 png data if input is invalid', function() {
      return symbology
        .createStream(getSymbol({symbology: -1}), '12345')
        .then(function(data) {
          expect(data.code).to.be.a('number');
          expect(data.code).to.not.equal(0);
          expect(data.message).to.not.be.null;
          expect(data.message).to.have.length.at.least(1);
          expect(data.message).to.be.a('string');
          expect(data.data).to.be.undefined;
        });
    });
  });
});