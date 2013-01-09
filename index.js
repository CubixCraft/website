// module dependencies
var up = require("up")
  , uphook = require("uphook")
  , http = require("http") 
  , app = require("./app");

// redirect "cubixcraft.de" to "www.cubixcraft.de"
http.createServer(function(req, res) {
  res.writeHead(302, { "Location": "http://www.cubixcraft.de" + req.url });
}).listen("/tmp/http/cubixcraft.de");
