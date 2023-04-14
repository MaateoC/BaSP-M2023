console.log ("--EXERCISE 2: STRINGS");

// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase)

console.log("-Exercise 2.a:");

var text5 = "programming";
text5 = text5.toUpperCase();
console.log(text5);

// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log("-Exercise 2.b:");

var text6 = "icebreaker"
var newText6 = text6.substring(0,5);
console.log(newText6);

//c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log("-Exercise 2.c:");

var text7 = "exercising"
var newText7 = text7.substring(7,10);
console.log(newText7);

//d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

console.log ("-Exercise 2.d:");

var text8 = "eXERCISING"

var firstLetter = text8.substring(0,1).toUpperCase();
var restText = text8.substring(1).toLowerCase();
var newText8 = firstLetter + restText;
console.log(newText8);

//e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

console.log("-Exercise 2.e:")

var text9 = "Hello Basp2023!";
var textSpace = text9.indexOf(" ");
console.log(textSpace);


//f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

console.log("-Exercise 2.f:")

var text10 = "PAIR PROGRAMMING";
var textSpace2 = text10.indexOf(" ");
var firstWord = text10.substring(0, text10).toLowerCase();
var secondWord = text10.substring(text10 + 1).toLowerCase();
var firstWord = firstWord.charAt(0).toUpperCase() + firstWord.substring(1);
var secondWord = secondWord.charAt(0).toUpperCase() + secondWord.substring(1);
var newText9 = firstWord + " " + secondWord;
console.log(newText9);
