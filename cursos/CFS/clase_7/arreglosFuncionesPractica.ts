/*
Sumar Dos Arreglos PERO CON FUNCIONES

• Sumar los elementos de cada una de las posiciones
de dos arreglos y guardar el resultado en otro arreglo
• El arreglo tiene dimensión 6 y los números de los dos
vectores los carga el usuario
*/
import * as rls from "readline-sync";

let v1 : number[] = new Array(6);
let v2 : number[] = new Array(6);
let vSuma : number[] = new Array(6);

function cargarVector(v : number[], cantidad : number) {
    let indice : number;
        for (indice=0; indice<cantidad; indice++) {
            v[indice] = rls.questionInt(`Ingrese el valor de la posicion "${indice}": `);
        }
    }

function mostrarVector(v : number[], cantidad : number) {
    let indice : number;
        for (indice=0; indice<cantidad; indice++) {
            console.log(v[indice], " ");
        }
    }

function sumarVector(v1 : number[], v2 : number[], vSuma : number[], cantidad : number) {
    let indice : number;
        for (indice=0; indice<cantidad; indice++) {
        vSuma[indice] = v1[indice] + v2[indice];
        }
    }





console.log("Cargando v1");
cargarVector(v1, 6);
console.log("Cargando v2");
cargarVector(v2, 6);
sumarVector(v1, v2, vSuma, 6);
console.log("Valores de v1");
mostrarVector(v1, 6)
console.log("Valores de v2");
mostrarVector(v2, 6)
console.log("Valores de vSuma");
mostrarVector(vSuma, 6)



/* 
Invertir Arreglo PERO CON FUNCIONES

• Almacene en un arreglo de tamaño N los números ingresados
por el usuario
• La dimensión N también es ingresada por el usuario
• Muestre los números del arreglo pero del último al primero

20

Ejemplo:

v = 1, 3, 7, 9, 9, 5
La salida es: 5, 9, 9, 7, 3, 1
*/

let cantidad : number = rls.questionInt("Ingrese la cantidad de números:");
let indice : number;
let v : number[] = new Array(cantidad);

function invertirVector(v : number[], cantidad : number) {
    let indiceIzq : number = 0;
    let indiceDer : number = cantidad-1;
    let aux : number;
    while (indiceIzq < indiceDer) {
    aux = v[indiceIzq];
    v[indiceIzq] = v[indiceDer];
    v[indiceDer] = aux;
    indiceIzq++;
    indiceDer--;
    }
    }

function mostrarVectorInvertido(v : number[], cantidad : number) {
    let indice : number;
        for (indice=cantidad-1; indice>=0; indice--) {
        console.log(v[indice], " ");
        }
    }

    console.log("Cargando v");
cargarVector(v, cantidad);
console.log("Mostrando invertido");
mostrarVectorInvertido(v, cantidad);
console.log("Invierto los valores en el vector");
invertirVector(v, cantidad);
console.log("Mostrando vector");
mostrarVector(v, cantidad);