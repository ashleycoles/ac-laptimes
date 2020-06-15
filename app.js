const express = require('express');
const routes = require('./Config/routes');
const cors = require('cors');
const BodyParser = require('body-parser');
const app = express()

app.use(BodyParser.json());

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    credentials: true
};

app.use(cors(corsOptions));

routes(app);

module.exports = app;
