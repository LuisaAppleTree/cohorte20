let precio = 0;
precio = Number(prompt("Ingresa el costo de tu producto"));
let resultado = calcularPrecioTotal (precio);
console.log(resultado);


function calcularPrecioTotal(costo){
return (costo * 1.16) + 10;
}

