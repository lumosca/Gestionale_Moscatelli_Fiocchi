const fs = require('fs');
const http = require('http');

const html = fs.readFileSync('./Frontend/menu.html', 'utf-8');

const server = http.createServer((req, res) => {
    res.end(html);
    console.log('A new request received');
});

server.listen(4000, () => {
    console.log('Server has started');
});
