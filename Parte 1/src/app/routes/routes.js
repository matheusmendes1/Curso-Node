module.exports = (app) => {

    app.get('/', (req, resp) => {
        resp.send(
            `
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
            `
        );
    });
    
    app.get('/livros', (req, resp) => {
        resp.marko( 
            require('../views/livros/lista/lista.marko'),
            {
                livros: [
                    {
                        id: 1,
                        titulo: 'Fundamentos do Node'
                    },
                    {
                        id: 2,
                        titulo: 'Node avançado'
                    }
                ]
            }
        );
    });
};