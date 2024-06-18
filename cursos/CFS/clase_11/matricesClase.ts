import * as readlineSync from 'readline-sync';

function Azar(max: number): number {
    return Math.floor(Math.random() * max);
}

let filas = 3;
let columnas = 3;
let matriz: number[][] = [];



function cargar(matriz: number[][], f: number, c: number, numAzar: number) {
    let fil: number, col: number;
    for (fil = 0; fil < f; fil++) {
        matriz[fil] = [];
        for (col = 0; col < c; col++) {
            matriz[fil][col] = readlineSync.questionInt(`Ingrese el valor para la posición (${filas},${columnas}): `);
        }
    }
}

function mostrarMatriz(matriz: number[][], f: number, c: number) {
    let fil: number, col: number;
    let cadena: string;
    for (fil = 0; fil < f; fil++) {
        cadena = "";
        for (col = 0; col < c; col++) {
            cadena += ` ${matriz[fil][col]} `;
        }
        console.log(cadena);
    }
}

cargar(matriz, filas, columnas, 10);
mostrarMatriz(matriz, filas, columnas);
