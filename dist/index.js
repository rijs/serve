"use strict";

/* istanbul ignore next */
var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

// -------------------------------------------
// Serves the client library /ripple.js
// -------------------------------------------
module.exports = serve;

function serve(opts) {
  log("creating");

  if (client) {
    return identity;
  }var app = expressify(opts.server || opts);
  app.use("/ripple.js", send("js"));
  app.use("/ripple.min.js", send("min.js"));
  app.use("/ripple.pure.js", send("pure.js"));
  app.use("/ripple.pure.min.js", send("pure.min.js"));
  return opts;
}

function expressify(d) {
  return key("_events.request")(d) || { use: noop };
}

function send(ext) {
  return function (req, res) {
    res.sendFile(path.resolve(__dirname, "../node_modules/ripple/dist/ripple." + ext));
  };
}

var identity = _interopRequire(require("utilise/identity"));

var client = _interopRequire(require("utilise/client"));

var noop = _interopRequire(require("utilise/noop"));

var key = _interopRequire(require("utilise/key"));

var log = _interopRequire(require("utilise/log"));

var path = _interopRequire(require("path"));

log = log("[ri/serve]");