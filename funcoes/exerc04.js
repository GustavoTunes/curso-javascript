const recebeNome = (nome) => `Saudações ${nome}`;
console.log(recebeNome('Gustavo'));

console.log('----------------------------------------------------------------------------')

const recebeIdade = (idade) =>{
    if(idade >= 18){
        return `Maior de idade`;
    }else{
        return `Menor de idade`;
    }
}

console.log(recebeIdade(20));
console.log(recebeIdade(16));

console.log('----------------------------------------------------------------------------')

function verificaPalin(string) {
    const stringInvertida = string.split('').reverse().join('');
    return string.toLowerCase() === stringInvertida.toLowerCase();
}


console.log(verificaPalin('ana'));
console.log(verificaPalin('gustavo'));

console.log('----------------------------------------------------------------------------')

const maiorNumero = (num1, num2, num3) =>{
    if(num1 > num2 && num1 > num3){
        return num1;
    }else if (num2 > num1 && num2 > num3){
        return num2;
    }else{
        return num3;
    }
}

console.log(maiorNumero(10,2,3))
console.log(maiorNumero(1,20,3))
console.log(maiorNumero(1,2,30))

console.log('----------------------------------------------------------------------------')

const calculaPotencia = (base, expoente) => base**expoente

console.log(calculaPotencia(3,2))