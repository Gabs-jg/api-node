import mysql from 'mysql2';

const conexao = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

conexao.connect()

/**
 * Executa um código sql com ou sem valores
 * @param {string} sql instrução sql a ser executada
 * @param {string=id | [selecao, id]} valores a serem passados para o sql
 * @param {string} mensageReject mensagem a ser exibida
 * @returns objeto da Promise
 */
export const consulta = (sql, valores='', mensageReject) => {
    return new Promise((resolve, reject) => {
            conexao.query(sql, valores, (erro, resultado) => {
                if(erro) {
                    return reject(mensageReject)
                }
                const row = JSON.parse(JSON.stringify(resultado))
                return resolve(row)
            })
        })
}

export default conexao;
