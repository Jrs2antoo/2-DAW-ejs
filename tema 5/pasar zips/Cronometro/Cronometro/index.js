let minutos = 0;
let segundos = 0;
let enMarcha = false;
let intervalo; 

const tiempo = document.querySelector(".pantalla-tiempo");

function iniciar()
{
    if(!enMarcha)
    {
        enMarcha = true;

        intervalo = setInterval(() => {
            segundos++;

            if(segundos === 60)
            {
                segundos = 0;
                minutos++;
            }
                    
            tiempo.textContent = minutos.toString().padStart(2, "0") + ":" +segundos.toString().padStart(2, "0");

        }, 1000);
    }
}

function resetear()
{
    clearInterval(intervalo);
    enMarcha = false;
    segundos = 0;
    minutos = 0;
    tiempo.textContent = "00:00";
}

function parar()
{
    clearInterval(intervalo);
    enMarcha = false;
}

document.getElementById("start").addEventListener("click", iniciar);
document.getElementById("stop").addEventListener("click", parar);
document.getElementById("reset").addEventListener("click", resetear);