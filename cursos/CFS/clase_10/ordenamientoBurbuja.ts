import { questionInt } from "readline-sync";

function cargar(arreglo: number[], cantidad: number, numAzar: number) {
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
    for (i = 2; i < cantidad; i++) {
        for (j = 0; j < (cantidad - 1); j++) {
            if (comparar(arreglo, j, j + 1) == 1) {
                intercambiar(arreglo, j, j + 1);
            }
        }
    }
}

function comparar(arreglo: number[], i: number, j:
    number): number {
    let comparacion: number;
    if (arreglo[i] === arreglo[j]) {
        comparacion = 0;
    } else if (arreglo[i] < arreglo[j]) {//inverti los signos para que devuelva lo contrario e invierta la funcion.
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
cargar(a, lim, 100);
escribirEnUnaLinea(a, lim);
burbuja(a, lim);
escribirEnUnaLinea(a, lim);

