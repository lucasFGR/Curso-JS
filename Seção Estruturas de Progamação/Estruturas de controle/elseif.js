// Else if é uma verificação que podemos usar entre o if e o else
let nome  = 'Lucas'


if(nome != undefined && nome == 'SKy'){
    console.log('Nome está definido')
}else if (nome == "Lucas"&& nome.length >= 5){
    console.log("O nome é lucas")
}else {
    console.log('O nome é maior que 5')
}

// Tbm é possivel executar um else if  sem o else

if (1 > 2){
    console.log('Teste')
}else if (1 == 1){
    console.log('Testando')
}