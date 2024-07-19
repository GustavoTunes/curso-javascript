const valores = [-20, 25, 45];

function somaValor(listaValores) {
    const somaDosValores = listaValores.reduce((a, valor) => a + valor, 0);
    return somaDosValores;
}

console.log(somaValor(valores));