//1
console.log("------------------------");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("------------------------");

//2
let suma = 0;
for (let i=1; i <6; i++)
{
    suma += i;
    console.log(suma);
}
console.log("------------------------");

//3
let num = prompt("Dime el numero que quieras saber");

for (let i = 1; i < 11; i++)
{
    console.log(num + "x" + i + "=" + num*i);
}
console.log("------------------------");

//4
let num2 = 1;
while(num2 <= 10)
{
    console.log(num2)
    num2++;
}

console.log("------------------------");

//5
let suma2 = 0;
let num3 = 1;
while (suma2 <= 20)
{
    suma2 += num3;
    num3++;
    console.log(suma2);
}

console.log("------------------------");

//6
let salida = true;
do
{
    let contraseña = Number(prompt("Dime una contraseña"));
    if(contraseña == 1234)
    {
        console.log("Contraseña correcta")
        salida = false
    }
    else
    {
        console.log("Contraseña incorrecta, intentelo otra vez")

    }
}while(salida)

console.log("------------------------");

//7
let contador = 1;
do 
{
    console.log(contador);
    contador++;
} while (contador <= 5);