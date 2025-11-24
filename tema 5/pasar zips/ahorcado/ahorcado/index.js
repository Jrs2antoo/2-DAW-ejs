const vidasRestantes = document.querySelector(".vidas");
const letras = document.querySelectorAll(".contenedor-letras button");
let vidas = 10;
let palabraOculta = ["_", "_", "_", "_", "_", "_"];
let palabraElegida = "bochan"
let acierto = false;

letras.forEach(function(boton) {
    boton.addEventListener("click", function() {
        let acierto = false;
        let letraElegida = boton.textContent;
        console.log("Bien clickeao niñooo" + letraElegida);

        for(let i = 0; i < palabraElegida.length; i++)
        {
            if(palabraElegida[i] === letraElegida)
            {
                acierto = true;
                vidasRestantes.textContent = "Ole tu polla, te quedan " + vidas + " vidas";
                palabraOculta[i] = letraElegida
                document.querySelector(".palabra-oculta").textContent = palabraOculta.join(" ");

            } 
        }
        if(!acierto)
        {
            vidas--;
            vidasRestantes.textContent = "Pollica espabila, te quedan " + vidas + " vidas";
        }
    });
});

