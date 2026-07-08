const http = require('http');
const user = { name: 'John', age: 30, city: 'New York' };
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(user));
}).listen(5000);