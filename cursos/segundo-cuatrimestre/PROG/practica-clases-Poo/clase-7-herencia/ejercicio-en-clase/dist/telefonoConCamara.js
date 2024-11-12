"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelefonoConCamara = void 0;
const telefono_1 = require("./telefono");
class TelefonoConCamara extends telefono_1.Telefono {
    constructor() {
        super();
    }
    sacarFoto() {
        if (this.estaPrendido) {
            console.log("Foto capturada.");
        }
        else {
            console.log("El teléfono está apagado.");
        }
    }
}
exports.TelefonoConCamara = TelefonoConCamara;
