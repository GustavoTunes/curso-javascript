const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 0, 7.5, 9];

const lista = [alunos, medias];

function exibiNomeNota(aluno) {
    if (lista[0].includes(aluno)) {
        const [alunos, medias] = lista;
        const indice = alunos.indexOf(aluno);
        const mediaAluno = medias[indice];
        console.log(`${aluno} tem a média: ${mediaAluno}`);
    } else {
        console.log('Aluno não está na lista');
    }
}

exibiNomeNota('João');
exibiNomeNota('Gomes');