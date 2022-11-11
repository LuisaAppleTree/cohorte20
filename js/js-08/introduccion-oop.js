
//2 maneras de definir un objeto:
//definición de objeto de manera literal, objeto literal
let persona = {
    nombre: "Juan",
    apellido: "Perez",
    nombreCompleto: function (){
        return "El nombre es " + this.nombre + " " + this.apellido;
 }

}

for (nombrePropiedad in persona) {
    console.log(nombrePropiedad);
    console.log("valor: " + persona[nombrePropiedad]);
    }

console.log(persona);
console.log(persona.nombre);
console.log(persona.nombreCompleto());
console.log(persona["apellido"]);
persona.tel = "555443322";
console.log(persona);
console.log(persona.tel);
delete persona.tel
console.log(persona);
let personaArreglo = Object.values(persona);
console.log(personaArreglo);
let personaString = JSON.stringify(persona);
console.log(personaString);
