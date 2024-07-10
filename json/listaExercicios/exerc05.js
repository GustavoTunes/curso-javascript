function copiarJson(objeto) {
    return JSON.parse(JSON.stringify(objeto)
    );
}

const Original = {
    id: 1,
    nome: 'Gustavo',
    idade: 22
};

const Modificado = copiarJson(Original);
Modificado.nome = 'Carlos';
Modificado.idade = 40;

console.log("Original:");
console.log(Original);

console.log("Modificado:");
console.log(Modificado);