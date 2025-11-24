//------------------------1-----------------------------
document.write("Estas son del ej 1: ")
let columnas = prompt("Introduce el numero de columnas:");
let alto = prompt("Introduce la altura de cada celda (px):");
let ancho = prompt("Introduce la anchura de cada celda (px):");

columnas = Number(columnas);
alto = Number(alto);
ancho = Number(ancho);

document.write('<table border="0" cellspacing="2" bgcolor="black">');
document.write('<tr bgcolor="white" height="' + alto + '">');

for (let i = 0; i < columnas; i++) 
{
    document.write('<td width="' + ancho + '">&nbsp;</td>');
}

document.write('</tr>');
document.write('</table>');
 
//----------------------2---------------------------
//No pongo variables nuevas para que use las del 1
document.write("<br></br>Estas son del ej 2: 4")
document.write('<table border="0" cellspacing="2" bgcolor="black">');
document.write('<tr height="' + alto + '">');

for (let i = 1; i <= columnas; i++) 
{

    //fondo negro
    if (i % 2 == 1) {
        document.write('<td width="' + ancho + '" bgcolor="black">&nbsp;</td>');
    } 
    //fondo blanco
    else {
        document.write('<td width="' + ancho + '" bgcolor="white">&nbsp;</td>');
    }
}

document.write('</tr>');
document.write('</table>');

//------------------------3-------------------------
/*
//solo pongo el bucle porq lo demas es igual

let i = 1;

while (i <= columnas) 
{
    document.write('<td width="' + ancho + '" bgcolor="white">&nbsp;</td>');
    i++;
}
  
*/

//-------------------------4--------------------------
/*
let i = 1;
//solo pongo el bucle porq lo demas es igual

while (i <= columnas) 
{
    if (i % 2 === 1) 
    {
        document.write('<td width="' + ancho + '" bgcolor="black">&nbsp;</td>');
    } else 
    {
        document.write('<td width="' + ancho + '" bgcolor="white">&nbsp;</td>');
    }
    i++;
}
*/

//---------------------5----------------------
let num_adivinar = Number(prompt("Jugador 1: introduce el numero a adivinar"));

let num = Number(prompt("Jugador 2: venga tus huevos di un numero"));

while (num !== num_adivinar) 
{

    if (num < num_adivinar) 
    {
        alert("Tu numero es menor");
    } else {
        alert("Tu numero es mayor");
    }

    num = Number(prompt("Intentalo de nuevo"));
}

alert("Ole tus huevos");


//------------------------6------------------------
/*
//solo he puesto lo diferente al 5 (el bucle)

let num2;
do 
{
    num2 = Number(prompt("Jugador 2: venga tus huevos di un numero"));

    if (num < num_adivinar) 
    {
        alert("Tu numero es menor");
    } else if (num > num_adivinar) {
        alert("Tu numero es mayor");
    }

} while (num !== num_adivinar);
*/

//----------------------7----------------------------
// Tablas de multiplicar del 1 al 10

for (let i = 1; i <= 10; i++) 
{

    document.write("Tabla del " + i + ": <br></br>");

    for (let j = 1; j <= 10; j++) 
    {
        document.write(j + " x " + i + " = " + (j * i) + "<br>");
    }

    document.write("<br>"); 
}

//8
let columnas2 = Number(prompt("Introduce el numero de columnas:"));
let filas2 = Number(prompt("Introduce el numero de filas:"));
let alto2 = Number(prompt("Introduce la altura de la celda (px):"));
let ancho2 = Number(prompt("Introduce la anchura de la celda (px):"));

document.write('<table border="0" cellspacing="2" bgcolor="black" width = "200">');

for (let j = 1; j <= filas2; j++) 
{

    document.write('<tr bgcolor="white" height="' + alto2 + '">');

    for (let i = 1; i <= columnas2; i++) 
    {
        document.write('<td width="' + ancho2 + '">&nbsp;</td>');
    }

    document.write('</tr>');
}

document.write('</table>');

//------------------------------9-----------------------
let lado = Number(prompt("Introduce el tamaño de la celda (px):"));

document.write('<br></br><table border="1" cellspacing="0">');

for (let fila = 0; fila < 8; fila++) 
{
    document.write('<tr>');

    for (let col = 0; col < 8; col++) 
    {

        let color;

        if ((fila + col) % 2 === 0) 
        {
            color = "black";
        } else {
            color = "white";
        }


        document.write(
            '<td width="' + lado + '" height="' + lado + '" bgcolor="' + color + '">&nbsp;</td>'
        );
    }

    document.write('</tr>');
}

document.write('</table>');
