const TimesController = require('../Controllers/TimesController');
const UsersController = require('../Controllers/UsersController');
const TracksController = require('../Controllers/TracksController');
const CarsController = require('../Controllers/CarsController');

const validateNewTrack = require('../Validators/Tracks/validateNewTrack');
const validateNewCar = require('../Validators/Cars/validateNewCar');

const TimesValidator = require('../Validators/Times/TimesValidator');
const UsersValidator = require('../Validators/Users/UsersValidator');

const routes = (app) => {
    app.post('/times', TimesValidator.validateNewTime, TimesController.addTime);
    app.get('/times', TimesValidator.validateFindTimes, TimesController.getAllTimes);

    app.post('/users', UsersValidator.validateNewUser, UsersController.addUser);
    app.post('/users/login', UsersValidator.validateLoginUser, UsersController.loginUser);

    app.post('/tracks', validateNewTrack, TracksController.addTrack);

    app.post('/cars', validateNewCar, CarsController.addCar);
};

module.exports = routes;