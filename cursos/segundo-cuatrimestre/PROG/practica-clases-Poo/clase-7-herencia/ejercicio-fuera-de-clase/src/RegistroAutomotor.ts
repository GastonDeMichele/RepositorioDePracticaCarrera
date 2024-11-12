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

    modificarMoto(index: number, moto: Moto): void {
        if (this.motos[index]) {
            this.motos[index] = moto;
        }
    }

    modificarCamion(index: number, camion: Camion): void {
        if (this.camiones[index]) {
            this.camiones[index] = camion;
        }
    }

    darDeBajaAuto(index: number): void {
        this.autos.splice(index, 1);
    }

    darDeBajaMoto(index: number): void {
        this.motos.splice(index, 1);
    }

    darDeBajaCamion(index: number): void {
        this.camiones.splice(index, 1);
    }
}

export { RegistroAutomotor };

