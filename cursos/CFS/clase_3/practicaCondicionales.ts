import * as rls from "readline-sync";

/* Ejercicio - Mayor a 20 - Código */
/*let numeroDeseado: number = rls.questionInt("Escriba el numero que desea verificar si es mayor o no a 20:");
if (numeroDeseado > 20) {
    console.log(`El número ${numeroDeseado} es mayor a 20`);
} else {
    console.log(`El número ${numeroDeseado} es menor o igual a 20`);
}*/

/* Ejercicio – Aplicar Descuento */
let precioSinDescuento: number = rls.questionInt("Escribe el monto total de la compra: $");
console.log();
let descuento = precioSinDescuento * 0.1;
if (precioSinDescuento > 1000) {
    console.log(`Como superaste los $1000, tienes un 10% de descuento. Precio: $${precioSinDescuento}, Precio con descuento: $${precioSinDescuento - descuento}`);
} else {
    console.log(`El precio es: $${precioSinDescuento}`);
}
console.log();

let siguienteEjercicio = rls.question(`Escriba "si" para ir al siguiente ejercicio: `);
if (siguienteEjercicio.toLowerCase() === "si") {
    console.log("Avanzando al siguiente ejercicio...");

    // Ejercicio – Validar Altura
    let valorAltura: number = rls.questionInt("Ingresa altura:");
    console.log();
    if (valorAltura < 1.30) {
        console.log(`No puedes ingresar a la montaña Rusa`);
    } else {
        console.log(`Puedes ingresar a la montaña rusa`);
    }

    let siguienteEjercicio2 = rls.question(`Escriba "si" para ir al siguiente ejercicio: `);
    if (siguienteEjercicio2.toLowerCase() === "si") {
        console.log("Avanzando al siguiente ejercicio...");
    }
    // Ejercicio - Login
    let name: string = rls.question(`Ingrese ID o Nombre de Usuario:`);
    let password: string = rls.question(`Ingrese Password:`);
    console.log();
    if (name === `Juan` && password === `claveJuan`) {
        console.log("Haz sido logueado con éxito!");
    } else {
        console.log("El ID o el Password son incorrectos");
    }


    let siguienteEjercicio3 = rls.question(`Escriba "si" para ir al siguiente ejercicio: `);
    if (siguienteEjercicio3.toLowerCase() === "si") {
        console.log("Avanzando al siguiente ejercicio...");
    }
    //Ejercicio – Determinar Medalla
    let posicionLlegada: number = rls.questionInt("Ingrese la posicion de llegada del competidor: ");

    switch (posicionLlegada) {
        case 1:
            console.log("Entregar medalla de oro");
            break;
        case 2:
            console.log("Entregar medalla de plata");
            break;
        case 3:
            console.log("Entregar medalla de bronce");
            break;
        default:
            console.log("Entregar mención de participación");

    }



} else {
    console.log(`No ingresaste "si", no se procederá al siguiente ejercicio.`);
}

