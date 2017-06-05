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

// add route for logging in
server.post('/login', (req, res) => {
  // username: test
  // password: test
  res.send('eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0Iiwicm9sZXMiOlsiZGVmYXVsdD1BRE1JTjs6OiJdLCJzdXBlclJvbGUiOiJVU0VSIiwiZXhwIjoxNDk1MDk4MjU3LCJpYXQiOjE0OTUwOTY0NTd9.bgpMrZ2IoMCvBFtp6-sAPlTh9lrMhHHZgDp0JWY7-MdAFnM-WISfE15K5TTiQGREQOTL5v7Lie6nPkc7PeqiEA');
})

server.use(jsonServer.rewriter({
  '/questionnaires/:questionnaireId/versions/:versionId': '/versions/:versionId',
  '/contexts/:contextId/preferences': '/contexts',
  '/contexts/:contextId/preferences?key=:key': '/contexts',
  '/contexts/:contextId/preferences/:id': '/contexts/:id',
  '/responses/export' : '/responses',
  '/concepts/:conceptId': '/concepts',
  '/prefix-search?prefix=:prefix':'/prefix-search'
}));

server.use(jsonServer.bodyParser)
server.use(function (req, res, next) {
  console.log(req.body, res.body);
  if (req.method === 'POST' && req.url !== '/login') {
    req.body.dateCreated = Date.now();
    req.body.lastUpdated = Date.now();
    req.body.creator = 'John Smith';
  }
  // Continue to JSON Server router
  next()
})

server.use(router);

server.listen(4000, function () {
  console.log('***************************************');
  console.log('* Json-Server is running on port 4000 *');
  console.log('***************************************');
});
