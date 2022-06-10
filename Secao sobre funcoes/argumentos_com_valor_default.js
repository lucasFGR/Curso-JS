// Podemos pre-determinar um valor para o argumento
function potencia(base, exp = 2){
    return Math.pow(base,exp)
}


console.log(potencia(2)) // Passando somente o primeiro argumento 
console.log(potencia(2,3)) // Adicionando o segundo argumento, como eu adicionei o valor de exp passa a ser 3

