
let number = 0;
number = Number(prompt("Escribe un número"));

let porcentajeImpuestos = 0;
porcentajeImpuestos = Number(prompt("¿Cuál es el porcentaje de impuestos?"));

let resultado = calcularImpuesto (number, porcentajeImpuestos);
console.log(resultado);

function calcularImpuesto(cantidad, imp){
    return ((1 + imp )/ 100)* cantidad;
}




