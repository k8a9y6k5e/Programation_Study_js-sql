function multiplication(num){
    let resultArr = new Array();
    for(let m=1; m<=10; m++){resultArr.push(num*m)}
    return resultArr;
}

async function* resultTable(num){//create an async generator
    for (let result of multiplication(num)) yield result;
}

const promiseDoble = resultTable(2);

//make the promise run in a loop in asyncrhonous way
for await (let resultTable of promiseDoble) console.log(resultTable);

//in asynchronous generators, the spread operator(...) don't work

//in async generators, us use the await to get the promise

const promiseTriple = resultTable(3);

console.log(await promiseTriple.next());
console.log(await promiseTriple.next());