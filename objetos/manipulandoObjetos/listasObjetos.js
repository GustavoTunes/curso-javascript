const estudante = {
    nome: 'Gustavo',
    idade: 22,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['5513996699669', '5513996424242'],
    endereco: [{
        rua: 'Av. Souza',
        numero: '45',
        complemento: 'apto 10'
    }]
};

estudante.endereco.push({
    rua: 'Av. Tunes ',
    numero: '01',
    complemento: null
});

const listaEnderecosComComplemento = estudante.endereco.filter((endereco) => endereco.complemento)
console.log(listaEnderecosComComplemento);