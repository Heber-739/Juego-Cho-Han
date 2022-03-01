from browser import *
from browser import timer
from javascript import *
import random as ran
import re

paso = []
billetera = 10
Template(document['billetera']).render(value='${}').format(billetera)


def limpiar_dado1():
    lista = document.select('.cir1')
    for element in lista:
        element.style.display = 'none'


def limpiar_dado2():
    lista = document.select('.cir2')
    for element in lista:
        element.style.display = 'none'


def girar_dado1():
    giros1 = ran.randint(1, 6)
    if (giros1 == 1):
        limpiar_dado1()
        document.getElementById("valor4_1").style.display = "block"
        document['suma'].text = "1"
    elif giros1 == 2:
        limpiar_dado1()
        document.getElementById("valor3_1").style.display = "block"
        document.getElementById("valor5_1").style.display = "block"
        document['suma'].text = "2"
    elif giros1 == 3:
        limpiar_dado1()
        document.getElementById("valor3_1").style.display = "block"
        document.getElementById("valor4_1").style.display = "block"
        document.getElementById("valor5_1").style.display = "block"
        document['suma'].text = "3"
    elif giros1 == 4:
        limpiar_dado1()
        document.getElementById("valor1_1").style.display = "block"
        document.getElementById("valor3_1").style.display = "block"
        document.getElementById("valor5_1").style.display = "block"
        document.getElementById("valor6_1").style.display = "block"
        document['suma'].text = "4"
    elif giros1 == 5:
        limpiar_dado1()
        document.getElementById("valor1_1").style.display = "block"
        document.getElementById("valor3_1").style.display = "block"
        document.getElementById("valor4_1").style.display = "block"
        document.getElementById("valor5_1").style.display = "block"
        document.getElementById("valor6_1").style.display = "block"
        document['suma'].text = "5"
    elif giros1 == 6:
        limpiar_dado1()
        document.getElementById("valor1_1").style.display = "block"
        document.getElementById("valor2_1").style.display = "block"
        document.getElementById("valor3_1").style.display = "block"
        document.getElementById("valor5_1").style.display = "block"
        document.getElementById("valor7_1").style.display = "block"
        document.getElementById("valor6_1").style.display = "block"
        document['suma'].text = "6"
    return giros1


def girar_dado2():
    giros2 = ran.randint(1, 6)
    if (giros2 == 1):
        limpiar_dado2()
        document.getElementById("valor4_2").style.display = "block"
        document['resta'].text = "1"
    elif giros2 == 2:
        limpiar_dado2()
        document.getElementById("valor1_2").style.display = "block"
        document.getElementById("valor6_2").style.display = "block"
        document['resta'].text = "2"
    elif giros2 == 3:
        limpiar_dado2()
        document.getElementById("valor3_2").style.display = "block"
        document.getElementById("valor4_2").style.display = "block"
        document.getElementById("valor5_2").style.display = "block"
        document['resta'].text = "3"
    elif giros2 == 4:
        limpiar_dado2()
        document.getElementById("valor1_2").style.display = "block"
        document.getElementById("valor3_2").style.display = "block"
        document.getElementById("valor5_2").style.display = "block"
        document.getElementById("valor6_2").style.display = "block"
        document['resta'].text = "4"
    elif giros2 == 5:
        limpiar_dado2()
        document.getElementById("valor1_2").style.display = "block"
        document.getElementById("valor3_2").style.display = "block"
        document.getElementById("valor4_2").style.display = "block"
        document.getElementById("valor5_2").style.display = "block"
        document.getElementById("valor6_2").style.display = "block"
        document['resta'].text = "5"
    elif giros2 == 6:
        limpiar_dado2()
        document.getElementById("valor1_2").style.display = "block"
        document.getElementById("valor2_2").style.display = "block"
        document.getElementById("valor3_2").style.display = "block"
        document.getElementById("valor5_2").style.display = "block"
        document.getElementById("valor7_2").style.display = "block"
        document.getElementById("valor6_2").style.display = "block"
        document['resta'].text = "6"


