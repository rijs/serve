!(require('utilise/client')) && !function(){

var expect  = require('chai').expect
  , request = require('supertest')
  , app     = require('express')()
  , server  = require('http').createServer(app)
  , serve   = require('./')(server)

describe('Serve Client', function() {
  
  it('should pass over serverless node', function(){  
    require('./')()
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

})

}()