const ObjectId = require('mongodb').ObjectId;

const validateTimesByUser = (req, res, next) => {

    if(!ObjectId.isValid(req.params.uid)) {
        return res.status(500).json({
            error: "Missing field: uid"
        });
    }

    req.params.uid = ObjectId(req.params.uid);

    next();
};

module.exports = validateTimesByUser;