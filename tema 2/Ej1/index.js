//Nivel 1 – Conversión y propiedades básicas

//1. Conversión a número

document.write(Number("123"));    
document.write(Number("3.14"));  
document.write(Number("abc"));

document.write(parseInt("123"));
document.write(parseInt("3.14"));
document.write(parseInt("abc"));

document.write(parseFloat("123"));
document.write(parseFloat("3.14"));
document.write(parseFloat("abc"));

//Number: convierte a número, pero si no es un número devuelve NaN
//parseInt: convierte a número entero, es decir, no escribe lo despues de las comas, si no es un número devuelve NaN
//parseFloat: convierte a número decimal, pero si no es un número devuelve NaN

//2. Comprobar si es entero
document.write(Number.isInteger(10));
document.write(Number.isInteger(3.5));
document.write(Number.isInteger("5"));

//3. Not a Number
console.log(Number.isNaN(NaN));
console.log(Number.isNaN("hello"));
console.log(Number.isNaN(undefined));
console.log(Number.isNaN(0/0));
console.log(Number.isNaN(parseInt("abc")));

//4. Valores infinitos
document.write(1 / 0 + "<br>");
document.write(Number.isFinite(1 / 0));


//Nivel 2 – Métodos de instancia

//5. Número con decimales fijos
let pi = 3.141592;

document.write(pi.toFixed(2) + "<br>");
document.write(pi.toFixed(4) + "<br>");
document.write(pi.toFixed(6) + "<br>");

//6. Representación exponencial
let num = 123456;

document.write(num.toExponential(2) + "<br>");

//7. Conversión a string con base
let valor = 255;

document.write(valor.toString(2) + "<br>");
document.write(valor.toString(8) + "<br>");
document.write(valor.toString(16) + "<br>");

//8. Precisión controlada
let n = 123.456789;

document.write(n.toPrecision(4) + "<br>");
document.write(n.toPrecision(7) + "<br>");


//Nivel 3.Retos aplicados
//12. Validador de números
console.log("<br></br>");
function validarNumero(cadena)
{
    let num = Number(cadena);
    let salida = "";

    if(isNaN(num))
    {
        salida = "No es un número válido<br>";
    }
    else if (Number.isInteger(num))
    {
        salida = "Es un número entero<br>";
    }
    else
    {
        salida = "Es un número decimal<br>";   
    }

    return salida;
}

document.write(validarNumero("123")+ "<br>");
document.write(validarNumero("3.14")+ "<br>");
document.write(validarNumero("abc")+ "<br>");