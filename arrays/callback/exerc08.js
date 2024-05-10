// const numeros = [10, 9.5, 8, 7, 6];

// numeros.forEach((num, indice) =>{
//     console.log((`Índice: ${indice} elemento: ${num}`))
// })

//---------------------------------------------------------------------

// lista = [1100, 0.1, 255, 80];

// function dividir(num) {
//     return num / 10;
// }

// function executaOperacaoEmArray(array, funcaoCallback) {
//     return array.map(funcaoCallback);
// }

// const listaDividida = executaOperacaoEmArray(lista, dividir);
// console.log(listaDividida);

//---------------------------------------------------------------------

// const listaNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const numProcurado = 6;
// let indice = -1;

// for (let i = 0; i < listaNum.length; i++) {
//     if (listaNum[i] === numProcurado) {
//         indice = i;
//         break;
//     }
// }

// console.log(`Número:${numProcurado} Índice: ${indice}`);

//---------------------------------------------------------------------

// const nomesTurmaA = [
//     'João Silva',
//     'Maria Santos',
//     'Pedro Almeida'
// ];

// const nomesTurmaB = [
//     'Carlos Oliveira',
//     'Ana Souza',
//     'Lucas Fernandes'
// ];

// const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB);
// const procuraAluno = todasAsTurmas.find(nome => nome === 'Gustavo');

// if(procuraAluno){
//     console.log(`Aluno: ${procuraAluno}`)
// }else{
//     console.log('Aluno não encontrado')
// }

//---------------------------------------------------------------------

const numeros = [6, 9, 12, 15, 18, 21];

numeros.forEach(num => {
    const result =num * 3;
    console.log(result)
});

const IndiceDoNum18 = numeros.findIndex(num => num ===18);
if(IndiceDoNum18 !== -1){
    console.log(`Índice: ${IndiceDoNum18}`);
}else{
    console.log('O número 18 não está no array');
}