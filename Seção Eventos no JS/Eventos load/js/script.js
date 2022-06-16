window.addEventListener('load',()=>{
    alert('Hello again')
})


window.addEventListener('beforeunload',function(e){
   e.returnValue = null;
})