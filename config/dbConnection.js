var mysql = require('mysql2');

//variavel de conexao com o banco
var connMySQL = function(){
    return mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '1234',
        database: 'portal_noticias'
    });
}


//funcao que retorna a variavel de conexao(funcao wrapper)
module.exports = function(){
   return connMySQL;
}
