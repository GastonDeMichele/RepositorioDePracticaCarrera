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

    darDeBajaAuto(index: number): number {
        this.autos.splice(index, 1);  // Elimina el vehículo en el índice especificado
        return this.autos.length;  // Retorna el número de vehículos restantes
    }
}

export { RegistroAutomotor };

