module.exports = function(filename){
var path = require('path');
return path.extname(filename);
};

// exports.returnExtension = function(filename) {
//   var path = require('path');
//
//   return path.extname(filename);
// };
