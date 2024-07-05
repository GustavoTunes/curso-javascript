const carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    ano: 1996,
    cor: 'vermelho'
};
console.log("Propriedades do carro:");

for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}

carro.pagaIpva = false;
carro.kmRodados = 365000;

console.log("\nPropriedades atualizadas do carro:");
for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}