let express = require('express');
let router = express.Router();
let User = require('../models/User');

router.post('/register', function (req, res) {
    if (!req.body.username || !req.body.password) {
        res.json({success: false, msg: 'please pass user and pass.'});
    } else {
        let newUser = new User({
            username: req.body.username,
            password: req.body.password
        });
        newUser.save(function (err) {
                if (err) {
                    return res.json({success: false, msg: 'Username already exists.'});
                }
                res.json({success: true, msg: 'new user succesfully created'});
            }
        )
    }
});


router.post('/login', function (req, res) {
    if (!req.body.username || !req.body.password) {
        res.json({success: false, msg: 'please pass user and pass.'})
    }
    User.findOne({
            username: req.body.username
        }, function (err, user) {
            if (err) throw err;
            if (!user) {
                res.status(401).send({success: false, msg: 'Authentication failed user not found.'})
            } else {
                user.comparePassword(req.body.password, function (err, ismatch) {
                    if (ismatch && !err) {
                        req.session.user = user.toJSON();

                        var claims = {
                            iss: "application Name",
                            aud: "azimi.ir"
                        };
                        req.session.create(claims, function (error, token) {
                            res.json({token: token});
                        });
                    } else {
                        res.status(401).send({success: false, msg: 'Authentication failed .wrong password'})
                    }

                });
            }
        }
    );

});


router.get('/logout', (req, res) => {
    res.session.destroy(
        (err) => {
            res.json({
                msg: "sucsessfully loged out."
            });
        }
    );
});

module.exports = router;