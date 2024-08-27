const database = 'BD3-VICTOR-AULA';
//nome do banco de dados
const collection = 'livraria';
//cria ou acessar o banco de dados
use(database);
//db e um obj 
//os dedos devem ser passados como json 
db[collection].insertOne(
    {
        "codigo": "12",
        "titulo": "Crise nas Infinitas Terras",
        "autor": "Marv Wolfman",
        "descricao": "Crise nas Infinitas Terras é uma série de quadrinhos que revolucionou o universo da DC Comics, abordando a luta entre heróis e vilões em múltiplas realidades. A história explora temas de sacrifício, redenção e a natureza do heroísmo.",
        "imagem": "/livros/crise_nas_infinitas_terras.jpg",
        "valor": 150,
        "categoria": "Quadrinhos"
      }
)