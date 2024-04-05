const notaPrimeiroBI = 8;
const notaSegundoBI = 6.3;
const notaTerceiroBI = 7;
const notaQuartoBI = 9.3;

let media = (notaPrimeiroBI + notaSegundoBI + notaTerceiroBI + notaQuartoBI)/4;

if(media>=7){
    media += media*0.1;
}
console.log(`Média igual a: ${media.toFixed(2)}`);
