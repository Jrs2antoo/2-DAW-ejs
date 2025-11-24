//1- Nivel Básico

//1. Crear un array con los nombres de 5 frutas e imprimir la primera y última.
let frutasLista = ["manzana", "pera", "platano", "kiwi", "fresa"];
console.log(frutasLista[0]);
console.log(frutasLista[frutasLista.length - 1]);


//2. Añadir y eliminar elementos al inicio y al final del array.
let animalesLista = ["perro", "gato", "conejo"];

animalesLista.push("loro");
animalesLista.pop();

animalesLista.unshift("tortuga");
animalesLista.shift();

console.log(animalesLista);

//3. Recorrer un array e imprimir sus elementos.
let ciudadesLista = ["Grana", "Marbella(ciudad para adam pis)", "almuñecar (la ciudad de jesus)", "Pinos puente (la mia)"];

//for
for (let i = 0; i < ciudadesLista.length; i++) {
    console.log(ciudadesLista[i]);
}

//for of
for (let ciudad of ciudadesLista) {
    console.log(ciudad);
}

//forEach
ciudadesLista.forEach(function(ciudad) {
    console.log(ciudad);
});


//4. Buscar un elemento en un array de números.
let numerosLista = [10, 20, 30, 40, 50];

console.log(numerosLista.indexOf(30));
console.log(numerosLista.includes(30));

//5. Concatenar arrays y mostrar el resultado.
let primeraLista = ["rojo", "verde", "azul"];
let segundaLista = ["negro", "blanco"];

//concat
let coloresConcat = primeraLista.concat(segundaLista);
console.log(coloresConcat);

//spread
let coloresSpread = [...primeraLista, ...segundaLista];
console.log(coloresSpread);

//2- Nivel Intermedio

//6. Duplicar los valores de un array numérico.
let numerosOriginales = [1, 2, 3, 4, 5];
let numerosDuplicados = numerosOriginales.map(n => n * 2);

console.log(numerosDuplicados);

//7. Filtrar los números pares de un array.
let numerosFiltrar = [3, 8, 11, 20, 7, 14];
let numerosPares = numerosFiltrar.filter(n => n % 2 === 0);

console.log(numerosPares);

//8. Sumar todos los valores de un array.
let numerosSumar = [5, 10, 15, 20];
let sumaTotal = numerosSumar.reduce((a, b) => a + b);

console.log(sumaTotal);

//9. Ordenar un array de nombres alfabéticamente y en orden inverso.
let nombresLista = ["Yisus", "Juanillo", "Bochan", "Osotarus"];

//alfabético
let nombresOrdenados = [...nombresLista].sort();
console.log(nombresOrdenados);

//inverso
let nombresInversos = [...nombresLista].reverse();
console.log(nombresInversos);

//10. Convertir un array en una cadena de texto separada por comas.
let paisesLista = ["España", "Perú", "Venesuela", "Hola"];
let paisesCadena = paisesLista.join(",");

console.log(paisesCadena);

//11. Dividir una cadena de texto en un array.
let fraseTexto = "hola,ya,si,asi";
let fraseArray = fraseTexto.split(",");

console.log(fraseArray);

//3- Nivel Avanzado 

//12. Eliminar duplicados de un array.
let numDuplicados = [1, 2, 3, 2, 4, 1, 5];
let numerosUnicos = [...new Set(numDuplicados)];

console.log(numerosUnicos);

//13. Encontrar el número mayor y menor en un array.
let numsLista = [34, 65, 7, 47, 20, 23];

let numeroMayor = Math.max(...numsLista);
let numeroMenor = Math.min(...numsLista);

console.log(numeroMayor);
console.log(numeroMenor);

//14. Aplanar un array de arrays.
let matrizNumeros = [[1, 2], [3, 4]];
let matrizAplanada = matrizNumeros.flat();

console.log(matrizAplanada);

//15. Contar cuántas veces aparece un elemento en un array.
let arrayNumeros = [2, 3, 2, 5, 2, 3, 7];
let numeroBuscado2 = 2;
let contadorForEach = 0;

arrayNumeros.forEach(valor => {
    if (valor === numeroBuscado2) contadorForEach++;
});

console.log(contadorForEach);

//16. Transformar un array de objetos en un array de una sola propiedad.
const personasLista = [
  { nombre: "Ana", edad: 23 },
  { nombre: "Luis", edad: 30 }
];

let soloNombres = personasLista.map(p => p.nombre);

console.log(soloNombres);

//17. Combinar dos arrays (por ejemplo, de nombres y edades) en uno de objetos.
let edades = [19, 22, 20, 19];
let arrayJunto = nombresLista.map((nombre, i) => {
    return { nombre: nombre, edad: edades[i] };
});

console.log(arrayJunto);

//18. Ordenar un array de objetos según una propiedad.
const usuarios = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 30 },
  { nombre: "Marta", edad: 20 }
];
usuarios.sort((a, b) => a.edad - b.edad);

console.log(usuarios);

//19. Extraer elementos únicos y ordenarlos de menor a mayor.
let numerosRepetidos = [6, 4, 9, 4, 2, 9, 3];
let numerosUnicosOrdenados = [...new Set(numerosRepetidos)].sort((a, b) => a - b);

console.log(numerosUnicosOrdenados);

//20. Usar encadenado de métodos: Dado un array de números, debes calcular la suma de los cuadrados de los números pares.
let numerosOperacion = [1, 2, 3, 4, 5, 6];
let sumaCuadradosPares = numerosOperacion.map(n => n * n).filter(n => n % 2 === 0).reduce((a, b) => a + b);

console.log(sumaCuadradosPares);

