var express = require('express');
var router = express.Router();


router.get('/', require('../services/gaurd'), function (req, res, next) {
    res.json(req.session);
});
module.exports = router;