def si_jugar(ev):
    document.getElementById("continuarOn").id = "continuarOff"
    comenzar_juego()
    document['bienvenida'].text = "Eso! Tu puedes!"


def no_retitarse(ev):
    document.getElementById("continuarOn").id = "continuarOff"
    document['bienvenida'].text = "Gracias por jugar!"
    document['mensajes'].text = "Esperamos que vuelvas pronto"
    document.getElementById("apuestas").style.display = "none"


def desear():
    document['par'].unbind('click')
    document['impar'].unbind('click')
    document.getElementById("continuarOff").id = "continuarOn"
    document['si_cont'].bind('click', si_jugar)
    document['no_cont'].bind('click', no_retitarse)


def ejecutar():
    alert('aca')
    suma1 = document.getElementById("suma").text
    suma2 = document.getElementById("resta").text
    pare = document.getElementById("sel").text.lower()
    apuest = document.getElementById("apuestando").text
    bill = document.getElementById("mensajes").text
    monto = bill.replace('Dinero disponible: $', '')
    aposta = apuest.replace('$', '')
    apo = int(aposta)
    billet = int(monto)
    res = int(suma1) + int(suma2)
    alert(billet)
    if ((res % 2) == 0) and (pare == 'par'):
        billet = billet + apo
        document['billetera'].text = ("${}").format(billet)
        document['bienvenida'].text = "Usted Gano!!"
        document['mensajes'].text = ("Su saldo es de ${}").format(billet)
        desear()
    elif((res % 2) != 0) and (pare == 'impar'):
        billet = billet + apo
        document['bienvenida'].text = "Usted Gano!!"
        document['mensajes'].text = ("Su saldo es de ${}").format(billet)
        document['billetera'].text = ("${}").format(billet)
        desear()
    else:
        billet = billet - apo
        document['bienvenida'].text = "Usted Perdió!!"
        document['mensajes'].text = ("Su saldo es de ${}").format(billet)
        document['billetera'].text = ('${}').format(billet)
        desear()


def num_giros_dados():
    numero = ran.randint(5, 9)
    if numero == 5:
        timer.set_timeout(girar_dado1, 200)
        timer.set_timeout(girar_dado2, 200)
        timer.set_timeout(girar_dado1, 400)
        timer.set_timeout(girar_dado2, 400)
        timer.set_timeout(girar_dado1, 600)
        timer.set_timeout(girar_dado2, 600)
        timer.set_timeout(girar_dado1, 800)
        timer.set_timeout(girar_dado2, 800)
        timer.set_timeout(girar_dado1, 1000)
        timer.set_timeout(girar_dado2, 1000)
    elif numero == 6:
        timer.set_timeout(girar_dado1, 200)
        timer.set_timeout(girar_dado2, 200)
        timer.set_timeout(girar_dado1, 400)
        timer.set_timeout(girar_dado2, 400)
        timer.set_timeout(girar_dado1, 600)
        timer.set_timeout(girar_dado2, 600)
        timer.set_timeout(girar_dado1, 800)
        timer.set_timeout(girar_dado2, 800)
        timer.set_timeout(girar_dado1, 1000)
        timer.set_timeout(girar_dado2, 1000)
        timer.set_timeout(girar_dado1, 1200)
        timer.set_timeout(girar_dado2, 1200)
    elif numero == 7:
        timer.set_timeout(girar_dado1, 200)
        timer.set_timeout(girar_dado2, 200)
        timer.set_timeout(girar_dado1, 400)
        timer.set_timeout(girar_dado2, 400)
        timer.set_timeout(girar_dado1, 600)
        timer.set_timeout(girar_dado2, 600)
        timer.set_timeout(girar_dado1, 800)
        timer.set_timeout(girar_dado2, 800)
        timer.set_timeout(girar_dado1, 1000)
        timer.set_timeout(girar_dado2, 1000)
        timer.set_timeout(girar_dado1, 1200)
        timer.set_timeout(girar_dado2, 1200)
        timer.set_timeout(girar_dado1, 1400)
        timer.set_timeout(girar_dado2, 1400)
    elif numero == 8:
        timer.set_timeout(girar_dado1, 200)
        timer.set_timeout(girar_dado2, 200)
        timer.set_timeout(girar_dado1, 400)
        timer.set_timeout(girar_dado2, 400)
        timer.set_timeout(girar_dado1, 600)
        timer.set_timeout(girar_dado2, 600)
        timer.set_timeout(girar_dado1, 800)
        timer.set_timeout(girar_dado2, 800)
        timer.set_timeout(girar_dado1, 1000)
        timer.set_timeout(girar_dado2, 1000)
        timer.set_timeout(girar_dado1, 1200)
        timer.set_timeout(girar_dado2, 1200)
        timer.set_timeout(girar_dado1, 1400)
        timer.set_timeout(girar_dado2, 1400)
        timer.set_timeout(girar_dado1, 1600)
        timer.set_timeout(girar_dado2, 1600)
    elif numero == 9:
        timer.set_timeout(girar_dado1, 200)
        timer.set_timeout(girar_dado2, 200)
        timer.set_timeout(girar_dado1, 400)
        timer.set_timeout(girar_dado1, 400)
        timer.set_timeout(girar_dado2, 600)
        timer.set_timeout(girar_dado1, 600)
        timer.set_timeout(girar_dado2, 800)
        timer.set_timeout(girar_dado1, 800)
        timer.set_timeout(girar_dado2, 1000)
        timer.set_timeout(girar_dado1, 1000)
        timer.set_timeout(girar_dado2, 1200)
        timer.set_timeout(girar_dado2, 1200)
        timer.set_timeout(girar_dado1, 1400)
        timer.set_timeout(girar_dado2, 1400)
        timer.set_timeout(girar_dado1, 1600)
        timer.set_timeout(girar_dado2, 1600)
        timer.set_timeout(girar_dado1, 1800)
        timer.set_timeout(girar_dado2, 1800)
    timer.set_timeout(ejecutar, 1900)


