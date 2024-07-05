const carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    ano: 1996,
    cor: 'vermelho',
    ligado: false,

    ligar: function () {
        if (!this.ligado) {
            this.ligado = true;
            console.log('O carro está ligado.');
        } else {
            console.log('O carro já está ligado.');
        }
    },

    desligar: function () {
        if (this.ligado) {
            this.ligado = false;
            console.log('O carro está desligado.');
        } else {
            console.log('O carro já está desligado.');
        }
    },

    obterDetalhes: function () {
        const estado = this.ligado ? 'ligado' : 'desligado';
        return `Detalhes do carro:\nMarca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}\nCor: ${this.cor}\nEstado: ${estado}`;
    }
};

carro.desligar();
carro.ligar();
carro.ligar();
carro.desligar();
console.log(carro.obterDetalhes()); 