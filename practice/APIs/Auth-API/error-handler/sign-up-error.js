const {BaseError} = require('./error-handler');

class SignUpValidatorError extends BaseError{
    constructor(field){
        super(`invalid format enter in ${field}` , 400);
    }
}

module.exports = {SignUpValidatorError};