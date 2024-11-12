import { Auto } from "./Auto";

class Camion extends Auto {
    constructor(marca: string, modelo: string, public capacidadCarga: number) {
        super(marca, modelo);
    }
}
export { Camion };
