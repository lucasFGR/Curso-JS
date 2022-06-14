let p = Promise.resolve(4)

console.log('outros códigos')

console.log(p)


p.then((value)=>{return value + 4})
.then(value => {console.log(value)});
