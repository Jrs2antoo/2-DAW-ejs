//1. Error de sintaxis
let nombre = "Ana
console.log(nombre);

//El problema está en las comillas que no están cerradas correctamente

//2. Uso incorrecto de variables
console.log(edad);
let edad = 20;

//El problema es que se esta llamando a la variable antes de declararla

//3. Operador incorrecto
let a = 5;
let b = 10;
if (a = b) {
  console.log("a es igual a b");
}
//El problema es que se usa "=" en vez de "== o ==="

//4. Bucle infinito
let i = 0;
while (i < 5) {
  console.log(i);
}
//El problema es que nunca se incrementa i, por lo que el bucle nunca termina

//5. Error en funciones
function saludar() {
  console.log("Hola " + nombre);
}
saludar();
//El problema es que nombre no esta definida dentro del alcance de la funcion

//6. Error en arrays
let frutas = ["manzana", "banana", "pera"];
console.log(frutas[3]);
//El problema es que frutas[3] no existe porque el array solo tiene indices 0,1,2.

//7. Error con objetos
let persona = { nombre: "Ana", edad: 25 };
console.log(persona.apellido.toUpperCase());
//El problema es que apellido no existe, por lo que no se puede usar toUpperCase()


//8. Error en concatenación
let a = 5;
let b = "10";
console.log(a + b);
//El problema es que se esta concatenando un numero con un string, no sumando

//9. Error con if-else
let nota = 8;
if (nota > 5);
{
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}
//El problema es que hay un punto y coma después del if

//10. Mini-reto 
let numeros = [1, 2, 3, 4, 5];
for (let i = 0; i <= numeros.length; i++) {
  console.log(numeros[i]);
}
//El problema es que el bucle usa <= y accede a un indice inexistente (numeros[5]).
