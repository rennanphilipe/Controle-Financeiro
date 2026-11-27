const pool = require ('./config/db');

async function testeinserir() {
    try {
        const sql = 'INSERT INTO movimentacao (id_conta, id_codigomovimentacao, tipo_movimentacao, descricao_movimentacao, valor_movimentacao, data_movimentacao) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';   
        const valores = ['1','Teste-001','Pix','Teste de insercao','-10.50','2026-11-27'];
        const resultado = await pool.query(sql, valores);
        console.log(resultado.rows);
    } catch (erro) {
        console.error("Nao foi possivel inserir a linha",erro.message);
    }finally{
        await pool.end();
    }

}

testeinserir();