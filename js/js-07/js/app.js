let titulo = document.getElementById("titulo");
let parrafo = document.getElementsByClassName("parrafo");

titulo.textContent = "Hola"

console.log(titulo.textContent);
console.log(parrafo[1].textContent);

// parrafo[1].style.color = "red";
// parrafo[1].style.backgroundColor = "blue";


parrafo[1].classList.add("coloresFeos");

//crear elementos
const padre = document.getElementById("padre");

const enlace = document.createElement("a");
enlace.href = 'https://google.com';
enlace.textContent = "Ir a Google";

padre.appendChild(enlace);

// document.body.appendChild(enlace);
// document.body.insertAdjacentElement("afterbegin", enlace);




