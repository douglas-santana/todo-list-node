const express = require('express');
const routes = require('./router');

const app = express();

app.use(express.json());

app.post('/', routes.addTask);

module.exports = app;