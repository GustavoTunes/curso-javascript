const pessoa = {
    nome: 'Gustavo Souza',
    idade: 22,
    solteiro: true,
    hobbies: ['Filmes', 'Jogos']
};

function monstarInfoPessoa(pessoa) {
    console.log("Informações Pessoais:");
    console.log(`Nome: ${pessoa.nome} (Tipo: ${typeof pessoa.nome})`);
    console.log(`Idade: ${pessoa.idade} (Tipo: ${typeof pessoa.idade})`);
    console.log(`Solteiro: ${pessoa.solteiro} (Tipo: ${typeof pessoa.solteiro})`);
    console.log(`Hobbies: ${pessoa.hobbies} (Tipo: ${typeof pessoa.hobbies})`);
}

monstarInfoPessoa(pessoa);