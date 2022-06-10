function  lembrar_soma(x){
    return function(y){
        return x + y
    }
}



let soma1 = lembrar_soma(2)

console.log(soma1(2))