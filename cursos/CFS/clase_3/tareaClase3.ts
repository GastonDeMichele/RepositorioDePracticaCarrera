/* Ejercicio – Mayor de Tres
pseudocodigo

1. Solicitar al usuario que ingrese tres números y almacenarlos en las variables numero1, numero2 y numero3.
2. Si numero1 es mayor que numero2 y numero3, entonces:
3. Imprimir "El mayor número es numero1".
4. Sino, si numero2 es mayor que numero3, entonces:
5. Imprimir "El mayor número es numero2".
6. Sino:
7. Imprimir "El mayor número es numero3".
*/
import * as rls from "readline-sync";

let numeroUno: number = rls.questionInt(`Ingrese el primer numero: `);
let numeroDos: number = rls.questionInt(`Ingrese el segundo numero: `);
let numeroTres: number = rls.questionInt(`Ingrese el tercer numero: `);

let numeroMayor: number;

if (numeroUno > numeroDos && numeroUno > numeroTres) {
    numeroMayor = numeroUno;
} else if (numeroDos > numeroTres) {
    numeroMayor = numeroDos;
} else {
    numeroMayor = numeroTres;
}

console.log(`El mayor de los tres números es: ${numeroMayor}`);

/*
Pruebas de Escritorio:
Caso de prueba 1:
Entrada:
numero1 = 5
numero2 = 10
numero3 = 7
Salida esperada:
"El mayor número es 10"
Caso de prueba 2:
Entrada:
numero1 = 15
numero2 = 8
numero3 = 15
Salida esperada:
"El mayor número es 15"
*/



/*Ejercicio – Par/Impar
Pseudocodigo:
Inicio

1. Solicitar al usuario que ingrese un número y almacenarlo en la variable numero.
2. Si: numeroIngresado es igual a 0, entonces:
3. Imprimir "El número ingresado es 0".
4. Sino, si: el residuo de dividir numeroIngresado entre 2 es igual a 0, entonces:
5. Imprimir "El número ingresado es par".
6. Sino:
7. Imprimir "El número ingresado es impar".
8. fin.

*/

let numeroIngresado: number = rls.questionInt(`Ingrese un numero: `);

if (numeroIngresado === 0) {
    console.log(`El número ingresado es 0.`)
} else if(numeroIngresado % 2 === 0) {
    console.log(`El número ingresado es par.`)
}else{
    console.log(`El número ingresado es impar.`)
}

/*
Caso prueba 1:
numeroIngresado = 6
salida esperada:
"El número ingresado es par"

Caso prueba 2:
numeroIngresado = 3
salida esperada:
"El número ingresado es impar"

Caso prueba 3:
numeroIngresado = 0
salida esperada:
"El número ingresado es 0. "
*/
