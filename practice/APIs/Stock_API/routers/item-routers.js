const express = require('express');

const {itemValidator, searchValidator, deleteValidator, updatePutValidator} = require('../validators/item-validator');
const {itemAdd, showAll, searchItem, itemDelete, updateItem} = require('../controllers/item-controllers');

const itemRouter = express.Router();

itemRouter.post('/add', itemValidator, itemAdd);

itemRouter.get('/showAll', showAll);

itemRouter.get('/search', searchValidator,searchItem);

itemRouter.delete('/delete/:item', deleteValidator, itemDelete);

itemRouter.put('/update/:toChange', updatePutValidator, updateItem);

module.exports = itemRouter;