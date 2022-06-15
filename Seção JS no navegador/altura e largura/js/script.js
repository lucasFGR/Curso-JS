let elemento = document.querySelector('#container-principal')

console.log('Largura: ' + elemento.offsetWidth) // considera as bondas
console.log('Altura: ' + elemento.offsetHight)


console.log('Largura: ' + elemento.clientWidth) // n  considera as bondas
console.log('Altura: ' + elemento.clientHeight)