const {z} = require('zod');


function validatorMiddleware(req, res, next){
    try{
        _keyValidator(Object.keys(req.body));
        _valuesValidator(req.body);
        next();
    }
    catch(err){
        next(err);
    }
}

const _valuesSchematic = z.object({
    code: z.coerce.string().length(6),
    quantity: z.coerce.number().nonnegative(),
    price : z.coerce.number().nonnegative()
});

function _valuesValidator(values){
    for(let item of Object.keys(values)){
        let result = _valuesSchematic.safeParse(values[item])
        if(!result.success) {
            const fieldName = result.error.issues[0].path.join(', ');
            throw new Error(`invalid format value in ${fieldName}`);
        };
    }
}

const _keySchematic = z.array(z.string().trim().min(1, {message : "keys can't be empty"}));

function _keyValidator(keys){
    const result = _keySchematic.safeParse(keys);

    if(!result.success) throw new Error("keys can't be empty");
}

module.exports = validatorMiddleware;