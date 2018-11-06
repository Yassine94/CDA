const http = require('http');

let port = process.argv[2];
if (port == undefined ) {
  const port = 1335
   console.log('Default port 1335 has been used');

}



const server = http.createServer(function(req, res) {

 if (req.method === 'GET') {
   let url = req.url;
   let queryArgs = url.split('?')[1];
   let args = queryArgs.split('&');
   let counterArgs = args.length;
   var pair = null;

   console.log('My request dump:');
   console.log('GET ' + url);
   console.log('There are ' + counterArgs + ' query parameters');

args.forEach(function(d) {
   pair = d.split('=');
   console.log(pair[0] + ' : ' + pair[1]);

});
 }
 console.log('done');
 res.writeHead(200, {'content-type':'text/html'});
 res.end('done');
});
server.listen(port);
