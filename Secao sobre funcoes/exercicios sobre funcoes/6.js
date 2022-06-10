// Escreva um função que  detecta o tipo do dado passado por parametro

function detecta_tipo_dado(dado){
    let tipo_dado = typeof dado
    console.log(tipo_dado)
    if( tipo_dado == String){
        console.log('O tipo de dado é uma String')
    }else if (tipo_dado == Number){
        console.log('O tipo do dado é Number')
    }else if (tipo_dado == Boolean){
        console.log('O tipo de dado é boolean')
    }
}


detecta_tipo_dado(true)