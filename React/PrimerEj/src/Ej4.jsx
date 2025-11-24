import { useState } from 'react';

function Ej4(){
    const[numPulsaciones, setNumPulsaciones] = useState(0);
    function pulsado(){
        setNumPulsaciones(numPulsaciones + 1);
    }

    return(
        <>
            <p>Has pulsao el boton: {numPulsaciones}</p>
            <button onClick={pulsado}>Boton</button>
        </>
    )
}

export default Ej4;