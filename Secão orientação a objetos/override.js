class Cachorro{
    constructor(raca,cor){
        this.raca = raca,
        this.cor = cor
    }
    latir(){
        console.log('Au au au')
    }
}

Cachorro.prototype.patas = 4

let labrador = new Cachorro('Vira Lata','Branca')

