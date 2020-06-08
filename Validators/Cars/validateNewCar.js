const lodash = require('lodash');

const validateNewCar = (req, res, next) => {

    let newCar = lodash.pick(req.body, ['make', 'model']);

    let make = newCar.make;
    if(make.length === 0) {
        return res.status(500).json({
            error: "Missing field: make"
        });
    }

    let model = newCar.model;
    if(model.length === 0) {
        return res.status(500).json({
            error: "Missing field: model"
        });
    }

    req.body = newCar;

    next();
};

module.exports = validateNewCar;