var express = require("express");

var path = require("path");
const app = express();
const port = 8080; // ANy port as long as it's not a reserved port

app.listen(port, function() {
  console.log("Listening on port " + port);
}); // Fires up a server at localhost

app.use(express.static("./views/"));

app.get("/", function(req, res) {
  res.sendfile("/views/index.html");
});

app.get("/about", function(req, res) {
  res.sendfile(path.resolve(__dirname + "/views/about.html"));
});

app.get("*/contact", function(req, res) {
  res.sendfile(path.resolve(__dirname + "/views/contact.html"));
});

app.get("*/shop", function(req, res) {
  res.sendfile(path.resolve(__dirname + "/views/shop.html"));
});

app.get("*", function(req, res) {
  res.sendfile(path.resolve(__dirname + "/views/404.html"));
});

module.exports = app;
