const dia = /\d\d/

console.log(dia.test('2019') && '2019'.length == 2)
console.log(dia.test('asd')&& '2019'.length == 2)
console.log(dia.test('02'))


const palavras_tres_letras = /\w\w\w/
console.log(palavras_tres_letras.test('asd'))