function limpiar_dado1() {
  var lista1 = document.querySelectorAll(".cir1");
  for (var i = 0; i < lista1.length; i++) {
    var circu1 = lista1[i];
    circu1.style.display = "none";
  }
}
function limpiar_dado2() {
  var lista2 = document.querySelectorAll(".cir2");
  for (var i = 0; i < lista2.length; i++) {
    var circu2 = lista2[i];
    circu2.style.display = "none";
  }
}

export function girarDados() {
  let numero = parseInt(Math.random() * 15 + 7);
  let seg = 200;
  for (let i = 0; i <= numero; i++) {
    if (i < numero) {
      setTimeout(girar_dado2, seg);
      setTimeout(girar_dado1, seg);
      seg += 200;
    } else {
      girar_dado1();
      girar_dado2();
    }
  }
  return numero;
}

function girar_dado1() {
  let giro1 = parseInt(Math.random() * 5 + 1);
  let sum1 = document.querySelector(".suma1");
  switch (giro1) {
    case 1:
      limpiar_dado1();
      document.getElementById("valor4_1").style.display = "block";
      sum1.textContent = "1";
      break;
    case 2:
      limpiar_dado1();
      document.getElementById("valor3_1").style.display = "block";
      document.getElementById("valor5_1").style.display = "block";
      sum1.textContent = "2";
      break;
    case 3:
      limpiar_dado1();
      document.getElementById("valor3_1").style.display = "block";
      document.getElementById("valor4_1").style.display = "block";
      document.getElementById("valor5_1").style.display = "block";
      sum1.textContent = "3";
      break;
    case 4:
      limpiar_dado1();
      document.getElementById("valor1_1").style.display = "block";
      document.getElementById("valor3_1").style.display = "block";
      document.getElementById("valor5_1").style.display = "block";
      document.getElementById("valor6_1").style.display = "block";
      sum1.textContent = "4";
      break;
    case 5:
      limpiar_dado1();
      document.getElementById("valor1_1").style.display = "block";
      document.getElementById("valor3_1").style.display = "block";
      document.getElementById("valor4_1").style.display = "block";
      document.getElementById("valor5_1").style.display = "block";
      document.getElementById("valor6_1").style.display = "block";
      sum1.textContent = "5";
      break;
    case 6:
      limpiar_dado1();
      document.getElementById("valor1_1").style.display = "block";
      document.getElementById("valor2_1").style.display = "block";
      document.getElementById("valor3_1").style.display = "block";
      document.getElementById("valor5_1").style.display = "block";
      document.getElementById("valor7_1").style.display = "block";
      document.getElementById("valor6_1").style.display = "block";
      sum1.textContent = "6";
      break;
  }
}

function girar_dado2() {
  let giro2 = parseInt(Math.random() * 5 + 1);
  let sum2 = document.querySelector(".suma2");
  switch (giro2) {
    case 1:
      limpiar_dado2();
      document.getElementById("valor4_2").style.display = "block";
      sum2.textContent = "1";
      break;
    case 2:
      limpiar_dado2();
      document.getElementById("valor3_2").style.display = "block";
      document.getElementById("valor5_2").style.display = "block";
      sum2.textContent = "2";
      break;
    case 3:
      limpiar_dado2();
      document.getElementById("valor3_2").style.display = "block";
      document.getElementById("valor4_2").style.display = "block";
      document.getElementById("valor5_2").style.display = "block";
      sum2.textContent = "3";
      break;
    case 4:
      limpiar_dado2();
      document.getElementById("valor1_2").style.display = "block";
      document.getElementById("valor3_2").style.display = "block";
      document.getElementById("valor5_2").style.display = "block";
      document.getElementById("valor6_2").style.display = "block";
      sum2.textContent = "4";
      break;
    case 5:
      limpiar_dado2();
      document.getElementById("valor1_2").style.display = "block";
      document.getElementById("valor3_2").style.display = "block";
      document.getElementById("valor4_2").style.display = "block";
      document.getElementById("valor5_2").style.display = "block";
      document.getElementById("valor6_2").style.display = "block";
      sum2.textContent = "5";
      break;
    case 6:
      limpiar_dado2();
      document.getElementById("valor1_2").style.display = "block";
      document.getElementById("valor2_2").style.display = "block";
      document.getElementById("valor3_2").style.display = "block";
      document.getElementById("valor5_2").style.display = "block";
      document.getElementById("valor7_2").style.display = "block";
      document.getElementById("valor6_2").style.display = "block";
      sum2.textContent = "6";
      break;
  }
}
