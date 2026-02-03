const express = require('express');
const {creationAccountController} =require('./../controller/sign-up-controller');

const signUpRouter = express.Router('/createAccount', creationAccountController);

module.exports(signUpRouter);