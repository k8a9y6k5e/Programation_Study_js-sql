const express = require('express');
const showController = require('../controller/show-controller');

const showRouter = express.Router();

showRouter.get('/informations', showController);

module.exports = showRouter;