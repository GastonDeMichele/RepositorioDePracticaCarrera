// src/Moto.ts
class Moto {
    private marca: string;
    private cilindrada: number;

    constructor(marca: string, cilindrada: number) {
        this.marca = marca;
        this.cilindrada = cilindrada;
    }

    getMarca(): string {
        return this.marca;
    }

    setMarca(marca: string): void {
        this.marca = marca;
    }

    getCilindrada(): number {
        return this.cilindrada;
    }

    setCilindrada(cilindrada: number): void {
        this.cilindrada = cilindrada;
    }

    toString(): string {
        return `Moto - Marca: ${this.marca}, Cilindrada: ${this.cilindrada}cc`;
    }
}

export { Moto };
