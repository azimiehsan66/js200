var express = require('express');
var router = express.Router();


const Developer = require("../models/Developer");

router.get('/', function (req, res, next) {
    Developer.find().exec().then(
        (docs) => {
            res.json(docs);
        }
    )

    //res.send('respond with a developer');
});


router.get('/:id', function (req, res, next) {
    Developer.find({_id: req.params.id}).exec().then(
        (doc) => {
            res.json(doc);
        }
    )
});


router.get('/all', function (req, res, next) {
    res.send('respond with a developer');
});


router.post('/', function (req, res, next) {
    let d = new Developer(req.body);

    d.save().then(
        (doc) => {
            res.json(doc);
        }
    )
});



router.delete('/:id',function (req,res,next) {
    Developer.findByIdAndRemove(req.params.id).exec().then(
        (doc)=>{
            res.json(doc);
        }

    )
});


router.put('/:id',function (req,res,next) {
    Developer.findByIdAndUpdate(req.params.id,req.body,{new :true}).exec().then(
        (doc)=>{
            res.json(doc);
        }
    )
});




module.exports = router;
