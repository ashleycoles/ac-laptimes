const express = require('express');
const routes = require('./Config/routes');
const cors = require('cors');
const BodyParser = require('body-parser');
const app = express()

app.use(BodyParser.json());
app.use(cors());

routes(app);

module.exports = app;
