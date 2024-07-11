veiculos = ['carro', 'moto', 'caminhao', 'onibus'];

function imprimeLista(lista) {
    for (let i = 0; i < lista.length; i++) {
        console.log(i, lista[i]);
    }
}

imprimeLista(veiculos);