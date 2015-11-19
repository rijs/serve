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
function serve(opts) {
  log('creating');
  if (!opts) return;
  var app = expressify(opts.server || opts);
  app.use('/ripple.js', (0, _send2.default)(local('js')));
  app.use('/ripple.min.js', (0, _send2.default)(local('min.js')));
  app.use('/ripple.pure.js', (0, _send2.default)(local('pure.js')));
  app.use('/ripple.pure.min.js', (0, _send2.default)(local('pure.min.js')));
  return opts;
}

function expressify(d) {
  return (0, _key2.default)('_events.request')(d) || { use: _noop2.default };
}

function local(ext) {
  return (0, _path.resolve)(__dirname, './ripple.' + ext);
}

var log = require('utilise/log')('[ri/serve]');