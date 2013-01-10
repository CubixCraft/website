module.exports = require("http").createServer(function(req, res) {
  res.write(req.url);
  res.end();
});