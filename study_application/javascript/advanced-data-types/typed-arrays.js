"use strict";
//typed arrays are a strict array, with fixed lenght and data type

//it's created with some special commands

/*
the commands are:
-Int8Array:
-- (-128) to (127);
-Uint8Array:
-- (0) to (255);
-Int16Array:
-- (-32768) to (32767);
-Uint16Array:
-- (0) to (65535);
-Int32Array:
-- (-2 Billions) to (2 Billions);
-Uint32Array:
-- (0) to (4 Billions);
-Float32Array;
-Float64Array;

each command need one argument, which is the buffer of that array
*/

//to create one, you create the buffer and use it

const buffer = new ArrayBuffer(3);

const intArray = new Int8Array(buffer);

console.log(intArray);

intArray[0] = 1;

console.log(intArray);

intArray[1] = 2;
intArray[2] = 3;

console.log(intArray);

intArray[3] = 4;//are ignored

console.log(intArray);