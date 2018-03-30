const express = require('express');
const server = express();
const path = require('path');
const fs = require('fs');
const file = fs.readFileSync("./resume.json")
const PORT = process.env.PORT || 3000

server.use(express.static(path.join(__dirname, 'public')));
server.get('/', (request, response) => {
    response.render('index.html', (err, html) => {
        response.send(html);
    });
})
server.get('/resume', (request, response) => {
    response.send(JSON.parse(file));
})

server.listen(PORT, () => console.log("marian\'s resume"))