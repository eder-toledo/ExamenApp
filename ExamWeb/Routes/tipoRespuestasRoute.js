tipoRespuestasRoute = function (server, db, Sequelize, apiUrl) {
    urlRoute = apiUrl + 'tipoRespuestas/';

    function allTipoRespuestas(req, res, next) {
        db.ex_TipoRespuesta.findAll({
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

    function tipoRespuestasById(req, res, next) {
        db.ex_TipoPregunta.find({
            where: {
                idTipoRespuesta: req.params.id
            }
        }).then(function (preguntas) {
            data = {};
            if (!preguntas) {
                data.error = "true";
            } else {
                data.data = preguntas;
            }
            res.send(data);
            next();
        });
    }

    server.get(urlRoute, allTipoRespuestas);
    server.get(urlRoute + ':id', tipoRespuestasById);
}