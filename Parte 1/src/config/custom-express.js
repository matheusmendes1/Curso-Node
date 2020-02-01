require('marko/node-require').install();
require('marko/express');

/* Obtendo o Express para levantar o servidor */
const express = require('express');
const app = express();

const routes = require('../app/routes/routes');
routes(app);

module.exports = app;