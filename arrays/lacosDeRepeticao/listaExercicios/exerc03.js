numInteiros = [5, 3, 10, 65, 42];

function somaInteiros(lista) {
    let total = 0;
    for (let i = 0; i < lista.length; i++) {
        total += lista[i];
    }
    return total;
}

console.log(somaInteiros(numInteiros));