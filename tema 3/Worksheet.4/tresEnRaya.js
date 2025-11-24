class Jugador
{
    static numJugadores = 0;

    constructor()
    {
        if (Jugador.numJugadores < 2)
        {
            Jugador.numJugadores++;
            this.numMarcas = 5;
            this.numJugador = Jugador.numJugadores;
        }
        else
        {
            console.log("Ya hay 2 jugadores, no pueden haber mas");
        }
    }
}

class TresEnRaya
{
    constructor()
    {
        this.jugador1 = new Jugador();
        this.jugador2 = new Jugador();
        this.tablero = this.generarTablero();
    }

    generarTablero()
    {
        let tablero = [];

        for (let i = 0; i < 3; i++)
        {
            tablero[i] = [];
            tablero[i][0] = " ";
            tablero[i][1] = " ";
            tablero[i][2] = " ";
        }

        this.tablero = tablero;
        return tablero;
    }

    mostrarTablero(tablero)
    {
        for (let i = 0; i < 3; i++)
        {
            let fila = "| ";

            for (let j = 0; j < 3; j++)
            {
                fila = fila + tablero[i][j] + " | ";
            }

            console.log(fila);
        }
    }


    jugarTurno(tablero, jugador, posicioni, posicionj)
    {
        if (jugador.numMarcas <= 0)
        {
            console.log("No te quedan mas marcas");
            return false;
        }

        if (tablero[posicioni - 1][posicionj - 1] !== " ")
        {
            console.log("Esa posicion ya esta usada, elige otra.");
            return false;
        }

        if (jugador.numJugador === 1)
        {
            tablero[posicioni - 1][posicionj - 1] = "X";
        }
        else
        {
            tablero[posicioni - 1][posicionj - 1] = "O";
        }

        jugador.numMarcas--;
        return true;
    }

    comprobarGanador(tablero)
    {
        let ganador = false;

        // Filas y columnas
        for (let i = 0; i < 3; i++)
        {
            // Filas
            if (tablero[i][0] !== " " &&
                tablero[i][0] === tablero[i][1] &&
                tablero[i][1] === tablero[i][2])
            {
                ganador = true;
            }

            // Columnas
            if (tablero[0][i] !== " " &&
                tablero[0][i] === tablero[1][i] &&
                tablero[1][i] === tablero[2][i])
            {
                ganador = true;
            }
        }

        // Diagonal principal
        if (tablero[0][0] !== " " &&
            tablero[0][0] === tablero[1][1] &&
            tablero[1][1] === tablero[2][2])
        {
            ganador = true;
        }

        // Diagonal inversa
        if (tablero[0][2] !== " " &&
            tablero[0][2] === tablero[1][1] &&
            tablero[1][1] === tablero[2][0])
        {
            ganador = true;
        }

        return ganador;
    }

    jugar()
    {
        let tablero = this.tablero;
        this.mostrarTablero(tablero);

        let turno = 0;
        let seguir = true;

        while (seguir && turno < 9)
        {
            let jugadorActual;

            if (turno % 2 === 0)
            {
                jugadorActual = this.jugador1;
            }
            else
            {
                jugadorActual = this.jugador2;
            }

            console.log("Turno del jugador " + jugadorActual.numJugador);

            let posicioni = parseInt(prompt("Jugador " + jugadorActual.numJugador + ": Fila (1-3): "));
            let posicionj = parseInt(prompt("Jugador " + jugadorActual.numJugador + ": Columna (1-3): "));

            while (isNaN(posicioni) ||isNaN(posicionj) ||posicioni < 1 || posicioni > 3 ||posicionj < 1 || posicionj > 3)
            {
                console.log("Posicion invalida, intentelo de nuevo");

                posicioni = parseInt(prompt("Jugador " + jugadorActual.numJugador + ": Fila (1-3): "));
                posicionj = parseInt(prompt("Jugador " + jugadorActual.numJugador + ": Columna (1-3): "));
            }

            if (this.jugarTurno(tablero, jugadorActual, posicioni, posicionj))
            {
                this.mostrarTablero(tablero);
                turno++;
            }

            if (this.comprobarGanador(tablero))
            {
                console.log("El ganador es el jugador " + jugadorActual.numJugador + "!");
                seguir = false;
            }
            else if (turno === 9)
            {
                console.log("Empate!");
                seguir = false;
            }
        }
    }
}

const juego = new TresEnRaya();
juego.jugar();
