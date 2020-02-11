const http = require("http");
const fs = require("fs");
const path = require("path");
const port = 8080;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write(fs.readFileSync(path.resolve('.', 'src', 'views', 'index.html')));
    res.end();
}).listen(port);
console.log('Server listening on port ' + port);