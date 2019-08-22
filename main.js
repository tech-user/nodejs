var http = require("http");

http.createServer(function (request, response) {
    // send the HTTP header
    //HTTP Satus : 200 : OK
    // Content Type : text/plain

    response.writeHead(200, {'Content-Type' : 'text/plain'});

    // send the response body as "Hello, World"

    response.end('Hello, World\n');
}).listen(8081);

//Console will print the message

console.log('Server running at http://127.0.0.1:8081/');