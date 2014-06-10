var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200);
  response.write('<h1>Hello world!</h1><p><strong>Environment:</strong> ' + process.env.NODE_ENV + '</p>');
  response.end();
}).listen('8789');
