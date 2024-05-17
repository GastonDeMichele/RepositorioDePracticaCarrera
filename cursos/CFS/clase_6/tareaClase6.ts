/*
Dado el siguiente arreglo
[4,7,9,3,1,45,67,23,29,78,11,16]
- Crear un programa que encuentre cuál es el número
más grande del arreglo e imprimirlo por consola
- Almacenar el número más grande en una variable
global y pasarlo a una función para determinar si el
número es par o impar
*/

let numerosArreglo: number[] = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];

let numMayor: number = 0;

function encuentraMayor(arreglo: number[]): number {
    let maxNum: number = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > maxNum) {
            maxNum = arreglo[i];
        }
    }
    return maxNum;
}

function esParOImpar(numero: number): void {
    if (numero % 2 === 0) {
        console.log(`El número ${numero} es par.`);
    } else {
        console.log(`El número ${numero} es impar.`);
    }
}

numMayor = encuentraMayor(numerosArreglo);

console.log(`El número más grande del arreglo es: ${numMayor}`);

// Determina si el número más grande es par o impar
esParOImpar(numMayor);
