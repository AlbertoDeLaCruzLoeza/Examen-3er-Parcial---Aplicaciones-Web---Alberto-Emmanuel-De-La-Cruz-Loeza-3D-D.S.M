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
