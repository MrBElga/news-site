var mysql = require('mysql');

var connMySQL = function(){
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : '123456',
		database : 'portal_noticias'
	});
}

module.exports = function () {
	return connMySQL;
}