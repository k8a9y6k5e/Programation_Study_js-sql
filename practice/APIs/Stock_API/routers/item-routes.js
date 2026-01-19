const express = require('express');

const {validatorMiddleware} = require('../validators/item-validator');
const {itemAdd} = require('../controllers/item-controllers');

const router = express.Router();

router.post('/add', validatorMiddleware, itemAdd);//next value is a controller to save the item

module.exports = router;