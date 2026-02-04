const {z} = require('zod');

function errorMiddleWare(err, req, res, next){
    console.log(err.stack);

    res.status(err.statusCode || 500).json({work:false, error : err.message});
}

const _statusCodeSchematic = z.number();

class BaseError extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
        this.name = this.constructor.name;  
    }

    get statusCode(){return this._statusCode}

    set statusCode(value){
        const result = _statusCodeSchematic.safeParse(value);

        if(!result.success) throw new Error();

        this._statusCode = value;
    }
}

module.exports = {errorMiddleWare, BaseError};