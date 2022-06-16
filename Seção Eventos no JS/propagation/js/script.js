let btn1 = document.querySelector('.btn1')


let p = document.querySelector('p')

function msg (e){
    console.log('clicou no botao')
    e.stopPropagation()
}


btn1.addEventListener('click',msg)




p.addEventListener('click', ()=>{
    console.log('clicou no paragrafo')
})