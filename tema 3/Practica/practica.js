function obtenerUbicacion() 
{
    if (navigator.geolocation) 
    {
        navigator.geolocation.getCurrentPosition(mostrarCoordenadas);
    } else 
    {
        onError();
    }
}

function mostrarCoordenadas(position)
{
    console.log("Latitud: " + position.coords.latitude);
    console.log("Longitud: " + position.coords.longitude);
}

function onError()
{
    alert("La geolocalización ha fallado.");
}
obtenerUbicacion();

