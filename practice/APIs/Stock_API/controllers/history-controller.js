const ClearHistoryError = require('./../error/history-error');

const movementSet = new Set();

function logMovement(req, res, next){
    try{
        if(req.url.split('/').includes('show')) return next();

        const movement = { 
            type : req.url.slice(1, req.url.length),
            where : req.query.search || req.params.item || ((req.body) ? Object.keys(req.body) : null),
            method : req.method,
            date : new Date().toLocaleString()
        }

        _saveLog(movement);

        next();
    }
    catch(err){
        next(err);
    }
}

function _saveLog(movementObj){
    movementSet.add(movementObj);
}


function showHistory(req, res, next){
    try{
        const result = _getHistory();

        res.status(200).json({work:true, data:result});
    }
    catch(err){
        next(err);
    }
}

function _getHistory(){
    if(movementSet.size == 0) throw new ClearHistoryError();

    return Array.from(movementSet.keys());
}

module.exports = {logMovement, showHistory};