const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function somaMedia(listaNotas) {
    const somaDasNotas = listaNotas.reduce((a, nota) => a + nota, 0);
    const media = somaDasNotas / listaNotas.length;
    return media
}

console.log(somaMedia(salaJS));
console.log(somaMedia(salaJava));
console.log(somaMedia(salaPython));