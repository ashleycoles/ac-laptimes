const TimesService = require('../Services/Times/TimesService');

const getAllTimes = (req, res) => {
    TimesService.findAllTimes().then((result) => {
        res.json({
            status: "success",
            data: result
        })
    })
};

const addTime = (req, res) => {
    TimesService.addTime(req.body).then((result) => {
        res.json({
            status: "success",
            message: "account inserted",
            data: result
        });
    })
};



module.exports.getAllTimes = getAllTimes;
module.exports.addTime = addTime;
