// Ejercicio 1: Filtro de Arreglos
function filtrarMayoresDeEdad(personas) {
    return personas.filter(persona => persona.edad >= 18);
}

const personas = [
    { nombre: "Juan", edad: 17 },
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 19 },
    { nombre: "Maria", edad: 15 }
];

const mayoresDeEdad = filtrarMayoresDeEdad(personas);
document.getElementById('mayores-de-edad').textContent = JSON.stringify(mayoresDeEdad, null, 2);

// Ejercicio 2: Transformar y Filtrar Arreglos
function transformarYFiltrar(arr) {
    return arr.map(num => num * num).filter(square => square > 20);
}

const numeros = [2, 3, 4, 5, 6];
const resultado = transformarYFiltrar(numeros);
document.getElementById('transformar-y-filtrar').textContent = JSON.stringify(resultado, null, 2);

// Ejercicio 3: Promesas y Asincronía
async function obtenerUsuarios() {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!respuesta.ok) {
            throw new Error(`Error en la solicitud: ${respuesta.status}`);
        }
        const datos = await respuesta.json();
        document.getElementById('obtener-usuarios').textContent = JSON.stringify(datos, null, 2);
    } catch (error) {
        document.getElementById('obtener-usuarios').textContent = 'Hubo un problema con la solicitud de fetch: ' + error.message;
    }
}

obtenerUsuarios();

// Ejercicio 4: Manipulación Compleja del DOM
const lista = document.getElementById('lista');
const agregarBtn = document.getElementById('agregar-btn');

function agregarItem() {
    const nuevoItem = document.createElement('li');
    nuevoItem.textContent = 'Nuevo ítem';

    const eliminarBtn = document.createElement('button');
    eliminarBtn.textContent = 'Eliminar';
    eliminarBtn.addEventListener('click', () => {
        lista.removeChild(nuevoItem);
    });

    nuevoItem.appendChild(eliminarBtn);
    lista.appendChild(nuevoItem);
}

agregarBtn.addEventListener('click', agregarItem);

// Ejercicio 5: Algoritmos y Estructuras de Datos
function ordenarPorPropiedad(arr, propiedad) {
    return arr.slice().sort((a, b) => {
        if (a[propiedad] < b[propiedad]) {
            return -1;
        } else if (a[propiedad] > b[propiedad]) {
            return 1;
        } else {
            return 0;
        }
    });
}

const usuarios = [
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Luis', edad: 30 },
    { nombre: 'Pedro', edad: 20 },
    { nombre: 'Marta', edad: 35 }
];

const usuariosOrdenadosPorNombre = ordenarPorPropiedad(usuarios, 'nombre');
document.getElementById('ordenar-por-nombre').textContent = JSON.stringify(usuariosOrdenadosPorNombre, null, 2);

const usuariosOrdenadosPorEdad = ordenarPorPropiedad(usuarios, 'edad');
document.getElementById('ordenar-por-edad').textContent = JSON.stringify(usuariosOrdenadosPorEdad, null, 2);
