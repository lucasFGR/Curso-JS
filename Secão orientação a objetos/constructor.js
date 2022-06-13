function criar_cachorro(raca,cor){
    let cachorro = Object.create({})
    cachorro.raca = raca;
    cachorro.cor = cor;
    return cachorro;
}

let skye = criar_cachorro('Vira lata','branca')

console.log(skye)

skye.latir = function (){
    console.log('au au au au')
}


console.log(skye)


skye.latir()