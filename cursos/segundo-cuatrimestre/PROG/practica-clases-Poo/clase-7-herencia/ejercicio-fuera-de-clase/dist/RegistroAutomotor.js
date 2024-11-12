"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
class RegistroAutomotor {
    constructor() {
        this.autos = [];
        this.motos = [];
        this.camiones = [];
    }
    agregarAuto(auto) {
        this.autos.push(auto);
    }
    agregarMoto(moto) {
        this.motos.push(moto);
    }
    agregarCamion(camion) {
        this.camiones.push(camion);
    }
    listarAutos() {
        return this.autos;
    }
    listarMotos() {
        return this.motos;
    }
    listarCamiones() {
        return this.camiones;
    }
    modificarAuto(index, auto) {
        if (this.autos[index]) {
            this.autos[index] = auto;
        }
    }
    modificarMoto(index, moto) {
        if (this.motos[index]) {
            this.motos[index] = moto;
        }
    }
    modificarCamion(index, camion) {
        if (this.camiones[index]) {
            this.camiones[index] = camion;
        }
    }
    darDeBajaAuto(index) {
        this.autos.splice(index, 1);
    }
    darDeBajaMoto(index) {
        this.motos.splice(index, 1);
    }
    darDeBajaCamion(index) {
        this.camiones.splice(index, 1);
    }
}
exports.RegistroAutomotor = RegistroAutomotor;
