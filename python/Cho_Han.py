from random import *
import time

billetera = 10
gano = 0
pregunta = "si"

print("---Bienvenido ${} a CHO HAN---").format()
print("Usted ingresa teniendo ${} en su billetera".format(billetera))

while billetera > 0 and pregunta == "si":
    apuesta = int(input("Ingrese apuesta: "))

    if apuesta <= billetera:
        paridad = input("Adivine ¿Par o Impar?: ").lower()
        time.sleep(2)
        dado1 = randint(1, 7)
        dado2 = randint(1, 7)
        suma1 = dado1 + dado2
        total = suma1 % 2
        print(dado1, "+", dado2, "=", suma1)
        time.sleep(2)
        if total == 0 and paridad == "par":
            print("¡Ganó!")
            billetera += apuesta
            gano += 1
        elif total != 0 and paridad == "impar":
            print("¡Ganó!")
            billetera += apuesta
            gano += 1
        else:
            print("¡Perdió!")
            billetera -= apuesta
        print("Billetera: {}".format(billetera))
        if billetera != 0:
            pregunta = input("¿Desea seguir jugando?: ").lower()
            print("------------------------------")
    else:
        print("La apuesta es mayor de lo que tiene en su billetera")
else:
    print("Usted ganó {} partidas".format(gano))
    print("Gracias por jugar")
