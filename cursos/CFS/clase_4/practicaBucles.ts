import *as rls from "readline-sync";


/*
Estructuras de Control



Ejercicio 1: Eureka

* Escribir un algoritmo que nos pida
una clave y verifique que sea la
correcta.
* Tenga en cuenta que la clave es
la palabra “eureka”
* Solo tenemos 3 intentos para
acertar, si fallamos los 3 intentos
el sistema mostrará un mensaje
indicándonos que hemos agotado
todas las oportunidades.
* Si acertamos la clave, saldremos
directamente del programa.
*/

let i = 0
while (i<3) {
    let ingresoClave : string = rls.question(`Ingrese su clave aqui: `); 

    if (ingresoClave=== "eureka" ) {
        console.log(Clave ingresada con exito!);
        break;
    } else{
      console.log(Clave incorrecta);
    };
    i++;
};
  if(i === 3){
    console.log(Haz agotado todas tus oportunidades)
  };



/*
Ejercicio 2: Múltiplos

* Cree un algoritmo que visualice los
números que son múltiplos de 2 o
de 3 que hay entre 1 y 100
* Tener en cuenta que hay números
que son múltiplos de 2 y de 3 al
mismo tiempo
* En dichos casos, solamente
indique el número una vez
*/
let iniciarMultiplos: string = rls.question(presione la tecla "s" para el siguiente ejercicio:)
if (iniciarMultiplos===s) {
  for (let i: number = 1; i <= 100; i++) {
    if (i % 2 === 0 || i % 3 === 0) {
      console.log(${i} es un múltiplo de 2 o de 3);
      };
    };
  
};



/*
Ejercicio 3: Par/Impar

* Realizar un algoritmo que dado un
número entero ingresado por el
usuario, visualice en pantalla si es
par o impar
* En el caso de ingresar un cero, se
debe volver a pedir el número por
teclado (hasta que se ingrese un
número mayor que cero
)

pseudocodigo: 

1- declaro la variable datoNum y la igualo al rls para que el usuario ingrese el numero.

2- declaro un if con la condición de que si es igual a 0 ejecutar dentro in rls que pida nuevamente ingeesar in número que no sea 0

3- declaro un if-else que como condicion tenga que: si el resto del número ingresado dividido 2 es igual a 0 imprimir por consola que es par, sino, imprimir por consola que es impar.
*/

let datoNum: number = 0;

while (datoNum === 0) {
    datoNum = rls.questionInt(Ingrese numero entero distinto de cero:);
}

if (datoNum % 2 === 0) {
    console.log(El número ingresado es par);
} else {
    console.log(El número ingresado es impar);
}




/*
Ejercicio 4: ""Suma entre Números

* Escriba un programa que pida al usuario dos números
enteros, y luego retorne la suma de todos los números
que están entre ellos
* Por ejemplo, si los números son 2 y 7, debe entregar
como resultado 2 + 3 + 4 + 5 + 6 + 7 = 27
*/

/*
pseudocodigo
1-primerVariable con rls que pida primer numero.
2- segundaVariable con segundo numero ingresado por el usuario.
3- inicio ciclo for, mientras que la primer variable sea menor que la segunda, esta incrementa en 1.
4- dentro de el ciclo for ingreso la variable sumatotal y la sumo a i va sumando con la iteracion.
5-Imprimo en consola la primerVariable con el valor final afuera del bucle.
*/

let primerEntero: number = rls.questionInt(`Ingresa primer numero entero: `);
let segundoEntero: number = rls.questionInt(`Ingresa segundo numero entero: `);
let sumaTotal = 0;
for(let i:number = primerEntero; i <= segundoEntero; i++){
  sumaTotal += i;
}
console.log(sumaTotal);




/*
Ejercicio 5: Tablas de Multiplicación

* Diseñar un algoritmo que muestre por pantalla la tabla de multiplicación del número ingresado por el usuario
* Para definir hasta qué número desea que muestre la tabla de multiplicación, el usuario también deberá ingresar dicho valor.
ej: 
Ingrese el número: 9
Ingrese hasta qué número: 4

9 x 1 = 9
9 x 2 = 18
9 x 3 = 27
9 x 4 = 36

pseudocodigo

1 - declarar variables que contengan los datos del usuario: primero numeroBase, segundo numeroMultiplicador.
2 - inicio bucle for,  i va a ser igual a 1 ; mientras que i sea menor o igual a nuneroMultiplicador; i ++
3 - dentro del bucle for  realizo la operacion: numeroBase += i
4- creo un console dentro del bucle e imprimo la variable numeroBase.
*/

let numeroBase: number = 
rls.questionInt(`Ingrese numero que va a
ser multiplicado: `);

let numeroMultiplicador: number = 
rls.questionInt(`Ingrese hasta que numero
mostrar la tabla de multiplicacion:`);
 
for (let i = 1; i <=numeroMultiplicador;i++){
  let numeroFinal: number = numeroBase * i;
  console.log(`${numeroBase} x ${i} = ${numeroFinal}`)
 }
 
 
 
 
 /*
 Ejercicio 6: Encontrar el Número Máximo
* Leer valores hasta que se introduzca un cero (0)
* El usuario puede introducir valores positivos y negativos
* Encontrar el máximo de los elementos que se introdujeron
* Analizar cómo cambia el programa para hallar el mínimo


pseudocodigo:
1- declarar variable usuarioNumber que contenga el numero ingresado por el usuario por primera vez.
2- iniciar bucle while, mientras que usuarioNumber sea distinto a 0 ejecuta.
3- dentro del while reasignamos la variable y dejamos nuevo mensaje que pida nuevo numero.
- declarar variable de almacenamiento varAlm fuera antes del bucle.
- igualar fuera del bucle 



- fuera del while mensaje de que al ingresar 0 se sale del programa.
 */