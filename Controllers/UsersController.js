const UsersService = require('../Services/Users/UsersService');

const addUser = (req, res) => {
    UsersService.addUser(req.body).then((result) => {
        res.json({
            status: "success",
            message: "account inserted",
            data: result
        });
    })
};

module.exports.addUser = addUser;