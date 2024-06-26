function verificaPalin(string) {
    const stringInvertida = string.split('').reverse().join('');
    return string.toLowerCase() === stringInvertida.toLowerCase();
}


console.log(verificaPalin('ana'));
console.log(verificaPalin('gustavo'));