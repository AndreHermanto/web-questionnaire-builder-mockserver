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
  '/prefix-search/datasource/:prefix': '/allDatasource',
  '/prefix-search/datasource/:datasourceId/:prefix': '/selectDatasourceId'
}));

server.use(jsonServer.bodyParser)
server.use(function (req, res, next) {
  console.log(req.body, res.body);
  if (req.method === 'POST') {
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
