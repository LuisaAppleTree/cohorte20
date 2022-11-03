let cupon = 0;
cupon = Number(prompt("Ingresa el nivel de tú cupon, platino = 1, oro = 2, plata = 3, bronce = 4"));
let precioOriginal = 0;
precioOriginal = Number(prompt("Ingresa el precio del producto"));
console.log(cupon);

switch (cupon) {
  case 1:
    document.write("Tú nivel es platino, recibes un 25% de descuento");
    document.write("Tú precio original es: " + precioOriginal);
    document.write(
      "Tu precio con descuento es: " + calcularDescuento(0.75, precioOriginal)
    );
    break;
  case 2:
    document.write("Tú nivel es oro, recibes un 20% de descuento");
    document.write("Tú precio original es: " + precioOriginal);
    document.write(
      "Tu precio con descuento es: " + calcularDescuento(0.80, precioOriginal)
    );
    break;
  case 3:
    document.write("Tú nivel es plata, recibes un 10% de descuento");
    document.write("Tú precio original es: " + precioOriginal);
    document.write(
      "Tu precio con descuento es: " + calcularDescuento(0.90, precioOriginal)
    );
    break;
  case 4:
    document.write("Tú nivel es bronce, recibes un 5% de descuento");
    document.write("Tú precio original es: " + precioOriginal);
    document.write(
      "Tu precio con descuento es: " + calcularDescuento(0.95, precioOriginal)
    );
    break;
    default:
    document.write("Ese no es un cupón válido");
    break;
}

function calcularDescuento(cupon, precio) {
  return cupon * precio;
}
