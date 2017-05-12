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

server.use(jsonServer.rewriter({
  '/questionnaires/:questionnaireId/versions/:versionId': '/versions/:versionId',
  '/contexts/:contextId/preferences?key=:key': '/contexts',
  '/contexts/:contextId/preferences/:id': '/contexts/:id',
  '/responses/export' : '/responses',
  '/datasources/:datasourceId/concepts/:conceptId': '/concepts',
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
  if(req.url === '/login') {
    res.cookie = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwicm9sZXMiOlswLDFdLCJuYW1lIjoiZmlyc3QgbGFzdCIsImV4cCI6MTQ4NDg3MTg5MiwiaWF0IjoxNDg0ODcwMDkyfQ.E5ERwM8Eb8OfVAsPcvn_rKf_5_7giWvjIKF-w6CfvaGGWdYjmMKXhdx0rz1vDT50nGU2mSgNtcfR2nK8ImjG_A';
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
