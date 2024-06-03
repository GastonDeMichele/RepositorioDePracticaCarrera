import { questionInt } from "readline-sync";

function cargar(arreglo: number[], cantidad: number) {
    let i: number;
    for (i = 0; i < cantidad; i++) {
        arreglo[i] = questionInt(`Ingrese numero en la posicion "${i}": `);
    }
}

function escribirEnUnaLinea(arreglo: number[], cantidad: number) {
    let i: number;
    let vector: string = "";
    for (i = 0; i < cantidad; i++) {
        vector += `${arreglo[i]} `;
    }
    console.log(vector);
}

function burbuja(arreglo: number[], cantidad: number) {
    let i: number, j: number;
    for (i = 1; i < cantidad; i++) {  // Corregido el inicio del bucle i
        for (j = 0; j < (cantidad - i); j++) {  // Corregido el límite del bucle j
            if (comparar(arreglo, j, j + 1) == 1) {
                intercambiar(arreglo, j, j + 1);
            }
        }
    }
}

function comparar(arreglo: number[], i: number, j: number): number {
    let comparacion: number;
    if (arreglo[i] === arreglo[j]) {
        comparacion = 0;
    } else if (arreglo[i] > arreglo[j]) {  // Cambiado para orden descendente
        comparacion = -1;
    } else {
        comparacion = 1;
    }
    return comparacion;
}

function intercambiar(arreglo: number[], i: number, j: number) {
    let aux: number;
    aux = arreglo[i];
    arreglo[i] = arreglo[j];
    arreglo[j] = aux;
}

let lim: number = 10;
let a: number[] = new Array(lim);
cargar(a, lim);
escribirEnUnaLinea(a, lim);
burbuja(a, lim);
escribirEnUnaLinea(a, lim);
