(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = features;/* istanbul ignore next */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -------------------------------------------
// Extend Components with Features
// -------------------------------------------
function features(ripple) {
  if (!true) return;
  log('creating');
  ripple.render = render(ripple)(ripple.render);
  return ripple;
}

var render = function render(ripple) {
  return function (next) {
    return function (el) {
      var features = (0, str)((0, attr)(el, 'is')).split(' ').map((0, from)(ripple.resources)).filter((0, header)('content-type', 'application/javascript')),
          css = (0, str)((0, attr)('css')(el)).split(' ');

      features.filter((0, by)('headers.needs', (0, includes)('[css]'))).map((0, key)('name')).map((0, append)('.css')).filter((0, not)(is.in(css))).map(function (d) {
        return (0, attr)('css', ((0, str)((0, attr)('css')(el)) + ' ' + d).trim())(el);
      });

      var node = next(el);

      return !node || !node.state ? undefined : features.map((0, key)('body')).map(function (d) {
        return d.call(node, node.state);
      });
    };
  };
};

var log = window.log('[ri/features]');
},{}],2:[function(require,module,exports){
'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = needs;
/* istanbul ignore next */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -------------------------------------------
// Define Default Attributes for Components
// -------------------------------------------
function needs(ripple) {
  if (!true) return;
  log('creating');
  ripple.render = render(ripple)(ripple.render);
  return ripple;
}

var render = function render(ripple) {
  return function (next) {
    return function (el) {
      var component = (0, lo)(el.nodeName);
      if (!(component in ripple.resources)) return;

      var headers = ripple.resources[component].headers,
          attrs = headers.attrs = headers.attrs || parse(headers.needs, component);

      return attrs.map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2);

        var name = _ref2[0];
        var values = _ref2[1];

        return values.some(function (v, i) {
          var from = (0, attr)(el, name) || '';
          return (0, includes)(v)(from) ? false : (0, attr)(el, name, (from + ' ' + v).trim());
        });
      }).some(Boolean) ? el.draw() : next(el);
    };
  };
};

var parse = function parse() {
  var attrs = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
  var component = arguments[1];
  return attrs.split('[').slice(1).map((0, replace)(']', '')).map((0, split)('=')).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2);

    var k = _ref4[0];
    var v = _ref4[1];
    return v ? [k, v.split(' ')] : k == 'css' ? [k, [component + '.css']] : [k, []];
  });
};

var log = window.log('[ri/needs]'),
    err = window.err('[ri/needs]');
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = create;

var _rijs = require('rijs.backpressure');

var _rijs2 = _interopRequireDefault(_rijs);

var _rijs3 = require('rijs.components');

var _rijs4 = _interopRequireDefault(_rijs3);

var _rijs5 = require('rijs.singleton');

var _rijs6 = _interopRequireDefault(_rijs5);

var _rijs7 = require('rijs.sessions');

var _rijs8 = _interopRequireDefault(_rijs7);

var _rijs9 = require('rijs.reactive');

var _rijs10 = _interopRequireDefault(_rijs9);

var _rijs11 = require('rijs.features');

var _rijs12 = _interopRequireDefault(_rijs11);

var _rijs13 = require('rijs.prehtml');

var _rijs14 = _interopRequireDefault(_rijs13);

var _rijs15 = require('rijs.offline');

var _rijs16 = _interopRequireDefault(_rijs15);

var _rijs17 = require('rijs.helpers');

var _rijs18 = _interopRequireDefault(_rijs17);

var _rijs19 = require('rijs.precss');

var _rijs20 = _interopRequireDefault(_rijs19);

var _rijs21 = require('rijs.shadow');

var _rijs22 = _interopRequireDefault(_rijs21);

var _rijs23 = require('rijs.resdir');

var _rijs24 = _interopRequireDefault(_rijs23);

var _rijs25 = require('rijs.mysql');

var _rijs26 = _interopRequireDefault(_rijs25);

var _rijs27 = require('rijs.serve');

var _rijs28 = _interopRequireDefault(_rijs27);

var _rijs29 = require('rijs.delay');

var _rijs30 = _interopRequireDefault(_rijs29);

var _rijs31 = require('rijs.needs');

var _rijs32 = _interopRequireDefault(_rijs31);

var _rijs33 = require('rijs.sync');

var _rijs34 = _interopRequireDefault(_rijs33);

var _rijs35 = require('rijs.core');

var _rijs36 = _interopRequireDefault(_rijs35);

var _rijs37 = require('rijs.data');

var _rijs38 = _interopRequireDefault(_rijs37);

var _rijs39 = require('rijs.html');

var _rijs40 = _interopRequireDefault(_rijs39);

var _rijs41 = require('rijs.css');

var _rijs42 = _interopRequireDefault(_rijs41);

var _rijs43 = require('rijs.fn');

var _rijs44 = _interopRequireDefault(_rijs43);

var _rijs45 = require('rijs.db');

var _rijs46 = _interopRequireDefault(_rijs45);
/* istanbul ignore next */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

true && !window.ripple && create();

