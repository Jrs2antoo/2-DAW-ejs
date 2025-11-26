window.onload = function()
{
    cont = document.getElementById("peliculas");
    var contPags = 2;
    let busqueda = "";
    
    document.getElementById("boton").addEventListener("click", ()=>{
        recargarMasPelis();
    });


    document.getElementById("form-busqueda").addEventListener("submit", (event)=>{
        event.preventDefault();
        cont.innerHTML = "";
        buscarTitulo = document.getElementById("input-titulo").value;
        elegirAno = document.getElementById("input-ano").value;

        recargarMasPelis();
    });

    //Funciones
    function recargarMasPelis()
    {
        fetch("https://www.omdbapi.com/?apikey=ea2bc7f8&s=" + buscarTitulo + "&y=" + elegirAno + "&page=" + contPags)
        .then(response=> response.json())
        .then(data =>{
            maquetarPelis(data.Search)
            contPags++;
        })
    }
    function maquetarPelis(lista)
    {
       for(pelicula of lista)
        {
            div = document.createElement("div");
            imagen = document.createElement("img");
            imagen.src = pelicula.Poster;
            texto = this.document.createElement("p");
            texto.innerHTML = pelicula.Title;

            div.appendChild(imagen);
            div.appendChild(texto);
            cont.appendChild(div);
        }    
    }
}