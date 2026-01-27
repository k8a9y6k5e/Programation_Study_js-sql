const {ItemError} = require('./error-handler');

class ItemAlreadyExistError extends ItemError{
    constructor(){
        super("item already exist", 409);
    }
}

module.exports = {ItemAlreadyExistError};