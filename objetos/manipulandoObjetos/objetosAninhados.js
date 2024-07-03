const estudante = {
    nome: 'Gustavo',
    idade: 22,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['5513996699669', '5513996424242'],

};

estudante.endereco = {
    rua: 'Av. Souza',
    numero: '45',
    complemento: 'apto 10'
}
console.log(estudante.endereco);
console.log(estudante.endereco.rua);