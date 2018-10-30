const fs = require('fs')
module.exports = function(filename){
  var text = fs.readFileSync(filename,'utf8')
console.log(text);
};
