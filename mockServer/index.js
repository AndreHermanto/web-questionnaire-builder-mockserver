// server.js
var jsonServer = require('json-server')
var schema = require('./db.js');
var server = jsonServer.create()
var router = jsonServer.router(schema())
var middlewares = jsonServer.defaults()

// wrap results in data property
router.render = function (req, res) {
  res.jsonp({
   data: res.locals.data
  })
}

server.use(middlewares)

server.use(jsonServer.bodyParser)
server.use(function (req, res, next) {
  console.log(req.body, res.body);
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})

server.use('/questionnaires/:id/versions/:version', function(req, res){
  res.redirect('/versions/' + req.params.version);
});

server.use(router)

server.listen(4000, function () {
  console.log('***************************************');
  console.log('* Json-Server is running on port 4000 *');
  console.log('***************************************');
});
