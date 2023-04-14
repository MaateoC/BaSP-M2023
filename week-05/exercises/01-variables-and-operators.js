console.log ("--EXERCISE 1: VARIABLES AND OPERATORS");

// a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.

console.log("-Exercise 1.a:");

var op1 = 5;
var op2 = 6;
var result = op1 + op2;
console.log("The result of the sum is" + " " + result);

// b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

console.log("-Exercise 1.b:");

const text1 = "Hi";
const text2 = "Everyone";
const textResult = "Hi" + " " + "Everyone";
console.log(textResult);

// c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado de la suma en una 3er variable (utilizar length).

console.log("-Exercise 1.c:");

let text3 = "Love drinking";
let text4 = "mate";
let textResult2 = text3.length + text4.length;
console.log(textResult2);