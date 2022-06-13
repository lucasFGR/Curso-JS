class Conta_bancaria  {
    constructor(){
        this.saldo = 0
    }

    get getSaldo(){
        return this.saldo
    }

    set setSaldo(value){
        return this.saldo = value
    }
    deposito(value){
        return this.saldo += value
    }

    saque(value){
        return this.saldo -= value
    }
}


let minha_conta = new Conta_bancaria(0)

console.log(minha_conta.getSaldo)

minha_conta.deposito(20)

console.log(minha_conta.getSaldo)

minha_conta.saque(2)
console.log(minha_conta.getSaldo)





