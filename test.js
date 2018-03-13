const test = require("tape");
const server = require("./server");
const fs = require('fs');

test("returns api info as object", t => {
    const file = fs.readFileSync("./resume.json");
    t.is(typeof file, "object");
    t.end();
});