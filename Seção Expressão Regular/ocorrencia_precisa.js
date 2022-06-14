const cep = /\d{5}-\d{3}/


console.log(cep.test('12345-500'))
console.log(cep.test('1235-500'))
console.log(cep.test('abcas-csdss'))


const tel = /\(\d{2}\)\d{4,5}-\d{4}/

console.log(tel.test("(15)1234-1234"))
console.log(tel.test("(15)12345-1234"))


