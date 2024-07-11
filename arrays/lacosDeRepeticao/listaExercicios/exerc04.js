numInteiros = [-20, 3, 10, 65, 42];

function devolveMenorMaior(lista) {
    let menor = 0;
    let maior = 0;

    for (i = 0; i < lista.length; i++) {
        if (lista[i] < menor) {
            menor = lista[i];
        }
        if (lista[i] > maior) {
            maior = lista[i];
        }
    }
    return `o menor número é ${menor}, e o maior número é ${maior}'`;
}

console.log(devolveMenorMaior(numInteiros));