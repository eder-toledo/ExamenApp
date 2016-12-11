tipoRespuestasRoute = function (server, db, Sequelize, apiUrl) {
    urlRoute = apiUrl + 'tipoRespuestas/';

    sql = {};
    sql.attributes = { exclude: ['createdAt', 'updatedAt'] };

    function allTipoRespuestas(req, res, next) {
        db.ex_TipoRespuesta.findAll(sql).then(function (respuestas) {
            var data = {};
            if (!respuestas) {
                data.status = "error";
                data.code = "ElementNotFound";
                data.message = "Type answers not exist";
            } else {
                data.status = "success";
                data.code = "ResultsForSearch";
                data.data = respuestas;
                data.count = respuestas.length;
            }
            res.send(data);
            next();
        }, function (err) {
            data = {};
            data.estatus = "error";
            data.code = "SearchNotExecuted";
            data.error = err;
            res.send(data);
            next();
        });
    }

    function tipoRespuestasById(req, res, next) {
        sql.where = { idTipoRespuesta: req.params.id };

        db.ex_TipoPregunta.find(sql).then(function (preguntas) {
            data = {};
            if (!preguntas) {
                data.status = "error";
                data.code = "ElementNotFound";
                data.message = "Type answers not exist";
            } else {
                data.status = "success";
                data.code = "ResultsForSearch";
                data.data = respuestas;
                data.count = respuestas.length;
            }
            res.send(data);
            next();
        }, function (err) {
            data = {};
            data.estatus = "error";
            data.code = "SearchNotExecuted";
            data.error = err;
            res.send(data);
            next();
        });
    }

    server.get(urlRoute, allTipoRespuestas);
    server.get(urlRoute + ':id', tipoRespuestasById);
}