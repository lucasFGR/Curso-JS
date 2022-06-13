class Cachorro{
    constructor(raca,cor){
        this.raca = raca;
        this.cor = cor;
    }
    latir(){
        console.log('au au')
    }
}


let patas = Symbol()

Cachorro.prototype[patas] = 4;

console.log(Cachorro.prototype[patas])