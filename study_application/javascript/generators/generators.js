//generators it's a function with multiple returns

//to create one it's used:

function* generatorDobleSequence(num){//this is a generator function
    yield num * 2;
    yield num * 2 * 2;
    yield num * 2 * 2 * 2;
}

//yield works as the return, but it can't stop the flow of the function

//to use this generator you don't call it, you save the returned object

const dobleObjectGenerator = generatorDobleSequence(2);

//to call the function, us use that object and use the next method

console.log(dobleObjectGenerator.next());
//it run the method until the yield, and continues until the next yield when other next is called

//the yield return an object with the result(called "value") and if it end the cicle(called "done")

//the return function of generators make it end(and return "done" as true)

console.log(dobleObjectGenerator.next());
console.log(dobleObjectGenerator.next());

//it's possible to loop the generators, because they are iterables

const iterableObjectGenerator = generatorDobleSequence(3);

for(let value of iterableObjectGenerator) console.log(value);
//but, this make the return doesn't work, so, the return value don't be getted

console.log([3, ...generatorDobleSequence(3)]);//can also work like this

//it's possible to add a generator inside of other

function* calculateTheDouble(num){
    yield* generatorDobleSequence(num);
    yield num *2*2*2*2;
    yield num *2*2*2*2*2;
    return num;
}

//yield* runs the generator called until the end of the function and return all the result

const doble = calculateTheDouble(4)

for(let value of doble) console.log(value);

//the generator can be used as a two way street

//working like this

function* car(){
    const brand = yield 'undefined brand';

    console.log('brand : '+brand);
}

const carObj = car();   

console.log(carObj.next());//without argument go to yield and return that value

carObj.next('lexus');//but with argument pass the yield and continue running the function

//generator.throw

//it's used to pass an error to the generator

function* errorHandlerGenerator(){
    try{
        const result = yield "ab";

        console.log(result);
    }
    catch(err){
        console.log(err.message);
    }
}

const errorHG = errorHandlerGenerator();

// errorHG.throw(new Error("cause some error"));

//generator.return 

//end the generator as a return

const returnG = generatorDobleSequence(5);

console.log(returnG.next());
console.log(returnG.return('generator end'));