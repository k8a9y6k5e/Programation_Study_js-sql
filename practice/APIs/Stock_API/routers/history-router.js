const express = require('express');

const {showHistory} = require('./../controllers/history-controller');

const historyRouter = express.Router();

historyRouter.get('/show', showHistory);

module.exports = historyRouter;