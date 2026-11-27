
// Teste de conexao com o banco de dados
// Para testar a conexao : node src/testeconexao.js

// carrega a conexao com o banco de dados apontando a pasta onde ele esta
const pool = require ('./config/db');

// funcao para testar a conexao com o banco de dados
//async nao bloqueie o fluxo do programa
async function testarconexao() {
//const significa
try {
    const conexaobanco = await pool.query('SELECT NOW()');
    console.log(conexaobanco.rows);
} catch (erro) {
    console.error("Nao foi possivel estabelecer a conexao com o banco",erro.message);
}   finally{
(await pool.end());
}
}

testarconexao();