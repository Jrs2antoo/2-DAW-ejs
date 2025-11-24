//Nivel 1 – Creación y lectura de fechas
//1. Fecha actual
let fechaActual = new Date();
console.log("Fecha actual:", fechaActual);

//2. Fecha específica
let fechaNacimiento = new Date(2006, 8, 4); 
console.log("Fecha de nacimiento:", fechaNacimiento);

//Obtener partes de una fecha
console.log("Año: ", + fechaActual.getFullYear());
console.log("Mes (0-11):", fechaActual.getMonth());
console.log("Día del mes:", fechaActual.getDate());
console.log("Día de la semana (0=Domingo):", fechaActual.getDay());
console.log("Hora:", fechaActual.getHours());
console.log("Minutos:", fechaActual.getMinutes());
console.log("Segundos:", fechaActual.getSeconds());

//Convertir a string
console.log("Fecha legible:", fechaActual.toDateString());
console.log("Hora legible:", fechaActual.toTimeString());

//Nivel 2 – Operaciones con fechas
//5. Sumar días 
function sumarDias(fecha, dias) 
{
    let nuevaFecha = new Date(fecha);
    nuevaFecha.setDate(nuevaFecha.getDate() + dias);
    return nuevaFecha;
}

let hoy = new Date();
console.log("Hoy:"+ hoy.toDateString());
console.log("Fecha dentro de 10 días:"+ sumarDias(hoy, 10).toDateString());

//6. Diferencia entre dos fechas
function diasHastaFinDeAno()
{
    let hoy = new Date();
    let finDeAno = new Date(hoy.getFullYear(), 11, 31);
    let diferencia = finDeAno - hoy;
    let dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
    return dias;
}

console.log("DIAS hastq fin de año: " + diasHastaFinDeAno());

//7. Comparar fechas 
let fecha1 = new Date("2025-1-1");
let fecha2 = new Date("2024-1-1");

if(fecha1 < fecha2)
{
    console.log("La fecha 1 es antes q la 2")
}else if(fecha2 < fecha1){
    console.log("La fecha 2 es antes q la 1");
}else{
    console.log("Ambas son iguales");
}

//8. Primer dia del mes
function primerDiaDelMes(ano, mes)
{
    let fecha = new Date(ano, mes -1, 1)
    let dia = fecha.getDay();

    let dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

    return dias[dia];
}

console.log(primerDiaDelMes(2024, 9));

//9. ISO String
let date = new Date()
let fechaIso = date.toISOString();

console.log(fechaIso);

//10. Fecha local y UTC
let fecha = new Date();

console.log("Hora local: " + fecha.toString());
console.log("Hora UTC: " + fecha.toUTCString());

//11. Formateo personalizado
function formatearFecha(fecha) {

    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1; 
    let ano = fecha.getFullYear();

    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    if (dia < 10) 
        dia = "0" + dia;
    if (mes < 10) 
        mes = "0" + mes;
    if (horas < 10) 
        horas = "0" + horas;
    if (minutos < 10) 
        minutos = "0" + minutos;
    if (segundos < 10) 
        segundos = "0" + segundos;

    return dia + "/" + mes + "/" + ano + " " + horas + ":" + minutos + ":" + segundos;
}

let ahora = new Date();
console.log(formatearFecha(ahora));

//12. Internacionalización

let fecha3 = new Date();

//España 
let espana = new Intl.DateTimeFormat("es-ES", {
    dateStyle: "full",
    timeStyle: "long"
}).format(fecha3);

console.log(espana);

//Estaos unios
let usa = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "long"
}).format(fecha);

console.log(usa);

//Japon
let japones = new Intl.DateTimeFormat("ja-JP", {
    dateStyle: "full",
    timeStyle: "long"
}).format(fecha);

console.log(japones);

//13. Cuenta atras
function CuentaAtras() {
    let hoyy = new Date();
    let proximoAno = hoyy.getFullYear() + 1;
    let anoNuevo = new Date(proximoAno, 0, 1);

    let diferencia = anoNuevo - hoyy;

    let segundosHastaFin = Math.floor(diferencia/1000);
    let minutosHastaFin = Math.floor(segundosHastaFin / 60);
    let horasHastaFin = Math.floor(minutosHastaFin / 60);
    let diasHastaFin = Math.floor(horasHastaFin/ 24);

    console.log(
        diasHastaFin + " dias, " +
        horasHastaFin + " horas, " +
        minutosHastaFin + " minutos, " + 
        segundosHastaFin + " segundos."
    );
}

CuentaAtras();

//14. Edad exacta
function calcularEdadExacta(fechaNacimiento) 
{
    let nacimiento = new Date(fechaNacimiento);
    let hoy = new Date();

    let años = hoy.getFullYear() - nacimiento.getFullYear();
    let meses = hoy.getMonth() - nacimiento.getMonth();
    let dias = hoy.getDate() - nacimiento.getDate();

    if (dias < 0) 
    {
        meses--;
        let mesAnterior = new Date(hoy.getFullYear(), hoy.getMonth(), 0).getDate();
        dias = dias + mesAnterior;
    }

    if (meses < 0) 
    {
        años--;
        meses = meses + 12;
    }

    return años + " años, " + meses + " meses, " + dias + " días";
}

console.log(calcularEdadExacta("2006-09-04"));


//15. Calendario simple
function generarCalendario(mes, año) {
    let fecha = new Date(año, mes - 1, 1);
    let calendario = [];

    while (fecha.getMonth() === (mes - 1)) 
    {
        calendario.push(new Date(fecha)); 
        fecha.setDate(fecha.getDate() + 1); 
    }

    return calendario;
}

let fechas = generarCalendario(9, 2025);
console.log(fechas);

//16. Próximo viernes 13
let hooy = new Date();
let encontrado = false;
while (!encontrado) 
{
    hooy.setDate(hooy.getDate() + 1);

    if (hooy.getDate() === 13) {

        if (hooy.getDay() === 5) 
        {  
           encontrado = true;
        }
    }
}

console.log("El proximo viernes 13 sera:", hooy.toDateString());
