class Carro  {
    constructor(marca,cor,gasosa_restante){
        this.marca = marca;
        this.cor = cor;
        this.gasosa_restante = gasosa_restante
    }

    dirigir_carro(value){
        return this.gasosa_restante -= value
    }

    abaster(value){
        return this.gasosa_restante += value
    }


}


let fusca = new Carro('Fucao','branco',100)

console.log(fusca.gasosa_restante)

fusca.dirigir_carro(3)

console.log(fusca.gasosa_restante)