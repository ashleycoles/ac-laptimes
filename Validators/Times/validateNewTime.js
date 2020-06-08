const lodash = require('lodash');
const ObjectId = require('mongodb').ObjectId;

const validateNewTime = (req, res, next) => {

    let newTime = lodash.pick(req.body, ['uid', 'tid', 'cid', 'time']);

    if(!ObjectId.isValid(newTime.uid)) {
        return res.status(500).json({
            error: "Missing field: uid"
        });
    }

    newTime.uid = ObjectId(newTime.uid);

    if(!ObjectId.isValid(newTime.tid)) {
        return res.status(500).json({
            error: "Missing field: tid"
        });
    }

    newTime.tid = ObjectId(newTime.tid);

    if(!ObjectId.isValid(newTime.cid)) {
        return res.status(500).json({
            error: "Missing field: cid"
        });
    }

    newTime.cid = ObjectId(newTime.cid);

    var timeRegex = new RegExp("[0-9]{2}:[0-9]{2}.[0-9]{1,3}");

    if (!timeRegex.test(newTime.time)) {
        return res.status(500).json({
            error: "Invalid field: time"
        });
    }

    req.body = newTime;

    next();
};

module.exports = validateNewTime;