/*consigna 1: Problema: Autos de Carrera.
•En una prueba, un piloto tiene que completar 4
vueltas
•Se necesita un programa que permita ingresar
por teclado el tiempo de cada vuelta
•El programa debe retornar el tiempo total y el
promedio de vuelta
*/

//resolucion
import * as readlineSync from "readline-sync" 

let vueltaUno =+ readlineSync.question("Ingresa el tiempo de la primer vuelta: ");
let vueltaDos =+ readlineSync.question("Ingresa el tiempo de la segunda vuelta: ");
let vueltaTres =+ readlineSync.question("Ingresa el tiempo de la tercera vuelta: ");
let vueltaCuatro =+ readlineSync.question("Ingresa el tiempo de la cuarta vuelta: ");

// Calcular el tiempo total y el promedio
let tiempoTotal = vueltaUno + vueltaDos + vueltaTres + vueltaCuatro;
let tiempoPromedio = tiempoTotal / 4;

// Imprimir los resultados
console.log("El tiempo total es:", tiempoTotal);
console.log("El tiempo promedio es:", tiempoPromedio);

/* Consigna 2: Calculo del area de un triángulo.
•Se necesita un programa que permita ingresar
por teclado la base y la altura de un triángulo.
•El programa debe retornar el area del triangulo
con la base y la altura proporcionada por el
usuario */


// Obtener la base y la altura del usuario
let base = +readlineSync.question("Ingresa la base del triángulo: ");
let altura = +readlineSync.question("Ingresa la altura del triángulo: ");

// Calcular el área del triángulo
let area = (base * altura) / 2;

// Imprimir el resultado
console.log("El área del triángulo es:", area);
