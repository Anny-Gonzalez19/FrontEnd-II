/* Ejercicio Loteria: Crear un programa que consista en una apuesta donde el usuario tenga que
ingresar un objeto o lugar con el que soñó ese día, para que luego lo muestre
en pantalla y se calcule aleatoriamente un resultado numérico con 4 posibles
casos de premios que pueda ganar: si el resultado es 0, gana $1.000, si es 1,
gana $10.000; si es 2 gana $10.000, y si es 3 gana $100.000. */

/*  1. Solicitar que ingrese el objeto o lugar.
    2. Mostrarlo por pantalla.
    3. Calcular un resultado numérico.
*/

let sueñoUsuario = prompt("Ingresa el objeto o lugar con el que soñaste.");
alert("Tu respuesta fue: " + sueñoUsuario);

let numeroAleatorio = Math.round(Math.random() * (3 - 0) + 0);
alert("Número aleatorio: " + numeroAleatorio);

function resultadoLoteria() 
{
    let loteria = 0;
    if (numeroAleatorio == 0) 
    {
        loteria = 1000; 
    } else if(numeroAleatorio == 1 || numeroAleatorio == 2)
    {
        loteria = 10000;  
    } else if(numeroAleatorio == 3)
    {
        loteria = 100000; 
    } else 
    {
        loteria = 0;
    }
    return loteria;
}

alert("Ganaste: $" + resultadoLoteria());  

/* -------------------------------------------------------------------------- */

/* Ejercicio Ruleta: Crear una función que sortee un numero random ganador, luego haga un ciclo
desde 1 hasta el final de la ruleta, imprimiendo por consola el número de esa
iteración. Pero en el caso del número que sea el ganador, imprimir por consola
“Numero ganador:” seguido del número. */

/*  1. Crear función para generar número random.
    2. Ciclo hasta el final de la ruleta (imprimir por consola cada iteración).
    3. En caso del número ganador, imprimir por consola.
*/

const finalRuleta = 25;

function numeroRandom()
{
    return Math.round(Math.random() * (25 - 0) + 0);
}

function tirarRuleta(){
    let numeroGanador = numeroRandom();
    console.log(numeroGanador);
    
    for (let i = 1; i <= finalRuleta; i++) {
        if(i != numeroGanador)
        {
            console.log("El número de iteración es: " + i);
        } 
        else if (i == numeroGanador) 
        {
            console.log("Número ganador: " + numeroGanador);
        }
    }
}

tirarRuleta();
