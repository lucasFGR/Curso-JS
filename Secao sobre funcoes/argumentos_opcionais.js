function soma(a,b){
    if (a === undefined || b === undefined){
        console.log('Essa funcao precisa ter argumento')
    }else {
        return a + b
    }
}


console.log(soma(1))

console.log(soma(1,3))