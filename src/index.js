// -------------------------------------------
// Serves the client library /ripple.js
// -------------------------------------------
export default function serve(opts){
  log('creating')
  
  if (client) return identity
  var app = expressify(opts.server || opts)
  app.use('/ripple.js', send(local('js')))
  app.use('/ripple.min.js', send(local('min.js')))
  app.use('/ripple.pure.js', send(local('pure.js')))
  app.use('/ripple.pure.min.js', send(local('pure.min.js')))
  return opts
}

function expressify(d) {
  return key('_events.request')(d) || { use: noop }
}

function local(ext){
  return resolve(require.resolve('ripple'), '../ripple.' + ext)
}

import identity from 'utilise/identity'
import client from 'utilise/client'
import noop from 'utilise/noop'
import send from 'utilise/send'
import key from 'utilise/key'
import log from 'utilise/log'
import { resolve } from 'path'
log = log('[ri/serve]')
