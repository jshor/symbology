var chai = require('chai');
var sinon = require('sinon');
var mocha = require('mocha');
var fs = require('fs');
var fixtures = require('./fixtures.json');
var library = require('../');
var regex = require('./helpers/regex');
var createSymbology = require('./helpers/createSymbologyStub');
var expect = chai.expect;
var binary = require('node-pre-gyp');
var path = require('path');
var binding_path = binary.find(path.resolve(path.join(__dirname,'../../package.json')));
var symbology = require(binding_path);

function getSymbol(obj) {
  obj = obj || {};
  return {
    symbology: obj.symbology || library.Barcode.CODE128,
    foregroundColor: obj.foregroundColor || 'fff000',
    backgroundColor: obj.backgroundColor || '000000',
    fileName: obj.fileName || 'out.bmp'
  };
}

var noop = function() {};

describe('the symbology library', function() {
  var sandbox;

  beforeEach(function() {
    sandbox = sinon.sandbox.create();
    sandbox.stub(fs, 'writeFileSync');
  });

  afterEach(function() {
    sandbox.restore();
  });

  describe('the createFile function to create PNG files', function() {
    var filePath = 'testfile.png';

    it('should return a status code and a message', function() {
      return library
        .createFile(getSymbol({fileName: filePath}), '54321')
        .then(function(data) {
          expect(data.code).to.be.a('number');
          expect(data.message).to.be.a('string');
        });
    });

    it('should return a message and a nonzero status code when invalid', function() {
      return library
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

    beforeEach(function() {
      sandbox.stub(symbology, 'createStream').callsFake(createSymbology);
    });

    it('should return a zero status code and render an SVG file', function() {
      return library
        .createFile(getSymbol({fileName: filePath}), '54321')
        .then(function(data) {
          expect(data.code).to.be.a('number');
          expect(data.message).to.be.a('string');
        });
    });

    it('should render an SVG file with valid XML data', function() {
      return library
        .createFile(getSymbol({fileName: filePath}), '54321')
        .then(function(data) {
          expect(data.code).to.be.a('number');
          expect(data.message).to.be.a('string');
        });
    });
  });

  describe('the createStream function for png data', function() {
    it('should return an object with status code and svg data', function() {
      return library
        .createStream(getSymbol(), '12345', library.Output.SVG)
        .then(function(data) {
          expect(data.code).to.be.a('number');
          expect(data.message).to.be.a('string');
        });
    });
  });

  describe('the createStream function for png data', function() {
    it('should return an object with status code and base64 png data', function() {
      return library
        .createStream(getSymbol(), '12345', library.Output.PNG)
        .then(function(data) {
          expect(data.code).to.be.a('number');
          expect(data.message).to.be.a('string');
          expect(data.data).to.match(regex.base64);
        });
    });

    it('should reject if input is invalid', function() {
      return library
        .createStream(getSymbol({symbology: -1}), '12345', library.Output.PNG)
        .catch(function(data) {
          expect(data.code).to.be.a('number');
          expect(data.code).to.not.equal(0);
          expect(data.message).to.not.be.null;
          expect(data.message).to.have.length.at.least(1);
          expect(data.message).to.be.a('string');
          expect(data.data).to.be.undefined;
        });
    });
  });

  describe('rendering SVG images', function() {
    it('should render a MaxiCode SVG image', function() {
      const maxicodeSvg = fs
        .readFileSync(path.join(__dirname, './maxicodeFixture.svg'))
        .toString()

      return library
        .createStream(getSymbol({
          symbology: library.Barcode.MAXICODE,
        }), '999999999840012', library.Output.SVG)
        .then(function(data) {
          expect(data.code).to.be.a('number');
          expect(data.message).to.be.a('string');
          expect(data.data.replace(/\s/g, '')).to.equal(maxicodeSvg.replace(/\s/g, ''));
        });
    });
  });

  describe('rendering PNG images', function() {
    it('should render a Code 128 PNG image', function() {
      return library
        .createStream(getSymbol({
          symbology: library.Barcode.CODE128
        }), '12345', library.Output.PNG)
        .then(function(data) {
          expect(data.code).to.be.a('number');
          expect(data.message).to.be.a('string');
          expect(data.data).to.equal(fixtures.code128Png);
        });
    });

    it('should render a QRCode PNG image', function() {
      return library
        .createStream(getSymbol({
          symbology: library.Barcode.QRCODE
        }), '12345', library.Output.PNG)
        .then(function(data) {
          expect(data.code).to.be.a('number');
          expect(data.message).to.be.a('string');
          expect(data.data).to.equal(fixtures.qrPng);
        });
    });
  })
});
