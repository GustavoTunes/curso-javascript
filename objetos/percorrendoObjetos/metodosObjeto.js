const estudante = {
    nome: 'Gustavo',
    idade: 22,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['5513996699669', '5513996424242'],
/*     enderecos: [{
        rua: 'Av. Souza',
        numero: '45',
        complemento: 'apto 10'
    },
    {
        rua: 'Av. Tunes',
        numero: '54',
        complemento: null
    }] */
};

const chavesObjeto = Object.keys(estudante)
console.log(chavesObjeto);

if(!chavesObjeto.includes('enderecos')){
    console.error('Erro, é necessário ter um endereço');
}