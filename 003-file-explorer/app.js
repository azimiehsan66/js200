const scan = require('./scan');
const util = require('util');
const path = require('path');
const express = require('express');
app = express();

tree = scan('.', 'files');
// console.log(util.inspect(tree, null, null));

app.use('/', express.static(path.join(__dirname, 'frontend')));

app.get('/scan', function(req,res){
    res.send(tree);
});

app.listen(3000);