import { Telefono } from "./telefono";
import { TelefonoConCamara } from "./telefonoConCamara";
import { TelefonoConRadio } from "./telefonoConRadio";

const telefono = new Telefono();
telefono.prenderApagar();
telefono.hacerLlamada();

const telefonoConCamara = new TelefonoConCamara();
telefonoConCamara.prenderApagar();
telefonoConCamara.sacarFoto();

const telefonoConRadio = new TelefonoConRadio();
telefonoConRadio.prenderApagar();
telefonoConRadio.verFrecuenciaActual();
telefonoConRadio.cambiarFrecuencia(98.5);
