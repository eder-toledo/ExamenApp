preguntasRoute = function (server, db, Sequelize, apiUrl) {
    urlRoute = apiUrl + '/preguntas';

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

    function preguntasById(req, res, next) {
        db.ex_Pregunta.find({
            where: {
                idPregunta: req.params.id
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

    function preguntasByExamenId(req, res, next) {

    }

    server.get(urlRoute, allPreguntas);
    server.get(urlRoute + ':id', preguntasById);
}