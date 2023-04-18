console.log ("--EXERCISE 6: FUNCTIONS");

//a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

console.log("-Exercise 6.a:");

function exercise(pNum1, pNum2) {
    return pNum1 + pNum2 ;
}
var x= exercise(22, 34);
console.log (x);

//b. Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros no es un número; de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

console.log("-Exercise 6.b:");

function exercise(pNum1, pNum2) {
    if (typeof a !== 'number' || typeof b !== 'number') {
    alert('Error: one of the parameters is not a number');
    return NaN;
    }
    
    return pNum1 + pNum2;
}

//c. Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero si es un número entero.

console.log("-Exercise 6.c:");

function validateInteger(num){
        return Number.isInteger(num);
    }
    console.log(validateInteger(100))


//d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c. y que valide que los números sean enteros. En caso que haya decimales mostrar un alert con el error y retornar el número convertido a entero (redondeado).

console.log("-Exercise 6.d:");

function sumReal(pNum1, pNum2) {
    if (typeof pNum1 !== "number" || typeof pNum2 !== "number") {
        alert("Error:one of the numbers is not integer");
        return NaN;
    }
    if (!validateInteger(pNum1) || !validateInteger(pNum2)) {
        alert("Error:one of the numbers is not integer");
        return Math.round(pNum1) + Math.round(pNum2);
    }
    return pNum1 + pNum2;
    }
    function validateInteger(num) {
        return Number.isInteger(num);
    }
console.log(sumReal(22,34));
console.log(sumReal(3.5, 4));
console.log(sumReal("3",4));

//e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función probando que todo siga funcionando igual que en el apartado anterior.

console.log("-Exercise 6.e:");

function sumReal(pNum1, pNum2) {
    if (typeof pNum1 !== 'number' || typeof pNum2 !== 'number') {
    alert("Error: one of the numbers is not integer");
    return NaN;
    }
    
    if (!isInteger(pNum1) || !isInteger(pNum2)) {
    alert("Error: one of the numbers is not integer");
    return Math.round(pNum1) + Math.round(pNum2);
    }

    return pNum1 + pNum2;
}
function isInteger(num) {
return Number.isInteger(num);
}
console.log(sumReal(22,34));
console.log(sumReal(3.5, 4));
console.log(sumReal("3",4));