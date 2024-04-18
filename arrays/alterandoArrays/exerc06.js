// const lista1 = [1, 2, 3, 4, 5];
// const lista2 = [6, 7, 8, 9, 10];

// const listaUnica = lista1.concat(lista2);
// console.log(listaUnica);

//--------------------------------------------------

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const parteNumeros = numeros.slice(3, 8);
// console.log(parteNumeros);

//--------------------------------------------------

// const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];

// frutas.splice(2, 2, 'Kiwi', 'Pêssego');
// console.log(frutas);

//--------------------------------------------------

// const menuPrincipal = ['Lagosta', 'Peixe', 'Carne', 'Macarrão'];
// const menuDeSobremesas = ['Bolo', 'Soverte'];

// const menuCompleto = menuPrincipal.concat(menuDeSobremesas);
// console.log(menuCompleto);

//--------------------------------------------------

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
