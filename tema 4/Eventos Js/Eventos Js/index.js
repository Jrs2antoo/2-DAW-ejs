//Ejercicio 1
const resultado = document.getElementById("resultado");
const cuadros = document.querySelectorAll(".rojo, .azul, .verde, .amarillo");

const colorObjetivo = "rojo";

cuadros.forEach(cuadro => 
{
    cuadro.addEventListener("mouseover", () => 
    {
        cuadro.style.opacity = "0.7";
    });

    cuadro.addEventListener("mouseout", () => 
    {
        cuadro.style.opacity = "1";
    });
});

cuadros.forEach(cuadro => 
{
    cuadro.addEventListener("click", () =>
    {
        if(cuadro.classList.contains(colorObjetivo))
        {resultado.textContent = "Correcto"}
            
        else
        {resultado.textContent = "Incorrecto"}
    });
});

//Ejercicio 2
const boton = document.getElementById("boton");

boton.addEventListener("mouseover", () =>{
    boton.style.backgroundColor = "yellow";
});

boton.addEventListener("mouseout", () =>
{   
    boton.style.backgroundColor = "lightblue";
})  

boton.addEventListener("click", () =>{
    boton.textContent = "Me hiciste click!";
})

//Ej 3
const salida = document.getElementById("resultado-tecla");
const teclaCorrecta = "a";


document.addEventListener("keydown", (event) =>{
    const teclaPresionada = event.key.toLowerCase();
    if(teclaPresionada === teclaCorrecta)
    {
        salida.textContent = "Correcto!";
    }
    else{
        salida.textContent= "Tecla incorrecta!";
    }
})

//Ej 4

const circulo = document.getElementById("circulo");
const mensaje = document.getElementById("mensaje");

let activo = false;

function cambiarAverde()
{
    circulo.style.backgroundColor = "green";
    activo = true;
}

function iniciarJuego()
{
    mensaje.textContent = "Espera a que cambie";    
    circulo.style.backgroundColor = "gray";
    activo = false;

    const tiempo = Math.random() * 3000 + 2000;
    setTimeout(cambiarAverde, tiempo)
}

circulo.addEventListener("click", () => {
    if(activo) 
    {
        mensaje.style.color = "green";
        iniciarJuego();
        mensaje.textContent = "¡Reflejos rapidos!";
    }else{
        mensaje.textContent = "Demasiado pronto";
        mensaje.style.color = "red";
    }
});

iniciarJuego();

//Ej 5

const intruccionNUmero = document.getElementById("instruccion-numero");
const resultadoNumero = document.getElementById("resultado-numero");
const botonesNums = document.querySelectorAll(".numeros button");

let numObj = Math.floor(Math.random() * 9) + 1;
intruccionNUmero.textContent = "Haz click en el numero " + numObj;

botonesNums.forEach((boton) => {
  boton.addEventListener("click", () => {
    const numClickeao = parseInt(boton.textContent);
    if(numClickeao === numObj)
    {
        resultadoNumero.textContent = "Ole tu polla!";
        resultadoNumero.style.color = "green";
    }else{
        resultadoNumero.textContent = "Eres tonto? tas equivocao maquina";
        resultadoNumero.style.color = "red";
    }
  });
});

