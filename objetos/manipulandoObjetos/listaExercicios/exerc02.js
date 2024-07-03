const pessoa = {
    nome: 'Gustavo Souza',
    idade: 22,
    solteiro: true,
    hobbies: ['Filmes', 'Jogos'],
    endereco: {
        rua: 'Av. Souza',
        cidade: 'Santos',
        estado: 'São Paulo'
    }
};


function monstarInfoPessoa(pessoa) {
    console.log("Informações Pessoais:");
    console.log(`Nome: ${pessoa.nome} (Tipo: ${typeof pessoa.nome})`);
    console.log(`Idade: ${pessoa.idade} (Tipo: ${typeof pessoa.idade})`);
    console.log(`Solteiro: ${pessoa.solteiro} (Tipo: ${typeof pessoa.solteiro})`);
    console.log(`Hobbies: ${pessoa.hobbies} (Tipo: ${typeof pessoa.hobbies})`);
    console.log('Endereço:');
    console.log(`Rua: ${pessoa.endereco.rua} (Tipo: ${typeof pessoa.endereco.rua})`);
    console.log(`Cidade: ${pessoa.endereco.cidade} (Tipo: ${typeof pessoa.endereco.cidade})`);
    console.log(`Estado: ${pessoa.endereco.Estado} (Tipo: ${typeof pessoa.endereco.estado})`);
}

monstarInfoPessoa(pessoa);
