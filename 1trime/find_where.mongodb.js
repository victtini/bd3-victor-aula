const database = 'BD3-VICTOR-AULA';
//nome do banco de dados
const collection = 'livraria';

use(database)

db[collection].find({
    "categoria":"Terror Gótico"
});