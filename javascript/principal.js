import { leer_registro, redimencionar } from "./registro.js";
import { testCaracteres, evaluar_input } from "./evaluaciones.js";

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

leer_registro();
redimencionar();
window.addEventListener("resize", redimencionar);

input_nombre.addEventListener("keypress", function (event) {
  let caracter = testCaracteres(event.key);
  palabra.push(caracter);
});

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

export function comenzar_apuestas() {
  let ap = document.querySelector(".apostando");
  document.querySelector(".sel").textContent = "";
  input_apuesta.disabled = false;
  input_apuesta.value = "";
  input_apuesta.addEventListener("keyup", function () {
    ap.textContent = "";
    if (input_apuesta.value > billetera) {
      input_apuesta.style.color = "red";
    } else if (input_apuesta.value < billetera) {
      input_apuesta.style.color = "black";
    }
    par.onclick = () => {
      evaluar_input("par", billetera);
    };
    impar.onclick = () => {
      evaluar_input("impar", billetera);
    };
  });
}
