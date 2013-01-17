module.exports = require("http").createServer(function(req, res) {
  res.write("LOL it works! " + req.url);
  res.end();
});
