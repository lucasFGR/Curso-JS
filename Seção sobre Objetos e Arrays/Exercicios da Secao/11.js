let calculadora = {
    somar: function(a,b){
        return a + b
    },
    subtrair: function(a,b){
        return a - b
    },
    multiplicar: (a,b) =>{
        return a * b
    },
    dividir: (a,b) =>{
        return a / b
    }
}

console.log(calculadora.somar(10,2))
console.log(calculadora.subtrair(10,2))
console.log(calculadora.multiplicar(5,2))
console.log(calculadora.dividir(10,2))