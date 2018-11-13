// calling modules
var express = require("express");
var bodyParser = require("body-parser");
var routes = require("route.js");
var app = express();

// Telling to express to accepte URL encoded & JSON values
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

// we define the port where the server should be running on
var server = app.listen(1337, function () {
    console.log("app running on port.", server.address().port);
});
