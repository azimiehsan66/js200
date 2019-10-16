var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/home', function(req, res, next) {

    console.log(req.query.name);
    //res.render('index', { title: 'Alireza kalantari' });
    res.render('index',{name: 'احسان',family:'عظیمی'});
});


module.exports = router;
