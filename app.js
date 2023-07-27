require('dotenv').config();
const express = require('express');
const { connect } = require('./db');
const configExpress = require('./src/config/express');
const routes = require('./routes');

const app = express();

configExpress(app);
routes(app);

connect();


module.exports = app;
