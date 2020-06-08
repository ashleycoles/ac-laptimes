const express = require('express');
const routes = require('./Config/routes');
const BodyParser = require('body-parser');
const app = express()

app.use(BodyParser.json());

routes(app);

module.exports = app;
