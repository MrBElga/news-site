var mysql = require('mysql');

var connMySQL = ()=>{
    console.log('Conexao com o bd foi estabelecida');
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'portal_noticias'
    });
}

module.exports = ()=>{
    console.log('O autoload carregou o módulo de conexão com o bd');
    return connMySQL;
}