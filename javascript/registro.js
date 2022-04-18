var jugadas = 0;
var altura = 0;
export function agregar_registro(monto, billetera, resultado) {
  const datos_historial = {
    apuesta: monto,
    saldo: billetera,
    gano: resultado,
  };
  const hist = JSON.parse(localStorage.getItem("historial")) || [];
  hist.push(datos_historial);
  localStorage.setItem("historial", JSON.stringify(hist));
  registro_juegos(datos_historial);
}

export function leer_registro() {
  const historial_lista = JSON.parse(localStorage.getItem("historial")) || [];
  historial_lista.forEach((element) => {
    registro_juegos(element);
  });
}

function registro_juegos(registro) {
  jugadas += 1;
  let new_row = document.createElement("tr");
  let celda_nro = document.createElement("td");
  let celda_apuesta = document.createElement("td");
  let celda_resultado = document.createElement("td");
  let celda_saldo = document.createElement("td");
  let cuerpo = document.querySelector(".cuerpo_tabla");
  let body = document.querySelector("body");
  celda_nro.textContent = jugadas;
  celda_apuesta.textContent = registro.apuesta;
  if (registro.gano == "Ganó") {
    celda_resultado.classList.remove("perdio");
    celda_resultado.classList.add("gano");
  } else if (registro.gano == "Perdió") {
    celda_resultado.classList.remove("gano");
    celda_resultado.classList.add("perdio");
  }
  celda_resultado.textContent = registro.gano;
  celda_saldo.textContent = registro.saldo;

  new_row.appendChild(celda_nro);
  new_row.appendChild(celda_apuesta);
  new_row.appendChild(celda_resultado);
  new_row.appendChild(celda_saldo);
  new_row.classList.add("rows");
  cuerpo.appendChild(new_row);
  let alt = cuerpo.firstChild.clientHeight;
  altura += alt;
  body.style.marginBottom = `${altura}px`;
}
