//Practica
import * as readlineSync from "readline-sync";
const alturaPersona = readlineSync.question("ingrese la altura de la persona:");
console.log(`La altura de la persona es: ${alturaPersona}`);

console.log("ejercicios en clase")
let primerNumero : number = readlineSync.questionInt( "Ingrese el primer número: ");
console.log("el primer número es ", primerNumero);
let segundoNumero : number = readlineSync.questionInt( "Ingrese el segundo número: ");
console.log("el segundo número es ", segundoNumero);
let resultado : number = primerNumero + segundoNumero;
console.log("El resultado de la suma es ", resultado);
console.log();
let base : number = readlineSync.questionInt( "Ingrese la base: ");
let altura : number = readlineSync.questionInt( "Ingrese la altura: ");

let area : number = base * altura;
console.log("El área es: ", area);

console.log("Ejercicio: Calculo de descuento")
let precioProducto : number = 450.5;
let porcentajeDescuento : number = 0.1;
let descuento : number = precioProducto*porcentajeDescuento;
let precioFinal : number = precioProducto-descuento;
console.log(`El precio inicial del producto es $${precioProducto} y con el 10% de descuento el total es: $${precioFinal}`);