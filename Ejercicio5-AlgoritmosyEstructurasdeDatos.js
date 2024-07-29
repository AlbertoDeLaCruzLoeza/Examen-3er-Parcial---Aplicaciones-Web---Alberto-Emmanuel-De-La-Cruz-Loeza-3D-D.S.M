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
console.log(usuariosOrdenadosPorNombre);

const usuariosOrdenadosPorEdad = ordenarPorPropiedad(usuarios, 'edad');
console.log(usuariosOrdenadosPorEdad);
