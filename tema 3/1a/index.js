/**
 * @name isOdd
 * @description Devuelve si un número es impar
 * 
 * @param {number} x - El número a evaluar
 * @returns {Boolean} Devuelve true si el número {x} es impar, false sino
 *
 * @example
 *  isOdd(3) // returns true
 */

let resultado = false;
function isOdd(x) {
    if(x % 2 !== 0)
    {
        resultado = true;
    }  

    return resultado;
}

console.log(isOdd(3));

/**
 * @name inRange
 * @description Devuelve si un número se encuentra dentro de un rango
 * 
 * @param {number} x - El número a evaluar si se encuentra dentro del rango
 * @param {number} min - El límite inferior del rango
 * @param {number} max - El límite superior del rango
 * @returns {Boolean} Devuelve true si el número {x} se encuentra dentro del rango definido por {min} y {max}, false sino
 *
 * @example
 *  inRange(2, -4, 10) // returns true
 */

let resultado2 = false;

function inRange(x, min, max)
{
    if(min < x && x < max)
    {
        resultado2 = true;
    }

    return resultado2;
}

console.log(inRange(2, -4, 10))

/**
 * @name getBiggestNumber
 * @description Devuelve el número más grande de un array
 * 
 * @param {number[]} numbers - Un array de números
 * @returns {Number} El número más grande del arrray {numbers}
 *
 * @example
 *  getBiggestNumber([3, 8, 2, 1, 10]) // returns 10
 */

function getBiggestNumber(numbers)
{
    if(numbers.length === 0)
    {
        throw new Error("El array no puede estar vacío");
    }

    let numeroMasGrande = numbers[0];

    for(let i = 1; i < numbers.length; i++)
    {
        if(numbers[i] > numeroMasGrande)
        {
            numeroMasGrande = numbers[i];
        }
    }

    return numeroMasGrande;
}

console.log("El numero más grande es: " + getBiggestNumber([3, 2, 4, 6, 9, 2]))

/**
 * @name getPercentage
 * @description Devuelve el porcentaje correspondiente de un número
 * 
 * @param {number} number - Número a obtener el porcentage
 * @param {number} percentage - Porcentaje a obtener
 * @returns {Number}
 *
 * @example
 *  getPercentage(200, 10) // returns 20
 */

let resultado3 = 0;

function getPercentage(numero, porcentaje)
{
    resultado3 = ((porcentaje*numero)/100)
    return resultado3;
}

console.log(getPercentage(100, 10));

/**
 * @name getRandomColorSequence
 * @description Devuelve una secuencia aleatoria de ciertos colores con cierta longitud
 * 
 * @param {string[]} colors - Array de colores a ser utilizados en la secuencia
 * @param {number} length - Longitud de la secuencia
 * @returns {String[]} - Secuencia aleatoria de colores disponibles en {colors}, con longitud {length}
 *
 * @example
 *  getRandomColorSequence(["red", "blue", "green"], 4) // returns ['blue', 'red', 'red', 'green']
 */


function getRandomColorSequence(colores, longitud)
{
    let resultado4 = [];

    for(i = 0; i <longitud; i++)
    {
        let posiciones = Math.floor(Math.random() * colores.length)
        resultado4.push(colores[posiciones]);
    }

    return resultado4;
}

console.log(getRandomColorSequence(["red", "blue", "green"], 4));

/**
 * @name getRockPaperScissor
 * @description Devuelve una jugada aleatoria de piedra, papel o tijera
 * 
 * @returns {String} - Devuelve "rock", "paper" o "scissor"
 *
 * @example
 *  getRockPaperScissor() // returns "paper"
 */

function getRockPaperScissor() 
{
    let arrayJuego = ["rock", "paper", "scissor"]
    
    let num = Math.floor(Math.random() * arrayJuego.length)
    return arrayJuego[num];
}

console.log(getRockPaperScissor());

/**
 * @name getRockPaperScissorRandomSequence
 * @description Devuelve una secuencia aleatoria de jugadas de piedra, papel o tijera, con cierta longitud
 *
 * @param {number} length - Longitud de la secuencia
 * @returns {String[]}
 *
 * @example
 *  getRockPaperScissorRandomSequence(4) // returns ["rock", "paper", "rock", "scissor"]
 */

