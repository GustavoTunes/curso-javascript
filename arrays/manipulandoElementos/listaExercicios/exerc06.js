function somaLista(array) {
    soma = array.reduce((a, num) => a + num, 0);
    return soma;
}

const listaNumerica = [1, 2, 3, 4, 5];
console.log(somaLista(listaNumerica));
