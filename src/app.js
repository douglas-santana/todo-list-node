const express = require('express');
const routes = require('./router');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.post('/', routes.addTask);
app.get('/', routes.getTasks);

module.exports = app;