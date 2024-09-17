const database = 'BD3-VICTOR-AULA';
//nome do banco de dados
const collection = 'livraria';

use(database)

//cria ou acessar o banco de dados
db[collection].find(

    {valor:{$gte:115,$lte:120}}
);