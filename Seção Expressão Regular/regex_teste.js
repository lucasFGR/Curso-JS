const  reg1 = new RegExp('bola')

console.log(reg1.test('Tem bola ?'))
console.log(reg1.test('n tem '))

const reg2 = /bola/

console.log(reg2.test('Tem bola ?'))
console.log(reg2.test('n tem '))


console.log(/quadrado/.test('Onde tem um quadrado'))
console.log(/qudrado/.test('1231231231'))