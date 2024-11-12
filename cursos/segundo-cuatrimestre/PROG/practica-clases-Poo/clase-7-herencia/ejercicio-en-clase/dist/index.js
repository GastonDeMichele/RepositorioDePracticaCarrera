"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telefono_1 = require("./telefono");
const telefonoConCamara_1 = require("./telefonoConCamara");
const telefonoConRadio_1 = require("./telefonoConRadio");
const telefono = new telefono_1.Telefono();
telefono.prenderApagar();
telefono.hacerLlamada();
const telefonoConCamara = new telefonoConCamara_1.TelefonoConCamara();
telefonoConCamara.prenderApagar();
telefonoConCamara.sacarFoto();
const telefonoConRadio = new telefonoConRadio_1.TelefonoConRadio();
telefonoConRadio.prenderApagar();
telefonoConRadio.verFrecuenciaActual();
telefonoConRadio.cambiarFrecuencia(98.5);