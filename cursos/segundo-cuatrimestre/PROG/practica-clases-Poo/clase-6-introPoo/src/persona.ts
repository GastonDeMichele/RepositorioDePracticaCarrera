
class Persona {
    private nombre: string;
    private edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(): string {
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`;
    }
}


const persona1 = new Persona("Juan", 30);
console.log(persona1.saludar());

export { Persona };
