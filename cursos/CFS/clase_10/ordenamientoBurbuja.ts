import  {questionInt}  from "readline-sync";

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




/*
Ordenar por Dos Criterios

• Dados un arreglo de texto y dos
arreglos de enteros de tamaño n:
• nombres Como Texto
• años Como Entero y altura Como Entero
• Ordénelos los tres vectores a la vez
según los años, y en caso que haya
un empate, utilice la altura para
desempatar
• Tener en cuenta que los intercambios
tienen que cambiar los elementos de
los tres vectores a la vez
*/


let nombres: string[] = ["Ana", "Luis", "Maria", "Pedro"];
let años: number[] = [25, 30, 25, 20];
let altura: number[] = [160, 170, 150, 180];

function bubbleSortMulticriterio(nombres: string[], años: number[], altura: number[]) {
    let n: number = años.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            // Comparar años
            if (años[j] > años[j + 1] || (años[j] === años[j + 1] && altura[j] > altura[j + 1])) {
                // Intercambiar años
                let auxAño: number = años[j];
                años[j] = años[j + 1];
                años[j + 1] = auxAño;

                // Intercambiar altura
                let auxAltura: number = altura[j];
                altura[j] = altura[j + 1];
                altura[j + 1] = auxAltura;

                // Intercambiar nombres
                let auxNombre: string = nombres[j];
                nombres[j] = nombres[j + 1];
                nombres[j + 1] = auxNombre;
            }
        }
    }
}





/*teoria interesante sacada de chatgpt
Vamos a detallar cómo Bubble Sort logra poner el elemento más grande en su posición correcta al final del array después de la primera pasada.

### Funcionamiento de Bubble Sort

Bubble Sort funciona comparando elementos adyacentes y realizando intercambios si están en el orden incorrecto.
 Este proceso se repite, "burbujeando" el elemento más grande hacia el final del array en cada pasada completa del bucle interno.

### Ejemplo Paso a Paso

Consideremos un array: [5, 3, 8, 1, 4].

#### Bucle Externo y Interno

El bucle externo (for (let i = 0; i < n - 1; i++)) controla el número de pasadas necesarias, 
mientras que el bucle interno (for (let j = 0; j < n - 1 - i; j++)) realiza las comparaciones e intercambios.

#### Primera Pasada (i = 0)

1. *Comparar arr[0] y arr[1]*: 5 y 3
   - 5 > 3 → intercambiar → array: [3, 5, 8, 1, 4]
2. *Comparar arr[1] y arr[2]*: 5 y 8
   - 5 <= 8 → no intercambiar
3. *Comparar arr[2] y arr[3]*: 8 y 1
   - 8 > 1 → intercambiar → array: [3, 5, 1, 8, 4]
4. *Comparar arr[3] y arr[4]*: 8 y 4
   - 8 > 4 → intercambiar → array: [3, 5, 1, 4, 8]

### Resultado de la Primera Pasada

Después de la primera pasada, el array es [3, 5, 1, 4, 8]. El 8 se ha movido a su posición final.
 Esto ocurre porque cada vez que el bucle interno encuentra un elemento mayor que su siguiente, lo intercambia,
  "empujando" el elemento mayor hacia la derecha. Dado que el elemento mayor se intercambia en cada comparación,
   inevitablemente se mueve al final del array en la primera pasada.

### Visualización del Proceso

Para visualizarlo mejor:

- *Estado Inicial*: [5, 3, 8, 1, 4]
- *Comparar 5 y 3*: [3, 5, 8, 1, 4] (5 es mayor que 3, se intercambian)
- *Comparar 5 y 8*: [3, 5, 8, 1, 4] (5 es menor que 8, no se intercambian)
- *Comparar 8 y 1*: [3, 5, 1, 8, 4] (8 es mayor que 1, se intercambian)
- *Comparar 8 y 4*: [3, 5, 1, 4, 8] (8 es mayor que 4, se intercambian)

El 8 "burbujea" hacia la última posición porque cada comparación/intercambio lo mueve un paso más cerca de su posición final.

### Subsecuentes Pasadas

El bucle externo repite el proceso, pero cada vez con una menor cantidad de elementos, ya que el mayor elemento de la iteración actual
 se ha colocado en su lugar correcto:

- *Segunda Pasada (i = 1)*: Procesa los primeros n - 1 - 1 elementos, "burbujeando" el siguiente mayor al penúltimo lugar.
- *Tercera Pasada (i = 2)*: Procesa los primeros n - 1 - 2 elementos, y así sucesivamente.

### Resumen

El bucle externo controla el número de pasadas necesarias, mientras que el bucle interno realiza las 
comparaciones e intercambios necesarios para "burbujea" el elemento mayor al final del array en cada pasada.
 La condición n - 1 - i asegura que en cada iteración del bucle externo, el número de elementos a comparar se reduce porque
  los elementos al final del array ya están ordenados.


*/




function escribirConIndice(a: number[], aux: number[], n: number) {
    // Variable 'i' se usará como contador en el bucle.
    let i: number;

    // 'cadena' es una cadena de texto que comenzará con un espacio en blanco.
    // Aquí se irán concatenando los elementos del arreglo 'a' seleccionados por los índices en 'aux'.
    let cadena: string = " ";

    // Bucle for que se ejecuta desde 0 hasta n-1.
    // 'n' indica la cantidad de elementos de 'aux' que vamos a procesar.
    for (i = 0; i < n; i++) {
        // En cada iteración:
        // - 'aux[i]' nos da el índice en el arreglo 'a'.
        // - 'a[aux[i]]' nos da el valor en 'a' en la posición especificada por 'aux[i]'.
        // - `${a[aux[i]]} ` convierte ese valor en una cadena y agrega un espacio.
        // - Esta cadena se concatena a 'cadena'.
        cadena += `${arr[aux[i]]} `;
    }

    // Imprime la cadena resultante en la consola.
    console.log(cadena);
}

// Ejemplo de uso de la función:
// Arreglo de números originales.
let arr = [10, 20, 30, 40, 50];

// Arreglo de índices que indica el orden en que queremos los elementos de 'a'.
let aux = [3, 0, 4, 1, 2];

// Número de elementos que queremos procesar.
let n = 5;

// Llamada a la función con los arreglos 'a', 'aux' y el número 'n'.
escribirConIndice(a, aux, n);

// Salida esperada en la consola: " 40 10 50 20 30 "