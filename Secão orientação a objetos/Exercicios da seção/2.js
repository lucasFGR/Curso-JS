class Carrinho_de_compras{
    constructor(itens,qtde,valor_total){
        this.itens = itens = itens;
        this.qtde = qtde;
        this.valor_total = valor_total
    }

    addIten(item){

        let contador = 0;

        for (let item_carrinho in this.itens){
            if(this.itens[item_carrinho].id == item_carrinho.id){
                this.itens[item_carrinho].qtde += item_carrinho.qtde;
                contador = 1;
            }
        }

        if (contador == 0){
            this.itens.push(item)
        }

        this.qtde += item.qtde;
        this.valor_total += item.preco * item.qtde
    }

    remover_item(item){

        for (let item_carrinho in this.itens){
            if(this.itens[item_carrinho].id == item_carrinho.id){
                
                let obj = this.itens[item_carrinho]
                let index = this.itens.findIndex(function(obj) {return obj.id == item.id});


                this.qtde -= this.itens[item_carrinho].qtde;
                this.valor_total -=  this.itens[item_carrinho].preco *  this.itens[item_carrinho].qtde
                this.itens.splice(index,0)

            }
        }
    }
}


let carrinho = new Carrinho_de_compras(
    [
        {
        id: 01,
        nome: "Camisa",
        qtde: 1,
        preco: 20
        },
        {
            id: 02,
            nome: "Calça",
            qtde : 2,
            preco: 50
        }
    ],3,120
)

console.log(carrinho)


carrinho.addIten({id:03,nome:"Boné",qtde:1,preco:10})

console.log(carrinho)

carrinho.remover_item({id:01,nome:"Camisa",qtde:1,preco:20})

console.log(carrinho)

