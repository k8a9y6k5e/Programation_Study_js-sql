const {BaseError} = require('./error-handler');

class InvalidTokenError extends BaseError{
    constructor(){super('invalid token enter', 401);}
}

module.exports = InvalidTokenError;