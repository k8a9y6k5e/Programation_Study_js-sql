/*
to create a promise
SYNTAX:
new Promise(callback);
the callback need the args resolve and reject
which work like:
resolve(value); and reject(error);

it return an object like this:

{
    state: <"fulfilled" if resolve is called and "rejected" if reject is called>, 
    result: <value of the functions(reject or resolve) receive>
}
*/

function car(resolve, reject){
    const carBrandsArr = ['ferrari', 'mclaren', 'mercedes','porsche', 'toyota'];

    if(!carBrandsArr.includes('nissan')) reject('don\'t have this brand');
    else resolve('have this brand');
}

const promise = new Promise(car);

//then, used to create a handle of results, work for both, but is much recommended to resolve call
promise.then(
    function(result) {console.log(result)},//first argument is to handle the resolve call
    //can have a second argument to handle reject call
);

console.log(promise);

//catch, used to handle only errors, and is recommended to it

promise.catch((err) => console.log(err));

//finally, used to a final function/handle, works independent of the result from a promise

promise.finally(() => console.log('end of code'));