"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
class Telefono {
    constructor() {
        this.estaPrendido = false;
        this.bateriaActual = 100; // Batería al 100% por defecto
    }
    mandarMensaje() {
        if (this.estaPrendido) {
            console.log("Mensaje enviado.");
        }
        else {
            console.log("El teléfono está apagado.");
        }
    }
    hacerLlamada() {
        if (this.estaPrendido) {
            console.log("Llamada en curso.");
        }
        else {
            console.log("El teléfono está apagado.");
        }
    }
    prenderApagar() {
        this.estaPrendido = !this.estaPrendido;
        console.log(this.estaPrendido ? "Teléfono encendido." : "Teléfono apagado.");
    }
}
exports.Telefono = Telefono;
