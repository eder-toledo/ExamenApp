respuestasRoute = function (server, db, Sequelize, apiUrl) {
    function allRespuestas(req, res, next) {
        db.ex_Respuesta.findAll({
        }).then(function (respuestas) {
            var data = {};
            if (!respuestas) {
                data.error = "true";
            } else {
                data.data = respuestas;
            }
            res.send(data);
            next();
        });
    }

    server.get(apiUrl + 'respuestas/', allRespuestas);
}