function retornaPares(array) {
    return array.filter(num => num % 2 === 0);
}

const listaNumerica = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(retornaPares(listaNumerica));