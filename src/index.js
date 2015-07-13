// -------------------------------------------
// Serves the client library /ripple.js
// -------------------------------------------
export default function serve(opts){
  log('creating')
  
  if (client) return identity
  var app = expressify(opts.server || opts)
  app.use('/ripple.js', send('js'))
  app.use('/ripple.min.js', send('min.js'))
  app.use('/ripple.pure.js', send('pure.js'))
  app.use('/ripple.pure.min.js', send('pure.min.js'))
  return opts
}

function expressify(d) {
  return key('_events.request')(d) || { use: noop }
}

function send(ext){
  return function(req, res){
    res.sendFile(path.resolve(__dirname, '../node_modules/ripple/dist/ripple.' + ext))
  }
}

import identity from 'utilise/identity'
import client from 'utilise/client'
import noop from 'utilise/noop'
import key from 'utilise/key'
import log from 'utilise/log'
import path from 'path'
log = log('[ri/serve]')
