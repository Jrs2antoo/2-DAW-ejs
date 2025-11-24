//Retos Avanzados con Number, Math y String en JavaScript
//Nivel 1- Aleatoriedad avanzada

//1. Generador de matrículas aleatorias

let num = Math.floor(Math.random() * 10000)
let numeros = num.toString().padStart(4, "0");
let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let letra = "";
for(let i=0; i<3; i++)
    {
        letra += letras.charAt(Math.floor(Math.random() * letras.length));
    }
console.log(numeros + " " + letra);

//2. Simulador de dados múltiples
let nDados = prompt("Dime el número de dados");
let mCaras = prompt("Dime cuantas caras tiene el dado");

/*
let nDados = 2;
let mCaras = 6;
*/

let suma = 0;
for(let j = 0; j < nDados; j++)
{
    let num2 = Math.floor(Math.random() * mCaras) + 1;
    suma += num2;
}

console.log(suma);

//3. Generador de identificadores únicos
let cadena = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
let alfaNumerico = "";
for(let k = 1; k < 16; k++)
{
    alfaNumerico += cadena.charAt(Math.floor(Math.random() * cadena.length))
}

console.log(alfaNumerico);

//Nivel 2 - Manipulación de Strings compleja
//4. Validador de contraseñas
//ejercicio4
function validar(cadena)
{
    let letras="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    let numeros="1234567890";
    let caracteres="!#$%&'()*+,-./:;<=>?@^_`~";
    let longuitud=false;
    let mayuscula=false;
    let numero=false;
    let caracter=false;
    let resultado="";
    //comporbar longuitud
    if(cadena.length==8)
    {
        longuitud=true;
    }
    //buscar mayusculas
    for(i=0;i<cadena.length;i++)
    {
        
            if(cadena.charAt(i)==cadena.charAt(i).toUpperCase())
            {
                mayuscula=true;
            }

        
    }
    //buscar numeros
    for(i=0;i<cadena.length;i++)
    {
        for(u=0;u<numeros.length;u++)
        {
            if(cadena.charAt(i)==numeros.charAt(u))
            {
                numero=true;
            }

        }
    }
    //buscar caracteres especiales
    for(i=0;i<cadena.length;i++)
    {
        for(u=0;u<caracteres.length;u++)
        {
            if(cadena.charAt(i)==caracteres.charAt(u))
            {
                caracter=true;
            }

        }
    }

    if(longuitud==true && mayuscula==true && numero==true &&caracter==true)
    {
        resultado="Enhorabuena, es una contraseña valida";
    }
    else
    {
        resultado="Tu contraseña no es valida";
    }

    return resultado;
}

console.log(validar("pAcOpE7#"));

//5. Compresor de texto (RLE)
function comprimirTextoRLE(texto) 
{
    let comprimido = '';
    let contador = 1;
    for (let i = 1; i <= texto.length; i++) 
    {
        if (texto[i] === texto[i - 1]) 
        {
            contador++;
        } else 
        {
            comprimido += texto[i - 1] + (contador > 1 ? contador : '');
            contador = 1;
        }
    }
    return comprimido;
}
console.log(`Texto comprimido: `+comprimirTextoRLE('aaabbbccdaa'));
//6. Descompresor de texto (RLE)
function descomprimirTextoRLE(textoComprimido) 
{
    let descomprimido = '';
    for (let i = 0; i < textoComprimido.length; i+=2) 
    {
        const char = textoComprimido[i];
        const count = parseInt(textoComprimido[i + 1]) || 1;
        descomprimido += char.repeat(count);
    }
    return descomprimido;
}
console.log(`Texto descomprimido: `+descomprimirTextoRLE('a3b3c2d1a2'));

// Nivel 3 -  Retos combinados
//7. Juego: adivina el número con intentos limitados
let numAleatorio = Math.floor(Math.random() * 100) + 1;
let nIntentos = 0;

do
{
    nIntentos++;
    numAdivinado = prompt("Dime un numero de 1 al 100");

    if(numAdivinado == numAleatorio)
    {
        console.log("Felicidades has acertado el número");
        console.log("Número de intentos: " + nIntentos);
    }
    else if(numAdivinado < numAleatorio)
    {
        console.log("El número a adivinar es mayor");
        console.log("Número de intentos: " + nIntentos);
    } else{
        console.log("El número a adivinar es menor");
        console.log("Número de intentos: " + nIntentos);
    }

}while(numAleatorio != numAdivinado && nIntentos < 7)

//8. Generador de tarjetas de crédito falsas Genera un número de tarjeta válido según el algoritmo de Luhn. Devuélvelo como string en el formato "####-####-####-####".
let resultado = "";
pos = 0;
for(let i = 1; i <= 15; i++)
{
    pos++;
    resultado += Math.floor(Math.random() * 10);
    if(i === 4 || i === 8 || i === 12)
    {
        resultado += "-"
    }
}

console.log(resultado);

//9 Analizador de dataset en texto

let texto = "10 20 30 40 50 60";

let numeross = texto.split(" ");
let arrayNum = [];

for(let i = 0; i < numeross.length; i++)
{
    arrayNum.push(Number(numeross[i]));
}

//promedio

let suma2 = 0;
for (let i = 0; i< arrayNum.length; i++)
{
    suma2 += arrayNum[i];
}
let promedio = suma2 / arrayNum.length;

console.log("Promedio: " + promedio);

//Mediana

let mediana; 
if (numeross.length % 2 === 0)
{
    let medio1 = arrayNum[arrayNum.length / 2 - 1];
    let medio2 = arrayNum[arrayNum.length / 2];
    mediana = (medio1 + medio2) / 2;
}else{
    mediana = arrayNum[Math.floor(arrayNum.length) / 2];
}

console.log("Mediana:", mediana);

//desviacion

let sumaDifs = 0;
for(let i = 0; i < arrayNum.length; i++)
{
    let dif = arrayNum[i] - promedio;
    sumaDifs += dif * dif;
}

let varianza = sumaDifs / arrayNum.length;
let desviacion = Math.sqrt(varianza);

console.log("Desviacion estandar:", desviacion);

//10
let palabraOculta = "javascript";
let palabraMostrada = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"]
let terminado = false
let acierto = true;

while(!terminado){
    
    console.log(palabraMostrada);
    let letraElegida = prompt("Dime una letra");

    for(let i = 0; i < palabraOculta.length; i++)
    {
         if(letraElegida === palabraOculta[i])
        {
            palabraMostrada[i] = letraElegida
            acierto = true;
        }
    }

    if(!acierto)
    {
        console.log("Has fallado, intente de nuevo")
    }
   

    if(palabraOculta == palabraMostrada.join(""))
    {
        terminado = true;
    }
}

