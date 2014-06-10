var http = require('http');

var content = '<h1>Hello world!</h1>'
    + '<p><strong>Environment:</strong>'
    + process.env.NODE_ENV
    + '</p>';

http.createServer(function(request, response) {
    response.writeHead(200);
    response.write(content);
    response.end();
}).listen('8789');
