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
/*let num : number[] = new Array (7) ;
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
/*let nroDeseadoArreglo : number[] = new Array (5);
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
/*let dimensionArreglo : number = rls.questionInt(`Ingrese la dimension del arreglo: `);
let nombrePersonas : string[] = new Array (dimensionArreglo);
let indi : number;
for (indi = 0; indi < dimensionArreglo; indi++) {
nombrePersonas[indi] = rls.question(`Ingrese el nombre que quiere poner en el lugar ${indi}: `);
}
for (indi = 0; indi < dimensionArreglo; indi++) {
console.log(`La persona que ingreso en la posicion ${indi} es: ${nombrePersonas[indi]}`);
}
*/

/* almacene en un arreglo de tamaño N los numeros ingresados por el usuario
la dimension de n tambien es ingresada por el usuario */
/*
let DimArr: number = rls.questionInt(`Ingrese el numero que indicara la dimension del arreglo: `);
let arreglo: number[]= new Array(DimArr);

for (let i = 0 ; i < DimArr; i++) {
    arreglo[i] = rls.questionInt(`Ingrese numero que va en la posicion ${i}: `);
}

for(let i = DimArr - 1; i > -1 ; i--){
    console.log(arreglo[i]);
};

*/

/*
Sumar Dos Arreglos

• Sumar los elementos de cada una de las posiciones
de dos arreglos y guardar el resultado en otro arreglo
• El arreglo tiene dimensión 6 y los números de los dos
vectores los carga el usuario
*/

let v1: number[] = new Array(6);
let v2: number[] = new Array(6);
let vSuma: number[] = new Array(6);

for (let i = 0; i < 6 ; i++) {
    v1[i] = rls.questionInt(`Ingresa numero que se ubica en la posicion ${i} del V1: `)
}
for (let i = 0; i < 6 ; i++) {
    v2[i] = rls.questionInt(`Ingresa  numero que se ubica en la posicion ${i} del V2: `)
}

for (let i = 0; i < 6 ; i++) {
    vSuma[i] = v1[i] + v2[i]
    console.log (`vSuma[ ${i} ] = ${vSuma[i]}`);
}









/*
Tipos de Números en Arreglo

• Almacene en un arreglo de dimensión N números (la
cantidad es ingresada por el usuario)
• Muestre cuántos números son positivos, cuántos son
negativos y cuántos ceros hay

26

Ejemplo:
v = 0, -7, -9, 1, 0, 0
La salida es: 1 positivos, 2 negativos y 3 ceros
*/

let dimenArray: number = rls.questionInt(`Ingrese la longitud del arreglo: `);
let v: number[] = new Array(dimenArray);

for (let i = 0; i < dimenArray; i++){
    v[i] = rls.questionInt(`Ingresa numeros a ser evaluados: `)
}

let numP: number = 0;
let numN: number = 0;
let numC: number = 0;

for (let i = 0; i <= dimenArray -1; i++) {//prueba con mayor o igual, debos restar uno a la longitud.
    if (v[i]<0) {
        numN++
    } else if(v[i]>0) {
        numP++
    } else{
        numC++
    }
}

console.log(`numeros positivos = ${numP}`);
console.log(`numeros negativos = ${numN}`);
console.log(`numeros 0 = ${numC}`);



