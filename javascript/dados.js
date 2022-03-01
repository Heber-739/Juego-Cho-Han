var sum1 = document.getElementById('suma');
var sum2 = document.getElementById('resta');
var cont = document.getElementById('continuar');
var pari = document.getElementById('sel');

function limpiar_dado1(){
    var lista1 = document.getElementsByClassName('cir1');
    for (var i = 0; i < lista1.length; i++) {
        var circu1 = lista1[i];
        circu1.style.display = 'none';
    }

}
function limpiar_dado2(){
    var lista2 = document.getElementsByClassName('cir2');
    for (var i = 0; i < lista2.length; i++) {
        var circu2 = lista2[i];
        circu2.style.display = 'none';
    }
    
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function girarDados(){
    numero = parseInt((Math.random()*15 + 7));
    seg = 200
    for (let i = 0; i <= numero; i++) {
        if (i<numero){
            setTimeout(girar_dado2, seg)
            setTimeout(girar_dado1, seg)
            seg += 200
        } else {
            girar_dado1()
            girar_dado2()
        }
    }   
    return numero;
}


function evaluar(paridad){
    
    if (input_apuesta.value >= 1){
        time = girarDados();
        sleep(210*time).then(() => {
            sumandos = document.getElementsByClassName('suma');
            total = 0;
            for (var s = 0; s < sumandos.length; s++) {
                var element = sumandos[s];
                total += parseInt(element.textContent);
            }
            if ((paridad == 'par') && (total%2 == 0)){
                mensaje1.style.color = '#74fd3e';
                mensaje1.textContent = "Felicidades, Usted ganó!";
                saldo_shibas += parseInt(valor_apuesta);
                mensaje2.textContent = "Saldo actual: $" + saldo_shibas;
                saldo.textContent = "$" + saldo_shibas;
                partidas_ganadas += 1;
                cont.style.display = "flex";
                input_apuesta.disabled = true;
                par.style.pointerEvents = 'none'
                impar.style.pointerEvents = 'none'
                pari.textContent = ('par').toUpperCase();
                
            } else if ((paridad == 'impar') && (total%2 != 0)){
                mensaje1.style.color = '#74fd3e';
                mensaje1.textContent = "Felicidades, Usted ganó!";
                saldo_shibas += parseInt(valor_apuesta);
                mensaje2.textContent = "Saldo actual: $" + saldo_shibas;
                saldo.textContent = "$" + saldo_shibas;
                partidas_ganadas += 1;
                cont.style.display = "flex";
                input_apuesta.disabled = true;
                par.style.pointerEvents = 'none'
                impar.style.pointerEvents = 'none'
                pari.textContent = ('impar').toUpperCase();
            } else {
                if (total%2 != 0) {
                    pari.textContent = ('impar').toUpperCase();
                } else{
                    pari.textContent = ('par').toUpperCase();
                }
                mensaje1.style.color = '#fd2600';
                mensaje1.textContent = "Usted perdió!";
                saldo_shibas -= parseInt(valor_apuesta);
                mensaje2.textContent = "Saldo actual: $" + saldo_shibas;
                saldo.textContent = "$" + saldo_shibas;
                if (saldo_shibas == 0) {
                    mensaje1.style.color = "white"
                    mensaje1.textContent = "Muchas gracias por jugar!"
                    input_apuesta.disabled = true;
                    mensaje2.textContent = "Usted gano " + partidas_ganadas + " partidas";

                } else {
                    cont.style.display = "flex";
                    input_apuesta.disabled = true;
                    par.style.pointerEvents = 'none';
                    impar.style.pointerEvents = 'none';
                }
            }
        });
    } else {
        mensaje3.style.display = 'block'
        mensaje3.textContent = "Apuesta mínima: 1"
    }

}
function continuar(params) {
    input_apuesta.value = "";
    if (params == 'si') {
        input_apuesta.disabled = false;
        cont.style.display = 'none';
        par.style.pointerEvents = 'auto'
        impar.style.pointerEvents = 'auto'
        comenzar_apuestas()
    }else if (params == 'no'){
        cont.style.display = 'none';
        mensaje1.style.color = "#FFF"
        mensaje1.textContent = "Muchas gracias por jugar!";
        mensaje2.textContent = "Usted gano " + partidas_ganadas + " partidas";
        input_apuesta.disabled = true;
                par.style.pointerEvents = 'none'
                impar.style.pointerEvents = 'none'
    }
}




function girar_dado1(){
    giro1 = parseInt((Math.random()*5 + 1));
    
    switch (giro1) {
        case 1:
            limpiar_dado1();
            document.getElementById("valor4_1").style.display = "block";
            globalThis.sum1.textContent = '1'
            break;
        case 2:
            limpiar_dado1();
            document.getElementById("valor3_1").style.display = "block";
            document.getElementById("valor5_1").style.display = "block";
            globalThis.sum1.textContent = '2'
            break;
        case 3:
            limpiar_dado1();
            document.getElementById("valor3_1").style.display = "block";
            document.getElementById("valor4_1").style.display = "block";
            document.getElementById("valor5_1").style.display = "block";
            globalThis.sum1.textContent = '3'
            break;
        case 4:
            limpiar_dado1();
            document.getElementById("valor1_1").style.display = "block";
            document.getElementById("valor3_1").style.display = "block";
            document.getElementById("valor5_1").style.display = "block";
            document.getElementById("valor6_1").style.display = "block";
            globalThis.sum1.textContent = '4'
            break;
        case 5:
            limpiar_dado1();
            document.getElementById("valor1_1").style.display = "block";
            document.getElementById("valor3_1").style.display = "block";
            document.getElementById("valor4_1").style.display = "block";
            document.getElementById("valor5_1").style.display = "block";
            document.getElementById("valor6_1").style.display = "block";
            globalThis.sum1.textContent = '5'
            break;
        case 6:
            limpiar_dado1();
            document.getElementById("valor1_1").style.display = "block";
            document.getElementById("valor2_1").style.display = "block";
            document.getElementById("valor3_1").style.display = "block";
            document.getElementById("valor5_1").style.display = "block";
            document.getElementById("valor7_1").style.display = "block";
            document.getElementById("valor6_1").style.display = "block";
            globalThis.sum1.textContent = '6'
            break;
    }
}

function girar_dado2(){
    
    giro2 = parseInt((Math.random()*5 + 1));
    switch (giro2) {
        case 1:
            limpiar_dado2();
            document.getElementById("valor4_2").style.display = "block";
            globalThis.sum2.textContent = '1'
            break;
        case 2:
            limpiar_dado2();
            document.getElementById("valor3_2").style.display = "block";
            document.getElementById("valor5_2").style.display = "block";
            globalThis.sum2.textContent = '2'
            break;
        case 3:
            limpiar_dado2();
            document.getElementById("valor3_2").style.display = "block";
            document.getElementById("valor4_2").style.display = "block";
            document.getElementById("valor5_2").style.display = "block";
            globalThis.sum2.textContent = '3'
            break;
        case 4:
            limpiar_dado2();
            document.getElementById("valor1_2").style.display = "block";
            document.getElementById("valor3_2").style.display = "block";
            document.getElementById("valor5_2").style.display = "block";
            document.getElementById("valor6_2").style.display = "block";
            globalThis.sum2.textContent = '4'
            break;
        case 5:
            limpiar_dado2();
            document.getElementById("valor1_2").style.display = "block";
            document.getElementById("valor3_2").style.display = "block";
            document.getElementById("valor4_2").style.display = "block";
            document.getElementById("valor5_2").style.display = "block";
            document.getElementById("valor6_2").style.display = "block";
            globalThis.sum2.textContent = '5'
            break;
        case 6:
            limpiar_dado2();
            document.getElementById("valor1_2").style.display = "block";
            document.getElementById("valor2_2").style.display = "block";
            document.getElementById("valor3_2").style.display = "block";
            document.getElementById("valor5_2").style.display = "block";
            document.getElementById("valor7_2").style.display = "block";
            document.getElementById("valor6_2").style.display = "block";
            globalThis.sum2.textContent = '6'
            break;
    }
}
