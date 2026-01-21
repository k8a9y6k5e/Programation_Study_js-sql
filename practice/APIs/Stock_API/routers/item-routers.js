const express = require('express');

const validatorMiddleware = require('../validators/item-validator');
const {itemAdd, showAll} = require('../controllers/item-controllers');

const itemRouter = express.Router();

itemRouter.post('/add', validatorMiddleware, itemAdd);

itemRouter.get('/showAll', showAll);

module.exports = itemRouter;