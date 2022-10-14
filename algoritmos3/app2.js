alert("Esto es una alerta");



//propiedades de arreglos
//length

const frutas = ["🍓", "Manzana", "Guayaba"];
console.log(frutas);

console.log(frutas.length);

/*método push: añade 1 o más elementos al
 final del array*/
 
 //push

 frutas.push("sandía", "Limon");
 console.log(frutas);

 /*unshift: agrega uno o más elemntos
 al inicio del arreglo (como push)*/

 frutas.unshift("Guanabana");
 console.log(frutas);

 /*Metodos sirven para realizar acciones 
 de manera repetitiva o automática*/

 //Metodos para quitar
 //Pop

 frutas.pop();
 console.log(frutas);
 
//Pop elimina solamente 1 elemnto del final del arreglo
//este elemento se puede reutilizar si lo deseamos
 /*todos estos metodos ya vistos
 modifican el arreglo original*/

 let elemento = frutas.pop();
 console.log(frutas);
 console.log(elemento);

//shift
//elimina elemento del inicio del arreglo
let elemento2 = frutas.shift()
console.log(frutas);
console.log(elemento2);

console.log(frutas[0]);


//nuevo día owo ojo
//index.of
console.log(frutas.indexOf("manzana"));
console.log(frutas.indexOf("Manzana"));

//reverse
frutas.reverse();
console.log(frutas);

frutas.reverse();
console.log(frutas);

//sort  
frutas.sort();
console.log(frutas);

//en el caso de números solo toma en cuenta el primer dígito
//por ello con números no es muy útil.
//objetos se ordenan en orden ascendente
//según orden de caracteres ascii

const numeros = [4, 567,2, 4566, 45, 78, 1];
numeros.sort();
console.log(numeros);

//algoritmo de comparación.
numeros.sort((a,b) => a -b);
console.log(numeros);

//otra manera de escribirla:
numeros.sort(function order(a,b){return a-b});
console.log(numeros);


//reverse (intento fallido)
const arreglo = [1,2,5,8,["Alberto", "Pedro", 
"Manuel"], true, false, [["Manzana", "Pera", "Uva", 
"Naranja", ["Limón", -234, -5]],["Papa", 
"Calabaza", "Aguacate"],[255, 512, 1024]]];
console.log(arreglo);

arreglo[4].reverse();
console.log(arreglo);

//intento de invertir array 4 (fallido).
function invertirArreglo(datos) 
{
    if (!Array.isArray(datos)) 
    {
        throw TypeError("El argumento debe ser un arreglo.");
    }
    return datos.reverse();
}

console.log(arreglo);

console.log();

let resultado = invertirArreglo(arreglo[4]);
console.log(resultado);
