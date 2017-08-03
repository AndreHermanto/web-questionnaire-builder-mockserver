// server.js
var jsonServer = require('json-server');
var schema = require('./db.js');
var server = jsonServer.create();
var router = jsonServer.router(schema());
var middlewares = jsonServer.defaults();

// wrap results in data property
router.render = function(req, res) {
  res.jsonp({
    data: res.locals.data
  });
};

server.use(middlewares);

server.use(
  jsonServer.rewriter({
    '/questionnaires/:questionnaireId/versions/:versionId':
      '/versions/:versionId',
    '/contexts/:contextId/preferences': '/contexts',
    '/contexts/:contextId/preferences?key=:key': '/contexts',
    '/contexts/:contextId/preferences/:id': '/contexts/:id',
    '/responses/export': '/responses',
    '/concepts/:conceptId': '/concepts',
    '/prefix-search?prefix=:prefix': '/prefix-search'
  })
);

server.use(jsonServer.bodyParser);

server.use(function(req, res, next) {
  console.log(req.body, res.body);
  if (req.method === 'POST' && req.url !== '/login') {
    req.body.dateCreated = Date.now();
    req.body.lastUpdated = Date.now();
    req.body.creator = 'John Smith';
  }
  // Continue to JSON Server router
  next();
});

// validates and decrypts this info
// it doesnt really, it just returns it, but the actual server version does
server.post('/secure', (req, res) => {
  const response = {
    userId: req.body.userId,
    consentTypeId: req.body.consentTypeId || 'fake-consent',
    timestamp: req.body.timestamp || 'fake-timestamp',
    jwt: 'fake-jwt'
  };
  res.send(response);
});

//return data for generate the urls
server.post('/secure/generate', (req, res) => {
  var urls = [];
  for (var i = 0; i < req.body.count; i++) {
    urls.push({
      consentTypeId: req.body.consentTypeId,
      userId: Math.random() * 100 + '',
      timestamp: '1000'
    });
  }
  const response = {
    baseURL: 'https://selfassessment.sanfordhealth.org',
    urls: urls
  };
  res.send(response);
});

// add route for logging in
server.post('/login', (req, res) => {
  // username: test
  // password: test
  res.send(
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0Iiwicm9sZXMiOlsiZGVmYXVsdD1BRE1JTjs6OiJdLCJzdXBlclJvbGUiOiJVU0VSIiwiZXhwIjoxNDk1MDk4MjU3LCJpYXQiOjE0OTUwOTY0NTd9.bgpMrZ2IoMCvBFtp6-sAPlTh9lrMhHHZgDp0JWY7-MdAFnM-WISfE15K5TTiQGREQOTL5v7Lie6nPkc7PeqiEA'
  );
});

server.use(router);

server.listen(4000, function() {
  console.log('***************************************');
  console.log('* Json-Server is running on port 4000 *');
  console.log('***************************************');
});
