/*
Ejercicios potencia: 
Realice un programa que devuelva la potencia de un número. 
La base y el exponente deben ser ingresados por teclado. 
Sólo deben admitirse exponentes mayores o iguales a cero. 
Recuerde que el resultado de un numero elevado a 0 es 1.
Separe la lógica de calcular la potencia utilizando métodos. 


Pseudocodigo:
1- declarar variables baseDate, expDate con datos ingresados por el usuario de base y altura.
2- Validar si el exponente es mayor a 0 con un while, si exponente es menor a 0 requerir nuevo numero.
3 - crear funcion baseExponente y dentro crear variable resultadoFinal y bucle for para crear metodo exponente: i = a 0; si i es menor a expDate, i ++ ;
4- dentro del for aplicar logica: resultado *= base (esto me almacena ); retornar resultado
5- if expDate es igual a 0 , mensaje: es igual a 1.
6- else: declarar variable resultadoFinal igualandola al nombre de la funcion con los parametros; 
   imprimir en consola en la siguiente linea la variable resultadoFinal.

   prueba: 
   3 exp 4 = 81
   5 exp 5 = 3125
   base 5 exp 0 = 1 

*/
import * as rls from "readline-sync";

let baseDate: number = rls.questionInt(`Ingresa numero base: `);

let expDate: number = rls.questionInt(`Ingresa numero de exponente, debe ser mayor o igual a 0:`);
while (expDate < 0) {
    expDate = rls.questionInt("El exponente debe ser mayor o igual a 0! Ingresa el numero nuevamente: ");
}

function baseExponente(base: number, exponente: number): number {
    let resultado: number = 1;
    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }
    return resultado;
}

if (expDate === 0) {
    console.log(`Resultado: 1`);
} else {
    let resultadoFinal: number = baseExponente(baseDate, expDate);
    console.log(`Resultado: ${resultadoFinal}`);
}

