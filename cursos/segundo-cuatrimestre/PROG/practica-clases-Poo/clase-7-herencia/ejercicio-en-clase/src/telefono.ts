export class Telefono {
    protected estaPrendido: boolean;
    protected bateriaActual: number;
  
    constructor() {
      this.estaPrendido = false;
      this.bateriaActual = 100; // Batería al 100% por defecto
    }
  
    public mandarMensaje(): void {
      if (this.estaPrendido) {
        console.log("Mensaje enviado.");
      } else {
        console.log("El teléfono está apagado.");
      }
    }
  
    public hacerLlamada(): void {
      if (this.estaPrendido) {
        console.log("Llamada en curso.");
      } else {
        console.log("El teléfono está apagado.");
      }
    }
  
    public prenderApagar(): void {
      this.estaPrendido = !this.estaPrendido;
      console.log(this.estaPrendido ? "Teléfono encendido." : "Teléfono apagado.");
    }
  }
  