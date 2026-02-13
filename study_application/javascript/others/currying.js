//it's a wrapped funcions, to call a funcion in a diferent way
//not with 2 arguments

function triple(num){
    return num * 3;
}

function currying(func){
    return function(num){
        return func(num);
    }
}

console.log(triple(2));
console.log(currying(triple)(3));