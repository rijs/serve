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
  app.use("/ripple.js", send(local("js")));
  app.use("/ripple.min.js", send(local("min.js")));
  app.use("/ripple.pure.js", send(local("pure.js")));
  app.use("/ripple.pure.min.js", send(local("pure.min.js")));
  return opts;
}

function expressify(d) {
  return key("_events.request")(d) || { use: noop };
}

function local(ext) {
  return resolve(require.resolve("rijs"), "../ripple." + ext);
}

var identity = _interopRequire(require("utilise/identity"));

var client = _interopRequire(require("utilise/client"));

var noop = _interopRequire(require("utilise/noop"));

var send = _interopRequire(require("utilise/send"));

var key = _interopRequire(require("utilise/key"));

var log = _interopRequire(require("utilise/log"));

var resolve = require("path").resolve;

log = log("[ri/serve]");