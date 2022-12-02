// Escribe ty código aquí

let ul = document.getElementById("ul");

let palabraIndividual = "Rosa";
const arregloPalabras = ["Petalo", "Hoja", "Arbol", "Margarita", "Gota", "Crisantemo" ]
let arreglo = [];

function palabrasGrandes (palabraIndividual, arregloPalabras) {
    for (let i = 0; i < arregloPalabras.length; i++) {
        if(arregloPalabras[i].length > palabraIndividual.length){
            arreglo.push(arregloPalabras[i])
        }
    }
    printList(arreglo)
}

function printList(arregloPalabras) {
    for (let i = 0; i < arregloPalabras.length; i++) {
        ul.innerHTML += `<li>${arregloPalabras[i]}</li>`
    }
}

palabrasGrandes(palabraIndividual, arregloPalabras);




//otra manera de mandar a pantalla todo el arreglo como lista. (sin el método para que se filtren las palabras.)
    listaPalabras = document.createElement ("ol");
    arregloPalabras.forEach ((elemento) => {
    let li = document.createElement ("li");
    listaPalabras.appendChild(li);
    li.innerHTML += elemento;
});
    document.getElementById("lista").appendChild(listaPalabras);

