

//forEach
const numeros = [2,4,6,57,200];
let suma = 0;

// numeros.forEach(function sumar(elemento){
//     suma += elemento;
// });

// console.log(suma);

//con función flecha
numeros.forEach((el, indice, arreglo) => {
    console.log(el,indice, arreglo);
});

//map
let nuevoArr = numeros.map((el) => {
  return el*el
});

console.log(nuevoArr);

//filter
const frutas = ["papaya", "manzana", "manzana", "uva"];

let frutaFiltrada = frutas.filter((fruta) => frutas.lenght < 3);

console.log(frutaFiltrada);


