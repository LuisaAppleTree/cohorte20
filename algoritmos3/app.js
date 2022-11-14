//alert("funciona");

let nombre = "Luisa"

console.log(nombre);

//arreglos
//manera larga de crear arreglo
let arr1 = new Array("Raul", 3, true);
console.log(arr1);

//manera corta de crear arreglo
let arr2 = ["Raul", "CDMX", 600];
console.log(arr2);

//arreglos se pueden declarar vacíos
//larga
let arr3 = [];
console.log(arr3);

//corta
let arr4 = new Array();
console.log(arr4);


/*modificar valores o agregar un valor 

    /*para mostrar un numero en especficio tomar en cuenta 
el indice, dentro del console log agregar los corchetes y 
solicitar el valor ubicado */

let arr5 = new Array("Hola", 666, true);
console.log(arr5);

console.log(arr5[1]);
console.log(arr5[2]);
console.log(arr5[3]);


//agregar valor a un valor aun no declarado
let arr9 = new Array("Hola", 666, true);
console.log(arr5);

console.log(arr9[1]);
console.log(arr9[2]);
console.log(arr9[3]);
arr9[3] = 420;
console.log(arr9[3]);


//arreglos se pueden declarar dentro de variable const

const arr6 = [];
console.log(arr6);
arr6[7]="Buenas"
console.log (arr6);


/*arreglos permiten guardar multiples y diferentes
tipos de datos arreglos dentro de otro arreglo se 
llama arreglo matriz*/

const arr7 = [1, "Adiós", false, [1]];
console.log(arr7[2]);
console.log(arr7[3][0]);


//añadir valor
arr7[10] = 5;
console.log(arr7);

arr7[10] = "Rosa";
console.log(arr7);



