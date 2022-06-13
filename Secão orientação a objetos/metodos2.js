// Normalmente os metóddos interagem com os objetos
// Até mudando os valores das suas propriedades para corresponder a lógica do programa desenvolvido
//Propriedade que servem como funções, ou seja ações

const cachorro = {
    raca: 'srd',
    uivar : () => {
        console.log('Auuuuuu')
    },
    rosnar: () =>{
        console.log('Grrrr')
    },
    latir : () =>{
        console.log('AU AU AU AU')
    },
    setRaca : function (raca){
        this.raca = raca
    },
    getRaca : function (){
        return `A raca é : ${this.raca}`
    }
}


console.log('antes de definiar a raça ' + cachorro.raca)

cachorro.setRaca('Viralata')

console.log('Depois de denifir a raça: ' + cachorro.raca)

console.log(cachorro.getRaca())
