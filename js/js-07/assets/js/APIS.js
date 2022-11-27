

// let url = 'https://pokeapi.co/api/v2/pokemon/25';
// const pokedex = () => {
//     fetch(url)
//     .then((datos) => {return datos.json()})
//     .then((pokemon) => {console.log(pokemon);})
//     .catch(error => console.log(error))
// };

// pokedex();


const nombres = () => {
    const nombres = ["Pepe", "Pancho", "Maria"];

    // setTimeout(() => {

    // }, 3000);

    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(true){
                resolve (nombres);
            }else{
                reject ("no hay nombres");
            }
            
        }, 3000)
    });
}

nombres().then((nombres => console.log(nombres)));
console.log(nombres());

//console.log(nombres()[0]);

// const obtenerNombre = async () => {
//     let nombres = await nombres();
//     console.log(nombres);
// }
//  obtenerNombre();

const cartaPokemon = document.getElementById("pokemon");
const nombrePokemon = document.getElementById("nombre");
const imagen = document.getElementById ("img");

 

 let pokedex = async (numero) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${numero}`;
    try {

        const respuesta = await fetch (url);
        const pokemon = await respuesta.json();

        console.log(pokemon.name);

        const datos = {
            nombre: pokemon.name,
            imagen: pokemon.sprites.other['official-artwork'].front_default,
        }

        nombrePokemon.textContent = datos.nombre;
        // console.log(pokemon.sprites.other['official-artwork'].front_default);
        imagen.innerHTML = 
        `<img src="${datos.imagen}" alt="imagen de ${datos.nombre}" width="250"/>`;

    } catch (error) {
        
    }
 }

 


 form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const valor = document.getElementById("idP").value;
    console.log(valor);

    pokedex(valor);
    form.reset();
 });


