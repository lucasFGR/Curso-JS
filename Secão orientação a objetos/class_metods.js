class Cachorro{
    constructor(raca,patas,cor){
        this.raca = raca;
        this.cor = cor;
    }

    latir(){
        console.log('Au aua ')
    }
}

Cachorro.prototype.patas = 4;


let skye = new Cachorro('Vira lata','Branco')

skye.latir()