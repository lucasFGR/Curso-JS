function loop_number(number){
    while( number > 0){
        if( number % 2 == 0){
            console.log(`${number} é par`)
        }
        number --
    }
}


loop_number(20)