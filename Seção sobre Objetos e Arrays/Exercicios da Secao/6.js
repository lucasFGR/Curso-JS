let nomes = ['Lucas','Rauana','Skye','Mel','Buga']


function verifica_nome(arg){
    let nome = 'Lucas'
    if(nomes.includes(nome)){
        console.log('Lucas está incluso na lista')
    }
}


verifica_nome(nomes)