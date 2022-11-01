const mysql = require('mysql');

const connMySQL = ()=>{
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : '123456',
		database : 'portal_noticias'
	});
}

module.exports = ()=>{
	return connMySQL;
}