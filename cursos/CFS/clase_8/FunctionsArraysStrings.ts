/*
Solicite al usuario que ingrese un texto y retornelo convertido en un nombre de variable/función con las reglas camelCase

Por ejemplo, si el usuario ingresa:

convertir texto segun camel case

el programa lo debe convertir en:

convertirTextoSegunCamelCase

-pseudocodigo:
-ingreso frase en variable ingresoFrase.
-declaro funcion conversorCamelCase con un parámetro que recibe la frase.
- declaro dentro de la función la variable wordsMin que va a almacénar la frase con los metodos toLowerCase y split para pasarla a minúscula y dividirla por palabra.
- declaro un for y recorro desde el indice 1 hasta que indice sea menor a wordsMin.
- dentro declaro la variable wordsFinal y esta le voy a sumar la variable wordsFinal con los metodos charAt y slice para darle mayuscula a la primer letra y unirlas.

*/

import* as rls from "readline-sync";

let ingresoFrase:string = rls.question("ingresa frase a ser convertidas: ");

function conversorCamelCase(frase:string):string{
 let wordsMin = frase.toLowerCase().split(" ")
 let camelCaseResult = wordsMin[0]
 for (let i = 1; i < wordsMin.length; i++) {
   let wordsFinal = wordsMin[i];
   camelCaseResult += wordsFinal.charAt(0).toUpperCase()+wordsFinal.slice(1);
 }
 return camelCaseResult;
}

const resultCamel = conversorCamelCase(ingresoFrase);

console.log(resultCamel);



/*
Cargue dos arreglos de dimensión N número (la cantidad es ingresada por el usuario)
Calcule el producto escalar entre los dos arreglos: 
Ejemplo:
n =		3
v1 = 		0, 1, 2
v2 =		3, 4, 5
producto = 	14

pseudocodigo
1. Solicitar al usuario la longitud del vector y almacenarla en tamañoVector
2. Crear un vector vacío llamado vector1 con tamaño igual a tamañoVector
3. Crear un vector vacío llamado vector2 con tamaño igual a tamañoVector

4. Definir la función cargarVector que toma un vector como argumento:
    - Para cada índice desde 0 hasta tamañoVector - 1:
        - Solicitar al usuario un valor y almacenarlo en el índice correspondiente del vector

5. Llamar a cargarVector con vector1
6. Llamar a cargarVector con vector2

7. Definir la función escalarVectores que toma dos vectores como argumentos:
    - Crear un vector resultado con tamaño igual a tamañoVector
    - Para cada índice desde 0 hasta tamañoVector - 1:
        - Llamar a la función operarEscala con los valores en la posición i de los vectores y almacenar el resultado en el índice correspondiente del vector resultado

8. Definir la función operarEscala que toma dos valores como argumentos:
    - Retornar el producto de los dos valores


9. Llamar a escalarVectores con vector1 y vector2 y almacenar el resultado
10. Imprimir el vector resultado

*/
let tamañoVector:number =  rls.questionInt(`Ingrese la longitud del arreglo:`);
let v1:number[] = new Array(tamañoVector);
let v2:number[] = new Array(tamañoVector);


function cargaArreglos(arr:number[]) {
for (let i = 0; i < tamañoVector; i++) {
  arr[i] = rls.questionInt(`Ingresa el numero que va en la posición "${i}": `)
}  
}
cargaArreglos(v1);
cargaArreglos(v2);

function escalaVectores(v1:number[],v2:number[]){
  let resultado: number = 0;
  for (let i = 0; i < tamañoVector; i++) {
    resultado += v1[i] * v2[i];
  }
  return resultado
}




const resultado = escalaVectores(v1,v2)


console.log(`El resultado es: ${resultado}`)







/*

*/

// Función para convertir una vocal en su equivalente según la clave
function convertirVocal(caracter: string): string {
  switch (caracter) {
      case 'a': return '.';
      case 'e': return ',';
      case 'i': return ';';
      case 'o': return ':';
      case 'u': return '!';
      default: return caracter;
  }
}

// Función para cambiar el caso de una consonante
function cambiarCaso(caracter: string): string {
  if (caracter === caracter.toLowerCase()) {
      return caracter.toUpperCase();
  } else {
      return caracter.toLowerCase();
  }
}

// Función principal para convertir la palabra según las reglas dadas
function convertirPalabra(palabra: string): string {
  let resultado = '';
  
  for (const caracter of palabra) {
      if ('aeiou'.includes(caracter)) {
          resultado += convertirVocal(caracter);
      } else if ('0123456789+-*/'.includes(caracter)) {
          resultado += caracter;
      } else if (/[a-zA-Z]/.test(caracter)) {
          resultado += cambiarCaso(caracter);
      } else {
          resultado += caracter;
      }
  }
  
  return resultado;
}

// Solicitar palabra al usuario
const palabraUsuario: string = rls.question("Ingrese una palabra:") ;

// Convertir la palabra ingresada y mostrar el resultado
const palabraConvertida: string = convertirPalabra(palabraUsuario);
console.log(`La palabra convertida es: ${palabraConvertida}`);



/*

*/