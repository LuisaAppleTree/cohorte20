//suma


function suma (){
    let num1 = 5
    let num2 = 7
    let resultado =  (num1 + num2);
    return resultado
}
console.log("La suma es" + suma());

//resta

function resta (){
    let num1 = 5
    let num2 = 7
    let resultado =  (num1 - num2);
    return resultado
}
console.log("La resta es" + resta());

//multiplicacion

function multiplicacion (){
    let num1 = 5
    let num2 = 7
    let resultado =  (num1 * num2);
    return resultado
}
console.log("La multiplicacion es" + multiplicacion());


//division

function division (){
    let num1 = 10
    let num2 = 2
    let resultado =  (num1 / num2);
    return resultado
}
console.log("La division es" + division());

//residuo 

function residuo (){
    let num1 = 7
    let num2 = 2
    let resultado =  (num1 % num2);
    return resultado
}
console.log("El residuo es" + residuo());

//decremento, incremento

function incremento (){
    let num1 = 5;
    let resultado =  (num1++);
    return resultado
}
console.log("El incremento es" + incremento());

//En este caso la respuesta es 6 pues se incrementa 1 valor a 5

function incremento2 (){
    let num1 = 5;
    let resultado =  (++num1);
    return resultado
}
console.log("El incremento es" + incremento2());

function decremento(){
let num1 = 5;
let resultado = (--num1);
return resultado;
}
console.log("el decremento es:" + decremento());

//convierte en texto un número (realiza una concatenación)
//parseint los números NO se convierten en texto, los números se meten como números

function suma2(){
    let suma2 = parseInt (prompt ("El numero que vamos a sumar es"));
    let suma3 = parseInt (prompt ("El numero que vamos a sumar es"));
    let resultado = (suma2 + suma3);
    return resultado;

}
console.log("La suma es:" + suma2());


// prompt: permite ingresar un valor

/*if ayuda a comparar 2 o más variables
if es parecido a else*/

// bolean indica verdadero o falso.
//anotaciones desde aquí

//if y else

function edad (){
    let miEdad = 8;
    if (miEdad >= 18) {
        console.log ("eres mayor de edad");
    } else { console.log ("No eres mayor de edad" );}
}
edad()

//conjunciones
//operador and &&

function conjunciones() {
    let valor1 = false;
    let valor2 = false;
    if (valor1 && valor2) {
        console.log("El valor 1 y el valor 2 son verdaderos");
    } else {
     console.log("Un valor es falso");
    }
}

conjunciones();

//operador or ||

function disyuncion(){
    let valor1 = true;
    let valor2 = true;
    if (valor1 || valor2){
        console.log("El operador or es verdadero");
    } else {
        console.log("El operador or es falso");
    }
}
disyuncion();



//operador not !!

function negacion(){
    let valor1 = true;
    if(!valor1){
        console.log("El valor es " + valor1);
    } else {
        console.log("El valor negado es" + valor1);
    }
}
negacion();

/*console.log("El valor es " + valor1) aqui se concatena 
añadiendo el + */
//operador not !!
function negacion(){

    let valor1 = false;
    if((!valor1)){
        console.log("El valor es " + valor1);
    }else{
        console.log("El valor negado es" + valor1);
    }
}
negacion();

// hasta acá funciona punto de control xD

