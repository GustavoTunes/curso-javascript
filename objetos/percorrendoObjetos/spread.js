const estudante = {
    nome: 'Gustavo',
    idade: 22,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['5513996699669', '5513996424242'],
    enderecos: [{
        rua: 'Av. Souza',
        numero: '45',
        complemento: 'apto 10'
    },
    {
        rua: 'Av. Tunes',
        numero: '54',
        complemento: null
    }]
};

function exibirTelefones(telefone1, telefone2) {
    console.log(`ligar para ${telefone1}`);
    console.log(`ligar para ${telefone2}`);
}

exibirTelefones(...estudante.telefones);

const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0]
};

console.log(dadosEnvio);