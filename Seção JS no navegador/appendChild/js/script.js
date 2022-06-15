let novo_elemento = document.createElement('p')
let text = document.createTextNode('O texto vai aqui ')

novo_elemento.appendChild(text)


let p = document.querySelector('#paragrafo-principal')
let pai = p.parentNode;

pai.appendChild(novo_elemento)