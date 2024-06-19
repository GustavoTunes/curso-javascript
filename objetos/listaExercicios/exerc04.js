const livro = {
    titulo: 'O cortiço',
    autor: 'Aluísio Azevedo',
    anoPublicacao: '1890',
    genero: 'Romance',
    idadeDePublicacao: '134 anos',
    avaliacao: null
};

const novaAvaliacao = {
    nota: 9,
    comentario: 'Grande Clássico'
};
if (livro.avaliacao === null) {
    livro.avaliacao = novaAvaliacao;
} else {
    console.log("Este livro já possui uma avaliação.");
}

console.log(livro)