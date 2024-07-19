function filtraMultiplos(array) {
    return array.filter(num => num % 3 === 0 && num >= 5);
}

const listaNumerica = [3, 6, 9, 10, 12, 20, 24];
console.log(filtraMultiplos(listaNumerica));