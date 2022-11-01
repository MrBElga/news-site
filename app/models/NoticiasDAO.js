function NoticiasDAO(connection){
	this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = (callback)=>{
	this._connection.query('select * from noticias', callback);
}

NoticiasDAO.prototype.getNoticia = (callback)=>{
	this._connection.query('select * from noticias where id_noticia = 2', callback);
}

NoticiasDAO.prototype.salvarNoticia = (noticia, callback)=>{
	this._connection.query('insert into noticias set ? ', noticia, callback)
}

module.exports = ()=>{
	return NoticiasDAO;
}