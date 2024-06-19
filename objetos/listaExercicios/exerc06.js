const anoAtual = new Date().getFullYear();

const livro = {
    titulo: 'O cortiço',
    autor: 'Aluísio Azevedo',
    anoPublicacao: '1890',
    genero: 'Romance',
    idadeDePublicacao: anoAtual - 1890,
    avaliacao: { nota: 9, comentario: 'Grande Clássico'}
};

delete livro.avaliacao;

console.log(livro);