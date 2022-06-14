const reg1 = /[12345]/

console.log(reg1.test('Temos o numero 6'))
console.log(reg1.test('Temos o numero 2'))
console.log(reg1.test('Temos o numero 23'))


const rg2 =/[0-9]/

console.log(rg2.test('temos o numero 12312'))