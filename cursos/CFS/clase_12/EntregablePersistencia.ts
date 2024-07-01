import fs from "node:fs";

const precios: number[] = [525, 3500, 400, 1999];
const productos: string[] = ["Leche", "Galletitas", "Harina",
"Queso"];

let contenidoPrecios: string = "";
let contenidoProductos: string = "";

for (let i = 0; i < productos.length; i++) {
    contenidoPrecios += `${precios[i]} `;//espacio para que queden separados
    
}

for (let i = 0; i < productos.length; i++) {
    contenidoProductos += `${productos[i]} `;//espacio para que queden separados
    
}

fs.writeFileSync("./precios.txt", contenidoPrecios);
fs.writeFileSync("./productos.txt", contenidoProductos);

const datosPrecios: string = fs.readFileSync("./precios.txt", "utf8");
const ArrayPrecios: string[] = datosPrecios.split(" ");

const datosProductos: string = fs.readFileSync("./productos.txt", "utf8");
const ArrayProductos: string[] = datosProductos.split(" ");

console.log(ArrayPrecios);
console.log(ArrayProductos);