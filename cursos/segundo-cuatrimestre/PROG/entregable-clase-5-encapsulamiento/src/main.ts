import { Auto } from "./Auto";
import { Moto } from "./Moto";
import { Camion } from "./Camion";
import { RegistroAutomotor } from "./RegistroAutomotos";

const registro = new RegistroAutomotor();

const auto1 = new Auto("Toyota", "Corolla");
const moto1 = new Moto("Yamaha", 250);
const camion1 = new Camion("Volvo", 15000);

registro.agregarAuto(auto1);
registro.agregarMoto(moto1);
registro.agregarCamion(camion1);

console.log("Autos en el registro:", registro.listarAutos());
console.log("Motos en el registro:", registro.listarMotos());
console.log("Camiones en el registro:", registro.listarCamiones());

const autoModificado = new Auto("Honda", "Civic");
registro.modificarAuto(0, autoModificado);
console.log("Autos después de la modificación:", registro.listarAutos());

// Aquí cambiamos el comportamiento para mostrar el número de autos restantes
const autosRestantes = registro.darDeBajaAuto(0);
console.log("Número de autos después de dar de baja:", autosRestantes);  // Mostrará el número de autos restantes