function create(opts) {
  var ripple = (0, _rijs36.default)(); // empty base collection of resources

  // enrich..
  (0, _rijs6.default)(ripple); // exposes a single instance
  (0, _rijs38.default)(ripple); // register data types
  (0, _rijs40.default)(ripple); // register html types
  (0, _rijs42.default)(ripple); // register css types
  (0, _rijs44.default)(ripple); // register fn types
  (0, _rijs18.default)(ripple); // expose helper functions and constants
  (0, _rijs26.default)(ripple); // adds mysql adaptor crud hooks
  (0, _rijs46.default)(ripple, opts); // enable external connections
  (0, _rijs4.default)(ripple); // invoke web components, fn.call(<el>, data)
  (0, _rijs12.default)(ripple); // extend components with features
  (0, _rijs32.default)(ripple); // define default attrs for components
  (0, _rijs10.default)(ripple); // react to changes in resources
  (0, _rijs20.default)(ripple); // preapplies scoped css
  (0, _rijs14.default)(ripple); // preapplies html templates
  (0, _rijs22.default)(ripple); // encapsulates with shadow dom or closes gap
  (0, _rijs30.default)(ripple); // async rendering delay
  (0, _rijs28.default)(opts); // serve true libraries
  (0, _rijs34.default)(ripple, opts); // syncs resources between server/true
  (0, _rijs2.default)(ripple); // restricts broadcast to trues based on need
  (0, _rijs8.default)(ripple, opts); // populates sessionid on each connection
  (0, _rijs16.default)(ripple); // loads/saves from/to localstorage
  (0, _rijs24.default)(ripple, opts); // loads from resources folder

  return ripple;
}
},{"rijs.backpressure":6,"rijs.components":7,"rijs.core":10,"rijs.css":12,"rijs.data":13,"rijs.db":5,"rijs.delay":14,"rijs.features":1,"rijs.fn":15,"rijs.helpers":16,"rijs.html":17,"rijs.mysql":5,"rijs.needs":2,"rijs.offline":18,"rijs.precss":19,"rijs.prehtml":21,"rijs.reactive":22,"rijs.resdir":5,"rijs.serve":5,"rijs.sessions":5,"rijs.shadow":23,"rijs.singleton":24,"rijs.sync":25}],4:[function(require,module,exports){

},{}],5:[function(require,module,exports){
module.exports = function identity(d) {
  return d
}
},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = backpressure;function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -------------------------------------------
// API: Applies backpressure on the flow of streams
// -------------------------------------------
function backpressure(ripple) {
  log('creating');

  if (!ripple.io) return ripple;
  if (true) return ripple.draw = draw(ripple)(ripple.draw), ripple.render = loaded(ripple)(ripple.render), ripple.deps = deps, start(ripple);

  (0, values)(ripple.types).map(function (type) {
    return type.to = (0, proxy)(type.to, limit);
  });
  (0, values)(ripple.types).map(function (type) {
    return type.from = (0, proxy)(type.from, track(ripple));
  });
  ripple.io.use(function (socket, next) {
    socket.deps = {}, next();
  });
  return ripple;
}

function draw(ripple) {
  var refresh = function refresh(d) {
    return (0, all)(':unresolved').filter((0, not)((0, key)('requested'))).map((0, key)('requested', true)).map(ripple.draw);
  };

  return function (next) {
    return function (thing) {
      var everything = !thing && (!this || !this.nodeName && !this.node),
          ret = next.apply(this, arguments);
      if (shadows || customs && everything) raf(refresh);
      return ret;
    };
  };
}

function start(ripple) {
  load(ripple);
  ready(ripple.draw);
  if (customs) ready(polytop(ripple));else ready(function (d) {
    return (0, all)('*').filter((0, by)('nodeName', (0, includes)('-'))).map(ripple.draw);
  });
  return ripple;
}

function polytop(ripple) {
  var muto = new MutationObserver(drawNodes(ripple));
  return function (d) {
    return muto.observe(document.body, { childList: true, subtree: true });
  };
}

function drawNodes(ripple) {
  return function (mutations) {
    return mutations.map((0, key)('addedNodes')).map(to.arr).reduce(flatten, []).filter((0, by)('nodeName', (0, includes)('-'))).map(ripple.draw);
  };
}

function track(ripple) {
  return function (_ref) {
    var name = _ref.name;
    var body = _ref.body;
    var headers = _ref.headers;

    var exists = name in this.deps;
    this.deps[name] = 1;
    if (!exists) ripple.sync(this)(name);
    return !headers.pull;
  };
}

function load(ripple) {
  (0, group)('pulling cache', function (fn) {
    return ((0, parse)(localStorage.ripple) || []).map(function (_ref2) {
      var name = _ref2.name;
      return log(name);
    }).map(function (name) {
      return ripple.io.emit('change', { name: name, headers: headers });
    });
  });
}

function untrack(ripple) {
  return function (names) {
    delete this[name];
  };
}

function limit(res) {
  return res.name in this.deps ? res : false;
}

function deps(el) {
  return format([(0, key)('nodeName'), (0, attr)('data'), (0, attr)('css')])(el);
}

function format(arr) {
  return function (el) {
    return arr.map(function (fn) {
      return fn(el);
    }).filter(Boolean).map(lo).map((0, split)(' ')).reduce(flatten, []).filter(unique);
  };
}

function loaded(ripple) {
  return function (render) {
    return function (el) {
      var deps = ripple.deps(el);

      return deps.filter((0, not)(is.in(ripple.resources))).map(function (name) {
        return debug('pulling', name), name;
      }).map(function (name) {
        return ripple.io.emit('change', { name: name, headers: headers });
      }).length ? false : render(el);
    };
  };
}

function ready(fn) {
  return document.body ? fn() : document.addEventListener('DOMContentLoaded', function (d) {
    return fn();
  });
}

var log = window.log('[ri/backpressure]'),
    err = window.err('[ri/backpressure]'),
    shadows = true && !!document.head.createShadowRoot,
    customs = true && !!document.registerElement,
    raf = true && requestAnimationFrame,
    pull = true,
    headers = { 'content-type': 'text/plain', pull: pull },
    debug = noop;
},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = components;

