function recursao(n){
    if( n -1 < 2){
        console.log(n + ' recursao parou')
    }else if (n % 2 != 0){
        console.log(n +' numero impar')
        recursao(n-1)
    }else{
        console.log(n + ' Numero par')
        recursao( n - 2);
    }
}


recursao(39)