function transformarYFiltrar(arr) {
    return arr.map(num => num * num).filter(square => square > 20);
}

const numeros = [2, 3, 4, 5, 6];
const resultado = transformarYFiltrar(numeros);
console.log(resultado); 