let arr = [1,2,3,4,5]
let arr2 = []

function iterar_array(arr){
    if(arr.length == 0){
        throw new Error('O array precisa ter pelo menos um lemento')
    }else{
         arr.forEach(element => {
            console.log(element)
         });
    }
}

iterar_array(arr2)