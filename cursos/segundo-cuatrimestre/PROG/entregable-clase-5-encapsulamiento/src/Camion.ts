
class Camion {
    private marca: string;
    private capacidadCarga: number;

    constructor(marca: string, capacidadCarga: number) {
        this.marca = marca;
        this.capacidadCarga = capacidadCarga;
    }

    getMarca(): string {
        return this.marca;
    }

    setMarca(marca: string): void {
        this.marca = marca;
    }

    getCapacidadCarga(): number {
        return this.capacidadCarga;
    }

    setCapacidadCarga(capacidad: number): void {
        this.capacidadCarga = capacidad;
    }

    toString(): string {
        return `Camion - Marca: ${this.marca}, Capacidad de carga: ${this.capacidadCarga}kg`;
    }
}

export { Camion };
