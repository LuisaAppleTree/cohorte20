

let arr = [
    [1, 2, 3], 
    [4, 5, 6],
    [7, 8, 9]
];


//  for
// for (let i = 0; i <= 2; i++){
//     for (let j = 0; j <= 2; j++ ){
//         console.log(arr [i][j]);
//     }
//    console.log("----------------");
// }


//while
// let contador = 0;
// while(contador < 10 ){

//     contador = contador+1;
//     console.log(contador);
// }
// console.log(contador);


//do-while
// let contador = 0;
// do{
// console.log(contador);
// contador ++;
// }while(contador <= 10);


//for dentro de while
// let i = 0;
// while(i < 3){

//     for (let j = 0; j <= 2; j++ ){
//        console.log(arr [i][j] );

//     }
//     i++;
//     console.log("----------------");
// }


//do,for, while
let i = 0;
do {
    for (let j = 0; j <= 2; j++) {
        console.log(arr[i][j]);
    }
    i++;
    console.log("-------------");
}while (i <= 0);


//
// let cadena = "hola que tal";
// console.log(cadena.length);
