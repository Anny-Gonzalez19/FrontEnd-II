const consultaUsuario = confirm("¿Quieres navegar en modo oscuro?");

function cambiarModo()
{
    if (consultaUsuario) {
        document.querySelector('body').classList.add('dark');
    }
}

cambiarModo();