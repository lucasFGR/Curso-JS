let novo_elemento = document.createElement('p')
let text = document.createTextNode('O texto vai aqui ')

novo_elemento.appendChild(text)



let heading = document.querySelector('#titulo-principal')
let pai_heading = heading.parentNode


pai_heading.replaceChild(novo_elemento,heading)