import './Ej6.css'

function Ej6(){
    let animales = ["perro", "jesus", "vaca", "juan", "ivan"];
    const elementos = animales.map((elemento, index) =>
    <li key = {index} id= {elemento}>{elemento}</li>)
    return(
        <>
            <div>
                <ul id="emojis">
                    {elementos}
                </ul>
            </div>
        </>
    );
};

export default Ej6;