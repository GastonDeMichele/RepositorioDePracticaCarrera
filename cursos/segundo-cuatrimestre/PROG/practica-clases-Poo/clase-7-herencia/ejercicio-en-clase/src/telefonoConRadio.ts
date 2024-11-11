import { Telefono } from "./telefono";

export class TelefonoConRadio extends Telefono {
  private frecuenciaActual: number;

  constructor() {
    super();
    this.frecuenciaActual = 101.1; // Frecuencia por defecto
  }

  public verFrecuenciaActual(): void {
    console.log(`Frecuencia actual: ${this.frecuenciaActual} MHz`);
  }

  public cambiarFrecuencia(nuevaFrecuencia: number): void {
    this.frecuenciaActual = nuevaFrecuencia;
    console.log(`Frecuencia cambiada a: ${this.frecuenciaActual} MHz`);
  }
}
