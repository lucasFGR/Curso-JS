function verificanumero(num){
    return new Promise((resolve,reject) =>{
        if(num == 2){
            resolve(console.log(`O numero é igual a ${2}`))
        }else{
            reject(new Error('Falhouuu'))
        }
    })
    
}

verificanumero(2)
verificanumero(1)