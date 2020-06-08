const CarsService = require('../Services/Cars/CarsService');

const addCar = (req, res) => {
    CarsService.addCar(req.body).then((result) => {
        res.json({
            status: "success",
            message: "car inserted",
            data: result
        });
    })
};

module.exports.addCar = addCar;
