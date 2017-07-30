'use strict';

// -------------------------------------------
// Serves the client library /ripple.js
// -------------------------------------------
module.exports = function serve(ripple) {
  var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var server = _ref.server;
  var _ref$serve = _ref.serve;
  var serve = _ref$serve === undefined ? __dirname : _ref$serve;
  var _ref$client = _ref.client;
  var client = _ref$client === undefined ? 'ripple' : _ref$client;

  log('creating');
  server = ripple.server || server;
  if (!server) return ripple;
  var app = expressify(server),
      path = local(serve, client),
      compress = compression();

  app.use('/' + client + '.js', compress, send(path('js')));
  app.use('/' + client + '.min.js', compress, send(path('min.js')));
  app.use('/' + client + '.pure.js', compress, send(path('pure.js')));
  app.use('/' + client + '.pure.min.js', compress, send(path('pure.min.js')));
  return ripple;
};

var expressify = function expressify(server) {
  return server.express || key('_events.request')(server) || server.on('request', express())._events.request;
};

var local = function local(path, client) {
  return function (ext) {
    return resolve(path, './' + client + '.' + ext);
  };
};

var compression = require('compression');
var send = require('utilise/send');
var key = require('utilise/key');

var _require = require('path');

var resolve = _require.resolve;
var express = require('express');
var log = require('utilise/log')('[ri/serve]');