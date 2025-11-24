//Ejercicio1
function ejercicio1(cadena)
{
    let contadorVoc = 0;
    for(let i = 0; i < cadena.length; i++)
    {
        if(cadena[i] == "a" || cadena[i] == "e" || cadena[i] == "i" || cadena[i] == "o" || cadena[i] == "u")
        {
            contadorVoc++;
        }
    }

    return contadorVoc;
}
let cadena = "aeiuo";
console.log("La cadena tiene " + ejercicio1(cadena) + " vocales");

//Ejercicio 2
function ejercicio2(num)
{
    let divisiblePor5 = false;
    let divisiblePor3 = false;
    let resultado = "";

    if(num % 3 == 0)
    {
        divisiblePor3 = true;
    }
    if(num % 5 == 0)
    {            
        divisiblePor5 = true;
    }

    if(divisiblePor5 && divisiblePor3)
    {
        resultado = "Div 3 + Div 5";
    }
    else{
        if(divisiblePor3 && !divisiblePor5)
        {
            resultado = "Div 3";
        }else{
            if(!divisiblePor3 && divisiblePor5)
            {
                resultado = "Div 5";
            }else{
                resultado = num;
            }
        }
    }

    for(let i = 1; i < num; i++)
    {
        console.log(i)       
    }

    return resultado;
}

let num = 30;
ejercicio2(num);


//Ejercicio 3
function ejercicio3(fraseParentesis)
{
    balanceo = false;
    let contadorParentesis = 0;
    let contadorParentesis2 = 0;

    for(let i = 0; i < fraseParentesis.length; i++)
    {
        //Antes de todo si no hay los mismos parentesis de cada uno ya es false
        if(fraseParentesis[i] === "(")
        {
            contadorParentesis++;
        }
        else{
            if(fraseParentesis[i] === ")")
            {
                contadorParentesis2++;
            }
        }
        
        console.log(i)

        //Comprobamos que haya los mismos
        if(contadorParentesis != contadorParentesis2)
        {
            balanceo = true;
        }
    }

    return balanceo;
}

let frase = "((()))";
ejercicio3(frase);

//Ejercicio 4
function ejercicio4(nMins)
{
    
}


//Ejercicio 5
function ejercicio5(arrayFechas)
{
    let fechaMenor = arrayFechas[0];
    let prueba = false;

    for(let i = 0; i < arrayFechas.length; i++)
    {
        let fecha1 = arrayFechas[i].split("/");
        let fecha2 = fechaMenor.split("/");

        let diaActual = parseInt(fecha1[0]);
        let mesActual = parseInt(fecha1[1]);
        let anActual = parseInt(fecha1[2]);

    }

    return prueba;
}

let array2 = ["01/03/2016", "02/05/2019", "10/12/2008"]
ejercicio5(array2);

