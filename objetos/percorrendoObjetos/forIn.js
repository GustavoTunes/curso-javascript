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

for (let chave in estudante) {
    const tipo = typeof estudante[chave];
    if (tipo !== 'object' && tipo !== 'function') {
        const texto = `a chave ${chave}, tem o valor ${estudante[chave]}`;
        console.log(texto);
    }
}
