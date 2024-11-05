"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
// src/Auto.ts
class Auto {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = 0; // Inicializamos la velocidad en 0
    }
    acelerar() {
        this.velocidad += 10;
        console.log(`El auto ha acelerado. Velocidad actual: ${this.velocidad} km/h`);
    }
    frenar() {
        this.velocidad -= 10;
        if (this.velocidad < 0)
            this.velocidad = 0;
        console.log(`El auto ha frenado. Velocidad actual: ${this.velocidad} km/h`);
    }
    mostrarDetalles() {
        return `Auto: ${this.marca} ${this.modelo}, Velocidad: ${this.velocidad} km/h`;
    }
}
exports.Auto = Auto;
// Prueba de la clase
const miAuto = new Auto("Toyota", "Corolla");
miAuto.acelerar();
miAuto.acelerar();
miAuto.frenar();
console.log(miAuto.mostrarDetalles());
