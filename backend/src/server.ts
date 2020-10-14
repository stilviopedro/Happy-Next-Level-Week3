import express from 'express';

import './database/connection';

const app = express();
app.use(express.json());

// Rotas
// Rescurso => users
// Metodos HTTP => GET, POST, PUT, DELETE
    // GET => Buscar informação
    // POST => Criar uma informação
    // PUT => Editar uma informação
    // DELETE => Deletar uma informação
// Parametros
    // Query params => http://localhost:3333/users?search=stilvio
    // Route params => http://localhost:3333/users/1 (indentificar um recurso)
    // Body params => http://localhost:3333/users/1 (enviar informações compostas)

app.get('/users', (request, response) => {
    return response.json({message: 'Hello World'});
})

app.listen(3333);