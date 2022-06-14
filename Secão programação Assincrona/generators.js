function* criadorId(){
    let id = 0;
    while(true){
        yield id++;
    }
}


let criaId = criadorId();

console.log(criaId.next().value)
console.log(criaId.next().value)


let contador = 0

while(contador <= 10){
    console.log(criaId.next().value)
    contador += 1
}