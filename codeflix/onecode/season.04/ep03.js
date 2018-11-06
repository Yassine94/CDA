const http = require('http');
const url = require('url');
const hostname = "127.0.0.1";
var fs = require('fs');

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
      let data = JSON.stringify(userValue);
      fs.writeFileSync("history.json", data);

      console.log(userValue);

 res.end('done');

});

server.listen(port, hostname, () => {
  console.log(`Server running at port : 1335`);
});
