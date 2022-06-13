let cachorro = {
    raca: 'a definir',
    latir: function(){
        console.log('au au au au')
    }
}

let skye = Object.create(cachorro)

skye.latir()

skye.raca = 'Pastor Alemão';

console.log(skye.raca)