let juego = ["rock", "paper", "scissor"]
let salida = [];

function getRockPaperScissorRandomSequence(longitud)
{
    for(i = 0; i < longitud; i++)
    {
        let pos = Math.floor(Math.random() * juego.length)
        salida.push(juego[pos]);
    }

    return salida;
}

console.log(getRockPaperScissorRandomSequence(4));

/**
 * @name filterNumbersGreaterThan
 * @description Filtra los números de un array que sean mayor a cierto número x dejando solo los que sean menores a este
 *
 * @param {number[]} numbers - Array de números a filtrar
 * @param {number} filter - Número a partir del cuál filtrar los demás números
 * @returns {Number[]} - Array de números filtrados menores a {filter}
 *
 * @example
 *  filterNumbersGreaterThan([3, 8, 12, 1, 7, 4], 7) // returns [3, 1, 4]
*/


let resultado6 = [];
function filterNumbersGreaterThan(numbers, numFil)
{
    for(let i = 0; i < numbers.length; i++)
    {
        if(numbers[i] < numFil)
        {
            resultado6.push(numbers[i]);
        }
    }

    return resultado6;
}

console.log(filterNumbersGreaterThan([3, 8, 12, 1, 7, 4], 7));

/**
 * @name getFactorial
 * @description Devuelve el factorial de un número
 *
 * @param {number} x - Número del cuál obtener factorial
 * @returns {Number} - Factorial de {x}
 *
 * @example
 *  getFactorial(4) // returns 24
*/

function getFactorial(x)
{
    let resultado6 = 1;

    for(let i = 1; i <= x; i++)
    {
        resultado6 *= i;
    }

    return resultado6
}

console.log(getFactorial(4));

/**
 * @name areArraysEqual
 * @description Devuelve si dos arrays son iguales (tienen los mismos ítems en el mismo orden)
 *
 * @param {[]} a 
 * @param {[]} b 
 * @returns {Boolean} - Devuelve true si ambos arrays son iguales, false sino
 *
 * @example
 *  areArraysEqual([1, 4], [1, 4]) // returns true
*/

let iguales = true;

function areArraysEqual(a, b)
{
    if(a.length === b.length)
    {
            for(let i = 0; i < a.length; i++)
            {
                if(a[i] != b[i])
                    iguales = false;
            }

    }else{
        iguales = false;
    }

    return iguales;
}

console.log(areArraysEqual([1, 4], [1, 4]));

/**
 * @name toHackerSpeak
 * @description Convierte un string a "Hacker Speak". Para hacerlo, tiene que transformar las "a" en 4, las "e" en 3, las "i"
 * en 1, las "o" en 0 y las "s" en 5
 *
 * @param {string} text 
 * @returns {String} - El texto convertido a "Hacker Speak"
 * 
 * @example
 *  toHackerSpeak("I'm a hacker now") // returns "1'm 4 h4ack3r n0w"
*/

let resultado7 = "";
function toHackerSpeak(texto)
{
    for(let i = 0; i < texto.length; i++)
    {
        let letra = texto[i];
        if (letra === "a") {
            resultado7 += "4";
        } else if (letra === "e") {
            resultado7 += "3";
        } else if (letra === "I") {
            resultado7 += "1";
        } else if (letra === "o") {
            resultado7 += "0";
        } else if (letra === "s") {
            resultado7 += "5";
        } else {
            resultado7 += texto[i];
        }
    }

    return resultado7;
}

console.log(toHackerSpeak("I'm a hacker now"));

/**
 * @name getFileExtension
 * @description Obtiene la extensión de un archivo
 *
 * @param {string} file - El nombre del archivo a obtener la extensión 
 * @returns {String} - La extensión del archivo
 * 
 * @example
 *  getFileExtension("imagen.jpg") // returns "jpg"
*/

let resultado8 = "";
function obtenerExtensionArchivo(archivo) {
    let resultado = "";
    let extensionComenzada = false;

    for (let i = 0; i < archivo.length; i++) {
        if (archivo[i] === ".") {
            extensionComenzada = true;
        }
        
        if (extensionComenzada) {
            resultado += archivo[i];
        }
    }

    return resultado;
}

console.log(obtenerExtensionArchivo("imagen.jpg"));
