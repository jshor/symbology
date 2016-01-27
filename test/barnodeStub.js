module.exports = {
  createStream: function() {
    var data = {
      code: 0,
      message: '',
      encodedData: [0, 0, 0],
      width: 1,
      height: 1
    };
    return data;
  }
};