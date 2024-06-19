const livro = {
    titulo: 'O cortiço',
    autor: 'Aluísio Azevedo',
    anoPublicacao: '1890',
    genero: 'Romance'
};

const anoAtual = new Date().getFullYear();
livro.idadePublicacao = anoAtual - livro.anoPublicacao;

livro.mostrarDetalhes = 
    "Detalhes do Livro:\n" +
    "Título: " + livro.titulo + "\n" +
    "Autor: " + livro.autor + "\n" +
    "Ano de Publicação: " + livro.anoPublicacao + "\n" +
    "Gênero: " + livro.genero + "\n" +
    "Idade de Publicação: " + livro.idadePublicacao + " anos";

console.log(livro.mostrarDetalhes);