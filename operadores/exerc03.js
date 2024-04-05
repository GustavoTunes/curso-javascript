let valorSaldo = 100;
let deposito = 20;
let saque = 30;

operacao = valorSaldo - saque + deposito - saque - saque + deposito;
console.log(operacao)

console.log('----------------------------------------------------------------------------')

const numero = 13

const parOuImpar = numero % 2 === 0 ? "É Par" : "É Ímpar"
console.log(parOuImpar)

console.log('----------------------------------------------------------------------------')

const logado = false;
const administrador = false;

if(logado === true && administrador === true){
    console.log("Esta logado e é administrador")
}else{
    console.log("Não esta logado ou não é administrador")
}

console.log('----------------------------------------------------------------------------')

const verdade = false;
const falso = true;

if(verdade === true || falso === false){
    console.log("Passou no teste")
}else{
    console.log("Não passou no teste")
}

console.log('----------------------------------------------------------------------------')

const idadeMinima = 18;
const idadeUsuario = 21;

if(idadeUsuario >= idadeMinima){
    console.log("Pode comprar o ingresso")
}else{
    console.log("Não pode comprar o ingresso")
}