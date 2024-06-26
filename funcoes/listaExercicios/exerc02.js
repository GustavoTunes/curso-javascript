const recebeIdade = (idade) => {
    if (idade >= 18) {
        return `Maior de idade`;
    } else {
        return `Menor de idade`;
    }
};

console.log(recebeIdade(20));
console.log(recebeIdade(16));