var _data = require('./types/data');

var _data2 = _interopRequireDefault(_data);

var _fn = require('./types/fn');

var _fn2 = _interopRequireDefault(_fn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -------------------------------------------
// API: Renders specific nodes, resources or everything
// -------------------------------------------
// ripple.draw()                 - redraw all components on page
// ripple.draw(element)          - redraw specific element
// ripple.draw.call(element)     - redraw specific element
// ripple.draw.call(selection)   - redraw D3 selection
// ripple.draw('name')           - redraw elements that depend on resource
// ripple.draw({ ... })          - redraw elements that depend on resource
// MutationObserver(ripple.draw) - redraws element being observed

function components(ripple) {
  if (!true) return ripple;
  log('creating');

  if (!customs) (0, ready)(polyfill(ripple));
  (0, values)(ripple.types).map(function (type) {
    return type.parse = (0, proxy)(type.parse, clean(ripple));
  });
  (0, key)('types.application/javascript.render', (0, wrap)((0, _fn2.default)(ripple)))(ripple);
  (0, key)('types.application/data.render', (0, wrap)((0, _data2.default)(ripple)))(ripple);
  ripple.draw = draw(ripple);
  ripple.render = render(ripple);
  ripple.on('change', ripple.draw);
  return ripple;
}

// public draw api
function draw(ripple) {
  return function (thing) {
    return this && this.nodeName ? invoke(ripple)(this) : this && this.node ? invoke(ripple)(this.node()) : !thing ? everything(ripple) : thing instanceof mutation ? invoke(ripple)(thing.target) : thing[0] instanceof mutation ? invoke(ripple)(thing[0].target) : thing.nodeName ? invoke(ripple)(thing) : thing.node ? invoke(ripple)(thing.node()) : thing.name ? resource(ripple)(thing.name) : is.str(thing) ? resource(ripple)(thing) : err('could not update', thing);
  };
}

// render all components
function everything(ripple) {
  var selector = (0, values)(ripple.resources).filter((0, header)('content-type', 'application/javascript')).map((0, key)('name')).join(',');

  return !selector ? [] : (0, all)(selector).map(invoke(ripple));
}

// render all elements that depend on the resource
function resource(ripple) {
  return function (name) {
    var res = ripple.resources[name],
        type = (0, header)('content-type')(res);

    return (ripple.types[type].render || noop)(res);
  };
}

// batch renders on render frames
function batch(ripple) {
  return function (el) {
    return !el.pending && (el.pending = requestAnimationFrame(function (d) {
      return delete el.pending, ripple.render(el);
    }));
  };
}

// main function to render a particular custom element with any data it needs
function invoke(ripple) {
  return function (el) {
    if (el.nodeName == '#document-fragment') return invoke(ripple)(el.host);
    if (el.nodeName == '#text') return invoke(ripple)(el.parentNode);
    if (!el.matches(isAttached)) return;
    if ((0, attr)(el, 'inert') != null) return;
    if (!el.on) (0, emitterify)(el);
    if (!el.draw) el.draw = function (d) {
      return ripple.draw(el);
    };
    return batch(ripple)(el), el;
  };
}

function render(ripple) {
  return function (el) {
    var name = (0, lo)(el.tagName),
        deps = (0, attr)(el, 'data'),
        fn = (0, body)(ripple)(name),
        data = bodies(ripple)(deps);

    if (!fn) return el;
    if (deps && !data) return el;

    try {
      fn.call(el.shadowRoot || el, defaults(el, data));
    } catch (e) {
      err(e, e.stack);
    }

    return el;
  };
}

// polyfill
function polyfill(ripple) {
  return function (d) {
    if (typeof MutationObserver == 'undefined') return;
    if (document.body.muto) document.body.muto.disconnect();
    var muto = document.body.muto = new MutationObserver(drawCustomEls(ripple)),
        conf = { childList: true, subtree: true };

    muto.observe(document.body, conf);
  };
}

// clean local headers for transport
function clean(ripple) {
  return function (res) {
    delete res.headers.pending;
    return res;
  };
}

// helpers
function defaults(el, data) {
  el.state = el.state || {};
  overwrite(el.state)(data);
  overwrite(el.state)(el.__data__);
  el.__data__ = el.state;
  return el.state;
}

function overwrite(to) {
  return function (from) {
    return is.obj(from) && (0, keys)(from).map((0, copy)(from, to));
  };
}

function onlyIfDifferent(m) {
  return (0, attr)(m.target, m.attributeName) != m.oldValue;
}

function drawCustomEls(ripple) {
  return function (mutations) {
    return mutations.map((0, key)('addedNodes')).map(to.arr).reduce(flatten).filter((0, by)('nodeName', (0, includes)('-'))).map(ripple.draw) | 0;
  };
}

function bodies(ripple) {
  return function (deps) {
    var o = {},
        names = deps ? deps.split(' ') : [];

    names.map(function (d) {
      return o[d] = (0, body)(ripple)(d);
    });

    return !names.length ? undefined : (0, values)(o).some(is.falsy) ? undefined : o;
  };
}

var log = window.log('[ri/components]'),
    err = window.err('[ri/components]'),
    mutation = true && window.MutationRecord || noop,
    customs = true && !!document.registerElement,
    isAttached = customs ? 'html *, :host-context(html) *' : 'html *';
true && (Element.prototype.matches = Element.prototype.matches || Element.prototype.msMatchesSelector);
},{"./types/data":8,"./types/fn":9}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = data;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// render all elements that require the specified data
function data(ripple) {
  return function (res) {
    return (0, all)('[data~="' + res.name + '"]:not([inert])').map(ripple.draw);
  };
}
},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fn;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// register custom element prototype (render is automatic)
function fn(ripple) {
  return function (res) {
    if (!customs || !customEl(res) || registered(res)) return (0, all)(res.name + ':not([inert])\n                 ,[is="' + res.name + '"]:not([inert])').map(ripple.draw);

    var proto = Object.create(HTMLElement.prototype),
        opts = { prototype: proto },
        extend = res.headers['extends'];

    extend && (opts.extends = extend);
    proto.attachedCallback = ripple.draw;
    document.registerElement(res.name, opts);
  };
}

