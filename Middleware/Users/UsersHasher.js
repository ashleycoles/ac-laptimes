const bcrypt = require('bcrypt');
const saltRounds = 10;

const hashNewUser = async (req, res, next) => {
    req.body.password = await bcrypt.hash(req.body.password, saltRounds);
    next();
};

module.exports.hashNewUser = hashNewUser;