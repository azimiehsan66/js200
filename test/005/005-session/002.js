const fs = require("fs");

fs.readFile("001.js", "utf8", (err, data) => {
    console.log(data);
});