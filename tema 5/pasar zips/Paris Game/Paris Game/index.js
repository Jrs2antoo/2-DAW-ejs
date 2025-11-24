const cartas = document.querySelectorAll(".tablero-cartas .carta")
const imagenes = [
  "./imgs/foto1.png",
  "./imgs/foto2.png",
  "./imgs/foto3.png",
  "./imgs/foto4.png",
  "./imgs/foto5.png",
  "./imgs/foto1.png",
  "./imgs/foto2.png",
  "./imgs/foto3.png",
  "./imgs/foto4.png",
  "./imgs/foto5.png"
];
let primeraCarta = null;
let segundaCarta = null;
imagenes.sort(() => Math.random() - 0.5);

let bloqueado = 0;

for(let i = 0; i < cartas.length; i++)
{
    cartas[i].dataset.cara = imagenes[i];
}

cartas.forEach(function(carta){
    carta.addEventListener("click", function(){
        if(bloqueado < 2)
        {
            carta.style.backgroundImage = "url('" + carta.dataset.cara + "')";

            if(primeraCarta === null)
            {
                primeraCarta = carta;
                bloqueado = 1;
            }else if(segundaCarta === null)
            {
                segundaCarta = carta;
                bloqueado = 2;
            }

            if(primeraCarta != null && segundaCarta != null)
            {
                if(primeraCarta.dataset.cara === segundaCarta.dataset.cara)
                {
                    bloqueado = 0;
                    primeraCarta = null;
                    segundaCarta = null;
                }else{
                    setTimeout(function(){
                    bloqueado = 0;
                    primeraCarta.style.backgroundImage = "url('imgs/carta-alreves.png')";
                    segundaCarta.style.backgroundImage = "url('imgs/carta-alreves.png')";
                    primeraCarta = null;
                    segundaCarta = null;
                    }, 1000);
                }
            }
        }
    });
});