/*
Ejercicio – Arreglo de Números

•Construya un algoritmo que tenga un arreglo
de números y se los muestre al usuario
•El arreglo debe ser llamado num
•El arreglo num debe contener los siguientes
datos: 20, 14, 8, 0, 5, 19 y 24.
• Mostrar los valores resultantes del arreglo
*/

//Ejercicio – Arreglo de Numeros - Código

// Algoritmo ArregloNumeros
let num : number[] = new Array (7) ;
let indice: number = 0;
num[0] = 20;
num[1] = 14;
num[2] = 8;
num[3] = 0;
num[4] = 5;
num[5] = 19;
num[6] = 24;
while (indice < 7) {
console.log ("La posicion del numero", indice, " es ", num[indice]);
indice++;
}



/*
Ejercicio – Números Deseados

• Construya un algoritmo que tenga un arreglo de

dimensión 5 y llénelo con los números que el usuario

desee.

• Muestre los números del arreglo al usuario
*/

// Algoritmo NumerosDeseados
import * as rls from "readline-sync";
let nroDeseadoArreglo : number[] = new Array (5);
let nro : number, index: number;
for (index = 0; index < 5; index++) {
nro = rls.questionInt(`Indique el numero que desea incorporar en la posicion ${index}: `);
nroDeseadoArreglo[index] = nro;
}
for (index = 0; index < 5; index++) {
console.log(`El numero en la posicion ${index} es ${nroDeseadoArreglo[index]}`);
}



/*
Ejercicio – Nombres Deseados

•Construya un algoritmo que tenga un arreglo
de dimensión deseada por el usuario y llénelo
con los nombres que el usuario desee

•Crear un arreglo de las posiciones que desee
el usuario y llenarlo con nombres de personas
*/

// Algoritmo NombresDeseados
let dimensionArreglo : number = rls.questionInt(`Ingrese la dimension del arreglo: `);
let nombrePersonas : string[] = new Array (dimensionArreglo);
let indi : number;
for (indi = 0; indi < dimensionArreglo; indi++) {
nombrePersonas[indi] = rls.question(`Ingrese el nombre que quiere poner en el lugar ${indi}: `);
}
for (indi = 0; indi < dimensionArreglo; indi++) {
console.log(`La persona que ingreso en la posicion ${indi} es: ${nombrePersonas[indi]}`);
}

