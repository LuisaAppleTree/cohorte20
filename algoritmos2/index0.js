let miVariable = prompt("Cual es tu nombre:");
function saludos() {
  alert(miVariable);
}
saludos(miVariable);

function suma() {
  let valor1 = 4;
  let valor2 = 7;
  return valor1 + valor2;
}
console.log("El resultado de la suma" + suma());

function resta() {
  let valor1 = 10;
  let valor2 = 5;
  return valor1 - valor2;
}
console.log("El resultado de la resta:" + resta());

function division() {
  let valor1 = 10;
  let valor2 = 2;
  return valor1 / valor2;
}
console.log("El resultado de la division:" + division());

function multiplicacion() {
  let valor1 = 15;
  let valor2 = 2;
  return valor1 * valor2;
}
console.log("El resultado de la multiplicacion:" + multiplicacion());

function residuo() {
  let valor1 = 7;
  let valor2 = 2;
  let resultado = valor1 % valor2;
  return resultado;
}
console.log("el residuo es " + residuo());

function logico() {
  let valido = true;
  console.log("el valor boleano es:" + valido);
}
logico();

//boleanos
function logico() {
    let valido = 5;
    let valido2 = 3;
    if (valido > valido2) {
        console.log("el mayor es" + valido2);

    }
    logico ();
}