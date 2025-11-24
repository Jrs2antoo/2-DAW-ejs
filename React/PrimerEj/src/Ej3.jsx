function Ej3(){
    function pulsado(e){
        alert ("Has pulsado en el boton " + e.target.id);
    }
    return(
        <>
            <div>
                <button onClick={pulsado} id="1">Boton1</button>
                <button onClick={pulsado} id="2">Boton2</button>
                <button onClick={pulsado} id="3">Boton3</button>
            </div>
        </>
    )
}

export default Ej3;