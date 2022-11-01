module.exports = (app)=>{

    app.get('/noticia', (req,res)=>{

        let connection = app.config.dbConnection();
        let noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticia((error, result)=>{
            res.render('noticias/noticia', { noticia : result });
        });

    });
}