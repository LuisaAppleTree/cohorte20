let constructor = function () {
    let valor0 = 0;
    let valor1 = 0;

   //declarando el objeto
    let persona = {
        nombre: "Pedro",
        apellido: "Lara",
        suma: function (a, b) {
            return a + b;
        },
        get nombre1 () {
            return this._nombre;
        },
        set nombre1 (nombre2) {
            this._nombre = nombre1;
        }
    };
    return persona;
};
let persona1 = constructor ();
persona1.nombre = "Carlos";
console.log(persona1.nombre);








