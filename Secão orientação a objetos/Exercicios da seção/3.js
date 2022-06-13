class Adress {
    constructor(rua,bairro,cidade,estado){
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado
    }

   set novaRua (novaRua){
    this.rua = novaRua
   }
   set novoBairro (novoBairro){
    this.rua = novoBairro
   }
   set novaCidade (novaCidade){
    this.rua = novaCidade
   }
   set novo_estado (novo_estado){
    this.rua = novo_estado
   }
}


let endereco = new Adress('Rua aparecida levu','Vt 2','Sorocaba','SP')
console.log(endereco)