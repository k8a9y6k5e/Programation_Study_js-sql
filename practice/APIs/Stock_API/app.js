const express = require('express');
const {router : itemRouter} = require('./router/items-routes');
const {errorHandler} = require('./errors/error-handler');


const app = express();
app.use(express.json());

app.use('/item', itemRouter);

app.use(errorHandler);

app.listen(3001);