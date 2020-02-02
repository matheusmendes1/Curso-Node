const LivroDao = require('../infra/livro-dao');

const db = require('../../config/database');

module.exports = (app) => {

    /* Rota raíz */
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
    
    /* Rota para Listagem de livros */
    app.get('/livros', (req, resp) => {

        const livroDao = new LivroDao(db);

        livroDao
            .lista()
            .then(livros => resp.marko(
                require('../views/livros/lista/lista.marko'),
                {
                    livros: livros
                }
            ))
            .catch(erro => console.log(erro));
    });

    /* Rota para Cadastro de livros */
    app.get('/livros/form', (req, resp) => {
        resp.marko(require('../views/livros/form/form.marko'), { livro : {} });
    });

    /* Rota para Edição de livros */
    app.get('/livros/form/:id', (req, resp) => {
        
        const id = req.params.id;
        const livroDao = new LivroDao(db);

        livroDao
            .buscaPorId(id)
            .then(livro => 
                    resp.marko(
                        require('../views/livros/form/form.marko'),
                        { livro : livro }
                    ))
            .catch(erro => console.log(erro));
    });

    /* Rota para Adicionar livros */
    app.post('/livros', (req, resp) => {
        console.log(req.body);

        const livroDao = new LivroDao(db);

        livroDao
            .adiciona(req.body)
            .then(resp.redirect('/livros'))
            .catch(erro => console.log(erro));
    });

    app.put('/livros', (req, resp) => {
        console.log(req.body);

        const livroDao = new LivroDao(db);

        livroDao
            .atualiza(req.body)
            .then(resp.redirect('/livros'))
            .catch(erro => console.log(erro));
    });

    /* Rota para Deleção de livro */
    app.delete('/livros/:id', (req, resp) => {
        const id = req.params.id;

        const livroDao = new LivroDao(db);
        livroDao
            .remove(id)
            .then(() => resp.status(200).end())
            .catch(erro => console.log(erro));
    })
};