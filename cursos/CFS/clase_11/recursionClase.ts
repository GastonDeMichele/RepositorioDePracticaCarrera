/*Teoría de Recursión

La recursión es una técnica en programación donde una función se llama a sí misma para resolver un problema. Es útil para problemas que pueden dividirse en subproblemas más pequeños del mismo tipo. Cada llamada recursiva resuelve una parte del problema y las soluciones parciales se combinan para obtener la solución completa.

Un algoritmo recursivo consta de dos partes:
1. *Caso base*: La condición que detiene las llamadas recursivas, evitando un ciclo infinito.
2. *Llamada recursiva*: La función se llama a sí misma con un subconjunto del problema original.

### Ejemplo: Factorial

El factorial de un número \( n \) (denotado como \( n! \)) es el producto de todos los enteros positivos menores o iguales a \( n \). Por definición:
- \( 0! = 1 \)
- \( n! = n \times (n-1)! \) para \( n > 0 \)



### Implementaciones en TypeScript

#### Factorial Recursivo

typescript*/
function calcularFactorialRec(n: number): number {
    let resultado: number = 1;
    if (n == 0) {
        resultado = 1;  // Caso base
    } else {
        resultado = n * calcularFactorialRec(n - 1);  // Llamada recursiva
    }
    return resultado;
}

/*
*Explicación*:
1. Caso base: Si \( n \) es 0, el factorial es 1.
2. Llamada recursiva: Si \( n \) es mayor que 0, la función se llama a sí misma con \( n - 1 \) y multiplica el resultado por \( n \).

#### Factorial Iterativo

typescript*/
function calcularFactorialSec(n: number): number {
    let resultado: number = 1;
    for (let indice: number = 2; indice <= n; indice++) {
        resultado = resultado * indice;  // Acumula el producto de los números
    }
    return resultado;
}


/**Explicación*:
1. Se inicializa el resultado a 1.
2. Se utiliza un bucle for que va desde 2 hasta \( n \).
3. En cada iteración, se multiplica el resultado por el índice actual.

### Comparación

- *Recursivo*: La solución es más intuitiva para problemas que se definen de manera recursiva. Sin embargo, puede consumir más memoria debido a la pila de llamadas.
- *Iterativo*: Suele ser más eficiente en términos de memoria y es más adecuado para problemas donde la recursión no aporta claridad adicional.

Ambos enfoques son válidos, y la elección depende del contexto y las restricciones del problema específico.*/