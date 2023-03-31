# Función para sumar dos números
def sumar(num1, num2):
    return num1 + num2

# Función para restar dos números
def restar(num1, num2):
    return num1 - num2

# Función para multiplicar dos números
def multiplicar(num1, num2):
    return num1 * num2

# Función para dividir dos números
def dividir(num1, num2):
    return num1 / num2

# Función para obtener el residuo de una división
def residuo(num1, num2):
    return num1 % num2

# Menú principal de la calculadora
print("Bienvenido a la calculadora")
print("1. Sumar")
print("2. Restar")
print("3. Multiplicar")
print("4. Dividir")
print("5. Obtener residuo")

# Obtener la opción del usuario
opcion = int(input("Ingrese su opción (1/2/3/4/5): "))

# Obtener los números para operar
num1 = float(input("Ingrese el primer número: "))
num2 = float(input("Ingrese el segundo número: "))

# Realizar la operación seleccionada
if opcion == 1:
    print("El resultado de la suma es: ", sumar(num1, num2))
elif opcion == 2:
    print("El resultado de la resta es: ", restar(num1, num2))
elif opcion == 3:
    print("El resultado de la multiplicación es: ", multiplicar(num1, num2))
elif opcion == 4:
    print("El resultado de la división es: ", dividir(num1, num2))
elif opcion == 5:
    print("El resultado del residuo es: ", residuo(num1, num2))
else:
    print("Opción inválida.")