def sorteo(ev):
    num_giros_dados()


def sorteo_par(ev):
    document['sel'].text = "Par"
    sorteo(ev)


def sorteo_impar(ev):
    document['sel'].text = "Impar"
    sorteo(ev)


def suma_apuesta(ev):
    captura = document['apuesta'].value
    if (int(captura) > billetera):
        document['apuesta'].style.color = 'red'
        document['par'].unbind('click')
        document['impar'].unbind('click')
        document['despedida'].style.display = "block"
        document['despedida'].style.color = "#ff3cac"
        document['despedida'].text = "Saldo insuficiente"
    elif (int(captura) <= billetera):
        document['apuestando'].text = ('${}').format(captura)
        document['apuesta'].style.color = 'black'
        document['despedida'].style.display = "none"
        document['par'].bind('click', sorteo_par)
        document['impar'].bind('click', sorteo_impar)


def comenzar_juego():
    tamaño = len(paso)
    if ((billetera >= 1) and (tamaño == 0)):
        document['apuesta'].bind('keyup', suma_apuesta)
    else:
        document['bienvenida'].text = "Saldo agotado"
        document['despedida'].style.display = "block"
        document['despedida'].text = "Gracias por jugar!"


def name(ev):
    nombre = document['nombre'].value
    if nombre != "":
        """ ---------Agrega la bienvenida------------ """
        document.getElementById("bienvenida").style.display = "block"
        Template('bienvenida').render(name="Bienvenido {}!").format(nombre)
        boton = document.querySelector('#form')
        boton.classList.add('ocultar')
        document.getElementById("mensajes").style.display = "block"
        Template('mensajes').render(
            name="Dinero disponible: ${}".format(billetera))
        boton = document.querySelector('.continuar')
        boton.classList.remove('ocultar')
        comenzar_juego()
    else:
        document.getElementById("mensajes").style.display = "block"
        texto = document['mensajes']
        texto.text = (
            'Ingrese un nombre valido')


""" document['button'].bind('click', name)
 """

Template("team").render(name="Liverpool FC")


def say_hello(event, element):
    alert("Hello world")


Template("button", [say_hello]).render()
