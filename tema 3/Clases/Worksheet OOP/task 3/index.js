//task 3

class Lambdasian
{
    constructor(datos)
    {
        this.nombre = datos.nombre;
        this.edad = datos.edad;
        this.ubicacion = datos.ubicacion;
    }

    hablar()
    {
        return "Hola, me llamo " + this.nombre + " y soy de " + this.ubicacion + ".";
    }
}

const persona = new Lambdasian
(
    {
        nombre: "Jesús el Xocas",
        edad: 19,
        ubicacion: "Almuñécar"
    }
);


//task 4

class Instructor extends Lambdasian
{
    constructor(datos)
    {
        super
        ({
            nombre: datos.nombre,
            edad: datos.edad,
            ubicacion: datos.ubicacion
        });

        this.especialidad = datos.especialidad;
        this.lenguajeFavorito = datos.lenguajeFavorito;
        this.fraseCaracteristica = datos.fraseCaracteristica;
    }

    demo(asignatura)
    {
        return "Hoy estamos aprendiendo sobre " + asignatura;
    }

    calificar(estudiante, asignatura)
    {
        return estudiante.nombre + " recibe una calificación perfecta en " + asignatura;
    }
}


//task 5

class Student extends Lambdasian
{
    constructor(datos)
    {
        super
        ({
            nombre: datos.nombre,
            edad: datos.edad,
            ubicacion: datos.ubicacion
        });

        this.experienciaPrevia = datos.experienciaPrevia;
        this.nombreClase = datos.nombreClase;
        this.asignaturasFavoritas = datos.asignaturasFavoritas;
    }

    listarAsignaturas()
    {
        return "Me gustan " + this.asignaturasFavoritas.join(", ") + "!";
    }

    entregarPR(asignatura)
    {
        return this.nombre + " ha entregado un PR para " + asignatura;
    }

    desafioSprint(asignatura)
    {
        return this.nombre + " ha comenzado el desafío sprint en " + asignatura;
    }
}


//task 6

class ProjectManager extends Instructor
{
    constructor(datos)
    {
        super
        ({
            nombre: datos.nombre,
            edad: datos.edad,
            ubicacion: datos.ubicacion,
            especialidad: datos.especialidad,
            lenguajeFavorito: datos.lenguajeFavorito,
            fraseCaracteristica: datos.fraseCaracteristica
        });

        this.nombreClaseGraduacion = datos.nombreClaseGraduacion;
        this.instructorFavorito = datos.instructorFavorito;
    }

    standUp(canal)
    {
        return this.nombre + " anuncia en " + canal + ", @canal hora de standup";
    }

    depurarCodigo(estudiante, asignatura)
    {
        return this.nombre + " depura el código de " + estudiante.nombre + " en " + asignatura;
    }
}

const profe =
    new Instructor
    ({
        nombre: "Ivan",
        edad: 19,
        ubicacion: "Cazorla",
        especialidad: "salvarme el dia",
        lenguajeFavorito: "SabeTo.js",
        fraseCaracteristica: "dimee"
    });

const alumna =
    new Student
    ({
        nombre: "Yisus",
        edad: 19,
        ubicacion: "Almuñecar",
        experienciaPrevia: "tocadorDeHuevos",
        nombreClase: "2DAW",
        asignaturasFavoritas: ["joder", "noCallarse", "tocarLosHuevos"]
    });

console.log(alumna.hablar());
console.log(alumna.listarAsignaturas());
console.log(profe.demo("ivan porque no me funciona esto"));
console.log(profe.calificar(alumna, "tocadorDeHuevos"));

const coordinador =
    new ProjectManager
    ({
        nombre: "Juan",
        edad: 20,
        ubicacion: "Loja",
        especialidad: "noHacerNa",
        lenguajeFavorito: "fantasy",
        fraseCaracteristica: "nose",
        nombreClaseGraduacion: "2DAW",
        instructorFavorito: "Ivan"
    });

console.log(coordinador.standUp("LaLiga Fantasy"));
console.log(coordinador.depurarCodigo(alumna, "no callarse"));
