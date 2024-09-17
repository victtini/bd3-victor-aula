const database= 'BD3-SAMUEL-AULA';

const collection = 'LIVRARIA';

use(database);

db[collection].find({
    ator:'J.J.R Tolken'
}).sort({$Valor:1});
