const listaPessoas = [
    { nome: 'Gustavo', idade: 22, cidade: 'Santos' },
    { nome: 'Leandra', idade: 25, cidade: 'São Paulo' },
    { nome: 'Bruno', idade: 20, cidade: 'Guarujá' },
];

function mostrarListaPessoas(pessoas) {
    pessoas.forEach(pessoa => {
        console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
    });
}

listaPessoas.push({ nome: 'Beatriz', idade: 19, cidade: 'Santos' });

mostrarListaPessoas(listaPessoas);

function filtrarPorCidade(pessoas, cidade) {
    return pessoas.filter(pessoa => pessoa.cidade === cidade);
}

const pessoasSantos = filtrarPorCidade(listaPessoas, 'Santos');
console.log(pessoasSantos);