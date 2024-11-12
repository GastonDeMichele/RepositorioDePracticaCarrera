import { Auto } from "./Auto";
import { Moto } from "./Moto";
import { Camion } from "./Camion";
import { RegistroAutomotor } from "./RegistroAutomotor";

const registro = new RegistroAutomotor();


const auto1 = new Auto("Toyota", "Corolla");
const moto1 = new Moto("Yamaha", "FZ", 250);
const camion1 = new Camion("Volvo", "FH", 20000);


registro.agregarAuto(auto1);
registro.agregarMoto(moto1);
registro.agregarCamion(camion1);


console.log("Vehículos en el registro:", {
    autos: registro.listarAutos(),
    motos: registro.listarMotos(),
    camiones: registro.listarCamiones()
});


const autoModificado = new Auto("Honda", "Civic");
const motoModificada = new Moto("Yamaha", "MT-07", 700);
const camionModificado = new Camion("Scania", "R500", 25000);

registro.modificarAuto(0, autoModificado);
registro.modificarMoto(0, motoModificada);
registro.modificarCamion(0, camionModificado);


console.log("Vehículos después de modificación:", {
    autos: registro.listarAutos(),
    motos: registro.listarMotos(),
    camiones: registro.listarCamiones()
});


registro.darDeBajaAuto(0);
registro.darDeBajaMoto(0);
registro.darDeBajaCamion(0);


console.log("Vehículos después de dar de baja:", {
    autos: registro.listarAutos(),
    motos: registro.listarMotos(),
    camiones: registro.listarCamiones()
});
