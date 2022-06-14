/*
Utilizando caracteres especiais

\d - Qualquer digito de caractere
\w - Um caractere alfanumérico 
\s - Qualquer caractere de espaço em branco
\D - Caracteres que não são digitos
\W - Caractere não-alafanumérico
\S - Caractere que não seja espaço em branco
. - Qualquer caractere, menos nova linha
*/

const pontoRegex = /./

console.log('Regex .')
console.log(pontoRegex.test('asd'))
console.log(pontoRegex.test('123'))
console.log(pontoRegex.test('asd'))

const dRegex = /\d/ // [0-9]

console.log('Regex \d')
console.log(dRegex.test(1))


const DRegex = /\D/
console.log('Regex D')
console.log(DRegex.test(1))
console.log(DRegex.test('1AB'))

const sRegex = /\s/
console.log('Regex s')
console.log(DRegex.test(1))
console.log(DRegex.test('1AB '))


const wRegex = /\s/
console.log('Regex s')
console.log(wRegex.test(1))
console.log(wRegex.test('1AB '))
