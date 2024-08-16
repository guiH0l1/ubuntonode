const express = require('express');
const http = require('http');

const app = express();
const PORT = 3030;


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

// Rota principal
app.get('/', (req, res) => {
    const currentDate = new Date();
    const currentDateString = currentDate.toLocaleString();

    res.send(`
        <h1>Meu projeto em Node.JS - Guilherme Holi</h1>
        <p>Data e Hora Atual: ${currentDateString}</p>
        <img src="https://4kwallpapers.com/images/wallpapers/real-madrid-cf-dark-2560x1440-15515.jpg" alt="Imagem exemplo" style="max-width:300px;"/>
        <p><a href="http://10.26.44.227/wp/?p=6" target="_blank">Ir para o Wordpress</a></p>
        <p><a href="http://10.26.44.227/guilherme/" target="_blank">Ir para pagina Html</a></p>
        <p><a href="http://10.26.44.227/guilherme/guilherme.php" target="_blank">Ir para pagina PHP</a></p>
        <form action="#" method="post">
        <input type="number" name="numero" id="cartao" placeholder="Digite um numero">
        <button id="gerartabuada">Gerar tabuada</button>
        </form>
    `);
});

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://10.26.44.227:3030`);
});
