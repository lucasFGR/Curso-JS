let arra1 = [1,2,3,4]
let arra2 = [1,2,3,4,5,6,7,8]


function verifica_tamanho_arr(param){
    if(param.length < 5){
        console.log('Poucos elementos')
    }else{
        console.log('Muitos elementos.')
    }
}

console.log(arra1.length)
verifica_tamanho_arr(arra1)
verifica_tamanho_arr(arra2)
