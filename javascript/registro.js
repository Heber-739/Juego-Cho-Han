var jugadas = 0;

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
  redimencionar(jugadas);
}

export function redimencionar(jugadas) {
  let body = document.querySelector("body");
  let ancho = screen.width * 1.1;

  let tabla = document.querySelector(".ultimos_resultados");
  let altura_final = Math.round(tabla.clientHeight + ancho);
  if (screen.width < 1024) {
    if (altura_final > screen.height) {
      body.style.height = ` ${altura_final}px`;
    } else if (altura_final < screen.height) {
      body.style.height = "100vh";
    }
  } else if (screen.width >= 1024) {
    if (jugadas > 15) {
      let altura = jugadas * 1.15;
      body.style.height = `calc(100vh + ${altura}vh)`;
    }
  }
}
