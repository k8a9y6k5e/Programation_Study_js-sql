//promise.all - to multiple promises execute parallel and wait until all end
//used when need all promises true
//SYNTAX : Promise.all(<iterable>);
//iterable refers to an array with the callbacks/functions

const promiseAll = Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)),
    new Promise(resolve => setTimeout(() => resolve(2), 2000)),
    new Promise(resolve => setTimeout(() => resolve(3), 1000)),
]).then(console.log);
//just when all three promises passes it continue
//if one get error the result turn in just a error



//promise.allSettled - to multiple promises execute parallel and wait until all end
//but in it the error it's separeted from the correct results

const promiseAllSettled = Promise.allSettled([
    new Promise(resolve => setTimeout(() => resolve('a'), 3000)),
    new Promise((resolve, reject) => setTimeout(() => reject('an error'), 2000)),//just this promise get error
    new Promise(resolve => setTimeout(() => resolve('c'), 1000)),
]).then(console.log).catch(console.log);


//promise.race - return only the faster promise result

const promiseRace = Promise.race([
    new Promise(resolve => setTimeout(() => resolve(true), 3000)),
    new Promise((resolve, reject) => setTimeout(() => reject('an error'), 2000)),
    new Promise(resolve => setTimeout(() => resolve(false), 1000)),//return only this value because is the faster promise
]).then(console.log).catch(console.log);


//promise.any - waits the first fullfilled promise and get the result

const promiseAny = Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject('an error'), 3000)),
    new Promise((resolve, reject) => setTimeout(() => reject('an error'), 2000)),
    new Promise(resolve => setTimeout(() => resolve(true), 4000)),//only this return because it's the only which return a fullfilled
    new Promise(resolve => setTimeout(() => resolve(false), 5000))
]).then(console.log).catch(console.log);

//in this command, only gets error if all promises get rejected



//promise.resolve - return a fullfilled promise for the promise inside, 
//works equals as normal resolve promise results

Promise.resolve(1+1).then(console.log);

//promise.reject - return a rejected promise for the promise inside, 
//works equals as normal reject promise results

Promise.reject('an reject result').catch(console.log);