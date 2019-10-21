let express = require('express');
let router = express.Router();

let Software = require("../models/Software");

router.use(require('../services/gaurd'));

//read all softwares
router.get('/', function (req, res, next) {
    Software.find().paginate(req.qery.page, req.query.per).exec().then(
        (softwares) => {
            res.json(softwares);
        }
    ).catch(
        (err) => {
            res.json({error: true});
        }
    )

});



//read a software by id
router.get('/:id', function (req, res, next) {
    Software.findById(req.params.id).then(
        (software) => {
            res.json(software);
        }
    ).catch(
        (err) => {
            res.json({eror: true});
        }
    );
});


//create a software
router.post('/', function (req, res, next) {
    let s = new Software(req.body);

    s.save().then(
        (saved) => {
            res.json(saved);
        }
    ).catch(
        (err) => {
            res.json({error: true});
        }
    );
});






//delete a software

router.delete('/:id', function (req, res, next) {
    Software.findByIdAndRemove(req.params.id).exec().then(
        (software) => {
            res.json(software);
        }
    ).catch(
        (err) => {
            res.json({eror: true});
        });
});


//update a software
router.put('/:id', function (req, res, next) {
    Software.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(
        (software) => {
            res.json(software);
        }
    ).catch(
        (err)=>{
            res.json({error:true});
        }
    );
});




module.exports = router;