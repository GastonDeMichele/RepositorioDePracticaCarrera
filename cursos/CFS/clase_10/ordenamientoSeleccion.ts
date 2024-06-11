function seleccion(arreglo: number[], cantidad: number) {
  let i: number, j: number, posicion: number;
  for (i = 0; i < (cantidad - 1); i++) {
    posicion = i; // Inicialmente, la posición del menor es i
    for (j = i + 1; j < cantidad; j++) {
      // Compara el elemento en 'posicion' con el elemento en 'j'
      if (comparar(arreglo, posicion, j) == 1) {
        posicion = j; // Actualiza la posición del menor elemento
      }
    }
    // Intercambia el elemento menor encontrado con el elemento en 'i'
    intercambiar(arreglo, i, posicion);
  }
}

function comparar(arreglo: number[], i: number, j: number): number {
  if (arreglo[i] > arreglo[j]) {
    return 1;
  } else if (arreglo[i] < arreglo[j]) {
    return -1;
  } else {
    return 0;
  }
}

function intercambiar(arreglo: number[], i: number, j: number): void {
  let temp: number = arreglo[i];
  arreglo[i] = arreglo[j];
  arreglo[j] = temp;
}

/*Teoria interesante sacada de chatGPT:

Claro, entiendo que puede parecer un poco confuso al principio. Vamos a repasar el algoritmo con un ejemplo para aclarar cómo se ordena el arreglo.

¡¡ Descripción del Proceso de Ordenamiento!!

El algoritmo de selección trabaja de la siguiente manera:
1. **Inicia desde el primer elemento** (`i = 0`).
2. **Busca el menor elemento** en el resto del arreglo.
3. **Intercambia** ese menor elemento con el elemento en la posición `i`.
4. **Avanza a la siguiente posición** (`i = 1`) y repite el proceso hasta el final del arreglo.

### Ejemplo Paso a Paso

Considera el arreglo `[64, 25, 12, 22, 11]` para entender cómo funciona el ordenamiento por selección.

#### Paso 1: i = 0
- **Arreglo inicial**: `[64, 25, 12, 22, 11]`
- **Busca el menor elemento** en el subarreglo `[64, 25, 12, 22, 11]`.
  - Compara 64 con 25 → menor es 25
  - Compara 25 con 12 → menor es 12
  - Compara 12 con 22 → menor es 12
  - Compara 12 con 11 → menor es 11
- **Intercambia** 64 con 11.
- **Arreglo después del primer paso**: `[11, 25, 12, 22, 64]`

#### Paso 2: i = 1
- **Arreglo actual**: `[11, 25, 12, 22, 64]`
- **Busca el menor elemento** en el subarreglo `[25, 12, 22, 64]`.
  - Compara 25 con 12 → menor es 12
  - Compara 12 con 22 → menor es 12
  - Compara 12 con 64 → menor es 12
- **Intercambia** 25 con 12.
- **Arreglo después del segundo paso**: `[11, 12, 25, 22, 64]`

#### Paso 3: i = 2
- **Arreglo actual**: `[11, 12, 25, 22, 64]`
- **Busca el menor elemento** en el subarreglo `[25, 22, 64]`.
  - Compara 25 con 22 → menor es 22
  - Compara 22 con 64 → menor es 22
- **Intercambia** 25 con 22.
- **Arreglo después del tercer paso**: `[11, 12, 22, 25, 64]`

#### Paso 4: i = 3
- **Arreglo actual**: `[11, 12, 22, 25, 64]`
- **Busca el menor elemento** en el subarreglo `[25, 64]`.
  - Compara 25 con 64 → menor es 25
- **Intercambia** 25 con 25 (no cambia nada).
- **Arreglo después del cuarto paso**: `[11, 12, 22, 25, 64]`

Ahora el arreglo está ordenado.



### Resumen

El algoritmo de ordenamiento por selección ordena el arreglo seleccionando repetidamente el elemento más pequeño de la sublista no ordenada y colocándolo en la posición correcta al intercambiarlo con el primer elemento de la sublista. Este proceso se repite para cada posición del arreglo hasta que tod0 el arreglo esté ordenado.

*/