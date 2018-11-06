const http = require('http');

const url = require('url')

const hostname = '127.0.0.1';


if (!process.argv[2]){
 port = 4242;
} else{
 port = process.argv[2];
}


const server = http.createServer((req, res) => {
 res.statusCode = 200;
 res.setHeader('Content-Type', 'text/html');

 console.log('Server is running at port ' + server.address().port);
 console.log('My request headers dump:');
 console.log('host : ' + req.headers.host);
 console.log('user-agent : ' + req.headers['user-agent']);
 console.log('accept : ' + '*/*');

 res.write("done");

 res.end();

});

server.listen(port, hostname, () => {
 console.log(`Server running at port ${port}`);
});
