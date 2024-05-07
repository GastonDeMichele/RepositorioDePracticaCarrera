import *as rls from "readline-sync";


/*
Estructuras de Control



Ejercicio 1: Eureka

• Escribir un algoritmo que nos pida
una clave y verifique que sea la
correcta.
• Tenga en cuenta que la clave es
la palabra “eureka”
• Solo tenemos 3 intentos para
acertar, si fallamos los 3 intentos
el sistema mostrará un mensaje
indicándonos que hemos agotado
todas las oportunidades.
• Si acertamos la clave, saldremos
directamente del programa.
*/

let i = 0
while (i<3) {
    let ingresoClave : string = rls.question(`Ingrese su clave aqui: `); 

    if (ingresoClave=== "eureka" ) {
        console.log(`Clave ingresada con exito!`);
        break;
    } else{
      console.log(`Clave incorrecta`);
    };
    i++;
};
  if(i === 3){
    console.log(`Haz agotado todas tus oportunidades`)
  };



/*
Ejercicio 2: Múltiplos

• Cree un algoritmo que visualice los
números que son múltiplos de 2 o
de 3 que hay entre 1 y 100
• Tener en cuenta que hay números
que son múltiplos de 2 y de 3 al
mismo tiempo
• En dichos casos, solamente
indique el número una vez
*/
let iniciarMultiplos: string = rls.question(`presione la tecla "s" para el siguiente ejercicio:`)
if (iniciarMultiplos===`s`) {
  for (let i: number = 1; i <= 100; i++) {
    if (i % 2 === 0 || i % 3 === 0) {
      console.log(`${i} es un múltiplo de 2 o de 3`);
      };
    };
  
};



/*
Suma entre Números

• Escriba un programa que pida al usuario dos números
enteros, y luego retorne la suma de todos los números
que están entre ellos
• Por ejemplo, si los números son 2 y 7, debe entregar
como resultado 2 + 3 + 4 + 5 + 6 + 7 = 27
*/

/*
pseudocodigo
1-primerVariable con rls que pida primer numero.
2- segundaVariable con segundo numero ingresado por el usuario.
3- inicio ciclo for, mientras que la primer variable sea menor que la segunda, esta incrementa en 1.
4- dentro de el ciclo for ingreso la primerVariable y la sumo a la nueva que va sumando con las vueltas.
5-Imprimo en consola la primerVariable con el valor final afuera del bucle.

*/

let primerEntero: number = rls.questionInt(`Ingresa primer numero entero: `);
let segundoEntero: number = rls.questionInt(`Ingresa segundo numero entero: `);
let sumaTotal = 0;
for(let i:number = primerEntero; i <= segundoEntero; i++){
  sumaTotal += i;
}
console.log(sumaTotal);