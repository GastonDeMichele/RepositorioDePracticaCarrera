"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
const Auto_1 = require("./Auto");
class Moto extends Auto_1.Auto {
    constructor(marca, modelo, cilindrada) {
        super(marca, modelo);
        this.cilindrada = cilindrada;
    }
}
exports.Moto = Moto;
