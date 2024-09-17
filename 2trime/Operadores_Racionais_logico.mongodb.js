const database = 'BD3-VICTOR-AULA';

const collection = 'livraria';

use(database);
/* seleciona o livro com vaior maior que determinado numero  */

// db[collection].find(
//     {valor:{$gt:115}}
// );
/* seleciona o livro com vaior menor que determinado numero  */

db[collection].find(
    {valor:{$lte:120}}
);