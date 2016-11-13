respuestasRoute = function (server, db, Sequelize, apiUrl) {
    urlRoute = apiUrl + 'respuestas/';

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

    function respuestasById(req, res, next) {
        db.ex_Respuesta.find({
            where: {
                idRespuesta: req.params.id
            }
        }).then(function (respuestas) {
            data = {};
            if (!respuestas) {
                data.error = "true";
            } else {
                data.data = respuestas;
            }
            res.send(data);
            next();
        });
    }

    server.get(urlRoute, allRespuestas);
    server.get(urlRoute, respuestasById);
}