// Quando temos que utlizar variso Ifs, usamos o switch
// tbm usamos o break para terminar o loop
// podemos inserir um default, caso todos os casos sejam false
// porem muitos programadores utlizam o if

let nome = 'Lucas'
switch (nome) {
    case 'Freitas':
        console.log('É sobrenome')
        break;
    case 'Gonçalves':
        console.log('É ultimo nome')
        break
    case 'Lucas':
        console.log('É primeiro nome')
        break
    default:
        console.log('N e o nome correto')
        break;
}