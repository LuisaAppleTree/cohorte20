//insertar imagen a través de DOM
//1 llamar al contenedor
let imagen = document.getElementsByClassName("contenedor")[0];

//2 crear al elemento
let nuevaImg = document.createElement("img");

//3 modificar atributos
nuevaImg.src = "https://placeimg.com/200/200/nature";
nuevaImg.alt = "Imagen de naturaleza";

//4 Insertar el elemento
imagen.appendChild(nuevaImg);

//otra manera

//1 llamar al elemento padre
let imagen2 = document.getElementById("img");

//2
imagen2.innerHTML = 
`<img src= "https://placeimg.com/200/200/nature" alt="Imagen de animales" />`;

 //ejercicio

const nombres = ["Pedro", "Juan", "Sonia", "Miguel"];
lista = document.createElement("ul");
nombres.forEach((elemento) => {
    let li = document.createElement("li");
    lista.appendChild(li);
    li.innerHTML += elemento;
});
document.getElementById("lista").appendChild(lista);

