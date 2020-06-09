const lodash = require('lodash');

const validateNewTrack = (req, res, next) => {

    let newTrack = lodash.pick(req.body, ['name']);

    let name = newTrack.name;
    if(name.length === 0) {
        return res.status(500).json({
            error: "Missing field: name"
        });
    }

    req.body = newTrack;

    next();
};

module.exports.validateNewTrack = validateNewTrack;