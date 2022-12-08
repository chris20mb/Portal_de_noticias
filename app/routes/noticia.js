module.exports = function(app){

    app.get("/noticia", function(req,res){
    
        //requisitando conexao cm bd e retornando variavel de conexao quando a rota for acessada
        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);
        

        noticiasModel.getNoticia(function(error, result){
            res.render("noticias/noticia", {noticias: result})
    
        });
        //res.render("noticias/noticias");
    });

};
