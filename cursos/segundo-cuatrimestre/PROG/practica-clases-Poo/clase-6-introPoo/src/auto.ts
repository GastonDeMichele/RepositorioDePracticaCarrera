
class Auto {
    private marca: string;
    private modelo: string;
    private velocidad: number;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = 0; // Inicializamos la velocidad en 0
    }

    acelerar(): void {
        this.velocidad += 10;
        console.log(`El auto ha acelerado. Velocidad actual: ${this.velocidad} km/h`);
    }

    frenar(): void {
        this.velocidad -= 10;
        if (this.velocidad < 0) this.velocidad = 0;
        console.log(`El auto ha frenado. Velocidad actual: ${this.velocidad} km/h`);
    }

    mostrarDetalles(): string {
        return `Auto: ${this.marca} ${this.modelo}, Velocidad: ${this.velocidad} km/h`;
    }
}

// Prueba de la clase
const miAuto = new Auto("Toyota", "Corolla");
miAuto.acelerar();
miAuto.acelerar();
miAuto.frenar();
console.log(miAuto.mostrarDetalles());

export { Auto };
