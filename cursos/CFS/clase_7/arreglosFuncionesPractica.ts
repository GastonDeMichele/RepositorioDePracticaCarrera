/*
Sumar Dos Arreglos PERO CON FUNCIONES

• Sumar los elementos de cada una de las posiciones
de dos arreglos y guardar el resultado en otro arreglo
• El arreglo tiene dimensión 6 y los números de los dos
vectores los carga el usuario
*/
import * as rls from "readline-sync";

let v1 : number[] = new Array(6);
let v2 : number[] = new Array(6);
let vSuma : number[] = new Array(6);

function cargarVector(v : number[], cantidad : number) {
    let indice : number;
        for (indice=0; indice<cantidad; indice++) {
            v[indice] = rls.questionInt(`Ingrese el valor de la posicion "${indice}": `);
        }
    }

function mostrarVector(v : number[], cantidad : number) {
    let indice : number;
        for (indice=0; indice<cantidad; indice++) {
            console.log(v[indice], " ");
        }
    }

function sumarVector(v1 : number[], v2 : number[], vSuma : number[], cantidad : number) {
    let indice : number;
        for (indice=0; indice<cantidad; indice++) {
        vSuma[indice] = v1[indice] + v2[indice];
        }
    }





console.log("Cargando v1");
cargarVector(v1, 6);
console.log("Cargando v2");
cargarVector(v2, 6);
sumarVector(v1, v2, vSuma, 6);
console.log("Valores de v1");
mostrarVector(v1, 6)
console.log("Valores de v2");
mostrarVector(v2, 6)
console.log("Valores de vSuma");
mostrarVector(vSuma, 6)



//Imprimir arreglo al reves y luego dar vuelta al arreglo original pero con funciones

//declarar variables
let longArr: number = rls.questionInt(`Ingresa la longitud del Arreglo: `)
let v:number[] = new Array(longArr)


//La función cargaDeVectores lleva dos parametros, vector vacio y variable que almacena cantidad/
function cargaDeVectores(v:number[], longArr: number) {
  for (let i = 0; i < longArr; i++) {
    v[i] = rls.questionInt(`Ingresa el número que va en la posicion ${i}: `)
  }
}

//la funcion mostrarVectores ingresa los mismos parámetros y muestra los vectores en consola.

function mostrarVectores(v: number[], longArr: number)  {
  for (let i = 0; i < longArr; i++) {
    console.log(v[i],"")
  }
}

//la función mostrarInvetido lo que hace es imprimir en consola el arreglo original pero al reves mediante un for que descuenta.

function mostrarInvertido(v:number[], longArr: number){
  for (let i = longArr - 1; i > 0; i--) {
    console.log(v[i],"")
  }
}

//la función vOriginalInvert lo hace es realmente invertir el arreglo original.

function vOriginalInvert(v:number[], longArr: number){
  let indexIzq: number = 0;
  let indexDer: number = longArr - 1;
 
  while(indexIzq < indexDer) {
    let aux = v[indexIzq];
    v[indexIzq] = v[indexDer];
    v[indexDer] = aux;
    indexIzq ++;
    indexDer --;
  }
}

//llamar a las funciones

cargaDeVectores(v,longArr);
mostrarInvertido(v,longArr);
vOriginalInvert(v,longArr);
mostrarVectores(v,longArr);


/*
 Tipos de Números en Arreglo (con Métodos)
 Almacene en un arreglo de dimensión N números (la 
cantidad es ingresada por el usuario)
 Muestre cuántos números son positivos, cuántos son 
negativos y cuántos ceros hay
47
Ejemplo:
v = 0, -7, -9, 1, 0, 0
La salida es: 1 positivos, 2 negativos y 3 ceros
 */
 
 //voy a crear tres funciones, cada una va a tener un contador que sume en uno si se cumple la condición.
 
 function numPositive(v:number[],longArr:number){
   let contador:number = 0;
   for (let i:number = 0; i < longArr; i++) {
     if (v[i]>0) {
     contador++;
     }
   }
   return contador;
 }
 
 function numNegative(v:number[],longArr:number){
   let contador:number = 0;
   for (let i:number = 0; i < longArr; i++) {
     if(v[i]< 0){
       contador++;
     }
   }
   return contador;
 }
 
 function numCero(v:number[], longArr:number){
   let contador:number = 0;
   for(let i:number = 0; i < longArr; i++){
    if(v[i]===0){
      contador++
    } 
   }
   return contador
 }
 
 
 let largoArr: number = rls.questionInt(`Ingresa la longitud del Arreglo: `)
 
 let positivos = numPositive(v, largoArr);
 let negativos = numNegative(v, largoArr);
 let ceros = numCero(v,largoArr);
 
 cargaDeVectores(v,largoArr);
 
 console.log(`Los valores de v son:`)
 mostrarVectores(v, largoArr);
 
 console.log(`Cantidad de numeros positivos : ${positivos}`);
 
 console.log(`Cantidad de numeros negativos: ${negativos}`);
 
 console.log(`Cantidad de ceros: ${ceros}`);
 
 
 
 
 /*
 Multiplicación

* Implemente un métdo llamado “multiplicarArreglo” que recibe 

como parámetros tres arreglos de Enteros del mismo tamaño
* Los dos primeros arreglos contienen los números que se quieren 
multiplicar
* El tercer arreglo almacena el cálculo de la multiplicación de cada 
posición de los dos arreglos

*/
 
 let vec1:number[]= [2,5,8]
 let vec2:number[]= [3,2,4]
 let vec3:number[]= new Array(3)
 
 function multiplicarArreglo(v1:number[], v2:number[],v3:number[]):number[]{
   for(let i:number = 0; i < vec1.length; i++){
    vec3[i] = vec1[i]*vec2[i];
   }
   return vec3;
 }
 
let vResultado:number[]= multiplicarArreglo(vec1,vec2,vec3)

console.log(vResultado)

/*Utilice este métdo para multiplicar los siguientes cuatro arreglos de tres elementos:

v1: [1, 2, 3]
v2: [4, 5, 6]
v3: [2, 1, 2]
v4: [1, 2, 1]
vResultado (v1*v2*v3*v4): [8, 20, 36]
*/

let v4: number[] = [1,2,3];
let v5: number[] = [4,5,6];
let v6: number[] = [2,1,2];
let v7: number[] = [1,2,1];
let sumaParcial: number[] = new Array(v4.length);
let finalResult: number[] = new Array(v4.length);

multiplicarArreglo(v4,v5,sumaParcial);

sumaParcial = multiplicarArreglo(sumaParcial,v6,sumaParcial);

finalResult = multiplicarArreglo(sumaParcial,v7,finalResult);

console.log(finalResult);