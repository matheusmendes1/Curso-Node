/* 
    HTTP é um módulo padrão do Node 

    Pensando nesses problemas relacionados ao desenvolvimento de aplicações web 
    que foram surgindo os módulos no ambiente Node, dentre eles o famoso express, 
    um framework que nos trará algumas facilidades.

    package.json define que o projeto é um projeto baseado no Node 

    Estrutura do Node:

    |-- node_modules < contém os módulos instalados do node >
    |-- src < contém todo e qualquer código relativo a nossa aplicação >
        |-- app < Pasta que vai armazenar o nosso código restritamente a lógicas da aplicação >
            |-- infra
            |-- public
                |-- js
            |-- routes
            |-- views
                |-- livros
                    |-- form
                    |-- lista
        |-- config < Armazenar códigos de configuração da nossa aplicação >

    Para começar um projeto node, usa-se: npm init
    Para reinstalar as dependências do node_modules, usa-se: npm install

    dependências instaladas:
        |- express
        |- nodemon
        |- sqlite
        |- bodyparser
        |- method-override
*/

const app = require('./src/config/custom-express');

app.listen(3000, () => {
    console.log(`Servidor rodando na porta 3000`);
})