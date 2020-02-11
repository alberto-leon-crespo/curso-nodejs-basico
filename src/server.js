const http = require("http");
const fs = require("fs");
const path = require("path");
const port = 8080;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type': 'text/html'});
    if (req.url === '/' && req.method.toLowerCase() === 'get') {
        res.write(fs.readFileSync(path.resolve('.', 'src', 'views', 'index.html')));
    }
    if (req.url === '/about' && req.method.toLowerCase() === 'get') {
        res.write(fs.readFileSync(path.resolve('.', 'src', 'views', 'about.html')));
    }
    if (req.url === '/services' && req.method.toLowerCase() === 'get') {
        res.write(fs.readFileSync(path.resolve('.', 'src', 'views', 'services.html')));
    }
    if (req.url === '/contact' && req.method.toLowerCase() === 'get') {
        res.write(fs.readFileSync(path.resolve('.', 'src', 'views', 'contact.html')));
    }
    res.end();
}).listen(port);
console.log('Server listening on port ' + port);