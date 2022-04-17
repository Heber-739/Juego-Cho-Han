import { girarDados } from "./dados.js";
import { agregar_registro, leer_registro } from "./registro.js";

var input_nombre = document.querySelector(".nombre");
var mensaje1 = document.querySelector(".bienvenida");
var mensaje2 = document.querySelector(".mensajes");
var mensaje3 = document.querySelector(".despedida");
var form_nombre = document.querySelector(".form_nombre");
var saldo = document.querySelector(".billetera");
var par = document.querySelector(".par");
var impar = document.querySelector(".impar");
const input_shibas = document.querySelector(".shibas");
const start = document.querySelector("button");
var input_apuesta = document.querySelector(".apuesta");
var refresh = document.querySelector(".refresh");

var palabra = [];
var billetera = 0;
var partidas_ganadas = 0;

input_nombre.addEventListener("keypress", function (event) {
  var input_name = event.key;
  testCaracteres(input_name);
});
leer_registro();
refresh.addEventListener("click", () => {
  location.reload();
  localStorage.clear();
});
start.addEventListener("click", () => {
  let sipe = input_shibas.value;
  if (sipe >= 1) {
    mensaje3.style.display = "none";
    const nombre = palabra.join("");
    form_nombre.style.display = "none";
    mensaje1.style.display = "block";
    mensaje1.textContent = `Bienvenido ${nombre}, juegue y gane!!`;
    saldo.textContent = `$ ${sipe}`;
    mensaje2.style.display = "block";
    mensaje2.textContent = `Su saldo es de: $${sipe}`;
    billetera += parseInt(sipe);
    comenzar_apuestas();
  } else {
    mensaje3.style.display = "block";
    mensaje3.textContent = "Depósito mínimo: 1";
  }
});

function comenzar_apuestas() {
  let ap = document.querySelector(".apostando");
  let pari = document.querySelector(".sel");
  input_apuesta.disabled = false;
  input_apuesta.value = "";
  input_apuesta.addEventListener("keyup", function () {
    pari.textContent = "";
    let apuesta = input_apuesta.value;
    if (apuesta > billetera) {
      input_apuesta.style.color = "red";
      par.onclick = "";
      impar.onclick = "";
    } else if (apuesta <= billetera) {
      mensaje3.style.display = "none";
      input_apuesta.style.color = "black";
      par.onclick = () => {
        evaluar("par", apuesta);
      };
      impar.onclick = () => {
        evaluar("impar", apuesta);
      };
      if (apuesta > 0) {
        ap.textContent = `$${apuesta}`;
        mensaje3.style.display = "none";
      } else {
        ap.textContent = `$${0}`;
        mensaje3.style.display = "block";
        mensaje3.textContent = "Apuesta mínima: 1";
      }
    }
  });
}

function testCaracteres(letra) {
  var caracteres = /\W/g;
  if (caracteres.test(letra)) {
    mensaje3.style.display = "block";
    input_shibas.style.display = "none";
    mensaje3.textContent = "No se permiten caracteres especiales";
  } else {
    mensaje3.style.display = "none";
    palabra.push(letra);
    input_shibas.style.display = "block";
  }
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function evaluar(paridad, apuesta) {
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
      mensaje2.textContent = "Saldo actual: $" + billetera;
      saldo.textContent = "$" + billetera;
      partidas_ganadas += 1;
      desea_continuar();
      input_apuesta.disabled = true;
      pari.textContent = "par".toUpperCase();
    } else if (paridad == "impar" && total % 2 != 0) {
      mensaje1.style.color = "#74fd3e";
      mensaje1.textContent = "Felicidades, Usted ganó!";
      billetera += parseInt(apuesta);
      mensaje2.textContent = "Saldo actual: $" + billetera;
      saldo.textContent = "$" + billetera;
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
      mensaje2.textContent = "Saldo actual: $" + billetera;
      saldo.textContent = "$" + billetera;
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
  let sipi = document.querySelector(".si_cont");
  let nope = document.querySelector(".no_cont");
  let cont = document.querySelector(".continuar");
  par.onclick = "";
  impar.onclick = "";
  cont.style.display = "flex";
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
