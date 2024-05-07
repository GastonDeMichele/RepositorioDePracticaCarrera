
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

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0 || i % 3 === 0) {
    console.log(`${i} es un múltiplo de 2 o de 3`);
    }
  }



