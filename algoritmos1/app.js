alert("Hola mundo desde Visual Studio Code!");
//comentario de una línea

/*
esto es un 
bloque de
comentario
*/

let miVariable;


//inicializar variable 
const otraVariable = 5;
miVariable = "Hola";
let nombre = "Luisa";


console.log(otraVariable);
console.log(miVariable);
console.log(nombre);

//mutación de valor, reasignación
console.log(miVariable);
miVariable= "Adiós";

console.log(miVariable);

//valores primitivos
//String - cadena de texto
//palabras, nombres, caracteres

let palabra ="cualquier palabra ñ?666#4//2Q¡";
let palabra2 = 'otra palabra mas';
console.log(palabra);
console.log(palabra2);


//Number - números
let num= 3;
let num2= 65.568;
let num3 = 9800;

console.log(num);
console.log(num2);
console.log(num3);
console.log(num, num2, num3);
console.log(num + num2 + num3);
console.log("Este número es", num);
console.log("Este número es"+ num);

console.log("1"+1);
console.log("1"+"1");

let blue=14;

console.log("Este numero es", blue);
console.log("Este numero es" + blue);
console.log("Este es un mensaje literal, número próximo es cool", blue);




//si se añade el simbolo + el dato númerico lo une a la cadena de texto.

//boolean

let verdadero=true;
let falso=false;

console.log(verdadero);
console.log(falso);

//null
let valorNulo=null;
console.log(valorNulo);

//undefined
let varUn;
console.log(varUn);

//typeof
let a = "Hola";
let b = 2;
let c = true;
let d = null;
let e;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);


//concatenacion valores
console.log("Esto es un saludo " + a + " " + b);

//caracteres de escape
let texto = "Esto es un ejemplo de 'una string' con comillas dentro";
console.log(texto);

let texto2 = 'Otro ejemplo de "string" usando comillas al revés';
console.log(texto2);

let textoLong = "Con esta cadena de texto \nharé los ejemplos necesarios"
console.log(textoLong);
