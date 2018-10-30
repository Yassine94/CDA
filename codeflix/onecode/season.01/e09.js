const fs = require('fs')
  module.exports = function(file,file2){
      fs.chmodSync(file,file2, function (err){
        if (err) throw err;
        console.log('Rights changed successfully');
      });
    };
