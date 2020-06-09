const TimesController = require('../Controllers/TimesController');
const UsersController = require('../Controllers/UsersController');
const TracksController = require('../Controllers/TracksController');
const CarsController = require('../Controllers/CarsController');

const TracksValidator = require('../Middleware/Tracks/TracksValidator');
const CarsValidator = require('../Middleware/Cars/CarsValidator');
const TimesValidator = require('../Middleware/Times/TimesValidator');
const UsersValidator = require('../Middleware/Users/UsersValidator');

const UsersHasher = require('../Middleware/Users/UsersHasher');

const routes = (app) => {
    app.post('/times', TimesValidator.validateNewTime, TimesController.addTime);
    app.get('/times', TimesValidator.validateFindTimes, TimesController.getAllTimes);

    app.post('/users', [UsersValidator.validateNewUser, UsersHasher.hashNewUser], UsersController.addUser);
    app.post('/users/login', UsersValidator.validateLoginUser, UsersController.loginUser);

    app.post('/tracks', TracksValidator.validateNewTrack, TracksController.addTrack);

    app.post('/cars', CarsValidator.validateNewCar, CarsController.addCar);
};

module.exports = routes;