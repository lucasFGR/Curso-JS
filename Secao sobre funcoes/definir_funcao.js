function imprimir_no_console(text){
    console.log(text)
}

imprimir_no_console('Lucas')


function imprimir_um_numero(number){
    console.log(number)
}

imprimir_um_numero(10)
imprimir_um_numero(20)


// Ao atribuir uma funcao a uma variavel ela pode ser invocada com so parenteses

const numeroDoido = function(){
    console.log(Math.random())
}

numeroDoido()