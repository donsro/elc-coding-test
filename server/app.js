const http = require('http');
const data = require('./data');
const search = require('./search');

const hostname = 'localhost';
const port = 3035;

const server = http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3030');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Content-Type', 'application/json');

    let body = [];

    req.on('data', function (chunk) {
        body.push(chunk);
    });

    req.on('end', function () {
        body = Buffer.concat(body).toString();

        if (req.method === 'POST' && req.url === '/searchData') {
            // Search is case sensitive
            const searchResults = search(data, JSON.parse(body)['key']);
            req.pipe(res);
            res.writeHead(200, { location: "/" });
            res.write(JSON.stringify(searchResults));
        }

        res.end();
    });
});

server.listen(port);

console.log(`[Server running on ${hostname}:${port}]`);
