const animais = require('./arquivosJson/dadosExerc04.json');

const objAnimais = animais

const novoAnimal = {
    "id": 4,
    "nome": "tartaruga",
    "tipo": "réptil",
    "habitat": "Floresta"
};

objAnimais.animais.push(novoAnimal);

const modificaAnimal = objAnimais.animais.find(animal => animal.id === 2);
if (modificaAnimal) {
    modificaAnimal.habitat = "Oceano Antártico";
}

const removeIndice = objAnimais.animais.findIndex(animal => animal.id === 1);
if (removeIndice !== -1) {
    objAnimais.animais.splice(removeIndice, 1);
}

const novaStringAnimais = JSON.stringify(objAnimais, null, 2);
console.log(novaStringAnimais);