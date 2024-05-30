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
1- let longitudArr = rls(mensaje usurario:);
2- let v1 = arrayvacio(longitudArr);
3- let v2 = arrayvacio(longitudArr);
4- funcion cargaArreglos(carga:number[]) 
--dentro inicia for(let i=0; i<longitudArr;i++)
---dentro de for: v[i]= rls("carga usuario:")
- retorno valor
5- funcion escalaVectores(v1:number[],v2:number[])
-- dentro let resultado = new arr(longitudArr)
let arrUno = función(v1)
let  arrDos= funcion(v2)
- inicio for(i=0;i<long)
6- dentro llamo función operacionEscala(v1:number[],v2:number[]) con los valores arrUno y arrDos
--Contenido de la funcion operacionEscala(v1,v2){let resultado=0; resultado += arrUno[i]*arrDos[i]; }




*/