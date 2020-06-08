const lodash = require('lodash');

const validateNewUser = (req, res, next) => {

    let newUser = lodash.pick(req.body, ['name', 'email', 'password']);

    let name = newUser.name;
    if(name.length === 0) {
        return res.status(500).json({
            error: "Missing field: name"
        });
    }

    let email = newUser.email
    if(email.length === 0) {
        return res.status(500).json({
            error: "Missing field: email"
        });
    }

    let password = newUser.password;
    if (password.length < 6) {
        return res.status(500).json({
            error: "Invalid field: password"
        });
    }

    req.body = newUser;

    next();
};

module.exports = validateNewUser;