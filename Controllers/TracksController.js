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

module.exports.addTrack = addTrack;