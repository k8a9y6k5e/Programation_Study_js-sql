//in javascript, it's normally to have implicits data types conversion cast
//but, also it's possible to make it weself

//to convert strings to numbers:

//Number() is the universal converter

console.log(Number('34'));

//it give NaN if it's impossible to convert

console.log(Number('a'));

//parseFloat() parse to a floating number

console.log(parseFloat('3.1'));

//parseInt() return a normal integer, but auto-roud floating number

console.log(parseInt('99'));


//unary conversion, it's the conversion using basic symbols

console.log(typeof +'5');//conver the string to a number


//number to string

//have two commands which work equals to this action

//String() and toString()

console.log(typeof String(123));
console.log(typeof toString(456));