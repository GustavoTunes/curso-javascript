const carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    ano: 1996,
    cor: 'vermelho',
    ligado: false,
    placa: 'BGC201'
};

const carroNovo = {
    marca: "Volkswagen ",
    modelo: "Gol",
    ano: 1990,
    cor: "branco"
};

const carroComNovosDetalhes = { ...carro, ...carroNovo };

console.log('Carro com novos detalhes: ');
console.log(carroComNovosDetalhes);

carroComNovosDetalhes.modelo = 'Santana';

console.log('\nCarro com detalhes modificados:');
console.log(carroComNovosDetalhes);