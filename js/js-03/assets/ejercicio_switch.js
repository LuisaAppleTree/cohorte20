
let descuento=0;

let precio=Number(prompt("Escribe aquí el costo de tu producto para calcular tú descuento:"));
let cupon=prompt("Escribe aquí el nivel de tu cupón:");
cupon = cupon.toLowerCase();

if (isNaN(precio)){
    alert("Introduce un precio correcto");
} else 
{
    switch (cupon) {
        case "bronce":
            descuento = 0.05; //descuento del 5%
          break;
        case "plata":
            descuento = 0.1; //descuento del 10%
          break;
        case "oro":
            descuento = 0.2; //descuento del 20%
          break;
        case "platino":
            descuento = 0.25; //descuento del 25%
          break;

        default:
            alert("El cupón no es válido");
          break;
    }
    document.write("Tu precio sin descuento es: " + precio + "<br>");
    document.write(
        "Tu precio con descuento es: " + (precio - precio * descuento)
    );
}



//




