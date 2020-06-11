const UsersService = require('../Services/Users/UsersService');
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
            // ToDo: Put this somewhere better
           bcrypt.compare(req.body.password, foundUser.password, (err, result) => {
               if (result) {
                   res.json({
                       status: "success",
                       message: "account logged in",
                       data: foundUser._id
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