var express = require('express'),
    app     = express(),
    server  = require('http').createServer(app),
    path    = require('path')

app.set('port', process.env.PORT || 8080)

app.configure('development', function() {
  app.use(express.errorHandler())
})

app.configure(function() {
  app.use(express.favicon())
  app.use(express.logger('dev'))
  app.use(express.bodyParser())
  app.use(express.methodOverride())
  app.use(app.router)
  app.use(express.static(path.join(__dirname, '.')))
})

server.listen(app.get('port'))
console.log('Express server listening on port ' + app.get('port'))
