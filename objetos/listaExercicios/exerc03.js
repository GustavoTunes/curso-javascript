const anoAtual = new Date().getFullYear();

const livro = {
    titulo: 'O cortiço',
    autor: 'Aluísio Azevedo',
    anoPublicacao: '1890',
    genero: 'Romance',
    idadeDePublicacao: anoAtual - 1890,
};

console.log("Detalhes do Livro:");
console.log("Título: " + livro['titulo']);
console.log("Autor: " + livro['autor']);
console.log("Ano de Publicação: " + livro['anoPublicacao']);
console.log("Gênero: " + livro['genero']);
console.log("Idade de Publicação: " + livro['idadePublicacao'] + " anos");
