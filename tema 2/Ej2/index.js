//Nivel 1 – Básicos
//1. Número absoluto
let num = prompt("Introduce un número");
document.write("El valor absoluto de " + num + " es " + Math.abs(num) + "<br>");

//2. Redondeo simple
//Valor redondeado
let num2 = prompt("Introduce un número decimal");
document.write("El valor redondeado de " + num2 + " es " + Math.round(num2) + "<br>");

//Redondeo por exceso 
document.write("El valor redondeado por exceso de " + num2 + " es " + Math.ceil(num2) + "<br>");

//Redondeo por defecto
document.write("El valor redondeado por exceso de " + num2 + " es " + Math.floor(num2) + "<br>");

//3. Potencias y raíces
//Calcula ( 5^3 ) 
let base = 5;
let exponente = 3;
document.write(base + " elevado a " + exponente + " es " + Math.pow(base, exponente) + "<br>");

//Calcula la raíz cuadrada de 81
let num3 = 81;
document.write("La raíz cuadrada de " + num3 + " es " + Math.sqrt(num3) + "<br>");

//4. Valor máximo y mínimo
const array = [10, -5, 3, 99, 42];

document.write("El valor máximo del array es: " + Math.max(...array) + "<br>");
document.write("El valor mínimo del array es: " + Math.min(...array) + "<br>");

//Nivel 2 – Aleatoriedad
//5. Número aleatorio entre 0 y 1
let randomNum = Math.random();
document.write("Número aleatorio entre 0 y 1: " + randomNum + "<br>");

//6. Dado virtual (1–6)
let dado = Math.floor(Math.random() * 6) + 1;
document.write("Número aleatorio entre 1 y 6: " + dado + "<br>");

//7. Número aleatorio en un rango
function numeroAleatorioEnRango(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.write("Número aleatorio entre 50 y 100: " + numeroAleatorioEnRango(50, 100) + "<br>");

//Nivel 3 – Trigonometría y logaritmos
//8. Seno y coseno
let anguloGrados = 45;
let anguloRadianes = anguloGrados * (Math.PI / 180);

document.write("El seno de " + anguloGrados + " grados es: " + Math.sin(anguloRadianes) + "<br>");
document.write("El coseno de " + anguloGrados + " grados es: " + Math.cos(anguloRadianes) + "<br>");

//9. Tangente y arco tangente
let anguloTangente = 60;
let anguloRadianesTang = anguloTangente * (Math.PI / 180);

console.log("La tangente de " + anguloTangente + " grados es: " + Math.tan(anguloRadianesTang));
console.log("El arco tangente de 1 es: " + (Math.atan(1) * (180 / Math.PI)) + " grados");

//10. Logaritmos 
let numLog = 10;
console.log("El logaritmo de " + numLog + " es: " + Math.log(numLog) + "<br>");

//Nivel 4 – Retos aplicado
//11. Juego: adivina el número
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let numeroAdivinado = prompt("Adivina el número entre 1 y 100");

while (parseInt(numeroAdivinado) !== numeroSecreto)
{
    if (parseInt(numeroAdivinado) < numeroSecreto)
    {
        document.write("El número secreto es mayor que " + numeroAdivinado + ". Inténtalo de nuevo.<br>");
    }
    else
    {
        document.write("El número secreto es menor que " + numeroAdivinado + ". Inténtalo de nuevo.<br>");
    }
}
document.write("¡Felicidades! Has adivinado el número secreto: " + numeroSecreto + "<br>");

//12. Distancia entre dos puntos
function distancia(x1, y1, x2, y2) 
{
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

console.log(distancia(0, 0, 3, 4)); 

//13. Simulación de ruleta
let numeroGanador = Math.floor(Math.random() * 36) + 1;
console.log("Numero ganador: " + numeroGanador);


//14. Generador de contraseñas
function generarPassword() 
{
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";

  for (let i = 0; i < 8; i++) 
  {
    let index = Math.floor(Math.random() * caracteres.length);
    password += caracteres[index];
  }

  return password;
}

document.write("Contraseña:", generarPassword());
