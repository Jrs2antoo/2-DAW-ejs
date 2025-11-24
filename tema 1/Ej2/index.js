//1
const numero =(prompt("Introduce un número:"));

if (numero > 0) 
{
    console.log("El número es positivo.");
} else if (numero < 0) 
    {
    console.log("El número es negativo.");
    } else 
        {
        console.log("El número es cero.");
        }

//2 
const edad = prompt("Introduce tu edad:");
if(edad >= 18)
{
    console.log("Eres mayor de edad.");
} else if (edad < 18)
    {
        console.log("Eres menor de edad.");
    }

//3
const num = prompt("Introduce un número:");
if(num % 2 == 0)
{
    console.log("El número es par.");
}
else
{
    console.log("El número es impar.");
}

//4 
const calificacion = prompt("Introduce tu calificación (0-10):");
if(calificacion >= 0 && calificacion <= 10)
{
    if(calificacion >= 5)
    {
        console.log("Aprobado");
    }
    else
    {
        console.log("Suspenso");
    }
}

//5
const num1 = prompt("Introduce el primer número:");
const num2 = prompt("Introduce el segundo número:");

if(num1 > num2)
{
    console.log("El primer número es mayor.");
}else if(num1 < num2)
    {
        console.log("El segundo número es mayor.");
    }else
    {
        console.log("Ambos números son iguales.");
    }

//6
let num3 = prompt("Introduce un número del 1 al 7:");
switch(num3)
{
    case '1':
        console.log("Lunes");
        break;
        case '2':
            console.log("Martes");
            break;
        case '3':
            console.log("Miércoles");
            break;
        case '4': 
            console.log("Jueves");
            break;
        case '5':                   
            console.log("Viernes");
            break;  
        case '6':
            console.log("Sábado");
            break;
        case '7':
            console.log("Domingo");
            break;
        default:
            console.log("Número inválido. Introduce un número del 1 al 7.");    
}


//7
let num4 = prompt("Introduce un numero del 1 al 3:");
switch(num4)
{
    case '1':
        console.log("Opcion A seleccionada");
        break;
    case '2':
        console.log("Opcion B seleccionada");
        break;
    case '3':
        console.log("Opcion C seleccionada");
        break;
    default:
        console.log("Opción inválida");
}

//8
let color = prompt("Introduce un color (rojo, verde, amarillo):");
switch(color)
{
    case 'rojo':
        console.log("stop");
        break;
    case 'amarillo':
        console.log("Precaucion");
        break;
    case 'verde':
        console.log("Avanza");
        break;
    default:
        console.log("Color no reconocido");
}

//9 
let fruta = prompt("Introduce una fruta (manzana, plátano, uva):");
switch(fruta)
{
    case 'manzana':
        console.log("Es una manzana roja");
        break;
    case 'plátano':
        console.log("Es un plátano amarillo");
        break;  
    case 'uva':
        console.log("Es una uva morada");
        break;      
    default:        
        console.log("Fruta no reconocida");
        break;
}

//10
let nota = prompt("Introduce una nota escolar (A, B, C, D, F):");
switch(nota) 
{
    case 'A':
        console.log("Excelente");
        break;
    case 'B':
        console.log("Muy bien");
        break;
    case 'C':
        console.log("Bien");
        break;
    case 'D':
        console.log("Suficiente");
        break;
    case 'F':
        console.log("Reprobado");
        break;
    default:
        console.log("Nota no válida");
}


