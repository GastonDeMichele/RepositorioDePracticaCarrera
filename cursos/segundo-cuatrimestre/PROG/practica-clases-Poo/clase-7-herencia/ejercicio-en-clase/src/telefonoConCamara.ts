import { Telefono } from "./telefono";

export class TelefonoConCamara extends Telefono {
  constructor() {
    super();
  }

  public sacarFoto(): void {
    if (this.estaPrendido) {
      console.log("Foto capturada.");
    } else {
      console.log("El teléfono está apagado.");
    }
  }
}
