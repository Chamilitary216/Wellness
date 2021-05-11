//Requires dependencies
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

//Pulls in validator functions
const validateRegisterInput = require('../utils/register');
const validateLoginInput = require('../utils/login');

const User = require('../models/User');

router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    //Validation
    if(!isValid) {
        return res.status(400).json(errors);
    }
    //Will search the database for existing email, throw an error if it exist, and create a new user if it does not.
    User.findOne ({ email: req.body.email }).then(user => {
        if(user) {
            return res.status(400).json({ email: 'Email is already in use!'})
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });
            //Password encryption
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser
                    .save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err));
                });
            });
        }
    });
});
router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    //Validatation
    if(!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;
    //Finds our user by email
    User.findOne({ email }).then(user => {
        if(!user) {
            return res.status(404).json({ emailnotfound: 'Email not found'});
        }
    //Checks our password to make sure it matches the email
    bcrypt.compare(password, user.password).then(isMatch => {
        if(isMatch) {
            const payload = {
                id: user.id,
                name: user.name
            };
            jwt.sign(
                payload,
                keys.secretOrKey,
                {
                    expiresIn: 31556926
                },
                (err, token) => {
                    res.json({
                        success: true,
                        token: 'Bearer ' + token
                    });
                }
            );
        } else {
            return res
            .status(400)
            .json({ passwordincorrect: 'Incorrect Password!'})
          }
        });
    });
});
 module.exports = router;