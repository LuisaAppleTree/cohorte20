

let hora = Number(prompt("Escribe la hora"));

if ((hora >= 6 ) && (hora <= 11))
{
    document.write("Buenos días");
}else if((hora >= 12 ) && (hora <= 18))
{
    document.write("Buenas Tardes");
}else if((hora >= 19) && (hora <= 23))
{
    document.write("Buenas Noches");
}else if((hora >= 0) && (hora <= 5))
{
    document.write("Dejame Dormir");
}else
{
    document.write("No ingresaste una hora valida");
}

