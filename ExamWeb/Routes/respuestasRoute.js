respuestasRoute = function (server, db, Sequelize, apiUrl) {
    urlRoute = apiUrl + 'respuestas/';

    sql = {};
    sql.attributes = { exclude: ['createdAt', 'updatedAt'] };

    function allRespuestas(req, res, next) {
        db.ex_Respuesta.findAll(sql).then(function (respuestas) {
            var data = {};
            if (!respuestas) {
                data.status = "error";
                data.code = "ElementNotFound";
                data.message = "Answers not exist";
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

    function respuestasById(req, res, next) {

        sql.where = { idRespuesta: req.params.id };

        if (req.params.include != null) {
            sql.include = [];
            relations = req.params.include.split('_');

            if (relations[i] == 'tipoRespuesta') {
                sql.include[i] = {};
                sql.include[i].model = ex_TipoRespuesta;
                sql.include[i].as = 'ex_TipoRespuesta';
                sql.include[i].attributes = { exclude: ['createdAt', 'updatedAt'] };
            }
        }

        db.ex_Respuesta.find(sql).then(function (respuestas) {
            data = {};
            if (!respuestas) {
                data.status = "error";
                data.code = "ElementNotFound";
                data.message = "Answers not exist";
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

    function respuestasByPregunta(req, res, next) {
        sql.where = { ex_TipoRespuesta_idTipoRespuesta: req.params.id };

        if (req.params.include != null) {
            sql.include = [];
            relations = req.params.include.split('_');

            if (relations[i] == 'tipoRespuesta') {
                sql.include[i] = {};
                sql.include[i].model = ex_TipoRespuesta;
                sql.include[i].as = 'ex_TipoRespuesta';
                sql.include[i].attributes = { exclude: ['createdAt', 'updatedAt'] };
            }
        }

        db.ex_Respuesta.find(sql).then(function (respuestas) {
            data = {};
            if (!respuestas) {
                data.status = "error";
                data.code = "ElementNotFound";
                data.message = "Answers not exist";
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

    server.get(urlRoute, allRespuestas);
    server.get(urlRoute + ':id', respuestasById);
    server.get(urlRoute + 'byQuestion/:id', respuestasByPregunta);
}