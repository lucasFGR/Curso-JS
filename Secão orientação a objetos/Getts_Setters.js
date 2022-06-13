class Cachorro{
    constructor(raca){
        this.raca =raca;
    }

    get verRaca(){
        return this.raca
    }

    set novaRaca(value){
        this.raca = value;
    }
}


let golden = new Cachorro('Viralata','sem cor')

console.log(golden.verRaca)

golden.novaRaca = 'Pitbull'

console.log(golden.verRaca)