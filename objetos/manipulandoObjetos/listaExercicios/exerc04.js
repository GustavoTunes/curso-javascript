const calculadora = {
    soma: function (a, b) {
        return a + b;
    },
    subtracao: function (a, b) {
        return a + b;
    },
    multiplicacao: function (a, b) {
        return a * b;
    },
    divisao: function (a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return "Não divida por zero.";
        }
    },
    calcularMedia: function(numeros) {
        const soma = numeros.reduce((total, numero) => total + numero, 0);
        return soma / numeros.length;
    }
};

console.log("Soma: " + calculadora.soma(11, 4));
console.log("Subtração: " + calculadora.subtracao(8, 4));
console.log("Multiplicação: " + calculadora.multiplicacao(8, 2));
console.log("Divisão: " + calculadora.divisao(6, 3));
console.log("Divisão por zero: " + calculadora.divisao(10, 0));

const listaNumeros = [10, 8, 4, 7, 6];
console.log("Média: " + calculadora.calcularMedia(listaNumeros));