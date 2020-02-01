/* HTTP é um módulo padrão do Node 

    Pensando nesses problemas relacionados ao desenvolvimento de aplicações web 
    que foram surgindo os módulos no ambiente Node, dentre eles o famoso express, 
    um framework que nos trará algumas facilidades.

    package.json define que o projeto é um projeto baseado no Node 

    Estrutura do Node:

    |-- node_modules < contém os módulos instalados do node >
    |-- src < contém todo e qualquer código relativo a nossa aplicação >
        |-- app < Pasta que vai armazenar o nosso código restritamente a lógicas da aplicação >
        |-- config < Armazenar códigos de configuração da nossa aplicação >
*/

const http = require('http');

const server = http.createServer( (req, resp) => {


    let html = '';

    if(req.url == '/'){
        html = `
            <!DOCTYPE html>
            <html lang="eng">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <title>Hello World!</title>
                </head>

                <body>
                    <h1>Hello World!</h1>
                </body>
            </html>
        `;
    }

    resp.end(html);
});

server.listen(3000);