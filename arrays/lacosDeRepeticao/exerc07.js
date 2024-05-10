// lista = [1, 2, 3, 'a', 'b', 'c'];

// for (let i of lista) {
//     console.log(i);
// }

//---------------------------------------------------------------------


// veiculos = ['carro', 'moto', 'caminhao', 'onibus'];

// function imprimeLista(lista) {
//     for (let i = 0; i < lista.length; i++) {
//         console.log(i, lista[i]);
//     }
// }

// imprimeLista(veiculos);

//---------------------------------------------------------------------

// numInteiros = [5, 3, 10, 65, 42];

// function somaInteiros(lista) {
//     let total = 0;
//     for (let i = 0; i < lista.length; i++) {
//         total += lista[i]
//     }
//     return total
// }

// console.log(somaInteiros(numInteiros))

//---------------------------------------------------------------------

// numInteiros = [-20, 3, 10, 65, 42];

// function devolveMenorMaior(lista) {
//     let menor = 0;
//     let maior = 0;

//     for (i = 0; i < lista.length; i++) {
//         if (lista[i] < menor) {
//             menor = lista[i];
//         }
//         if (lista[i] > maior) {
//             maior = lista[i];
//         }
//     }
//     return `o menor número é ${menor}, e o maior número é ${maior}'`;
// }

// console.log(devolveMenorMaior(numInteiros));

//---------------------------------------------------------------------

// const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

// for (i = 0; i < numeros.length; i++) {
//     if (numeros[i] % 2 === 0)
//         console.log(numeros[i]);
// }

//---------------------------------------------------------------------


const numeros = [10, 65, 23, 51, 20];

let somaDosNumeros = 0;

for (let i = 0; i < numeros.length; i++) {
    somaDosNumeros += numeros[i];
}

const media = somaDosNumeros / numeros.length;
console.log(numeros);
console.log(media.toFixed(2));