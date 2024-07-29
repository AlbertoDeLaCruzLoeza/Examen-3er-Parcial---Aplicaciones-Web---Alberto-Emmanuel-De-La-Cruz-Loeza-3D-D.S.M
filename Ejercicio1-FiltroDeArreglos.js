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
console.log(mayoresDeEdad);