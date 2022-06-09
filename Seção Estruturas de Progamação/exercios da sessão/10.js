let num  =40

let divisoes = 0


for (let i = 1; i <= num; i++){
    if (num % i == 0){
        divisoes ++
    }
}


if (divisoes == 2){
    console.log(` o numero ${num} é primo`)
}else{
    console.log(`O número ${num} n é primo`)
}