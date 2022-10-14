
const personas = ["Maria", "Dani", "Luis", "Juan", "Camila"];

////splice
//se borró  a Dani del arreglo.

personas.splice(1,1)
console.log(personas);

//Escribe un comando para remover a "Juan del arreglo"

personas.splice(2, 1);
console.log(personas);

//Escribe un comando para agregar a "Luis" al inicio del arreglo

personas.unshift("Luis");
console.log(personas);
//Escribe el comando para agregar tu nombre al final del arreglo

personas.push("Luisa");
console.log(personas);
//Escribe el comando para mostrar la posición de "Maria"

personas.indexOf("Maria");
console.log(personas.indexOf("Maria"));

////splice también permite susituir elementos del arreglo
// además permite añadir más de un elemento (separados con coma)

//primer número: índice del elemento a modificar
//número de elemntos a eliminar
//elementos a agregar

//splice funciona cómo unas tijeras: elimina y modifica con precisión
//splice modifica el arreglo original.



//otra manera para eliminar un elemnto del array:
//en este caso eliminaré a Camila
personas.splice(personas.indexOf("Camila"), 1);
console.log(personas);


//otra manera para añadir un elemento al inicio del arreglo:
//en este caso agregamos a Pepe
//en este caso no eliminamos ningún elemento porque 
//indicamos con el doble cero que no queremos borrar algo.

personas.splice(0, 0, "Pepe");
console.log(personas);







//investigar más a fondo indexOf


