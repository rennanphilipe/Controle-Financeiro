
// carrega uma biblioteca do projeto e puxa o dotenv para pegar as informacoes do .env
require('dotenv').config();

// carrega a biblioteca do postgresql e o Pool para criar a conexao com o banco de dados
const { Pool } = require('pg');


// prepara o conjunto de conexoes com o banco de dados usando as informacoes do .env
// o const pool guarda o resultado com um nome para ser usado em outros arquivos do projeto 
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  
});

// exporta a conexao para ser usada em outros arquivos do projeto
module.exports = pool;