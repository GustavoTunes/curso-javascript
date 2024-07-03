const contaBancaria = {
    titular: 'Gustavo',
    saldo: 800,
    depositar: function (valor) {
        this.saldo += valor;
    },
    sacar: function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente.");
        }
    }
};

const cliente = {
    nome: 'Souza',
    conta: contaBancaria
};

function mostrarSaldo(cliente) {
    console.log(`Cliente: ${cliente.nome}`);
    console.log(`Saldo: ${cliente.conta.saldo}`);
}

cliente.conta.depositar(650);
cliente.conta.sacar(200);
mostrarSaldo(cliente);