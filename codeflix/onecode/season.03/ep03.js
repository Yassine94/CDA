const http = require('http')
const    fs = require('fs')
let port = 4242
if(process.argv[2]){
//  throw (`usage node <filename> <PORT>`)
  let port = process.argv[2]
}


fs.readFile('resources/index.html', function (err, html) {
    if (err) {
        throw err;
    }
    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(port);
});
