function checa_numero (num){

    let number = Number(num);
    
    if(Number.isNaN(number)){
        console.log("Por favor, passe só números para o programa")
    }else{
        return number;
    }
}

checa_numero('2')

