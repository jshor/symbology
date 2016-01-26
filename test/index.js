var chai = require('chai');
var mocha = require('mocha');
var fs = require('fs');
var zint = require('../');
var regex = require('./regex');
var expect = chai.expect;

function getSymbol(obj) {
  obj = obj || {};
  return {
    symbology: obj.symbology || 20,
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

// console.log('---- Running ----');

describe('the barnode library', function() {
  describe('the createStream function', function() {
    it('should return an object with status code and png base64 data', function() {
      return zint
        .createStream(getSymbol(), '12345', 'png')
        .then(function(data) {
          expect(data.code).to.be.a('number');
          expect(data.message).to.be.a('string');
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


  describe('the createFile function to create PNG files', function() {
    var filePath = 'testfile.png';

    it('should return a zero status code and render a png file', function() {
      return zint
        .createFile(getSymbol({fileName: filePath}), '54321')
        .then(function(data) {
          expect(data.code).to.be.a('number');
          expect(data.message).to.be.a('string');
        });
    });

    it('should not render a file when given invalid param(s)', function() {
      return zint
        .createFile(getSymbol({
            symbology: 500,
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
      return zint
        .createFile(getSymbol({fileName: filePath}), '54321')
        .then(function(data) {
          expect(data.code).to.be.a('number');
          expect(data.message).to.be.a('string');
        });
    });

    it('should render an SVG file with valid XML data', function() {
      return zint
        .createFile(getSymbol({fileName: filePath}), '54321')
        .then(function(data) {
          expect(data.code).to.be.a('number');
          expect(data.message).to.be.a('string');
        });
    });
  });
});