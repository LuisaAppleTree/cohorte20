//const arreglo = [1,2,5,8,["Alberto", "pedro", "Manuel"], true, false, [["Manzana", "Pera", "Uva", "Naranja", ["Limón", -234, -5]],["Papa", "Calabaza", "Aguacate"],[255, 512, 1024]]];





let arr1 = [1,2,5,8,["Alberto", "pedro", "Manuel"],
true, false, [["Manzana", "Pera", "Uva", "Naranja", 
["Limón", -234, -5]],["Papa", "Calabaza", "Aguacate"],
[255, 512, 1024]]];

//1  "Alberto"
console.log(arr1[4][0]);
//2  "Papa"
console.log(arr1[7][1][0]);
//3  "Manuel"
console.log(arr1[4][2]);
//4  -5
console.log(arr1[7][0][4][2]);
//5  "Pera"
console.log(arr1[7][0][1]);
//6  "Limón"
console.log(arr1[7][0][4][0]);
//7  false
console.log(arr1[6]);
//8  512
console.log(arr1[7][2][1]);
//9  "Calabaza"
console.log(arr1[7][1][1]);
//10  255
console.log(arr1[7][2][0]);
//11  "Uva"
console.log(arr1[7][0][2]);
//12 -234
console.log(arr1[7][0][4][1]);
//13 "Aguacate"
console.log(arr1[7][1][2]);
//14 1024
console.log(arr1[7][2][2]);
//15   5
console.log(arr1[2]);
//16 true
console.log(arr1[5]);
//experimento one
console.log(arr1[7][0][4]);




