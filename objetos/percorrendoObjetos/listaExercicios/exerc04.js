const carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    ano: 1996,
    cor: 'vermelho',
    ligado: false,
    placa: 'BGC201'
};

Object.defineProperty(carro, 'placa',{enumerable: false});

console.log('Propriedades enumeráveis do carro:');
for( let propriedade in carro){
    console.log(`${propriedade}: ${carro[propriedade]}`);
}

const chavesEnumeraveis = Object.keys(carro);
console.log('\nChaves enumeráveis do carro:');
console.log(chavesEnumeraveis);

console.log('\n Acesso direto à placa:');
console.log(carro.placa);