import { useState } from 'react'
import Menu from './Menu.jsx'
function Cabecera(simple, titulo)
{
    const [Titulo, setTitulo] = useState("Mi cabecera usando state");
    const [contador, setContador] = useState(0);

    function pulsoBoton()
    {
        console.log("PUlSADO");
        setTitulo("Cambia titulo");
        setContador(contador+1);
    }

    return(
        <>
            <h1>{Titulo}</h1>
            <h2>Contador = {contador}</h2>
            <input type="text" />
            <button onClick={pulsoBoton}>Añadir</button>
        </>
    )
}

export default Cabecera