function registered(res) {
  var extend = (0, header)('extends')(res);

  return extend ? document.createElement(extend, res.name).attachedCallback : document.createElement(res.name).attachedCallback;
}

var customs = true && !!document.registerElement,
    customEl = function customEl(d) {
  return (0, includes)('-')(d.name);
};
},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = core;

var _text = require('./types/text');

var _text2 = _interopRequireDefault(_text);

/* istanbul ignore next */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -------------------------------------------
// API: Gets or sets a resource
// -------------------------------------------
// ripple('name')     - returns the resource body if it exists
// ripple('name')     - creates & returns resource if it doesn't exist
// ripple('name', {}) - creates & returns resource, with specified name and body
// ripple({ ... })    - creates & returns resource, with specified name, body and headers
// ripple.resources   - returns raw resources
// ripple.resource    - alias for ripple, returns ripple instead of resource for method chaining
// ripple.register    - alias for ripple
// ripple.on          - event listener for changes - all resources
// ripple('name').on  - event listener for changes - resource-specific

function core() {
  log('creating');

  var resources = {};
  ripple.resources = resources;
  ripple.resource = (0, chainable)(ripple);
  ripple.register = ripple;
  ripple.types = types();
  return (0, emitterify)(ripple);

  function ripple(name, body, headers) {
    return !name ? ripple : is.arr(name) ? name.map(ripple) : is.obj(name) && !name.name ? ripple : is.fn(name) && name.resources ? ripple((0, values)(name.resources)) : is.str(name) && !body && resources[name] ? resources[name].body : is.str(name) && !body && !resources[name] ? register(ripple)({ name: name }) : is.str(name) && body ? register(ripple)({ name: name, body: body, headers: headers }) : is.obj(name) && !is.arr(name) ? register(ripple)(name) : (err('could not find or create resource', name), false);
  }
}

var register = function register(ripple) {
  return function (_ref) {
    var name = _ref.name;
    var body = _ref.body;
    var _ref$headers = _ref.headers;
    var headers = _ref$headers === undefined ? {} : _ref$headers;

    log('registering', name);
    var res = normalise(ripple)({ name: name, body: body, headers: headers }),
        type = !ripple.resources[name] ? 'load' : '';

    if (!res) return err('failed to register', name), false;
    ripple.resources[name] = res;
    ripple.emit('change', [ripple.resources[name], { type: type }]);
    return ripple.resources[name].body;
  };
};

var normalise = function normalise(ripple) {
  return function (res) {
    if (!(0, header)('content-type')(res)) (0, values)(ripple.types).sort((0, za)('priority')).some(contentType(res));
    if (!(0, header)('content-type')(res)) return err('could not understand resource', res), false;
    return parse(ripple)(res);
  };
};

var parse = function parse(ripple) {
  return function (res) {
    var type = (0, header)('content-type')(res);
    if (!ripple.types[type]) return err('could not understand type', type), false;
    return (ripple.types[type].parse || identity)(res);
  };
};

var contentType = function contentType(res) {
  return function (type) {
    return type.check(res) && (res.headers['content-type'] = type.header);
  };
};

