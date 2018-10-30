// var cp = require('child_process');
//
// module.exports =  function(filename) {
//   cp.exec('ls -l'+, function(filename, stdout, stderr) {
//   if(!filename) {
//     console.log(stdout);
//     console.log(stderr);
//     // process the resulting string and check for permission
//   }
// });
// };

const fs = require('fs')
module.exports =  function(filename) {
  fs.stat(filename, function (err, stats) {
    if (err){
      throw err;
    } else if (stats.isFile()) {
      console.log('The argument ' + String(filename) + ' is a File');
    } else if (stats.isDirectory()) {
      console.log('The argument ' + String(filename) + ' is a Directory');
    } else if (stats.isBlockDevice()) {
      console.log('The argument ' + String(filename) + ' is a Block Device');
    } else if (stats.isCharacterDevice()) {
      console.log('The argument ' + String(filename) + ' is a Character Device');
    } else if (stats.isSymbolicLink()) {
      console.log('The argument ' + String(filename) + ' is a Symbolic Link');
    } else if (stats.isFIFO()) {
      console.log('The argument ' + String(filename) + ' is a FIFO');
    } else if (stats.isSocket()) {
      console.log('The argument ' + String(filename) + ' is a Socket');
    } else {
      console.log('The argument ' + String(filename) + ' is another unix things');
    }
  });
};
