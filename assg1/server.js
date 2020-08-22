var http = require('http');
var result = require('./index.js');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(result.count());
  res.end();
}).listen(8080);