var types = function types() {
  return [_text2.default].reduce(to.obj('header'), 1);
};

var err = window.err('[ri/core]'),
    log = window.log('[ri/core]');
},{"./types/text":11}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});/* istanbul ignore next */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  header: 'text/plain',
  check: function check(res) {
    return !(0, includes)('.html')(res.name) && !(0, includes)('.css')(res.name) && is.str(res.body);
  }
};
},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = css;
/* istanbul ignore next */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -------------------------------------------
// Exposes a convenient global instance
// -------------------------------------------
function css(ripple) {
  log('creating');
  ripple.types['text/css'] = {
    header: 'text/css',
    check: function check(res) {
      return (0, includes)('.css')(res.name);
    }
  };

  return ripple;
}

var log = window.log('[ri/types/css]');
},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = data;

/* istanbul ignore next */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -------------------------------------------
// Adds support for data resources
// -------------------------------------------
function data(ripple) {
  log('creating');
  ripple.on('change.data', trickle(ripple));
  ripple.types['application/data'] = {
    header: 'application/data',
    check: function check(res) {
      return is.obj(res.body) || !res.body ? true : false;
    },
    parse: function parse(res) {
      var existing = ripple.resources[res.name] || {};
      delete res.headers.listeners;
      (0, extend)(res.headers)(existing.headers);

      !res.body && (res.body = []);
      !res.body.on && (res.body = (0, emitterify)(res.body));
      res.body.on.change = res.headers.listeners = res.headers.listeners || [];
      res.body.on('change.bubble', function () {
        return ripple.emit('change', [res], (0, not)(is.in(['data'])));
      });

      return res;
    }
  };

  return ripple;
}

function trickle(ripple) {
  return function (res) {
    var args = [arguments[0].body, arguments[1]];
    return (0, header)('content-type', 'application/data')(res) && ripple.resources[res.name].body.emit('change', to.arr(args), (0, not)(is.in(['bubble'])));
  };
}

var log = window.log('[ri/types/data]');
},{}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = delay;function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -------------------------------------------
// API: Delays the rendering of a component [delay=ms]
// -------------------------------------------
function delay(ripple) {
  if (!true) return ripple;
  log('creating');
  ripple.render = render(ripple.render);
  return ripple;
}

var render = function render(next) {
  return function (el) {
    var delay = (0, attr)('delay')(el);
    delay != null ? ((0, attr)('inert', '')(el), (0, attr)('delay', false)(el), time(+delay, function (d) {
      return (0, attr)('inert', false)(el), el.draw();
    })) : next(el);
  };
};

var log = window.log('[ri/delay]'),
    err = window.err('[ri/delay]');
},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fnc;/* istanbul ignore next */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -------------------------------------------
// Adds support for function resources
// -------------------------------------------
function fnc(ripple) {
  log('creating');
  ripple.types['application/javascript'] = { header: header, check: check, parse: parse };
  return ripple;
}

var header = 'application/javascript';

var check = function check(res) {
  return is.fn(res.body);
};

var parse = function parse(res) {
  return res.body = (0, fn)(res.body), res;
};

var log = window.log('[ri/types/fn]');
},{}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = helpers;/* istanbul ignore next */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -------------------------------------------
// Attach Helper Functions for Resources
// -------------------------------------------
function helpers(ripple) {
  log('creating');

  (0, values)(ripple.types).filter((0, by)('header', 'application/data')).filter(function (type) {
    return type.parse = (0, proxy)(type.parse, attach);
  }).filter(function (type) {
    return type.to = (0, proxy)(type.to, serialise);
  });

  return ripple;
}

function attach(res) {
  var helpers = res.headers.helpers;

  (0, keys)(helpers).map(function (name) {
    return helpers[name] = (0, fn)(helpers[name]), name;
  }).map(function (name) {
    return (0, def)(res.body, name, helpers[name]);
  });

  return res;
}

function serialise(res) {
  var helpers = res.headers.helpers;

  (0, keys)(helpers).filter(function (name) {
    return is.fn(helpers[name]);
  }).map(function (name) {
    return helpers[name] = (0, str)(helpers[name]);
  });

  return res;
}

var log = window.log('[ri/helpers]');
},{}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = html;
/* istanbul ignore next */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -------------------------------------------
// Exposes a convenient global instance
// -------------------------------------------
function html(ripple) {
  log('creating');
  ripple.types['text/html'] = {
    header: 'text/html',
    check: function check(res) {
      return (0, includes)('.html')(res.name);
    }
  };

  return ripple;
}

var log = window.log('[ri/types/html]');
},{}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = offline;

/* istanbul ignore next */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -------------------------------------------
// API: Pre-applies Scoped CSS [css=name]
// -------------------------------------------
function offline(ripple) {
  if (!true || !window.localStorage) return;
  log('creating');
  load(ripple);
  ripple.on('change.cache', (0, debounce)(1000)(cache(ripple)));
  return ripple;
}

function load(ripple) {
  (0, group)('loading cache', function () {
    ((0, parse)(localStorage.ripple) || []).forEach(silent(ripple));
  });
}

