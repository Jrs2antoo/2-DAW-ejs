// Treasure Hunt

const mapa = [
    [34, 21, 32, 41, 25],
    [14, 42, 43, 14, 31],
    [54, 45, 52, 42, 23],
    [33, 15, 51, 31, 35],
    [21, 52, 33, 13, 23]
];

let fila = 1;
let columna = 1;
let salida = false;
const recorrido = [];

while (!salida) 
{
    var valor = mapa[fila - 1][columna - 1];
    recorrido.push("(" + fila + "," + columna + ") -> " + valor);

    if (valor === fila * 10 + columna) 
    {
        console.log(recorrido.join("\n"));
        console.log("Tesoro encontrao en (" + fila + "," + columna + ")");
        salida = true;
    }

    fila = Math.floor(valor / 10);
    columna = valor % 10;
}
