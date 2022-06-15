let novo_elemento = document.createElement('p')
let text = document.createTextNode('O texto vai aqui ')

novo_elemento.appendChild(text)

let elemento_alvo = document.querySelector('#titulo-principal')
let elemento_pai =  document.querySelector('#container-principal')

elemento_pai.insertBefore(novo_elemento,elemento_alvo)

