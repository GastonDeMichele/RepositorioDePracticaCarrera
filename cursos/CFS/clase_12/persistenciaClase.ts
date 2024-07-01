import fs from "node:fs";

//let contenido: string = "Nuevo contenido"

let nombres:string[] = ["Pedro", "maria", "Juan", "nicolas"]
let contenido: string="";
//recorremos la variable nombres para pasarlo a string en el txt
for (let i = 0; i < nombres.length; i++) {
    contenido += `${nombres[i]} `;//espacio para que queden separados
    
}

fs.writeFileSync("./test.txt", contenido);



//traemos la informacion del txt
const datos:string = fs.readFileSync("./test.txt", "utf8")
console.log(datos);
console.log("finalizado")
//para convertir en array de nuevo el string que nos trae la variable datos del txt:

const nuevoArray: string[] = datos.split(" ")
console.log(nuevoArray);
