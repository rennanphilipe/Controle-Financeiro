const pool = require ('./config/db');

async function testarconta() {
    try {
       const conexaobanco = await pool.query('Select * from conta');
       console.log(conexaobanco.rows);
    } catch {
        console.error("Contas nao encontrada",erro.message);
    } finally {
        await pool.end();
    }
}
    testarconta();
