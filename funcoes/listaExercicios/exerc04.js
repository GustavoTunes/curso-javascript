const maiorNumero = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
};

console.log(maiorNumero(10, 2, 3));
console.log(maiorNumero(1, 20, 3));
console.log(maiorNumero(1, 2, 30));