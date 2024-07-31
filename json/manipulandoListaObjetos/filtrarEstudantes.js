const estudantes = require('./estudantes.json');

function filtraPropriedade(lista, propriedade) {
    return lista.filter((estudante) => {
        return !estudante.endereco.hasOwnProperty(propriedade);
    });
}

const listaEnderecoImcompleto = filtraPropriedade(estudantes, 'cep');
console.log(listaEnderecoImcompleto);