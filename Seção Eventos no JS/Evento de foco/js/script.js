let input1 = document.querySelector('#a1')
let input2 = document.querySelector('#a2')

input1.addEventListener('focus',()=>{
    console.log('ENtrou no input')
})

input1.addEventListener('blur',()=>{
    console.log('saiu no input')
})