module.exports.noticias = (application, req, res)=>{
	let connection = application.config.dbConnection();
	let noticiasModel = new application.app.models.NoticiasDAO(connection);

	noticiasModel.getNoticias((error, result)=>{
		res.render("noticias/noticias", {noticias : result});
	});	
}

module.exports.noticia = (application, req, res)=>{
	let connection = application.config.dbConnection();
	let noticiasModel = new application.app.models.NoticiasDAO(connection);

	noticiasModel.getNoticia((error, result)=>{
		res.render("noticias/noticia", {noticia : result});
	});	
}