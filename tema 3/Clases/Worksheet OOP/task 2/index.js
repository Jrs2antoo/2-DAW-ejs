class Car
{
    constructor(modelo, millasPorGalon)
    {
        this.modelo = modelo;   
        this.millasPorGalon = millasPorGalon;
        this.tanque = 0;
        this.odometro = 0;
    }
    rellenar(galones)
    {
        this.tanque += galones;
    }
    conducir(distancia)
    {
        if (this.tanque > 0)
        {
            this.odometro += distancia;
            this.tanque -= distancia / this.millasPorGalon;
        }
        else
        {
            console.log("Me he quedao sin gasolina a las " + this.odometro + " millas!");
        }
    }
}