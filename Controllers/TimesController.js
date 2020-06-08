const TimesService = require('../Services/Times/TimesService');

const addTime = (req, res) => {
    TimesService.addTime(req.body).then((result) => {
        res.json({
            status: "success",
            message: "account inserted",
            data: result
        });
    })
};

const getAllTimes = (req, res) => {
    let query = {};

    if (req.query.uid) {
        query.uid = req.query.uid;
    }

    if (req.query.tid) {
        query.tid = req.query.tid;
    }

    if (req.query.cid) {
        query.cid = req.query.cid;
    }

    TimesService.findAllTimes(query).then((result) => {
        res.json({
            status: "success",
            data: result
        })
    })
};

module.exports.addTime = addTime;
module.exports.getAllTimes = getAllTimes;
