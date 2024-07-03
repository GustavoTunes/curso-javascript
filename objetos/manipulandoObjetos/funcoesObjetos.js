const estudante = {
    nome: 'Gustavo',
    idade: 22,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['5513996699669', '5513996424242'],
    media: 7.5,
    estaAprovado: function(mediaBase) {
        return this.media >= mediaBase ? true : false;
    }
};

console.log(estudante.estaAprovado(6));
console.log(estudante.estaAprovado(8));