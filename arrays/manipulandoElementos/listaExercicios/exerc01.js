function listaArrays(...array) {
    return [].concat(...array);
}

const nomes = ['Gustavo', 'João'];
const idades = [23, 30];

console.log(listaArrays(nomes, idades));