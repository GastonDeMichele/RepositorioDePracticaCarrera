"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelefonoConRadio = void 0;
const telefono_1 = require("./telefono");
class TelefonoConRadio extends telefono_1.Telefono {
    constructor() {
        super();
        this.frecuenciaActual = 101.1; // Frecuencia por defecto
    }
    verFrecuenciaActual() {
        console.log(`Frecuencia actual: ${this.frecuenciaActual} MHz`);
    }
    cambiarFrecuencia(nuevaFrecuencia) {
        this.frecuenciaActual = nuevaFrecuencia;
        console.log(`Frecuencia cambiada a: ${this.frecuenciaActual} MHz`);
    }
}
exports.TelefonoConRadio = TelefonoConRadio;
