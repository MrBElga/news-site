module.exports = function(application){
    application.get('/formulario_inclusao_noticia', function(req,res){
        res.render('admin/form_add_noticia');
    });

    application.post('/noticias/salvar', function(req,res){
        var noticia = req.body;

        req.assert('titulo','titulo é obrigatorio').notEmpty();
        req.assert('resumo','resumo é obrigatorio').notEmpty();
        req.assert('resumo','resumo deve conter entre 10 e 100 caracteres').len(10,100);
        req.assert('autor','autor é obrigatorio').notEmpty();
        req.assert('data','data é obrigatorio').notEmpty().isDate({form: 'YYY-MM-DD'});
        req.assert('noticia','noticia é obrigatorio').notEmpty();

        let erros = req.validationErrors();

        if(erros){

            
        }

        var connection = application.config.dbConnection()


        var noticiasModel = new application.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia, function(error, result){
            res.redirect('/noticias');
        });
    });
}