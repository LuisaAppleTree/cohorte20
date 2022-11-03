

let matrizA = [
    [2, 5, 6],
    [5, 9, 7],
    [6, 4, 3]
];

let matrizB = [
    [5, 3, 2],
    [8, 5, 4],
    [1, 4, 9]
];

let matrizC = [
    [],[],[]
];

//i = filas, j=columnas

for (let i = 0; i <= 3; i++)
{
    for (let j = 0; j <= 2; j++)
    {
       matrizC = (matrizA[i][j] * matrizB[j][i]);
       console.log(matrizC);
    }
    console.log("--------------");
}



