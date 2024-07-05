const pessoa = {
    nome: 'João',
    notas: [10, 7, 3, 5],

    calcularMedia: function () {
        const somaNotas = this.notas.reduce((soma, nota) => soma + nota, 0);
        const media = somaNotas / this.notas.length;
        return media.toFixed(2);
    },

    classificarDesempenho: function(){
        const media = this.calcularMedia();

        if (media >=9){
            return 'Desempenho excelente';
        }else if (media >= 7.5 && media < 9){
            return 'Desempenho bom'
        }else if (media >= 5 && media < 7.5){
            return 'Desempenho regular'
        }else{
            return 'Desempenho insuficiente'
        }
    }
};

const mediaCalculada = pessoa.calcularMedia();
console.log(`${pessoa.nome} tem uma média de notas de ${mediaCalculada}.`);

const categoriaDesempenho = pessoa.classificarDesempenho();
console.log(`${pessoa.nome} possui: ${categoriaDesempenho}.`);