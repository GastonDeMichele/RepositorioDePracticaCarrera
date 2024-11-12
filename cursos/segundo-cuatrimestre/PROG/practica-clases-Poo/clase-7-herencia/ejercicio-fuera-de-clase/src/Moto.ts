import { Auto } from "./Auto";

class Moto extends Auto {
    constructor(marca: string, modelo: string, public cilindrada: number) {
        super(marca, modelo);
    }
}
export { Moto };
