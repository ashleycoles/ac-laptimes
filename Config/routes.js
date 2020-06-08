const TimesController = require('../Controllers/TimesController');
const UsersController = require('../Controllers/UsersController');
const TracksController = require('../Controllers/TracksController');
const CarsController = require('../Controllers/CarsController');

const validateNewTime = require('../Validators/Times/validateNewTime');
const validateNewUser = require('../Validators/Users/validateNewUser');
const validateNewTrack = require('../Validators/Tracks/validateNewTrack');
const validateNewCar = require('../Validators/Cars/validateNewCar');
const validateTimesByUser = require('../Validators/Times/validateTimesByUser');

const routes = (app) => {
    app.post('/times', validateNewTime, TimesController.addTime);
    app.get('/times', TimesController.getAllTimes);
    app.get('/times/:uid', validateTimesByUser, TimesController.getTimesByUser);

    app.post('/users', validateNewUser, UsersController.addUser);

    app.post('/tracks', validateNewTrack, TracksController.addTrack);

    app.post('/cars', validateNewCar, CarsController.addCar);
};

module.exports = routes;