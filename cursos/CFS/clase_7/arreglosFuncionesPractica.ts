function cargarVector(v : number[], cantidad : number) {
    let indice : number;
        for (indice=0; indice<cantidad; indice++) {
            v[indice] = rls.questionInt(`Ingrese el valor de la posicion ", indice, ": `);
        }
    }

function mostrarVector(v : number[], cantidad : number) {
    let indice : number;
        for (indice=0; indice<cantidad; indice++) {
            console.log(v[indice], " ");
        }
    }

function sumarVector(v1 : number[], v2 : number[], vSuma : number[], cantidad : number) {
    let indice : number;
        for (indice=0; indice<cantidad; indice++) {
        vSuma[indice] = v1[indice] + v2[indice];
        }
    }


    import * as rls from "readline-sync";
let v1 : number[] = new Array(6);
let v2 : number[] = new Array(6);
let vSuma : number[] = new Array(6);
console.log("Cargando v1");
cargarVector(v1, 6);
console.log("Cargando v2");
cargarVector(v2, 6);
sumarVector(v1, v2, vSuma, 6);
console.log("Valores de v1");
mostrarVector(v1, 6)
console.log("Valores de v2");
mostrarVector(v2, 6)
console.log("Valores de vSuma");
mostrarVector(vSuma, 6)