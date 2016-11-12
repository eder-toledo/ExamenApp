preguntasRoute = function (server, db, Sequelize, apiUrl) {
    function allPreguntas(req, res, next) {
        db.ex_Pregunta.findAll({
        }).then(function (preguntas) {
            var data = {};
            if (!preguntas) {
                data.error = "true";
            } else {
                data.data = preguntas;
            }
            res.send(data);
            next();
        });
    }

    server.get(apiUrl + 'preguntas/', allPreguntas);
}