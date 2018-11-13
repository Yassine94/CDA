
const http = require ('http');
const https = require ('https');
const url = require ('url')
let urlJson = 'https://www.reddit.com/r/perfectloops.json'
​
let port = process.argv[2];
​
if (port == undefined){
​
port = 4242
console.log(`Server is running at port ${port}`);
​
http.createServer(function (req, res) {
​
 const request = https.get(`https://www.reddit.com/r/perfectloops.json`, (response) => {
 let body = "";
 response.on('data', data => {
   //console.log('Reading Data');
   body += data.toString();
 });
 response.on('end', () => {
   let json = JSON.parse(body);
   let string = ""
   for(let i = 1; i < 11; i++) {
      let gifLink = json.data.children[i].data.url;
      // on transforme les gifv en gif pour les afficher correctemennt
      gifLink = gifLink.replace('.gifv','.gif')
      string += `<div>
                  <img src = "${gifUrl}" >
                 </div>`
      res.writeHeader(200, {"Content-Type": "text/html"});
   }
   res.write(string);
   res.end()
  });
 });
}).listen(port);
}
