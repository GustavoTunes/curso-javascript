const notaFinal = 6;
const faltas = 5;
const advertencias = 0;

if(notaFinal < 7 && faltas > 4){
    console.log('reprovado');
}else{
    console.log('aprovado');
}

if(faltas >= 2 && !advertencias){
    console.log('Recebeu bônus de nota');
}else{
    console.log('Sem bônus de nota');
}