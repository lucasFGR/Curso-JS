const notab = /[^ab]/

console.log(notab.test('a'))
console.log(notab.test('Aqui tem A'))


const notaAz = /[^a-z]/
console.log(notaAz.test('a'))
console.log(notaAz.test('123 as'))
