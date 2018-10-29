module.exports = function() {
  var data = {
    code: 0,
    message: ''
  };
  if(arguments[1] > -1) {
    return {
      encodedData: [0, 0, 0],
      width: 1,
      height: 1,
      message: '',
      code: 0
    };
  } else {
    return {
      message: 'error: invalid file format',
      code: 6
    }
  }
  return data;
};
