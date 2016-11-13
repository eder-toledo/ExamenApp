tipoPreguntasRoute = function (server, db, Sequelize, apiUrl) {
    urlRoute = apiUrl + 'tipoPreguntas/';

    function allTipoPreguntas(req, res, next) {
        db.ex_TipoPregunta.findAll({
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

    function tipoPreguntasById(req, res, next) {
        db.ex_TipoPregunta.find({
            where: {
                idTipoPregunta: req.params.id
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

    server.get(urlRoute, allTipoPreguntas);
    server.get(urlRoute + ':id', tipoPreguntasById);
}