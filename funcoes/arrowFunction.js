const estudanteReprovou = (notaFinal, faltas) =>{
    if(notaFinal < 7 && faltas > 4){
        return true;
    }else{
        return false;
    }
}

const exibiNome = (nome) => nome;
console.log(exibiNome('Gustavo'))

console.log(estudanteReprovou(6,5));
console.log(estudanteReprovou(10,2));