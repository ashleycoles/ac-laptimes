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
    TimesService.findAllTimes().then((result) => {
        res.json({
            status: "success",
            data: result
        })
    })
};

const getTimesByUser = (req, res) => {
    TimesService.findTimesByUser(req.params.uid).then((result) => {
        res.json({
            status: "success",
            data: result
        })
    })
};

module.exports.addTime = addTime;
module.exports.getAllTimes = getAllTimes;
module.exports.getTimesByUser = getTimesByUser;
