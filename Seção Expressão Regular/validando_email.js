const valida_email = /\w+@\w+\.\w/

console.log(valida_email.test('lucas@gmail.com'))
console.log(valida_email.test('lucas@gmail'))
console.log(valida_email.test('gmail.com'))