//1 
//Suma de números
let num1 = Number(prompt("Ingrese el primer número"));
let num2 = Number(prompt("Ingrese el segundo número"));


num1 += num2;
console.log(num1);


num1 -= num2;
console.log(num1);

num1 *= num2; 
console.log(num1);  

num1 /= num2;
console.log(num1);

//2
//Determinar par o impar
let numero = Number(prompt("Ingrese un número"));

if (numero % 2 === 0) 
{
    console.log("El número es par");
}       
else 
{
    console.log("El número es impar");
}


//3
//Mayor de tres números
let a = Number(prompt("Número 1"));
let b = Number(prompt("Número 2"));
let c = Number(prompt("Número 3"));

if(a >= b && a >= c)
{
    console.log("El número mayor es: " + a);
}else if(b >= a && b >= c)
  {
      console.log("El número mayor es: " + b);
  }else{
        console.log("El número mayor es: " + c);
    }
    
//4
//Tabla de multiplicar

let num = Number(prompt("Ingrese un numero"));

for (let i = 1; i <= 10; i++) 
{
    console.log(num + " x " + i + " = " + (num * i));
}

//5
//Suma de números del 1 al N

let N = Number(prompt("Ingrese un numero"));
let suma = 0;

for (let i = 1; i <= N; i++) 
{
    suma += i;
}

console.log("La suma de 1 hasta " + N + " es: " + suma);

//6
//Contador de números positivos y negativos
let positivos = 0;
let negativos = 0;

for (let i = 0; i < 5; i++) 
{
    let num = Number(prompt("Ingrese el numero " + (i+1)));

    if (num > 0) 
    {
      positivos++;
    } else if (num < 0) {
      negativos++;
    }
}

console.log("Positivos: " + positivos);
console.log("Negativos: " + negativos);

//7
//Numero primo

let num3 = Number(prompt("Ingrese un numero"));
let esPrimo = true;

if (num3 <= 1) 
{
    esPrimo = false;
} else {
    for (let i = 2; i < num3; i++) 
    {
        if (num3 % i === 0) 
        {
            esPrimo = false;
            break;
        }
    }
}

if (esPrimo) {
    console.log(num3 + " es primo");
} else {
    console.log(num3 + " no es primo");
}

//8
//Factorial de un número

let numero2 = Number(prompt("Ingrese un numero"));
let factorial = 1;

for (let i = 1; i <= numero2; i++) 
{
    factorial *= i;
}

console.log("El factorial de " + numero2 + " es: " + factorial);

//9
//Numeros pares hasta N

let N2 = Number(prompt("Ingrese un numero"));

for (let i = 1; i <= N2; i++) 
{
    if (i % 2 === 0) 
    {
        console.log(i);
    }
}

//10
//Adivina el numero

let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intento;

while (intento !== numeroSecreto) 
{
    intento = Number(prompt("Adivina el numero entre 1 y 10"));

    if (intento < numeroSecreto) 
    {
        console.log("El numero es mayor");
    } else if (intento > numeroSecreto) 
      {
          console.log("El numero es menor");
      } else 
        {
           console.log("Correcto!!!");
        }
}
