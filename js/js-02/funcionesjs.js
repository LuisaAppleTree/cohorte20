let miColorFav="verde";
console.log(miColorFav);

function myName (){
    let name="Luisa";
    console.log(name);
}
myName();

function funcion1(){
    let valor = 2;
    valor = valor + 3;
    return valor;
}
let resultado = funcion1();
console.log("el resultado es: " + resultado);

//declaración local
function funcionEjemplo(){
    let valorEjemplo = 2;
    valorEjemplo = valorEjemplo + 3;
    console.log("El resultado del valor es:" + valorEjemplo);
}
funcionEjemplo();


//declaracion global
let variableGlobal = 5;
function funcion3 (){
    let variableLocal = "El valor es: ";
    console.log(variableLocal + variableGlobal);
}
funcion3();


function funcion4 (valor = 4){
    let numero = 6;
    numero = numero * valor;
    return numero;
}
let salida = funcion4(2);
console.log("El producto es " + salida);

//funciones anonimas
let miFuncion0 = function (parametro){
    parametro = parametro * 2;
    return parametro;
}
console.log("LLamando la función anónima " + miFuncion0(4));

let miFuncion1 = function (){
    let parametro = 5;
    parametro = parametro * 2;
    return parametro;
}
console.log("Llamando a la función anónima 2: " + miFuncion1());


let funcion02 = function (caracteres){
    return "Hola " + caracteres;
}(" Lunes ");
console.log("El resultado es: " + funcion02);

//funciones flecha
let suma = (x,y) => {
    return x+y
};
let resultado1 = suma (5,3);
console.log("La suma es: " + resultado1);


// //ejercicio
// //función anónima
let calculoPrecioTotal = function (precio){
    let impuestos = 1.16;
    let gastoDeEnvio = 10;
    let precioTotal1 = (precio * impuestos) + gastoDeEnvio;
    return precioTotal1;
}
let precioTotal1 = calculoPrecioTotal(23.34);
console.log("El precio total es: " + precioTotal1);


//función normal
let calcularPrecioTotal = function funcion2 (precio){
    let impuestos = 1.16;
    let gastoDeEnvio = 10;
    let precioTotal2 = (precio * impuestos) + gastoDeEnvio;
    return precioTotal2;
}
let precioTotal2 = calcularPrecioTotal (23.34);
console.log("El precio  total es: "+ precioTotal2);

//funcion flecha 
let calculoPrecioTotalFlecha = (precio) => {
    let impuestos = 1.16;
    let gastosDeEnvio = 10;
    let precioTotal3 = (precio * impuestos) + gastosDeEnvio;
    return precioTotal3;
}
let precioTotal3 = calculoPrecioTotalFlecha (23.34);
console.log("El precio total es: " + precioTotal3); 

//otro ejercicio
let calculoPrecioTotalImpuesto = (precio,porcentajeImpuestos) => {
 let impuestos = 1.16;
 let gastosDeEnvio = 10;
 let precioConImpuesto = ((1 + porcentajeImpuestos)/100)*precio;
 let precioTotal =(precio*impuestos)+gastosDeEnvio
 let precioConImpuestoFinal = (precioTotal+precioConImpuesto);
 return precioConImpuestoFinal;
}
let precioConImpuestoFinal = calculoPrecioTotalImpuesto (23.34 , 16);
console.log("El precio total con impuestos es: " + precioConImpuestoFinal);


//objetos
let miObjeto = {
    nombre: "Juan", 
    edad: 30
};
let mensaje = "tunombre es: " + miObjeto.nombre;
mensaje += " tienes " + miObjeto ["edad"] + " años";
console.log(mensaje);
