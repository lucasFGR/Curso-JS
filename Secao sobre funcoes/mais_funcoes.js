function multplicar_tres_numeros( x, y, z){
    return x * y * z
}


console.log(multplicar_tres_numeros(2,3,4))

const mult = multplicar_tres_numeros(2,5,6)

console.log(`O valor de mult é ${mult}`)

function pode_dirigir(idade, cnh){
    if (idade > 18 && cnh == true){
        console.log('Pode dirigir')
    }else{
        console.log('N pode dirigir')
    }
}

console.log(pode_dirigir(18,1))