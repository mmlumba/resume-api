const express = require('express');
const server = express();
const path = require('path');
const fs = require('fs');

server.use(express.static(path.join(__dirname, 'public')));
server.get('/', (request, response) => {
    response.render('index.html', function(err, html) {
        response.send(html);
    });
})
server.get('/resume', (request, response) => {
    const file = fs.readFileSync("./resume.json")
    response.send(JSON.parse(file));
})

server.listen(3000, () => console.log("marian\'s resume"))