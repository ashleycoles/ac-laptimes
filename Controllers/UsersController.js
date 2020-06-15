const UsersService = require('../Services/Users/UsersService');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const addUser = (req, res) => {
    UsersService.addUser(req.body).then((result) => {
        res.json({
            status: "success",
            message: "account inserted",
            data: result
        });
    })
};

const loginUser = (req, res) => {
    UsersService.loginUser(req.body).then((foundUser) => {
        if (foundUser) {
           bcrypt.compare(req.body.password, foundUser.password, (err, result) => {
               if (result) {
                   let token = jwt.sign({
                       sub: foundUser._id,
                       username: foundUser.name
                   }, 'supersecretkey', {expiresIn: "3 hours"});
                   res.json({
                       status: "success",
                       message: "account logged in",
                       data: {
                           accessToken: token
                       }
                   });
               } else {
                   res.json({
                       status: "failed",
                       message: "account not recognised",
                       data: ''
                   });
               }
           });
        }
    })
};

module.exports.addUser = addUser;
module.exports.loginUser = loginUser;