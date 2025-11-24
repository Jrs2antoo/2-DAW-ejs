class Persona
{
    constructor(nombre, edad)
    {
        this.nombre = nombre;
        this.edad = edad;
        this.estomago = [];
    }

    comer(algunaComida)
    {
        if (this.estomago.length < 10)
        {
            this.estomago.push(algunaComida);
        }
    }

    cagarDuro()
    {
        this.estomago = [];
    }

    toString()
    {
        return this.nombre, this.edad;
    }
}