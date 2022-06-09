let nome = 'Lucas'
let idade = 25
let possui_cnh = true

if(idade > 18 && possui_cnh == false){
    console.log(`Sua idade é ${idade} mas não possui CNH, nao pode dirigir`)
}else if (idade > 18 && possui_cnh == true){
    console.log(`Sua idade é ${idade} e possui CNH ja pode dirigir`)

}else if (idade < 18 && possui_cnh == false) {
    console.log(`Sua idade é ${idade} e não possui CNH, nao pode dirigir`)

}