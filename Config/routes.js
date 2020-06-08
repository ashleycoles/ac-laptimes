const TimesController = require('../Controllers/TimesController');
const UsersController = require('../Controllers/UsersController');
const TracksController = require('../Controllers/TracksController');
const CarsController = require('../Controllers/CarsController');

const validateNewUser = require('../Validators/Users/validateNewUser');
const validateNewTrack = require('../Validators/Tracks/validateNewTrack');
const validateNewCar = require('../Validators/Cars/validateNewCar');

const TimesValidator = require('../Validators/Times/TimesValidator');

const routes = (app) => {
    app.post('/times', TimesValidator.validateNewTime, TimesController.addTime);
    app.get('/times', TimesValidator.validateFindTimes, TimesController.getAllTimes);

    app.post('/users', validateNewUser, UsersController.addUser);

    app.post('/tracks', validateNewTrack, TracksController.addTrack);

    app.post('/cars', validateNewCar, CarsController.addCar);
};

module.exports = routes;