async function obtenerUsuarios() {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!respuesta.ok) {
            throw new Error(`Error en la solicitud: ${respuesta.status}`);
        }
        const datos = await respuesta.json();
        console.log(datos);
    } catch (error) {
        console.error('Hubo un problema con la solicitud de fetch:', error);
    }
}

obtenerUsuarios();
