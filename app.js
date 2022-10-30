const app = require('./config/server');

// let rotaNoticias = require('./app/routes/noticias')(app);

// let rotaHome = require('./app/routes/home')(app);

// let rotaFormInclusaoNoticia = require('./app/routes/form_inclusao_noticia')(app);

app.listen(3000, ()=>{
    console.log("Servidor ON");
});