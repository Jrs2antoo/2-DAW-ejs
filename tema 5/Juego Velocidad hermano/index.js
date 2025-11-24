var miBola;
var miBarra;
var juego;
var velocidadY = 5;
var velocidadX = 5;
var posYbola = 0;
var posXbola = 0;
var posXbarra = 830;
let sePuedeMover = true;


window.onload = function () {
    miBola = document.getElementById("bola");
    miBarra = document.getElementById("barra");
    juego = document.getElementById("juego");

    animaJuego();

    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft" && posXbarra >0 && sePuedeMover) {
            posXbarra -= 20;
        }
        if (e.key === "ArrowRight" && posXbarra < juego.clientWidth - miBarra.offsetWidth && sePuedeMover) {
            posXbarra += 20;
        }

        miBarra.style.left = posXbarra + "px";
    });
}
var intervalo;
function animaJuego() {

    intervalo=setInterval(function () {
        // Mover bola en Y
        posYbola += velocidadY;
        miBola.style.top = posYbola + "px";   

        // Mover bola en X
        posXbola += velocidadX;
        miBola.style.left = posXbola + "px";  

        // Rebote vertical (arriba / abajo)
        if (posYbola <= 0) {
            velocidadY *= -1;
        } 

        // Rebote horizontal (izquierda / derecha)
        if (posXbola <= 0 || posXbola >= window.innerWidth ) {
            velocidadX *= -1;
        }

        const bola = miBola.getBoundingClientRect();
        const barra = miBarra.getBoundingClientRect();

        if (
            bola.bottom >= barra.top &&
            bola.right >= barra.left &&
            bola.left <= barra.right &&
            bola.bottom <= barra.bottom + 20 
        ){
            velocidadY *= -1;
        }

        if (posYbola >= juego.clientHeight - miBola.offsetHeight) 
        {
            miBola.remove();
            //alert("El juego ha acabao");
            sePuedeMover = false;
            reiniciar();
            
        }

    }, 30);
}

function reiniciar()
{
    clearInterval(intervalo);
    const reiniciar = document.getElementById("espacio_reiniciar");
    let botonReiniciar = document.createElement("button");
    botonReiniciar.id= "reiniciar";
    botonReiniciar.innerHTML = "reiniciar";
    reiniciar.appendChild(botonReiniciar);

    botonReiniciar.addEventListener("click", () =>{
        reiniciar.removeChild(botonReiniciar);
        posXbola = 10;
        posYbola = 20;
        miBola = document.createElement("div");
        miBola.id = "bola";
        juego.appendChild(miBola);
        sePuedeMover = true;
        animaJuego();
    })
}