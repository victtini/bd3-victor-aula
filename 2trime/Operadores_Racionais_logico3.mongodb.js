const database = 'BD3-VICTOR-AULA';
const collection = 'livraria';

use(database);

db[collection].find({
    $and:[
    {categoria: {$eq:'Terror Gótico'}},
    {valor: { $lte: 150 }}
    ]
});
