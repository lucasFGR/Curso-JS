let validando_dominio = /[?www].\w+\.com.br|.com/

console.log(validando_dominio.test('www.google.com.br'))
console.log(validando_dominio.test('www.google.com'))
console.log(validando_dominio.test('google.com'))
