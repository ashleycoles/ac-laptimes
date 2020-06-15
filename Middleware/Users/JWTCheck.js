const expressjwt = require('express-jwt');

const jwtCheck = expressjwt({secret: "supersecretkey"});

module.exports = jwtCheck;