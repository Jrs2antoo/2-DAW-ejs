import './Ej7.css'

function Ej7()
{
    return(
        <>
            <div className="botonesSaludo">
                <input type="text" name="primerInput" id="primerInput" placeholder='First name' value={primerInput}/>
                <input type="text" name="segundoInput" id="segundoInput" placeholder='Last name' value={segundoInput}/>
            </div>
        </>
    )
}
