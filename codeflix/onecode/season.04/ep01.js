const http = require('http');
const url = require('url');
const rand = Math.floor(Math.random()*1000);
const hostname = "127.0.0.1";
let counter = 0 ;
let port = process.argv[2];

if (port == undefined ) {
  const port = 1335
   console.log('Default port 1335 has been used');
}

const server = http.createServer(function(req, res) {
  const q = url.parse(req.url,true);
      let query = q.query;

      let value = Object.values(query)
      let userValue = value[0]
      console.log(value[0]);
      console.log(rand);
  if (rand > userValue ) {
    console.log('Smaller')
    counter++
  }
  else if (rand == userValue) {
    console.log(`Well done! You have found in ${counter}`);
    counter++
  }
  else if (rand < userValue) {
    console.log('Bigger')
    counter++

  }
  else {
    console.log('User values is undefined');
    counter++
  }

 res.end('done');

});

server.listen(port, hostname, () => {
  console.log(`Server running at port : 1335`);
});
