let pessoa = {
    "nome": "Lucas",
    "idade" : 25,
    "profissao": "Programador",
    "hobbies": ["Cello","Jogar","Estudar"]
}


let pessoaTexto = JSON.stringify(pessoa)

console.log(pessoaTexto)


let pesssoaJSOM = JSON.parse(pessoaTexto)

console.log(pesssoaJSOM)


console.log(pesssoaJSOM.hobbies)