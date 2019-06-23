const symbology = require('./')

var Symbol = {
  symbology: symbology.Barcode.CODE128,
  foregroundColor: 'fff000',
  backgroundColor: '000000',
  fileName: './barcode.svg'
  };
  
  symbology
  .createStream(Symbol, '12345')
  .then(function(data) {
  console.log('Result: ', data);
  }, function(err) {
  console.log('Error: ', err);
  });