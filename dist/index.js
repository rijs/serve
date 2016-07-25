'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = serve;

var _identity = require('utilise/identity');

var _identity2 = _interopRequireDefault(_identity);

var _client = require('utilise/client');

var _client2 = _interopRequireDefault(_client);

var _noop = require('utilise/noop');

var _noop2 = _interopRequireDefault(_noop);

var _send = require('utilise/send');

var _send2 = _interopRequireDefault(_send);

var _key = require('utilise/key');

var _key2 = _interopRequireDefault(_key);

var _path = require('path');

/* istanbul ignore next */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -------------------------------------------
// Serves the client library /ripple.js
// -------------------------------------------
function serve(ripple, opts) {
  log('creating');
  if (!opts) return ripple;
  var app = expressify(opts.server || opts),
      path = local(opts.serve || __dirname);

  app.use('/ripple.js', (0, _send2.default)(path('js')));
  app.use('/ripple.min.js', (0, _send2.default)(path('min.js')));
  app.use('/ripple.pure.js', (0, _send2.default)(path('pure.js')));
  app.use('/ripple.pure.min.js', (0, _send2.default)(path('pure.min.js')));
  return ripple;
}

var expressify = function expressify(server) {
  return (0, _key2.default)('_events.request')(server) || { use: _noop2.default };
};

var local = function local(path) {
  return function (ext) {
    return (0, _path.resolve)(path, './ripple.' + ext);
  };
};

var log = require('utilise/log')('[ri/serve]');