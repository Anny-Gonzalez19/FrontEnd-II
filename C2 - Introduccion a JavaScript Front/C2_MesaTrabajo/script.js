confirm(`Bienvenidx al juego Piedra, papel o tijera.

¿Quieres jugar?`)

// Elección Usuario
let usuario = parseInt(prompt(`Elige una opción
    1- Piedra
    2- Papel
    3- Tijera
`));
alert("Elegiste la opción " + opcion(usuario));

// Elección Computadora
let computadora = Math.round(Math.random() * (3 - 1) + 1);
alert("La computadora eligió la opción " + opcion(computadora));

// Nombrar la elección
function opcion(numero)
{
    let juego;
    if (numero == 1){
        juego = 'Piedra';
    } else if (numero == 2)
    {
        juego = 'Papel';
    } else
    {
        juego = 'Tijera';
    }
    return juego;
}

// Elegir Ganador
const piedra = 1;
const papel = 2;
const tijera = 3;
let ganador = "";

function elegirGanador()
{
    if (usuario === piedra && computadora === tijera) {
        ganador = "Felicitaciones! Ganaste <3";
    } else if (usuario === tijera && computadora === papel) {
        ganador = "Felicitaciones! Ganaste <3";
    } else if (usuario === papel && computadora === piedra) {
        ganador = "Felicitaciones! Ganaste <3";
    } else if (computadora === piedra && usuario === tijera) {
        ganador = "Gana la Computadora";
    } else if (computadora === tijera && usuario === papel) {
        ganador = "Gana la Computadora";
    } else if (computadora === papel && usuario === piedra) {
        ganador = "Gana la Computadora";
    } else if (usuario == computadora){
        ganador = "Hay empate";
    } else{
        alert("Elegiste una opción incorrecta")
    }
    return ganador;
}

alert(elegirGanador());