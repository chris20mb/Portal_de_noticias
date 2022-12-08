module.exports = function(app){

    app.get("/noticias", function(req,res){
    
        //requisitando conexao cm bd e retornando variavel de conexao quando a rota for acessada
        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticias(function(error, result){
            res.render("noticias/noticias", {noticias: result})
    
        });

  
        //res.render("noticias/noticias");
    });

};

