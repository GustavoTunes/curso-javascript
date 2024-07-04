const listaBidimensional = [];

let valorInicial = 1;

for (let i = 0; i < 3; i++) {
    let linha = [];
    for (let j = 0; j < 3; j++) {
        linha.push(valorInicial++);
    }
    listaBidimensional.push(linha);
}

console.log(listaBidimensional);
listaBidimensional.forEach(row => console.log(row));

//---------------------------------------------------

console.log(listaBidimensional[1][2]);

//---------------------------------------------------

listaBidimensional[2][1] = 15;
console.log(listaBidimensional);
