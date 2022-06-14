let p = Promise.resolve(new Error('N FUNFOU'))


console.log('lalala')

p.then(value => console.log(value))
    .then(reason => console.log('Falhou ' + reason));