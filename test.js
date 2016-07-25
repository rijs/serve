var expect  = require('chai').expect
  , request = require('supertest')
  , app     = require('express')()
  , server  = require('http').createServer(app)
  , serve   = require('./').default({}, server)

describe('Serve Client', function() {
  
  it('should pass over serverless node', function(){  
    require('./').default({})
  })

  it('should gracefully proceed if no server', function(){  
    require('./').default({}, {})
  })

  it('should serve client', function(done){  
    request(app)
      .get('/ripple.js')
      .expect('Content-Type', 'application/javascript')
      .expect(200, done)
  })

  it('should serve minified client', function(done){  
    request(app)
      .get('/ripple.min.js')
      .expect('Content-Type', 'application/javascript')
      .expect(200, done)
  })

  it('should serve standalone client', function(done){  
    request(app)
      .get('/ripple.pure.js')
      .expect('Content-Type', 'application/javascript')
      .expect(200, done)
  })

  it('should serve minified standalone client', function(done){  
    request(app)
      .get('/ripple.pure.min.js')
      .expect('Content-Type', 'application/javascript')
      .expect(200, done)
  })

  it('should serve from alternative base path', function(done){  
    var app    = require('express')()
      , server = require('http').createServer(app)
      , serve  = require('./').default({}, { server: server, serve: __dirname + '/src/test' })

    request(app)
      .get('/ripple.js')
      .expect("var ripple = 'hello world'")
      .expect('Content-Type', 'application/javascript')
      .expect(200, done)
  })

})