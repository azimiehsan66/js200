var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
    res.send('respond with a developer');
});


router.get('/all', function (req, res, next) {
    res.send('respond with a developer');
});

module.exports = router;
