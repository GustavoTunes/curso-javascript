const numeros = [10, 65, 23, 51, 20];

let somaDosNumeros = 0;

for (let i = 0; i < numeros.length; i++) {
    somaDosNumeros += numeros[i];
}

const media = somaDosNumeros / numeros.length;
console.log(numeros);
console.log(media.toFixed(2));