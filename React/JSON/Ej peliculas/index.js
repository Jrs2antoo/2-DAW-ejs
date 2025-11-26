window.onload = function()
{
    cont = document.getElementById("peliculas");
    var contPags = 1;
    let buscarTitulo = "";
    let elegirAno = "";
    let peticionActiva = false;
    
    document.getElementById("boton").addEventListener("click", ()=>{
        recargarMasPelis();
    });
    

    document.getElementById("form-busqueda").addEventListener("submit", (event)=>{
        event.preventDefault();
        cont.innerHTML = "";
        contPags = 1;

        buscarTitulo = document.getElementById("input-titulo").value;
        elegirAno = document.getElementById("input-ano").value;

        recargarMasPelis();
    });

    document.getElementById("cerrar-detalle").addEventListener("click", ()=>{
        document.getElementById("detalle-overlay").classList.add("oculto");
    })

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
       for(const pelicula of lista)
        {
            const div = document.createElement("div");
            div.addEventListener("click", ()=>lanzaDetalles(pelicula.imdbID));
            imagen = document.createElement("img");
            imagen.src = pelicula.Poster;
            texto = this.document.createElement("p");
            texto.innerHTML = pelicula.Title + "(" + pelicula.Year + ")";

            div.appendChild(imagen);
            div.appendChild(texto);
            cont.appendChild(div);
        }    
    }
    function lanzaDetalles(id)
    {
        fetch("https://www.omdbapi.com/?i=" + id + "&apikey=ea2bc7f8")
        .then(response=> response.json())
        .then(data =>{
            document.getElementById("detalle-poster").src = data.Poster;
            document.getElementById("detalle-titulo").textContent = data.Title;
            document.getElementById("detalle-year").textContent = data.Year;
            document.getElementById("detalle-runtime").textContent = data.RunTime;
            document.getElementById("detalle-director").textContent = data.Director;
            document.getElementById("detalle-rating").textContent = data.imdbRating;
            document.getElementById("detalle-plot").textContent = data.Plot;

            document.getElementById("detalle-overlay").classList.remove("oculto");
        })
    }
}