"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`;
    }
}
exports.Persona = Persona;
const persona1 = new Persona("Juan", 30);
console.log(persona1.saludar());
