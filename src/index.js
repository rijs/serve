// -------------------------------------------
// Serves the client library /ripple.js
// -------------------------------------------
export default function serve(ripple, opts){
  log('creating')
  if (!opts) return ripple
  const app  = expressify(opts.server || opts)
      , path = local(opts.serve || __dirname)

  app.use('/ripple.js', send(path('js')))
  app.use('/ripple.min.js', send(path('min.js')))
  app.use('/ripple.pure.js', send(path('pure.js')))
  app.use('/ripple.pure.min.js', send(path('pure.min.js')))
  return ripple
}

const expressify = server => key('_events.request')(server) || { use: noop }

const local = path => ext => resolve(path, './ripple.' + ext)

import identity from 'utilise/identity'
import client from 'utilise/client'
import noop from 'utilise/noop'
import send from 'utilise/send'
import key from 'utilise/key'
import { resolve } from 'path'
const log = require('utilise/log')('[ri/serve]')