function cache(ripple) {
  return function (res) {
    log('cached');
    var cachable = (0, values)((0, clone)(ripple.resources)).filter((0, not)((0, header)('cache-control', 'no-store')));

    cachable.filter((0, header)('content-type', 'application/javascript')).map(function (d) {
      return d.body = (0, str)(ripple.resources[d.name].body);
    });

    localStorage.ripple = (0, str)(cachable);
  };
}

function silent(ripple) {
  return function (res) {
    return res.headers.silent = true, ripple(res);
  };
}

var log = window.log('[ri/offline]'),
    err = window.err('[ri/offline]');
},{}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = precss;var _cssscope = require('cssscope');

var _cssscope2 = _interopRequireDefault(_cssscope);

/* istanbul ignore next */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -------------------------------------------
// API: Pre-applies Scoped CSS [css=name]
// -------------------------------------------
function precss(ripple) {
  if (!true) return;
  log('creating');

  ripple.render = render(ripple)(ripple.render);

  (0, values)(ripple.types).filter((0, by)('header', 'text/css')).map(function (type) {
    return type.render = (0, proxy)(type.render, css(ripple));
  });

  return ripple;
}

var render = function render(ripple) {
  return function (next) {
    return function (host) {
      var css = (0, str)((0, attr)(host, 'css')).split(' ').filter(Boolean),
          root = host.shadowRoot || host,
          head = document.head,
          shadow = head.createShadowRoot && host.shadowRoot,
          styles;

      // this host does not have a css dep, continue with rest of rendering pipeline
      if (!css.length) return next(host);

      // this host has a css dep, but it is not loaded yet - stop rendering this host
      if (css.some((0, not)(is.in(ripple.resources)))) return;

      // retrieve styles
      styles = css.map((0, from)(ripple.resources)).map((0, key)('body')).map(shadow ? identity : transform(css));

      // reuse or create style tag
      css.map(function (d) {
        return (0, raw)('style[resource="' + d + '"]', shadow ? root : head) || (0, el)('style[resource=' + d + ']');
      }).map((0, key)('innerHTML', function (d, i) {
        return styles[i];
      })).filter((0, not)((0, by)('parentNode'))).map(function (d) {
        return shadow ? root.insertBefore(d, root.firstChild) : head.appendChild(d);
      });

      // continue with rest of the rendering pipeline
      return next(host);
    };
  };
};

var transform = function transform(names) {
  return function (styles, i) {
    return (0, _cssscope2.default)(styles, '[css~="' + names[i] + '"]');
  };
};

var css = function css(ripple) {
  return function (res) {
    return (0, all)('[css~="' + res.name + '"]:not([inert])').map(ripple.draw);
  };
};

