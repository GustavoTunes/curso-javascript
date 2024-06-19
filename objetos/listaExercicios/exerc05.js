const anoAtual = new Date().getFullYear();

const livro = {
    titulo: 'O cortiço',
    autor: 'Aluísio Azevedo',
    anoPublicacao: '1890',
    genero: 'Romance',
    idadeDePublicacao: anoAtual - 1890,
};

livro.genero = 'Aventura'
console.log(livro);