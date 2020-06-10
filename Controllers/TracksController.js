const TracksService = require('../Services/Tracks/TracksService');

const addTrack = (req, res) => {
    TracksService.addTrack(req.body).then((result) => {
        res.json({
            status: "success",
            message: "track inserted",
            data: result
        });
    })
};

const getTracks = (req, res) => {
    TracksService.getTracks().then((result) => {
        console.log(result)
        res.json({
            status: "success",
            message: "tracks received",
            data: result
        })
    })
};

module.exports.addTrack = addTrack;
module.exports.getTracks = getTracks;
