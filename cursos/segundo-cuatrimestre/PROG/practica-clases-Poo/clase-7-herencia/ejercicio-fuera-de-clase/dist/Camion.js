"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camion = void 0;
const Auto_1 = require("./Auto");
class Camion extends Auto_1.Auto {
    constructor(marca, modelo, capacidadCarga) {
        super(marca, modelo);
        this.capacidadCarga = capacidadCarga;
    }
}
exports.Camion = Camion;
