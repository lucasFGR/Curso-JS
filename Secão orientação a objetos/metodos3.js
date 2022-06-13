function Cachorro(raca){
    this.raca = raca;
}

let sky = new Cachorro('Vira lata')


console.log(sky.raca)

Cachorro.prototype.uivar = function(){
    console.log('AUUUUUUU')
};

Cachorro.prototype.latir = function(){
    console.log('au au au ')
}
sky.uivar()
sky.latir()