var log = window.log('[ri/precss]'),
    err = window.err('[ri/precss]');
},{"cssscope":20}],20:[function(require,module,exports){
module.exports = function scope(styles, prefix) {
  return styles
    .replace(/^(?!.*:host)([^@%\n]*){/gim, function($1){ return prefix+' '+$1 })       // ... {                 -> tag ... {
    .replace(/^(?!.*:host)(.*?),\s*$/gim, function($1){ return prefix+' '+$1 })        // ... ,                 -> tag ... ,
    .replace(/:host\((.*?)\)/gi, function($1, $2){ return prefix+$2 })                 // :host(...)            -> tag...
    .replace(/:host /gi, prefix + ' ')                                                 // :host ...             -> tag ...
    .replace(/^.*:host-context\((.*)\)/gim, function($1, $2){ return $2+' ' +prefix }) // ... :host-context(..) -> ... tag..
}
},{}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prehtml;/* istanbul ignore next */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -------------------------------------------
// API: Pre-applies HTML Templates [template=name]
// -------------------------------------------
function prehtml(ripple) {
  if (!true) return;
  log('creating');

  var render = ripple.render;

  (0, key)('types.text/html.render', (0, wrap)(html(ripple)))(ripple);

  ripple.render = function (el) {
    var div,
        html = (0, attr)(el, 'template');
    if (!html) return render.apply(this, arguments);
    if (html && !ripple(html)) return;
    div = document.createElement('div');
    div.innerHTML = ripple(html);(el.shadowRoot || el).innerHTML = div.innerHTML;
    return render(el);
  };

  return ripple;
}

function html(ripple) {
  return function (res) {
    return (0, all)('[template="' + res.name + '"]:not([inert])').map(ripple.draw);
  };
}

var log = window.log('[ri/prehtml]'),
    err = window.err('[ri/prehtml]');
},{}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reactive;
/* istanbul ignore next */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -------------------------------------------
// API: React to data changes - deprecates explicit .emit('change')
// -------------------------------------------
function reactive(ripple) {
  log('creating');
  ripple.on('change.reactive', react(ripple));
  return ripple;
}

function react(ripple) {
  return function (res) {
    if (!is.obj(res.body)) return;
    if ((0, header)('reactive', false)(res)) return;
    if (res.body.observer) return;
    if (!Object.observe) return polyfill(ripple)(res);

    Array.observe(res.body, (0, def)(res.body, 'observer', changed(ripple)(res)));

    is.arr(res.body) && res.body.forEach(observe(ripple)(res));
  };
}

function observe(ripple) {
  return function (res) {
    return function (d) {
      if (!is.obj(d)) return;
      if (d.observer) return;
      var fn = child(ripple)(res);
      (0, def)(d, 'observer', fn);
      Object.observe(d, fn);
    };
  };
}

function child(ripple) {
  return function (res) {
    return function (changes) {
      var key = res.body.indexOf(changes[0].object),
          value = res.body[key],
          type = 'update',
          change = { key: key, value: value, type: type };

      log('changed (c)'.green, res.name.bold, (0, str)(key).grey, debug ? changes : '');
      ripple.emit('change', [res, change], (0, not)(is.in(['reactive'])));
    };
  };
}

function changed(ripple) {
  return function (res) {
    return function (changes) {
      changes.map(normalize).filter(Boolean).map(function (change) {
        return log('changed (p)'.green, res.name.bold, change.key.grey), change;
      }).map(function (change) {
        return is.arr(res.body) && change.type == 'push' && observe(ripple)(res)(change.value), change;
      }).map(function (change) {
        return ripple.emit('change', [res, change], (0, not)(is.in(['reactive'])));
      });
    };
  };
}

function polyfill(ripple) {
  return function (res) {
    if (!ripple.observer) ripple.observer = setInterval(check(ripple), 100);
    if (!ripple.cache) ripple.cache = {};
    ripple.cache[res.name] = (0, str)(res.body);
  };
}

function check(ripple) {
  return function () {
    if (!ripple || !ripple.resources) return clearInterval(ripple.observer);
    (0, keys)(ripple.cache).forEach(function (name) {
      var res = ripple.resources[name];
      if (ripple.cache[name] != (0, str)(res.body)) {
        log('changed (x)', name);
        ripple.cache[name] = (0, str)(res.body);
        ripple.emit('change', [res], (0, not)(is.in(['reactive'])));
      }
    });
  };
}

// normalize a change
function normalize(change) {
  var type = change.type,
      removed = type == 'delete' ? change.oldValue : change.removed && change.removed[0],
      data = change.object,
      key = change.name || (0, str)(change.index),
      value = data[key],
      skip = type == 'update' && (0, str)(value) == (0, str)(change.oldValue),
      details = {
    key: key,
    value: removed || value,
    type: type == 'update' ? 'update' : type == 'delete' ? 'remove' : type == 'splice' && removed ? 'remove' : type == 'splice' && !removed ? 'push' : type == 'add' ? 'push' : false
  };

  if (skip) return log('skipping update'), false;
  return details;
}

var log = window.log('[ri/reactive]'),
    err = window.err('[ri/reactive]'),
    debug = false;
},{}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shadow;
/* istanbul ignore next */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -------------------------------------------
// API: Mixes Shadow DOM Encapsulation into rendering pipeline
// -------------------------------------------
function shadow(ripple) {
  if (!true) return;
  log('creating', document.head.createShadowRoot ? 'encapsulation' : 'closing gap');
  ripple.render = render(ripple.render);
  return ripple;
}

var render = function render(next) {
  return function (el) {
    el.createShadowRoot ? !el.shadowRoot && el.createShadowRoot() && (reflect(el), retarget(el)) : (el.shadowRoot = el, el.shadowRoot.host = el);

    return after(next(el));
  };
};

var reflect = function reflect(el) {
  return el.shadowRoot.innerHTML = el.innerHTML;
};

var retarget = function retarget(el) {
  return keys(el).concat(['on', 'once', 'emit', 'classList', 'getAttribute', 'setAttribute']).map(function (d) {
    return el.shadowRoot[d] = is.fn(el[d]) ? el[d].bind(el) : el[d];
  });
};

var after = function after(el) {
  return keys(el).map(function (d) {
    return el.shadowRoot[d] = el[d];
  });
};

var log = window.log('[ri/shadow]'),
    err = window.err('[ri/shadow]');
},{}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = singleton;
/* istanbul ignore next */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -------------------------------------------
// Exposes a convenient global instance
// -------------------------------------------
function singleton(ripple) {
  log('creating');
  if (!owner.ripple) owner.ripple = ripple;
  return ripple;
}

var log = window.log('[ri/singleton]');
},{}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sync;var _jsondiffpatch = require('jsondiffpatch');

/* istanbul ignore next */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -------------------------------------------
// API: Synchronises resources between server/true
// -------------------------------------------
function sync(ripple, server) {
  log('creating');

  if (!true && !server) return;
  (0, values)(ripple.types).map(headers(ripple));
  ripple.sync = emit(ripple);
  ripple.io = io(server);
  ripple.on('change', function (res) {
    return emit(ripple)()(res.name);
  });
  ripple.io.on('change', silent(ripple));
  ripple.io.on('connection', function (s) {
    return s.on('change', change(ripple));
  });
  ripple.io.on('connection', function (s) {
    return emit(ripple)(s)();
  });
  ripple.io.use(setIP);
  return ripple;
}

