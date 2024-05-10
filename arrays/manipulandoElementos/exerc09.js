// function listaArrays(...array) {
//     return [].concat(...array);
// }

// const nomes = ['Gustavo', 'João'];
// const idades = [23, 30];

// console.log(listaArrays(nomes,idades));

// ------------------------------------------------------------

// const valores = [-20, 25, 45];

// function somaValor(listaValores) {
//     const somaDosValores = listaValores.reduce((a, valor) => a + valor, 0);
//     return somaDosValores;
// }

// console.log(somaValor(valores));

// ------------------------------------------------------------

// const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']

// const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

// const coresAtualizadas = [...new Set([...coresLista1,...coresLista2])];

// console.log(coresAtualizadas);

// ------------------------------------------------------------

// function retornaPares(array) {
//     return array.filter(num => num % 2 === 0);
// }

// const listaNumerica = [1,2,3,4,5,6,7,8]
// console.log(retornaPares(listaNumerica))

// ------------------------------------------------------------

// function filtraMultiplos(array) {
//     return array.filter(num => num % 3 === 0 && num >=5);
// }

// const listaNumerica = [3,6,9,10,12,20,24]
// console.log(filtraMultiplos(listaNumerica))

// ------------------------------------------------------------

function somaLista(array) {
    soma = array.reduce((a, num) => a + num, 0);
    return soma;
}

const listaNumerica = [1, 2, 3, 4, 5];
console.log(somaLista(listaNumerica));
