/*Implementar una Calculadora
Implemente un método llamado calcularResultado que reciba por parámetros los dos números y la opción y retorne el resultado de la operación

*/

let numero1: number = 10;
let numero2: number = 5;
let opcionMenu: number = 1;

let guiones = dibujarGuiones(40);
console.log(guiones);

console.log(dibujarGuiones(30));

let resultado = calcularResultado(numero1, numero2, opcionMenu);
console.log("El resultado es:", resultado);

dibujarGuionesN(50);

function dibujarGuiones(cantidad: number): string {
    let x: number, linea: string = "";
    for (x = 1; x <= cantidad; x++) {
        linea += "-";
    }
    return linea;
}

function dibujarGuionesN(cantidad: number): void {
    let guiones = dibujarGuiones(cantidad);
    console.log(guiones);
}

function calcularResultado(numero1: number, numero2: number, opcionMenu: number): number {
    let resultado: number = 0;
    if (opcionMenu == 1) {
        resultado = numero1 + numero2;
    } else if (opcionMenu == 2) {
        resultado = numero1 - numero2;
    }
    return resultado;
}



/* Ejercicio: Múltiplos
Cree un método esMultiplo con 2 parámetros que devuelva el valor lógico verdadero o falso según si el primer número que se indique como parámetro es múltiplo del segundo 
Recuerde que un numero es múltiplo de otro si al dividirlo su resto es cero
Recuerde que la operación mod permite saber si el resto de una división es cero


*/

function multiploTrue(numero: number, divisor: number): boolean {
    return numero % divisor === 0;
}

console.log(multiploTrue(10, 2));  // Devuelve true, ya que 10 es múltiplo de 2 (10 / 2 = 5)
console.log(multiploTrue(10, 3));  // Devuelve false, ya que 10 no es múltiplo de 3 (10 / 3 = 3 con resto 1)


/*Ejercicio: Divisores
Implemente un método llamado cantidadDeDivisores que reciba un número entero y devuelva la cantidad de divisores 
Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8, 16, por lo que la respuesta debería ser 5 
Re-utilice el método esMultiplo implementado para el ejercicio anterior


pseudocodigo:
Definimos una función llamada cantidadDeDivisoresque toma un número como parámetro.

Inicializamos una llamada variable cantidadque llevará la cuenta de la cantidad de divisores encontrados. Comenzamos con un valor de 0.

Luego, usamos un bucle forpara iterar sobre todos los números desde 1 hasta el número dado.

Dentro del bucle, para cada número i, usamos el método esMultiploque definimos anteriormente para verificar si numeroes divisible por i. Si lo es, incrementamos la variable cantidad.

Después de iterar sobre todos los números desde 1 hasta numero, devolvemos el valor de cantidad, que representa la cantidad total de divisores que tiene el número dado.
*/


function cantidadDeDivisores(numero: number): number {
    let cantidad: number = 0;


    for (let i = 1; i <= numero; i++) {
        if (multiploTrue(numero, i)) {
            cantidad++;
        }
    }

    return cantidad;
}

// Ejemplo de uso
console.log(cantidadDeDivisores(16)); // Debería devolver 5, ya que 16 tiene 5 divisores: 1, 2, 4, 8 y 16






