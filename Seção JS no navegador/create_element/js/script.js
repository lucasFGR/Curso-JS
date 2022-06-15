let lista = document.createElement('ul')


item.appendChild(texto)

for(let i = 0; i <= 5;i++){
    
    lista.appendChild(texto)

    let item = document.createElement('li')
    let texto = document.createTextNode('texto lista' + i)

    lista.appendChild(item)
}


let container = document.getElementById('container-principal')

container.appendChild(lista)