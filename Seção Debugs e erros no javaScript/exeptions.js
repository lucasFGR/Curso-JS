function saudacao(nome){
    if(typeof nome != 'string'){
        throw new Error('Paramentro nome precisa ser uma string')
    }else{
        console.log(`Olá ${nome}`)
    }
}

saudacao('Lucas')
saudacao(2)

console.log('teste')