

const http = require('http');
const port = process.argv[2]
    http.createServer(function (req, res) {

      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('<h1>Hello World</h1>');
    }).listen(port, "127.0.0.1");
    console.log(`Server running at http://127.0.0.1:/${port}`);
    ;
