// Ejercicio 1: Edad y permiso
let edad = Number(prompt("Ingrese su edad"));
let permiso = prompt("¿Tiene permiso de sus padres? (sí/no)");

if (edad > 18 && permiso === "sí") 
{
    console.log("Puede entrar (1)");
} else {
    console.log("No puede entrar (1)");
}


// Ejercicio 2: Aprobado en materias
let matematicas = prompt("¿Aprobó matemáticas? (sí/no)");
let fisica = prompt("¿Aprobó física? (sí/no)");
let quimica = prompt("¿Aprobó química? (sí/no)");

if (matematicas === "sí" || fisica === "sí" || quimica === "sí") 
{
    console.log("Puede pasar al siguiente nivel (2)");
} else {
    console.log("No puede pasar al siguiente nivel (2)");
}


// Ejercicio 3: Contraseña correcta
let contraseña = prompt("Ingrese la contraseña");

if (!(contraseña === "1234")) 
{
    console.log("Contraseña incorrecta (3)");
} else {
    console.log("Acceso concedido (3)");
}


// Ejercicio 4: Número dentro de rango
let numero = Number(prompt("Ingrese un número"));

if (numero >= 10 && numero <= 50) 
{
    console.log("El número está dentro del rango (4)");
} else {
    console.log("El número está fuera del rango (4)");
}


// Ejercicio 5: Mayoría de edad o tutor presente
edad = Number(prompt("Ingrese su edad"));
let tutor = prompt("¿Tiene tutor presente? (sí/no)");

if (edad >= 18 || tutor === "sí") 
{
    console.log("Puede entrar (5)");
} else {
    console.log("No puede entrar (5)");
}


// Ejercicio 6: Verificación de acceso
let usuario = prompt("Ingrese su usuario");
contraseña = prompt("Ingrese su contraseña");

if ((usuario === "admin" && contraseña === "1234") || (usuario === "invitado")) 
{
    console.log("Acceso válido (6)");
} else {
    console.log("Acceso denegado (6)");
}


// Ejercicio 7: Números positivos y menores que 100
numero = Number(prompt("Ingrese un número"));

if (numero > 0 && numero < 100) 
{
    console.log("El número es positivo y menor que 100 (7)");
} else {
    console.log("El número no cumple las condiciones (7)");
}


// Ejercicio 8: Día laborable
let dia = prompt("Ingrese un día de la semana").toLowerCase();

if (dia === "lunes" || dia === "martes" || dia === "miércoles" || dia === "miercoles" || dia === "jueves" || dia === "viernes") 
{
    console.log("Es un día laborable (8)");
} else {
    console.log("Es fin de semana (8)");
}


// Ejercicio 9: Votación válida
edad = Number(prompt("Ingrese su edad"));
let nacionalidad = prompt("Ingrese su nacionalidad");

if (edad >= 18 && nacionalidad === "espanol") 
{
    console.log("Puede votar (9)");
} else {
    console.log("No puede votar (9)");
}


// Ejercicio 10: Control de acceso con bucle
usuario = "";
contraseña = "";

while (!(usuario === "admin" && contraseña === "1234")) 
{
    usuario = prompt("Usuario:");
    contraseña = prompt("Contraseña:");

    if (!(usuario === "admin" && contraseña === "1234")) {
        console.log("Usuario o contraseña incorrectos. Intente de nuevo. (10)");
    }
}
console.log("¡Acceso permitido! (10)");
