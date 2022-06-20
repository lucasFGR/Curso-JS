import { createServer } from 'http';

let server = createServer((requisicao,resposta)=>{
    resposta.writeHead(200,{"Content-Type":"text/html"})
    resposta.write(`
        <h1>Hello World!!</h1>
        <h2>Premeira página com Node</h2>
        `
    )

    resposta.end();
})

server.listen(8001)

console.log('Ouvindo a porta 8001')