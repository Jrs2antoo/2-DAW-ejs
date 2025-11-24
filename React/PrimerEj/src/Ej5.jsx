function Ej5(){ 
    let animales = ["perro", "jesus", "vaca", "juan", "ivan"];
    const elementos = animales.map((elemento, index) =>
        <li key = {index}>{elemento}</li>)
    return(
        <div>
            <ul>
                {elementos}
            </ul>
        </div>
    )
}

export default Ej5;