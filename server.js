const express = require('express');
const server = express();
const fs = require('fs');


server.get('/', (request, response) => {
    const file = fs.readFileSync("./resume.json")
    response.send(JSON.parse(file));
})

// port: differentiates between different traffic on same host
server.listen(3000, () => console.log("marian\'s resume"))