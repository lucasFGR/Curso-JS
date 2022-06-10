// Podemos forçar uma saida de um loop

let nome = 'Lucas'

for ( let i = 0;i <= 10; i ++){

    if ( i == 3){
        nome = 'sky'
    }

    if( i == 5 && nome == 'sky'){
        console.log('O nome mudou, pode parar')
        break
    }   

    console.log(i)
}