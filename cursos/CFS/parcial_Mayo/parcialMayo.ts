/*cree una cadena de al menos 15 caracteres(sin que el usuario lo ingrese)
cuente la cantidad de a, e y o que hay en esa cadena y almacene esas cantidades en otro arreglo de 3 elementos en el orden que usted desee.
*/
//ingreso cadena
const cadenaTexto: string = "Aquellos que no pueden recordar el pasado estan condenados a repetirlo";
//funcion para filtrar las vocales
function filtroVocales(cadena: string): number[] {
    //declaro variables 
    let sumaA = 0;
    let sumaE = 0;
    let sumaO = 0;
    //inicio for para recorrer la cadena
    for (let i = 0; i < cadena.length; i++) {
        let posicion = cadena[i];
        //si la cadena cumple la condicion suma en uno la variable.
        if (posicion === "a" || posicion === "A") {
            sumaA++;
        } else if (posicion === "e" || posicion === "E") {
            sumaE++;
        } else if (posicion === "o" || posicion === "O") {
            sumaO++;
        }
    }
    //retorno los valores de las variables que suman si se cumple la condicion
    return [sumaA, sumaE, sumaO]
}

const resultado = filtroVocales(cadenaTexto)

// Muestro el resultado
console.log(`Cantidad de 'a': ${resultado[0]}`);
console.log(`Cantidad de 'e': ${resultado[1]}`);
console.log(`Cantidad de 'o': ${resultado[2]}`);

/*prueba escritorio
a =7
e = 10
o = 7
*/



function sumarArreglo(arreglo: number[]): number {
    let suma: number = 0;
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma;
}

// Definir un arreglo de ejemplo
const numeros: number[] = [1, 2, 3, 4, 5];

// Llamar a la función sumarArreglo y almacenar el resultado
const reultado: number = sumarArreglo(numeros);

// Mostrar el resultado
console.log(`La suma del arreglo es: ${reultado}`);


function establecerColorPorNota(valor: number): string {
    if (valor >= 0 && valor < 7) {
        return "rojo";
    }
    else if (valor >= 7 && valor <= 10) {
        return "verde";
    }
    return "gris";
}

// Prueba de la función
console.log(establecerColorPorNota(5));  //  rojo
console.log(establecerColorPorNota(7));  // verde
console.log(establecerColorPorNota(10)); //  verde
console.log(establecerColorPorNota(11)); //  gris



function obtenerPromedio(arr: number[]): number {
    let suma: number = sumarArreglo(arr);
    let promedio: number = suma / arr.length;
    console.log(promedio);
    return promedio
}

let variable: string;