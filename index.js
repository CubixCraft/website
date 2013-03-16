// module dependencies
var express = require("express")
  , io = require("socket.io")
  , stylus = require("stylus")
  , nib = require("nib")
  , http = require("http")
  , path = require("path");

// expose app and wire up socket.io
var app = express()
  , server = module.exports = http.createServer(app);
io.listen(server);

// configure app
app.configure(function() {
  // request limit
  app.use(express.limit("2mb"));

  // parsing stuff
  app.use(express.query());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser("i[Wlm*qSJ]&^1I3K#bZ]hLzf/vv;8ri]"));
  app.use(express.session());
  
  // Compress all the things!
  app.use(express.compress());

  // error handling
  app.use(express.errorHandler({ showStack: true, dumpExceptions: true }));
});

// mount a component to the main app
function mount(component) {
  app.use(require("./lib/" + component));
}

// load components
mount("statics");