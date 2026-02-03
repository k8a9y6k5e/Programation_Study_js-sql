const express = require('express');
const {creationAccountController} =require('./../controller/sign-up-controller');

const signUpRouter = express.Router();

signUpRouter.post('/createAccount', creationAccountController);

module.exports = signUpRouter;