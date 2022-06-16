window.addEventListener('keydown',(e)=>{
    if(e.key == 'q'){
        console.log('Apertou a letra Q')
    }
})

let i = 0
window.addEventListener('keyup',(e)=>{
   
    if(e.key === 'Enter'){
        i+= 1
        console.log('Soltou  a tecla')
        if(i >=5){
            alert('Numero maximo permitido')
            i = 0
            window.close()
        }
        
    }
})