var input_nombre = document.getElementById("nombre");
var mensaje1 = document.getElementById("bienvenida");
var mensaje2 = document.getElementById("mensajes");
var mensaje3 = document.getElementById("despedida");
var start = document.getElementById("button");
var form_nombre = document.getElementById("form");
var input_apuesta = document.getElementById("apuesta");
var saldo = document.getElementById("billetera");
var input_shibas = document.getElementById("shibas");
var valor_apuesta = document.getElementById("apostando");
var par = document.getElementById("par");
var impar = document.getElementById("impar");

var palabra = [];
var saldo_shibas = 0;
var valor_apuesta = 0;
var partidas_ganadas = 0;

par.style.pointerEvents = "none";
impar.style.pointerEvents = "none";
input_nombre.addEventListener("keypress", function (event) {
  var input_name = event.key;
  testCaracteres(input_name);
});

function cargar_datos() {
  var sipe = input_shibas.value;
  if (sipe >= 1) {
    mensaje3.style.display = "none";
    input_nombre.style.display = "block";
    nombre = palabra.join("");
    form_nombre.style.display = "none";
    mensaje1.style.display = "block";
    mensaje1.textContent = "Bienvenido " + nombre + ", juegue y gane!!";
    bitcoins = input_shibas.value;
    saldo_shibas += parseInt(bitcoins);
    saldo.textContent = "$" + saldo_shibas;
    mensaje2.style.display = "block";
    mensaje2.textContent = "Su saldo es de: $" + saldo_shibas;
    comenzar_apuestas();
  } else {
    mensaje3.style.display = "block";
    mensaje3.textContent = "Depósito mínimo: 1";
  }
}
function comenzar_apuestas() {
  ap = document.getElementById("apostando");
  input_apuesta.addEventListener("keyup", function () {
    pari.textContent = "";
    var apuesta = input_apuesta.value;
    if (apuesta > parseInt(saldo_shibas)) {
      input_apuesta.disabled = true;
      input_apuesta.style.color = "red";
      par.style.pointerEvents = "none";
      impar.style.pointerEvents = "none";
    } else if (apuesta <= parseInt(saldo_shibas)) {
      mensaje3.style.display = "none";
      input_apuesta.disabled = false;
      input_apuesta.style.color = "black";
      par.style.pointerEvents = "auto";
      impar.style.pointerEvents = "auto";
      if (parseInt(apuesta) > 0) {
        valor_apuesta = parseInt(apuesta);
        ap.textContent = "$" + valor_apuesta;
      } else {
        ap.textContent = "$" + 0;
      }
    }
  });
}

function testCaracteres(letra) {
  var caracteres = /\W/g;
  if (caracteres.test(letra)) {
    globalThis.mensaje3.style.display = "block";
    globalThis.input_shibas.style.display = "none";
    globalThis.mensaje3.textContent = "No se permiten caracteres especiales";
  } else {
    par.style.pointerEvents = "none";
    globalThis.mensaje3.style.display = "none";
    globalThis.palabra.push(letra);
    globalThis.input_shibas.style.display = "block";
  }
}