function change(ripple) {
  return function (req) {
    log('receiving', req.name);

    var socket = this,
        res = ripple.resources[req.name],
        check = type(ripple)(req).from || identity;

    if (!res) return log('no resource', req.name);
    if (!check.call(this, req)) return debug('type skip', req.name);
    if (!is.obj(res.body)) return silent(ripple)(req);

    var to = (0, header)('proxy-to')(res) || identity,
        from = (0, header)('proxy-from')(res),
        body = to.call(socket, (0, key)('body')(res)),
        deltas = (0, _jsondiffpatch.diff)(body, req.body);

    if (is.arr(deltas)) return delta('') && res.body.emit('change');

    (0, keys)(deltas).reverse().filter((0, not)((0, is)('_t'))).map(paths(deltas)).reduce(flatten, []).map(delta).some(Boolean) && res.body.emit('change');

    function delta(k) {
      var d = (0, key)(k)(deltas),
          name = req.name
      // , body  = res.body
      ,
          index = k.replace(/(^|\.)_/g, '$1'),
          type = d.length == 1 ? 'push' : d.length == 2 ? 'update' : d[2] === 0 ? 'remove' : '',
          value = type == 'update' ? d[1] : d[0],
          next = types[type];

      if (!type) return false;
      if (!from || from.call(socket, value, body, index, type, name, next)) {
        !index ? silent(ripple)(req) : next(index, value, body, name, res);
        return true;
      }
    }
  };
}

function paths(base) {
  return function (k) {
    var d = (0, key)(k)(base);
    k = is.arr(k) ? k : [k];

    return is.arr(d) ? k.join('.') : (0, keys)(d).map((0, prepend)(k.join('.') + '.')).map(paths(base));
  };
}

function push(k, value, body, name) {
  var path = k.split('.'),
      tail = path.pop(),
      o = (0, key)(path.join('.'))(body) || body;

  is.arr(o) ? o.splice(tail, 0, value) : (0, key)(k, value)(body);
}

function remove(k, value, body, name) {
  var path = k.split('.'),
      tail = path.pop(),
      o = (0, key)(path.join('.'))(body) || body;

  is.arr(o) ? o.splice(tail, 1) : delete o[tail];
}

function update(k, value, body, name) {
  (0, key)(k, value)(body);
}

function headers(ripple) {
  return function (type) {
    var parse = type.parse || noop;
    type.parse = function (res) {
      if (true) return parse.apply(this, arguments), res;
      var existing = ripple.resources[res.name],
          from = (0, header)('proxy-from')(existing),
          to = (0, header)('proxy-to')(existing);

      res.headers['proxy-from'] = (0, header)('proxy-from')(res) || (0, header)('from')(res) || from;
      res.headers['proxy-to'] = (0, header)('proxy-to')(res) || (0, header)('to')(res) || to;
      return parse.apply(this, arguments), res;
    };
  };
}

function silent(ripple) {
  return function (res) {
    return res.headers.silent = true, ripple(res);
  };
}

function io(opts) {
  var r = !true ? require('socket.io')(opts.server || opts) : window.io ? window.io() : is.fn(require('socket.io-client')) ? require('socket.io-client')() : { on: noop, emit: noop };
  r.use = r.use || noop;
  return r;
}

// emit all or some resources, to all or some trues
function emit(ripple) {
  return function (socket) {
    return function (name) {
      if (arguments.length && !name) return;
      if (!name) return (0, values)(ripple.resources).map((0, key)('name')).map(emit(ripple)(socket)), ripple;

      var res = ripple.resources[name],
          sockets = true ? [ripple.io] : ripple.io.of('/').sockets,
          lgt = stats(sockets.length, name),
          silent = (0, header)('silent', true)(res);

      return silent ? delete res.headers.silent : !res ? log('no resource to emit: ', name) : is.str(socket) ? lgt(sockets.filter((0, by)('sessionID', socket)).map(to(ripple)(res))) : !socket ? lgt(sockets.map(to(ripple)(res))) : lgt([to(ripple)(res)(socket)]);
    };
  };
}

function to(ripple) {
  return function (res) {
    return function (socket) {
      var body = is.fn(res.body) ? '' + res.body : res.body,
          rep,
          fn = {
        type: type(ripple)(res).to || identity,
        res: res.headers['proxy-to'] || identity
      };

      body = fn.res.call(socket, body);
      if (!body) return false;

      rep = fn.type.call(socket, { name: res.name, body: body, headers: res.headers });
      if (!rep) return false;

      socket.emit('change', rep);
      return true;
    };
  };
}

function stats(total, name) {
  return function (results) {
    log((0, str)(results.filter(Boolean).length).green.bold + '/' + (0, str)(total).green, 'sending', name);
  };
}

function setIP(socket, next) {
  socket.ip = socket.request.headers['x-forwarded-for'] || socket.request.connection.remoteAddress;
  next();
}

function type(ripple) {
  return function (res) {
    return ripple.types[(0, header)('content-type')(res)];
  };
}

var log = window.log('[ri/sync]'),
    err = window.err('[ri/sync]'),
    debug = noop,
    types = { push: push, remove: remove, update: update };
},{"jsondiffpatch":4,"socket.io":4,"socket.io-client":4}]},{},[3]);
