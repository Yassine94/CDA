const port = process.argv[2]
const http = require('http');

if(port == undefined) throw (`usage node ${filename} <PORT>`)

const server = http.createServer(function(req, res){
   if (req.method === 'POST') {
     res.writeHead(200, {'Content-Type': 'text/html'});
     res.end('Heisenberg');
   }
   else{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1> Hello World!</h1>');
   }).listen(port, "127.0.0.1");
