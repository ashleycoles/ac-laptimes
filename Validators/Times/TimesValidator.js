const ObjectId = require('mongodb').ObjectId;
const lodash = require('lodash');

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

const validateFindTimes = (req, res, next) => {

    let newQuery = lodash.pick(req.query, ['uid', 'tid', 'cid']);

    if (newQuery.uid) {
        if(!ObjectId.isValid(newQuery.uid)) {
            return res.status(500).json({
                error: "invalid filter: uid"
            });
        }

        newQuery.uid = ObjectId(newQuery.uid);
    }

    if (newQuery.tid) {
        if(!ObjectId.isValid(newQuery.tid)) {
            return res.status(500).json({
                error: "invalid filter: tid"
            });
        }

        newQuery.tid = ObjectId(newQuery.tid);
    }

    if (newQuery.cid) {
        if(!ObjectId.isValid(newQuery.cid)) {
            return res.status(500).json({
                error: "invalid filter: cid"
            });
        }

        newQuery.cid = ObjectId(newQuery.cid);
    }

    req.query = newQuery;

    next();
};

module.exports.validateNewTime = validateNewTime;
module.exports.validateFindTimes = validateFindTimes;