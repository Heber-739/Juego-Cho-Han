import { girarDados } from "./dados.js";
import { agregar_registro } from "./registro.js";
import { comenzar_apuestas } from "./principal.js";

var mensaje1 = document.querySelector(".bienvenida");
var mensaje2 = document.querySelector(".mensajes");
var mensaje3 = document.querySelector(".despedida");
var saldo = document.querySelector(".billetera");
var input_apuesta = document.querySelector(".apuesta");
var par = document.querySelector(".par");
var impar = document.querySelector(".impar");

var partidas_ganadas = 0;

export function testCaracteres(letra) {
  var caracteres = /\W/g;
  if (caracteres.test(letra)) {
    mensaje3.style.display = "block";
    mensaje3.textContent = "No se permiten caracteres especiales";
    return;
  } else {
    mensaje3.style.display = "none";
    return letra;
  }
}
export function evaluar_input(paridad, billetera) {
  let ap = document.querySelector(".apostando");
  let input = document.querySelector(".apuesta");
  let apuesta = parseInt(input.value);
  if (apuesta <= billetera) {
    if (apuesta == 0 || apuesta == NaN) {
      mensaje3.style.display = "block";
      mensaje3.style.color = "red";
      mensaje3.textContent = "Apuesta mínima: 1";
    } else if (apuesta > 0) {
      ap.textContent = `$${apuesta}`;
      mensaje3.style.color = "white";
      mensaje3.style.display = "none";
      evaluar(paridad, apuesta, billetera);
    }
  } else if (apuesta > billetera) {
    mensaje3.style.display = "block";
    mensaje3.style.color = "red";
    mensaje3.textContent = "Billetera insuficiente";
  }
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function evaluar(paridad, apuesta, billetera) {
  let time = girarDados();
  let pari = document.querySelector(".sel");
  let resultado = "Ganó";
  sleep(210 * time).then(() => {
    let sumando1 = document.querySelector(".suma1");
    let sumando2 = document.querySelector(".suma2");
    let total = parseInt(sumando1.textContent) + parseInt(sumando2.textContent);
    if (paridad == "par" && total % 2 == 0) {
      mensaje1.style.color = "#74fd3e";
      mensaje1.textContent = "Felicidades, Usted ganó!";
      billetera += parseInt(apuesta);
      mensaje2.textContent = `Saldo actual: $${billetera}`;
      saldo.textContent = `$${billetera}`;
      partidas_ganadas += 1;
      desea_continuar();
      input_apuesta.disabled = true;
      pari.textContent = "par".toUpperCase();
    } else if (paridad == "impar" && total % 2 != 0) {
      mensaje1.style.color = "#74fd3e";
      mensaje1.textContent = "Felicidades, Usted ganó!";
      billetera += parseInt(apuesta);
      mensaje2.textContent = `Saldo actual: $${billetera}`;
      saldo.textContent = `$${billetera}`;
      partidas_ganadas += 1;
      desea_continuar();
      input_apuesta.disabled = true;
      pari.textContent = "impar".toUpperCase();
    } else {
      resultado = "Perdió";
      if (total % 2 != 0) {
        pari.textContent = "impar".toUpperCase();
      } else {
        pari.textContent = "par".toUpperCase();
      }
      mensaje1.style.color = "#fd2600";
      mensaje1.textContent = "Usted perdió!";
      billetera -= parseInt(apuesta);
      mensaje2.textContent = `Saldo actual: $${billetera}`;
      saldo.textContent = `$${billetera}`;
      if (billetera == 0) {
        despedirse();
      } else {
        desea_continuar();
        input_apuesta.disabled = true;
      }
    }
    agregar_registro(apuesta, billetera, resultado);
  });
}
function desea_continuar() {
  let cont = document.querySelector(".continuar");
  cont.style.display = "flex";
  let sipi = document.querySelector(".si_cont");
  let nope = document.querySelector(".no_cont");
  par.onclick = "";
  impar.onclick = "";
  sipi.addEventListener("click", () => {
    cont.style.display = "none";
    comenzar_apuestas();
  });
  nope.addEventListener("click", () => {
    cont.style.display = "none";
    despedirse();
  });
}
function despedirse() {
  par.onclick = "";
  impar.onclick = "";
  mensaje1.style.color = "white";
  mensaje1.textContent = "Muchas gracias por jugar!";
  input_apuesta.disabled = true;
  mensaje2.textContent = `Usted gano ${partidas_ganadas} partidas`;
}
