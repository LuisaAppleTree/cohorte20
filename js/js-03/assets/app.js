//control de flujo

let edad = Number(prompt ("Escribe tu edad"));


if ((edad > 0) && (edad <= 17)){
   document.write("Tas chiquito");
}else if(edad === 18){
    document.write("Eres mayor de edad");
}else if(edad > 18){
    document.write("Tas ruco");
}else if(edad < 0){
    document.write("Es un número negativo");    
}else{
    document.write("Eso no es un número valido");
}

//operadores lógicos
// console.log(edad < 17 && edad > 0);

let dia = 1;

if(dia === 1)
{
 document.write("Lunes")   
}else if(dia === 2)
{
    document.write("Martes")
}else if(dia === 3)
{
    document.write("Miercoles")
}else if(dia === 4)
{
    document.write("Jueves")
}else if(dia === 5)
{
    document.write("Viernes")
}else if(dia === 6)
{
    document.write("Sábado")
}else if(dia === 7)
{
    document.write("Domingo")
}else {
    document.write("No es un número válido");
}


