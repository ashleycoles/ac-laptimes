const TimesController = require('../Controllers/TimesController');
const UsersController = require('../Controllers/UsersController');
const TracksController = require('../Controllers/TracksController');

const validateNewTime = require('../Validators/Times/validateNewTime');
const validateNewUser = require('../Validators/Users/validateNewUser');
const validateNewTrack = require('../Validators/Tracks/validateNewTrack');

const routes = (app) => {
    app.get('/times', TimesController.getAllTimes);
    app.post('/times', validateNewTime, TimesController.addTime);
    app.post('/users', validateNewUser, UsersController.addUser);
    app.post('/tracks', validateNewTrack, TracksController.addTrack);
};

module.exports = routes;