// src/RegistroAutomotor.ts
import { Auto } from "./Auto";
import { Moto } from "./Moto";
import { Camion } from "./Camion";

class RegistroAutomotor {
    private autos: Auto[] = [];
    private motos: Moto[] = [];
    private camiones: Camion[] = [];

    agregarAuto(auto: Auto): void {
        this.autos.push(auto);
    }

    agregarMoto(moto: Moto): void {
        this.motos.push(moto);
    }

    agregarCamion(camion: Camion): void {
        this.camiones.push(camion);
    }

    listarAutos(): Auto[] {
        return this.autos;
    }

    listarMotos(): Moto[] {
        return this.motos;
    }

    listarCamiones(): Camion[] {
        return this.camiones;
    }

    modificarAuto(index: number, auto: Auto): void {
        if (this.autos[index]) {
            this.autos[index] = auto;
        }
    }

    darDeBajaAuto(index: number): void {
        this.autos.splice(index, 1);
    }

    // Similar para modificarMoto, modificarCamion, darDeBajaMoto, darDeBajaCamion
}

export { RegistroAutomotor };
