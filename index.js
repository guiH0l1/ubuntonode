
const http = require('http');

// Função para gerar a tabuada como uma string
function gerarTabuada() {
    let resultado = '';

    for (let i = 1; i <= 10; i++) {
        resultado += `Tabuada do ${i}:\n`;
        for (let j = 1; j <= 10; j++) {
            resultado += `${i} x ${j} = ${i * j}\n`;
        }
        resultado += '\n';
    }

    return resultado;
}

// Criação do servidor HTTP
const server = http.createServer((req, res) => {
    // Define o cabeçalho da resposta
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Gera a tabuada e envia a resposta
    res.end(gerarTabuada());
});

// Configura o servidor para escutar na porta 3030
const PORT = 3030;
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

